// import {createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import MainPage from '../src/view/MainPage.vue'
import RunPage from '../src/view/RunPage.vue'


const routes = [
    { path: '/', component: MainPage },
    { path: '/RunPage', component: RunPage },
  ]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router