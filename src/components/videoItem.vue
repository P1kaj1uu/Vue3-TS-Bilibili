<template>
  <router-link class="v-card" :to="`/video/${video.id}`">
    <div class="card">
      <div class="card-img">
        <img class="pic" :src="video.imgSrc" :alt="video.desc" />
      </div>
      <div class="count">
        <span>
          <i class="iconfont icon_shipin_bofangshu"></i>
            {{ video.playCount }}
        </span>
        <span>
          <i class="iconfont icon_shipin_danmushu"></i>
            {{ video.commentCount }}
        </span>
      </div>
    </div>
    <p class="title">{{ video.desc }}</p>
  </router-link>
</template>

<script setup lang="ts">
// 父传子需要通过 defineProps 接收
// PropType 用于指定数据格式
import { defineProps, PropType } from 'vue'

interface IVideoItem {
  commentCount: string,
  desc: string,
  id: string,
  imgSrc: string,
  link: string,
  playCount: string,
  videoSrc: string
}

defineProps({
  video: {
    type: Object as PropType<IVideoItem>,
    required: true
  }
})
</script>

<style lang="less" scoped>
.v-card {
  width: 50%;
  height: 160px;
  padding: 0 5px;
}

.card {
  display: flex;
  position: relative;
  flex-wrap: wrap;

  .card-img {
    width: 100%;
  }
  .count {
    position: absolute;
    color: #fff;
    font-size: 13px;
    left: 4px;
    bottom: 2px;
    display: flex;
    width: 95%;
    justify-content: space-between;
  }
}

.title {
  margin-top: 5px;
  font-size: 12px;
  color: #212121;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
