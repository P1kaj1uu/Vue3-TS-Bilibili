import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/less/base.less'
import '@/assets/less/iconfont.less'
import VueVideoPlayer from 'vue-video-player/src'
// 导入mock
import '@/mock/index'
// 导入vant组件库样式文件
import 'vant/lib/index.css'
import 'video.js/dist/video-js.css'

import {
  Button,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  NavBar,
  Icon,
  Sticky
} from 'vant'

const app = createApp(App)
app.use(router)
app.use(Button)
app.use(Tab)
app.use(Tabs)
app.use(Swipe)
app.use(SwipeItem)
app.use(NavBar)
app.use(Icon)
app.use(Sticky)
app.use(VueVideoPlayer)
app.mount('#app')
