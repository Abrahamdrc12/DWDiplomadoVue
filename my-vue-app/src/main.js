import { createApp } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App)
.use(router)
.use(VueApexCharts)
.component('apexchart', VueApexCharts)
.mount('#app')
