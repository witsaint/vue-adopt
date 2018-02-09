<template>
    <section>
    <!--<transition name="bounce">-->
    <router-view></router-view>
    <!--</transition>-->
    </section>
</template>
<script>
    export default {
        name: 'app'
    }
</script>
<style lang="less">
    html,
    body {
        margin: 0;
        height: 100%;
        font-size: 14px;
        line-height: 1.5;
        color: #495060;
        background-color: #fff;
        -webkit-font-smoothing: antialiased;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
</style>
