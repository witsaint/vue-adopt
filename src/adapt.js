/**
 * Created by gaodingqiang on 2017/8/25.
 */
// version: 1.1.0
// vue-adopt.js

const isDef = v => v !== undefined
// 暴露出的全局配置项，也就是在调用 Vue.use(Vue, options) 时传入的第二个选项参数

// 核心部分，插件的具体逻辑均在此实现
var vueAdopt = function (Vue) {
    if (this.installed) {
        return
    }
    this.installed = true
    Vue.mixin({
        beforeCreate () {
            console.info(this.$options + 'options')
            if (isDef(this.$options)) {
                console.info(this.$options)
            }
        },
        create () {

        }
    })
}

export default
vueAdopt