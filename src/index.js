/**
 * Created by gaodingqiang on 2017/8/25.
 */
import vueAdopt from './adapt'
class Adopt {
    constructor(opts) {
        if (!opts.UIWidth) {
            throw new Error('没有设置UI图的宽度')
        }
        this.position = []
        this.is_wexin_browser = false
        this.is_ios = true // false 为android
        this.dpr = window.devicePixelRatio || 1
        this.docEl = document.documentElement
        this.html_rem = this.docEl.clientWidth / 10
        this.install = vueAdopt
        this.setBodyFontSize()
        this.setRem()
        // reset rem unit on page resize
        window.addEventListener('resize', this.setRem)
        window.addEventListener('pageshow', function (e) {
            if (e.persisted) {
                this.setRem()
            }
        })
    }

    setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = (12 * this.dpr) + 'px'
        }
        else {
            document.addEventListener('DOMContentLoaded', this.setBodyFontSize)
        }
    }

    setRem() {
        this.html_rem = this.docEl.clientWidth / 10
        this.docEl.style.fontSize = this.html_rem + 'px'
    }
}

export default Adopt