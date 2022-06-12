<template>
  <van-swipe class="my_swiper" :autoplay="3000" indicator-color="white" lazy-render>
    <van-swipe-item v-for="image in images" :key="image.imgSrc">
      <img :src="image.imgSrc" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

interface ISwiper {
  link: string,
  imgSrc: string
}

const images = ref<ISwiper[]>([])

axios.get('/swiperList').then(res => {
  images.value = res.data.result
  console.log(res.data.result)
}).catch(err => {
  console.log(err)
})

</script>

<style lang="less" scoped>
.my_swiper {
  margin-top: 3px;
  margin-bottom: 10px;

  img {
    width: 100%;
  }
}
</style>
