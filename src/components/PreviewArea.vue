<script setup lang="ts">
</script>

<template>
  <div class="preview-area">
    <div class="preview-container">
      <div class="preview-placeholder">
        <div class="report-cover">
          <div class="cover-header">
            <div class="cover-logo"></div>
            <div class="cover-title">团检报告</div>
          </div>
          <div class="cover-content">
            <div class="cover-main-title">2025年度XX市供电局</div>
            <div class="cover-sub-title">职工健康体检报告</div>
          </div>
          <div class="cover-footer">
            <div class="cover-org">温州医科大学附属第一医院体检中心</div>
            <div class="cover-date">2025年12月</div>
          </div>
        </div>
      </div>
    </div>
    <div class="preview-border"></div>
  </div>
</template>

<style scoped>
.preview-area {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  position: relative;
  overflow: auto;
}

.preview-container {
  width: 609px;
  height: 862px;
  background: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: relative;
}

.preview-border {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 610px;
  height: 862px;
  border: 2px solid #4080FF;
  pointer-events: none;
}

.preview-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.report-cover {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 60px 50px;
}

.cover-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 120px;
}

.cover-logo {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #1D5CFF 0%, #4080FF 100%);
  border-radius: 8px;
}

.cover-title {
  font-size: 24px;
  font-weight: 600;
  color: #1D5CFF;
}

.cover-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cover-main-title {
  font-size: 32px;
  font-weight: 600;
  color: #1D2129;
  margin-bottom: 16px;
  text-align: center;
}

.cover-sub-title {
  font-size: 28px;
  font-weight: 500;
  color: #4E5969;
  text-align: center;
}

.cover-footer {
  text-align: center;
}

.cover-org {
  font-size: 18px;
  color: #4E5969;
  margin-bottom: 8px;
}

.cover-date {
  font-size: 16px;
  color: #86909C;
}
</style>
