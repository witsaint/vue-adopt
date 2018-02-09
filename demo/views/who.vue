<template>
    <section class="who">
        <el-form>
            <el-row>
                <el-col :span="6" :offset="6">我们是谁</el-col>
                <el-col :span="6">
                    <el-input size="small" v-model="row1_clu1"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6" :offset="6">
                    <el-input size="small" v-model="row2_clu1"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input size="small" v-model="row2_clu2"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6" :offset="6">
                    <el-input size="small" v-model="row3_clu1"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input size="small" v-model="row3_clu2"></el-input>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center">
                <el-button @click="show">生成</el-button>
            </el-row>
            <el-row v-show="ifShow" type="flex" justify="center">
                <canvas id="myCanvas" width="600px" height="680px" style="border: 1px solid red;">
                    您的浏览器不支持canvas标签。
                </canvas>
            </el-row>
            <el-row v-show="ifShow" type="flex" justify="center">
                <el-button @click="upload">
                    下载
                </el-button>
            </el-row>
        </el-form>
    </section>
</template>

<script>
    export default {
        name: 'who',
        data () {
            return {
                row1_clu1: '',
                row2_clu1: '',
                row2_clu2: '',
                row3_clu1: '',
                row3_clu1: '',
                row3_clu2: '',
                ifShow: false,
                beauty: new Image()
            }
        },
        methods: {
            show () {
                console.info('s')
                this.ifShow = true
                this.beauty.crossOrigin = "Anonymous";
                this.beauty.src = "http://i4.bvimg.com/606617/7849976dbecf8ee5.jpg";
                //获取Canvas对象(画布)
                this.beauty.onload = this.loadingFunc
            },
            loadingFunc () {
                var canvas = document.getElementById("myCanvas");
                //简单地检测当前浏览器是否支持Canvas对象，以免在一些不支持html5的浏览器中提示语法错误

                if (canvas.getContext) {
                    //获取对应的CanvasRenderingContext2D对象(画笔)
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(this.beauty, 0, 0);

                    //设置字体样式
                    ctx.font = "30px Courier New";
                    //设置字体填充颜色
                    ctx.fillStyle = "#000000";
                    //从坐标点(50,50)开始绘制文字
                    ctx.fillText("我们是谁", 50, 50);
                    ctx.fillText(this.row1_clu1 || '程序员', 400, 50)
                    ctx.fillText(this.row2_clu1 || '我们的目标是', 50, 280)
                    ctx.fillText(this.row2_clu2 || '明天可以走T台', 400, 280)
                    ctx.fillText(this.row3_clu1 || '我们要做的是', 50, 500)
                    ctx.fillText(this.row3_clu2 || '做梦', 400, 500)
                }
            },
            base64Img2Blob () {
                var parts = code.split(';base64,');
                var contentType = parts[0].split(':')[1];
                var raw = window.atob(parts[1]);
                var rawLength = raw.length;

                var uInt8Array = new Uint8Array(rawLength);

                for (var i = 0; i < rawLength; ++i) {
                    uInt8Array[i] = raw.charCodeAt(i);
                }

                return new Blob([uInt8Array], {type: contentType});
            },
            downloadFile(fileName, content) {

                var aLink = document.createElement('a');
                var blob = this.base64Img2Blob(content); //new Blob([content]);

                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("click", false, false);//initEvent 不加后两个参数在FF下会报错
                aLink.download = fileName;
                aLink.href = URL.createObjectURL(blob);
                aLink.click()
                aLink.dispatchEvent(evt);
            },
            upload() {
                downloadFile('whoWeAre.png', canvas.toDataURL("image/png"));
            }
        }
    }
</script>

<style lang="less" scoped>
    .show_body {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
        background: radial-gradient(#0a2a43 30%, #09243a);
        font-family: 'Asap', sans-serif;
    }

    .show_body:after {
        content: '';
        display: block;
        position: absolute;
        top: 1rem;
        right: 1rem;
        bottom: 1rem;
        left: 1rem;
        border: 4px solid #071c2d;
        border-radius: 2px;
        background: none;
        pointer-events: none;
    }

    .label {
        flex: 0;
        color: #b8c5d0;
        letter-spacing: .04em;
        text-align: center;
        margin-bottom: 2rem;
        font-size: 3rem;
    }

    @media screen and (min-width: 60rem) {
        .label {
            font-size: 5vw;
        }
    }

    .checkbox-wrap {
        flex: none;
        position: relative;
        width: 10%;
        min-width: 8rem;
        z-index: 1;
    }

    .checkbox-wrap:after {
        content: '';
        display: block;
        padding-top: 50%;
    }

    .checkbox {
        display: none;
    }

    .checkbox:checked ~ .firefly .abdomen {
        background: #27231e;
        box-shadow: inset 0 0 1.5rem rgba(150, 0, 0, 0.75);
        animation: flicker 4000ms ease infinite;
    }

    .checkbox:checked ~ .firefly .wing-a {
        transform: rotate(30deg);
    }

    .checkbox:checked ~ .firefly .wing-b {
        transform: rotate(-30deg);
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    .head {
        position: absolute;
        top: 15%;
        left: 60%;
        bottom: 15%;
        background: #27231e;
        width: 70%;
        border-radius: 40% 80% 80% 40%;
        box-shadow: inset -0.1rem 0 0 0.3rem rgba(14, 10, 10, 0.2);
    }

    .eyes {
        position: absolute;
        top: -5%;
        right: 10%;
        bottom: -5%;
        width: 35%;
    }

    .eyes:before, .eyes:after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        width: 100%;
        box-sizing: border-box;
        border-radius: 100%;
        background: #0e0a0a;
        padding-top: 100%;
    }

    .eyes:before {
        top: 0;
    }

    .eyes:after {
        bottom: 0;
    }

    .antennae {
        position: absolute;
        top: 20%;
        left: -150%;
        bottom: 20%;
        width: 400%;
        z-index: -1;
    }

    .antennae:before, .antennae:after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        width: 100%;
        box-sizing: border-box;
        border-color: #0e0a0a;
        border-style: solid;
        padding-top: 65%;
        border-width: .25rem .25rem .25rem 0;
    }

    .antennae:before {
        top: 80%;
        border-radius: 0 100% 100% 100%;
    }

    .antennae:after {
        bottom: 80%;
        border-radius: 100% 100% 100% 0;
    }

    .thorax {
        position: absolute;
        top: 0;
        left: 100%;
        bottom: 0;
        background: #d43b1f;
        width: 30%;
        border-radius: 20% 80% 80% 20%;
        box-shadow: inset -0.1rem 0 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
    }

    .abdomen {
        position: absolute;
        top: 10%;
        right: 20%;
        bottom: 10%;
        background: #27231e;
        width: 100%;
        transition: all 1000ms ease;
        border-radius: 100% 30% 30% 100%;
        box-sizing: border-box;
    }

    .abdomen:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: repeating-linear-gradient(90deg, transparent 0, transparent 15%, rgba(0, 0, 20, 0.1) 15%, rgba(0, 0, 20, 0.1) 20%);
        mix-blend-mode: multiply;
        border-radius: 100% 30% 30% 100%;
        z-index: 0;
        box-shadow: inset -1rem 0 0.2rem 0.3rem rgba(0, 0, 0, 0.1);
    }

    .wings {
        position: absolute;
        top: -20%;
        right: 0;
        bottom: -20%;
        left: -5%;
        z-index: 1;
    }

    .wings .wing {
        position: absolute;
        right: 0;
        background: repeating-linear-gradient(#27231e 0%, #27231e 40%, #191613 40%, #191613 60%);
        width: 100%;
        height: 50%;
        transition: all 200ms ease-out;
        border: 1px solid #40341d;
        box-sizing: border-box;
        box-shadow: inset 0.2rem 0 0.1rem 0.5rem rgba(0, 0, 0, 0.5);
    }

    .wings .wing.wing-a {
        transform-origin: bottom right;
        top: 0;
        border-radius: 90% 30% 0 20%;
    }

    .wings .wing.wing-b {
        transform-origin: top right;
        top: 50%;
        border-radius: 20% 0 30% 90%;
    }

    @keyframes flicker {
        0%, 100% {
            background: #fefa01;
            box-shadow: 0 0 1rem #fefa01, inset -0.25rem 0 0 0.5rem rgba(14, 10, 10, 0.1);
        }
        30%, 70% {
            background: #fffd99;
            box-shadow: -1rem 0 8rem 1rem #fefa01, inset -0.25rem 0 0 0.5rem rgba(14, 10, 10, 0.1);
        }
        50% {
            box-shadow: -1rem 0 8rem 1rem rgba(254, 250, 1, 0.8), inset -0.25rem 0 0 0.5rem rgba(14, 10, 10, 0.1);
        }
    }
</style>