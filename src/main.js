import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import WeatherToday from './pages/weatherToday/WeatherToday'
import WeatherForDays from './pages/weatherForDays/WeatherForDays'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
    { path: '/', component: WeatherToday },
    { path: '/weatherForDays', component: WeatherForDays }
]

const router = new VueRouter({
    routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')