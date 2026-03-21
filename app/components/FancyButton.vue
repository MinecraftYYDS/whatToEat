<script lang="ts" setup>
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <div class="container">
    <div class="button">
      <span class="button__text">{{ props.text }}</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.button {
  position: relative;
  width: min(100%, 260px);
  min-height: 52px;
  border-radius: 14px;
  border: 1px solid #1f2937;
  background: linear-gradient(180deg, #ffffff, #f2f4f7);
  box-shadow: 0 4px 14px rgba(17, 24, 39, 0.14);
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #111827;
  letter-spacing: 1px;
  transition: transform 0.18s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  cursor: pointer;
}

.button__text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 12px 22px;
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(17, 24, 39, 0.2);
  background: linear-gradient(180deg, #ffffff, #edf2f7);
}

.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(17, 24, 39, 0.16);
}

@media (max-width: 640px) {
  .button {
    width: 100%;
    min-height: 56px;
    font-size: 20px;
  }
}
</style>
