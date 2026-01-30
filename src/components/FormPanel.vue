<script setup lang="ts">
import { useReportStore } from '@/stores/report'

const store = useReportStore()
</script>

<template>
  <aside class="form-panel">
    <div class="form-group">
      <label class="form-label">团检任务名称</label>
      <div class="form-input-wrapper">
        <input
          :value="store.reportForm.taskName"
          type="text"
          class="form-input"
          @input="store.updateForm('taskName', ($event.target as HTMLInputElement).value)"
        />
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">团检单位名称</label>
      <div class="form-input-wrapper">
        <input
          :value="store.reportForm.companyName"
          type="text"
          class="form-input"
          @input="store.updateForm('companyName', ($event.target as HTMLInputElement).value)"
        />
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">报告编号</label>
      <div class="form-input-wrapper">
        <input
          :value="store.reportForm.reportNumber"
          type="text"
          class="form-input"
          @input="store.updateForm('reportNumber', ($event.target as HTMLInputElement).value)"
        />
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">编制日期</label>
      <div class="form-input-wrapper has-icon">
        <input
          :value="store.reportForm.compileDate"
          type="text"
          class="form-input"
          @input="store.updateForm('compileDate', ($event.target as HTMLInputElement).value)"
        />
        <svg class="input-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="3" width="12" height="11" rx="1" stroke="#1D2129" stroke-width="1.2"/>
          <line x1="2" y1="6" x2="14" y2="6" stroke="#1D2129" stroke-width="1.2"/>
          <line x1="5" y1="1" x2="5" y2="4" stroke="#1D2129" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="11" y1="1" x2="11" y2="4" stroke="#1D2129" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">体检日期(区间)</label>
      <div class="form-input-wrapper has-icon">
        <input
          :value="store.reportForm.examDateRange"
          type="text"
          class="form-input"
          @input="store.updateForm('examDateRange', ($event.target as HTMLInputElement).value)"
        />
        <svg class="input-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="3" width="12" height="11" rx="1" stroke="#1D2129" stroke-width="1.2"/>
          <line x1="2" y1="6" x2="14" y2="6" stroke="#1D2129" stroke-width="1.2"/>
          <line x1="5" y1="1" x2="5" y2="4" stroke="#1D2129" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="11" y1="1" x2="11" y2="4" stroke="#1D2129" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">编制机构</label>
      <div class="form-textarea-wrapper">
        <textarea
          :value="store.reportForm.compileOrganization"
          class="form-textarea"
          @input="store.updateForm('compileOrganization', ($event.target as HTMLTextAreaElement).value)"
        />
      </div>
    </div>
  </aside>
</template>

<style scoped>
.form-panel {
  width: 500px;
  height: calc(100% - 60px - 56px);
  padding: 20px;
  background: white;
  border-left: 1px solid #E5E6EB;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-label {
  font-size: 14px;
  font-weight: 500;
  color: #4E5969;
}

.form-input-wrapper {
  position: relative;
}

.form-input-wrapper.has-icon .form-input {
  padding-right: 36px;
}

.form-input {
  width: 100%;
  height: 36px;
  padding: 12px;
  border: 1px solid #E5E6EB;
  border-radius: 4px;
  font-size: 14px;
  color: black;
  outline: none;
  box-sizing: border-box;
}

.form-input:focus {
  border-color: #4080FF;
}

.input-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.form-textarea-wrapper {
  position: relative;
}

.form-textarea {
  width: 100%;
  min-height: 80px;
  padding: 8px 12px;
  border: 1px solid #E5E6EB;
  border-radius: 4px;
  font-size: 14px;
  color: black;
  outline: none;
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1.5;
}

.form-textarea:focus {
  border-color: #4080FF;
}
</style>
