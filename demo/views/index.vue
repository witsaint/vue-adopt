<template>
    <main>
        <transition name="bounce" mode="out-in">
            <router-view></router-view>
        </transition>
    </main>
</template>

<script>

    export default {
        data () {
            return {
                userName: localStorage.getItem('userName')
            }
        },
        components: {
        },
        methods: {
            logout () {
                localStorage.removeItem('token')
                localStorage.removeItem('password')
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="less" scoped>
    main {
        width: 100%;
        // background-color: skyblue;
        box-sizing: border-box;
        position: relative;
    }

    header {
        box-shadow: 1px 1px 1px #20a0ff;
        background-color: #1F2D3D;
        height: 60px;
        width: 100%;
        box-sizing: border-box;
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    .contentCenter {
        width: 100%;
        background: #324057;
        position: fixed;
        top: 60px;
        bottom: 0;
        overflow: hidden;
        menu {
            width: 180px;
        }
        .contentRight {
            background: #fff;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            left: 180px;
            padding: 15px;
            overflow-y: scroll;
            .contentMain {
                min-height: 100%;
                box-shadow: 2px 1px 3px #aaaaaa;
            }
        }
    }

    .el-form-item {
        display: inline-block !important; // 为了查询输入框不占整行
    }

    .bounce-enter-active {
        animation: bounce-in .3s;
    }

    .bounce-leave-active {
        animation: bounce-out .3s;
    }

    @keyframes bounce-in {
        0% {
            transform: translateY(80px);
            opacity: 0;
        }
        100% {
            transform: translateY(4);
        }
    }

    @keyframes bounce-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(80px);
            opacity: 0;
        }
    }
</style>
