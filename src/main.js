import { createApp } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.component('apexchart', VueApexCharts)
.mount('#app')
