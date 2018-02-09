/**
 * Created by gaodingqiang on 2017/8/13.
 */
/* 引入vue和主页 */
import Vue from 'vue'
import router from './utils/router'
import App from './App'
import store from './utils/store'
Vue.config.productionTip = false
/* 实例化一个vue */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})