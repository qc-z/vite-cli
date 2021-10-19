<template>
  <div id="app">
    <ElConfigProvider :locale="locale">
      <router-view></router-view>
    </ElConfigProvider>
  </div>
</template>
<script setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const locale = zhCn
</script>
<style>
@import './style/base.scss';
</style>
