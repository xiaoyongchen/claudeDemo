<script setup lang="ts">
import { useReportStore } from '@/stores/report'

const store = useReportStore()

const emit = defineEmits<{
  prev: []
  next: []
}>()

function handleRefresh() {
  // 刷新数据逻辑
}

function handlePrev() {
  emit('prev')
}

function handleNext() {
  emit('next')
}
</script>

<template>
  <footer class="footer">
    <div class="footer-left">
      <button class="refresh-btn" @click="handleRefresh">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M12 7A5 5 0 1 1 7 2" stroke="#1D5CFF" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M12 2v5h-5" stroke="#1D5CFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>数据更新</span>
      </button>
      <span class="update-time">最后更新时间：{{ store.lastUpdateTime }}</span>
    </div>
    <div class="footer-right">
      <button class="btn btn-default" disabled @click="handlePrev">
        上一步
      </button>
      <button class="btn btn-primary" @click="handleNext">
        下一步
      </button>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  height: 56px;
  padding: 10px 20px;
  background: white;
  border-top: 1px solid #E5E6EB;
  box-shadow: 0 -2px 10px rgba(53, 62, 92, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.refresh-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: #1D5CFF;
  font-size: 12px;
  cursor: pointer;
  padding: 0;
}

.refresh-btn:hover {
  opacity: 0.8;
}

.update-time {
  font-size: 12px;
  color: #86909C;
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn {
  height: 36px;
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-default {
  background: white;
  border: 1px solid #E5E6EB;
  color: #C9CDD4;
}

.btn-default:not(:disabled):hover {
  border-color: #4080FF;
  color: #4080FF;
}

.btn-default:disabled {
  cursor: not-allowed;
}

.btn-primary {
  background: #4080FF;
  border: none;
  color: white;
}

.btn-primary:hover {
  background: #1D5CFF;
}
</style>
