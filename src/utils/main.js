/**
 * Created by gaodingqiang on 2017/8/25.
 */
/* 获取H5位置*/
export function getLocation(showPosition) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.warn("Geolocation is not supported by this browser.")
    }
}

export function emptyFunc() {
    return
}
//* 是否支持触摸事件 */
export function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        let _div = document.createElement("div")
        _div.addEventListener('touchstart', emptyFunc, false);
        _div.addEventListener('touchmove', emptyFunc, false);
        _div.addEventListener('touchend', emptyFunc, false);
    } catch (e) {
        console.warn("不支持TouchEvent事件！" + e.message);
    }
}

/* 是否微信浏览器*/
export function is_weixin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true
    } else {
        return false
    }
}
/* android or ios*/
export function iosOrAnd() {
    var a = navigator.userAgent
    let b = navigator.appVersion
    return {
        trident: a.indexOf("Trident") > -1,
        presto: a.indexOf("Presto") > -1,
        webKit: a.indexOf("AppleWebKit") > -1,
        gecko: a.indexOf("Gecko") > -1 && a.indexOf("KHTML") == -1,
        mobile: !!a.match(/AppleWebKit.*Mobile.*/),
        ios: !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: a.indexOf("Android") > -1 || a.indexOf("Linux") > -1,
        iPhone: a.indexOf("iPhone") > -1,
        iPad: a.indexOf("iPad") > -1,
        webApp: a.indexOf("Safari") == -1
    }
}

export function createMate(scale) {
    var metaEl = doc.createElement('meta')
    metaEl.setAttribute('name', 'viewport')
    metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no')
    if (docEl.firstElementChild) {
        document.documentElement.firstElementChild.appendChild(metaEl)
    } else {
        var wrap = doc.createElement('div')
        wrap.appendChild(metaEl)
        documen.write(wrap.innerHTML)
    }
}

export function updateViewport(scale) {
    document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no')
}