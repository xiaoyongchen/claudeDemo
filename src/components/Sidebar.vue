<script setup lang="ts">
import { useReportStore } from '@/stores/report'

const store = useReportStore()

function handleSearch() {
  // 搜索逻辑
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <!-- 搜索区域 -->
      <div class="search-section">
        <div class="search-row">
          <div class="search-input-wrapper">
            <input
              v-model="store.searchKeyword"
              type="text"
              class="search-input"
              placeholder="请输入机构名称"
            />
            <button class="search-btn" @click="handleSearch">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="5" stroke="white" stroke-width="1.5"/>
                <line x1="11" y1="11" x2="14" y2="14" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="filter-row">
          <div class="date-picker">
            <input
              v-model="store.dateFilter"
              type="text"
              class="filter-input"
              placeholder="请选择时间"
            />
            <svg class="calendar-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="3" width="12" height="11" rx="1" stroke="#4E5969" stroke-width="1.2"/>
              <line x1="2" y1="6" x2="14" y2="6" stroke="#4E5969" stroke-width="1.2"/>
              <line x1="5" y1="1" x2="5" y2="4" stroke="#4E5969" stroke-width="1.2" stroke-linecap="round"/>
              <line x1="11" y1="1" x2="11" y2="4" stroke="#4E5969" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="status-select">
            <span>全部状态</span>
            <svg class="arrow-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="initiator-row">
          <span class="label">发起人</span>
          <input
            v-model="store.initiatorFilter"
            type="text"
            class="filter-input flex-1"
            placeholder="请输入"
          />
        </div>
      </div>

      <!-- 单位列表 -->
      <div class="company-list-section">
        <h3 class="section-title">单位列表</h3>
        <div class="company-list">
          <div
            v-for="company in store.filteredCompanies"
            :key="company.id"
            class="company-item"
            :class="{ active: company.id === store.selectedCompanyId }"
            @click="store.selectCompany(company.id)"
          >
            <div class="company-name">{{ company.name }}</div>
            <div class="company-serial">流水号：{{ company.serialNumber }}</div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 340px;
  height: 100%;
  background: white;
  border-right: 1px solid #E3E6EA;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sidebar-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  overflow: hidden;
}

.search-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.search-row {
  position: relative;
}

.search-input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.search-input {
  flex: 1;
  height: 32px;
  padding: 4px 48px 4px 12px;
  border: 1px solid #E5E6EB;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
}

.search-input::placeholder {
  color: #86909C;
}

.search-input:focus {
  border-color: #4080FF;
}

.search-btn {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 32px;
  background: #4080FF;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-btn:hover {
  background: #1D5CFF;
}

.filter-row {
  display: flex;
  gap: 10px;
}

.date-picker {
  flex: 1;
  position: relative;
}

.filter-input {
  width: 100%;
  height: 32px;
  padding: 5px 32px 5px 12px;
  border: 1px solid #E5E6EB;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}

.filter-input::placeholder {
  color: #86909C;
}

.filter-input:focus {
  border-color: #4080FF;
}

.calendar-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.status-select {
  height: 32px;
  padding: 8px 12px;
  background: #F4F5F7;
  border: 1px solid #E5E6EB;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-size: 14px;
}

.arrow-icon {
  transform: rotate(0deg);
}

.initiator-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.initiator-row .label {
  font-size: 14px;
  color: black;
  white-space: nowrap;
}

.initiator-row .flex-1 {
  flex: 1;
}

.company-list-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
}

.section-title {
  font-size: 16px;
  font-weight: 500;
  color: #19213D;
  margin: 0;
}

.company-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
}

.company-item {
  padding: 10px 12px;
  background: white;
  border: 1px solid #E5E6EB;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.company-item:hover {
  border-color: #4080FF;
}

.company-item.active {
  background: rgba(232, 243, 255, 0.5);
  border-color: #4080FF;
}

.company-item.active .company-name {
  color: #1D5CFF;
  font-weight: 500;
}

.company-name {
  font-size: 14px;
  color: black;
  margin-bottom: 2px;
}

.company-serial {
  font-size: 12px;
  color: #666F8D;
}
</style>
