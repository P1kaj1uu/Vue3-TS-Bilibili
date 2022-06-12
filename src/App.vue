<template>
  <div>
    <!-- 首页 -->
    <router-view v-if="$route.path === '/home' || $route.path === '/'">
      <Home></Home>
    </router-view>
    <!-- 视频 -->
    <router-view v-else>
      <Video></Video>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import Home from './views/Home/index.vue'
import Video from './views/Video/index.vue'

</script>

<style lang="less" scoped>

</style>
