<template>
  <div>
    <!-- 头部区域navbar -->
    <NavBar></NavBar>
    <!-- 标签页区域 -->
    <ChannelMenu></ChannelMenu>
    <!-- 轮播图区域 -->
    <Swiper></Swiper>
    <!-- 视频列表区域 -->
    <VideoList></VideoList>
  </div>
</template>

<script setup lang="ts">
// setup 只需要导入组件，无需注册
import NavBar from '../../components/navbar.vue'
import ChannelMenu from '../../components/channelMenu.vue'
import Swiper from '../../components/swiper.vue'
import VideoList from '../../components/videoList.vue'

</script>

<style lang="less" scoped>

</style>
