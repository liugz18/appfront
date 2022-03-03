import {createApp } from 'vue'
import  ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '../router'
import VideoPlayer from 'vue-video-player/src'
import axios from 'axios'


import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
const app = createApp(App)

// app.use(ElContainer)
// app.use(ElAside)
// app.use(ElHeader)
app.use(ElementUI)
app.use(router)
app.use(VideoPlayer)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$backend = 'http://127.0.0.1:8000'
app.mount('#app')
