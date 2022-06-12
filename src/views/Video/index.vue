<template>
  <van-sticky>
    <!-- 返回上一级 -->
    <van-nav-bar title="视频详情页" left-text="返回" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <!-- 视频播放区域 -->
    <div style="width: 100%; height: 220px;">
      <video-player
        class="video-player vjs-custom-skin"
        :options="playerOptions"
        :playsinline="true"
        ref="videoPlayer"
      ></video-player>
    </div>
  </van-sticky>

  <!-- 详情单元格区域 -->
  <div class="cell">
    <div class="title">[张万森 林北星]一闪一闪亮晶晶</div>
    <div class="desc">一口气看完系列终于来啦！星河流转我也喜欢你林北星！</div>
    <div class="info">
      <div class="left">
        <img src="https://i1.hdslb.com/bfs/face/bb856d0bed8ef8abc0544fd5bd86da4cedf62a04.jpg@60w_60h_1c.png" alt="" >
        <span>不见水星记</span>
      </div>
      <div class="right">
        <span>1289.5万观看</span>
        <span class="like">576.7万</span>
        <span class="collect">326.9万</span>
      </div>
    </div>
  </div>

  <!-- 底部的推荐和评论区域 -->
  <van-tabs v-model:active="active">
    <van-tab title="相关推荐">
      <video-item :video="item" v-for="item in list" :key="item.id"></video-item>
    </van-tab>
    <van-tab title="评论">暂无评论，快去发布吧...</van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import axios from 'axios'
import VideoItem from '../../components/videoItem.vue'

interface IRecommend {
  id: string,
  link: string,
  imgSrc: string,
  desc: string,
  playCount: string,
  commentCount: string,
  videoSrc: string
}

const active = ref(0)
const list = ref<IRecommend[]>([])

axios.get('/recommendList').then(res => {
  list.value = res.data.result
  console.log(res)
}).catch(err => {
  console.log(err)
})

const onClickLeft = () => {
  // 返回顶部
  window.scrollTo(0, 0)
  // 返回上一级
  setTimeout(() => {
    history.go(-1)
  }, 200)
}
const playerOptions = reactive({
  playbackRates: [0.5, 1.0, 1.25, 1.5, 1.75, 2.0, 3.0], // 播放速度
  autoplay: false, // 如果true,浏览器准备好时开始回放。
  muted: false, // 默认情况下将会消除任何音频。
  loop: false, // 导致视频一结束就重新开始。
  preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
  language: 'zh-CN',
  aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
  fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
  sources: [{
    type: 'video/mp4',
    src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' // url地址
  }],
  poster: '', // 你的封面地址
  // width: document.documentElement.clientWidth,
  notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
  controlBar: {
    timeDivider: true,
    durationDisplay: true,
    remainingTimeDisplay: false,
    fullscreenToggle: true // 全屏按钮
  }
})
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar__content {
  background-color: #fb7299;
}
/deep/ .van-nav-bar__title,
.van-nav-bar .van-icon,
/deep/ .van-nav-bar__left .van-icon-arrow-left,
/deep/ .van-nav-bar__text {
  color: #fff;
}
/deep/ .video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.cell {
  padding: 3px;
  border-bottom: 1px solid #eee;
  .title {
    font-size: 15px;
    font-weight: 700;
    height: 25px;
    line-height: 25px;
    color: #212121;
  }
  .desc {
    font-size: 14px;
    color: #333;
  }
  .info {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #999;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;

      img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 5px;
      }
    }

    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      .like, .collect {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .like::before {
        width: 32px;
        height: 32px;
        transform: scale(0.5);
        content: '';
        background: url('../../assets/images/like.png') no-repeat;
        margin-right: -5px;
      }
      .collect::before {
        width: 32px;
        height: 32px;
        transform: scale(0.5);
        content: '';
        background: url('../../assets/images/collect.png') no-repeat;
        margin-right: -5px;
      }
    }
  }
}
/deep/ .pic {
  width: 100%;
}
</style>
