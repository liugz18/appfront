import {createApp } from 'vue'
import  ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '../router'
// import { ElIcon } from 'element-plus'

const app = createApp(App)

// app.use(ElContainer)
// app.use(ElAside)
// app.use(ElHeader)
app.use(ElementUI)
app.use(router)
// app.use(ElIcon)
app.mount('#app')
