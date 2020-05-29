<template lang="html">
  <div style="height:100%">
    <el-container style="height:100%">
      <el-header height="40">
        <header-model />
      </el-header>
      <el-container style="width: 1200px;margin: 0 auto">
        <router-view />
      </el-container>
    </el-container>
  </div>
</template>

<style>
/* 引入代码高亮样式 */
@import 'highlight.js/styles/color-brewer.css';
</style>

<script>
import HeaderModel from './components/header'
import MenuModel from './components/menu'
export default {
  components: {
    HeaderModel,
    MenuModel
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
