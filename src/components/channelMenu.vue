<template>
  <div class="channelMenu">
    <van-tabs v-model:active="active">
      <van-tab v-for="item in channelList" :key="item.id" :title="item.text"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

interface IChannel {
  id: number
  text: string
}

const active = ref(0)
const channelList = ref<IChannel[]>([])

axios.get('/navList').then(res => {
  channelList.value = res.data.result
  console.log(res.data.result)
}).catch(err => {
  console.log(err)
})
</script>

<style lang="less" scoped>
.channelMenu {
  margin-top: 5px;
  border-bottom: 1px solid #e5e5e5;
}
</style>
