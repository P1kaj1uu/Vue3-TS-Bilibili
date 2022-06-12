<template>
  <div class="list">
    <video-item :video="item" v-for="item in videoList" :key="item.id"></video-item>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import videoItem from './videoItem.vue'

interface IVideoList {
  commentCount: string,
  desc: string,
  id: string,
  imgSrc: string,
  link: string,
  playCount: string,
  videoSrc: string
}

const videoList = ref<IVideoList[]>([])

axios.get('/videosList').then(res => {
  videoList.value = res.data.result
  console.log(res.data.result)
}).catch(err => {
  console.log(err)
})
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>
