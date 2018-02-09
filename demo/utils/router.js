import Vue from 'vue'
import Router from 'vue-router'

// 主入口
import Index from './../views/index'
import Home from './../views/home'
import Who from './../views/who'
import Me from './../views/me'
const meStr = './../views/me'
import canvas from './../views/canvas'

var resolveCom = path => {
    return resolve => {
        require([path], resolve)
    }
}
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index,
            // redirect: '/',
            meta: {requireAuth: true},
            children: [
                {
                    path: 'home',
                    component: Home,
                    name: 'Home'
                },  {
                    path: 'who',
                    component: Who,
                    name: 'who'
                },  {
                    path: '',
                    // component: Me,resolveCom(me)
                    component: function(resolve) {
                        require(['./../views/me'], resolve)
                    },
                    name: 'Me'
                },  {
                    path: 'canvas',
                    component: canvas,
                    name: 'canvas'
                }
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (true) {
            next()
        } else {
            // 提交store记住跳转前页面
            // 防止重置密码流程重定向错误
            next()
        }
    } else {
        next()
    }
})

// 滚动回页面顶部处理
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})

export default router
