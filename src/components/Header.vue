<script setup lang="ts">
import { useReportStore } from '@/stores/report'
import type { Tab, TabKey } from '@/types'

const store = useReportStore()

const tabs: Tab[] = [
  { key: 'cover', label: '封面信息' },
  { key: 'preface', label: '前言' },
  { key: 'summary', label: '报告综述' },
  { key: 'personnel', label: '人员结构' },
  { key: 'completion', label: '体检完成情况' },
  { key: 'analysis', label: '异常分析' },
  { key: 'advice', label: '健康建议' },
  { key: 'conclusion', label: '结束语' },
]

function handleTabClick(key: TabKey) {
  store.setActiveTab(key)
}

function handlePreview() {
  // 预览逻辑
}
</script>

<template>
  <header class="header">
    <div class="header-left">
      <div class="logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 4h10v16H5V4z" stroke="#1D5CFF" stroke-width="1.5" fill="none"/>
          <path d="M15 11h4v9h-4v-9z" stroke="#1D5CFF" stroke-width="1.5" fill="none"/>
        </svg>
      </div>
      <div class="title-group">
        <span class="title">团检报告</span>
        <span class="version">MVP 1.5</span>
      </div>
    </div>

    <div class="tabs">
      <div
        v-for="tab in tabs"
        :key="tab.key"
        class="tab-item"
        :class="{ active: store.activeTab === tab.key }"
        @click="handleTabClick(tab.key)"
      >
        {{ tab.label }}
      </div>
    </div>

    <button class="preview-btn" @click="handlePreview">
      预览
    </button>
  </header>
</template>

<style scoped>
.header {
  height: 60px;
  padding: 10px 20px;
  background: white;
  border-bottom: 1px solid #E5E6EB;
  box-shadow: 0 2px 10px rgba(53, 62, 92, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 4px;
}

.logo {
  width: 24px;
  height: 24px;
}

.title-group {
  display: flex;
  align-items: center;
  gap: 4px;
}

.title {
  font-size: 16px;
  font-weight: 600;
  color: #19213D;
}

.version {
  font-size: 12px;
  color: #86909C;
}

.tabs {
  display: flex;
  padding: 5px;
  background: #F4F5F7;
  border-radius: 8px;
}

.tab-item {
  height: 30px;
  padding: 8px 16px;
  font-size: 14px;
  color: black;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
}

.tab-item:hover {
  background: rgba(255, 255, 255, 0.5);
}

.tab-item.active {
  background: white;
  color: #1D5CFF;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(25, 33, 61, 0.1);
}

.preview-btn {
  height: 36px;
  padding: 2px 20px;
  background: #00B42A;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.preview-btn:hover {
  background: #009a24;
}
</style>
