/**
 * Created by gaodingqiang on 2017/8/31.
 */
const express = require('express')
// const rewrite = require('express-urlrewrite')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config.js')
const path = require('path')

// var utility = require('utility')
// var superagent = require('superagent')
// var cheerio = require('cheerio')

const app = express()
var compiler = webpack(WebpackConfig)
app.use(webpackDevMiddleware(compiler, {
    publicPath: WebpackConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true,
        chunks: false
    }
}))

// app 本身有很多方法，其中包括最常用的 get、post、put/patch、delete，在这里我们调用其中的 get 方法，为我们的 `/` 路径指定一个 handler 函数。
// 这个 handler 函数会接收 req 和 res 两个对象，他们分别是请求的 request 和 response。
// request 中包含了浏览器传来的各种信息，比如 query 啊，body 啊，headers 啊之类的，都可以通过 req 对象访问到。
// res 对象，我们一般不从里面取信息，而是通过它来定制我们向浏览器输出的信息，比如 header 信息，比如想要向浏览器输出的内容。这里我们调用了它的 #send 方法，向浏览器输出一个字符串。
// app.get('/lesson2', function (req, res) {
//     var q = req.query.q;
//     // 调用 utility.md5 方法，得到 md5 之后的值
//     // 之所以使用 utility 这个库来生成 md5 值，其实只是习惯问题。每个人都有自己习惯的技术堆栈，
//     // 我刚入职阿里的时候跟着苏千和朴灵混，所以也混到了不少他们的技术堆栈，仅此而已。
//     // utility 的 github 地址：https://github.com/node-modules/utility
//     // 里面定义了很多常用且比较杂的辅助方法，可以去看看
//     var md5Value = utility.md5(q);
//
//     res.send(md5Value);
//     // res.send('Hello World');
// });
//
//
// app.get('/lesson3', function (req, res, next) {
//     // 用 superagent 去抓取 https://cnodejs.org/ 的内容
//     superagent.get('https://cnodejs.org/')
//         .end(function (err, sres) {
//             // 常规的错误处理
//             if (err) {
//                 return next(err);
//             }
//             // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
//             // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
//             // 剩下就都是 jquery 的内容了
//             var $ = cheerio.load(sres.text);
//             var items = [];
//             $('#topic_list .topic_title').each(function (idx, element) {
//                 var $element = $(element);
//                 items.push({
//                     title: $element.attr('title'),
//                     href: $element.attr('href')
//                 });
//             });
//
//             res.send(items);
//         });
// });
// Step 3: 将编译器挂载给 webpack hot middleware
app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}))
/* 静态文件 */
app.use(express.static(path.join(__dirname, 'dist')))
app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
//路由设置 用来将所有请求映射到对index的请求上
app.get('*',function(req,res){
    res.render('index',{});
});
// 创建express的服务器
var reload = require('reload') // 据说是用来热加载的
var http = require('http') // 是node用来创建服务器的模块，类似于传统的tomcat

var server = http.createServer(app) // 创建
reload(server, app)

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})