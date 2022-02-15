import {createApp } from 'vue'
import  ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '../router'
import VideoPlayer from 'vue-video-player/src'

import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
const app = createApp(App)

// app.use(ElContainer)
// app.use(ElAside)
// app.use(ElHeader)
app.use(ElementUI)
app.use(router)
app.use(VideoPlayer)
app.mount('#app')
