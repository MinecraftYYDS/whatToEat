<template>
  <div class="loader" role="status" aria-live="polite">
    <span class="loader__ring" />
    <span class="loader__text">加载中...</span>
  </div>
</template>

<style scoped>
.loader {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.68);
  box-shadow: 0 6px 20px rgba(17, 24, 39, 0.1);
}

.loader__ring {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #d1d5db;
  border-top-color: #111827;
  animation: spin 0.8s linear infinite;
}

.loader__text {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #374151;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
