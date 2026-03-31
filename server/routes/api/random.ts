// server/api/random.ts
import type { Recipe } from '~/types'

// 获取远程菜谱
async function fetchRecipes(): Promise<Recipe[]> {
  try {
    const baseURL = import.meta.dev ? 'http://localhost:3000' : 'https://eat.ryanuo.cc'
    const recipes = await $fetch<Recipe[]>(`${baseURL}/recipes.json`)
    return recipes as Recipe[]
  }
  catch (error) {
    console.error('获取远程菜谱数据失败:', error)
    return []
  }
}

export default defineEventHandler(async () => {
  const recipes = await fetchRecipes()

  if (recipes.length === 0) {
    return {
      success: false,
      message: '无可用菜谱',
    }
  }

  // 随机选择一个菜谱
  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)]

  // 从 link 字段提取 id
  const recipeId = randomRecipe.link?.split('/').filter(Boolean).pop() || 'unknown'

  return {
    success: true,
    data: {
      id: recipeId,
      name: randomRecipe.name,
      description: randomRecipe.description || '',
      category: randomRecipe.category,
      image_path: randomRecipe.image_path || null,
      source_path: randomRecipe.source_path,
      difficulty: randomRecipe.difficulty || 0,
      tags: randomRecipe.tags || [],
      prep_time_minutes: randomRecipe.prep_time_minutes || null,
      cook_time_minutes: randomRecipe.cook_time_minutes || null,
      total_time_minutes: randomRecipe.total_time_minutes || null,
      // 构建完整的菜谱链接
      link: `/food/${recipeId}`,
    },
  }
})
