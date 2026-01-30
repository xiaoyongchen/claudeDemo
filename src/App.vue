<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import PreviewArea from './components/PreviewArea.vue'
import FormPanel from './components/FormPanel.vue'
import Footer from './components/Footer.vue'

function handlePrev() {
  // 上一步逻辑
}

function handleNext() {
  // 下一步逻辑
}
</script>

<template>
  <div class="app-container">
    <Sidebar />
    <div class="main-area">
      <Header />
      <div class="content-area">
        <PreviewArea />
        <FormPanel />
      </div>
      <Footer @prev="handlePrev" @next="handleNext" />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #F4F5F7;
  overflow: hidden;
}

.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.content-area {
  flex: 1;
  display: flex;
  overflow: hidden;
}
</style>
