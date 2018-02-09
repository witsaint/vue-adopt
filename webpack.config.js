/* 引入操作路径模块和webpack */
var path = require('path');
var webpack = require('webpack');
var progress = require('rollup-plugin-progress');
var postcss = require('rollup-plugin-postcss');
var atImport = require('postcss-import');
var cssnext = require('postcss-cssnext');
var buble = require('rollup-plugin-buble');
var autoprefixer = require('autoprefixer');
var clean = require('postcss-clean');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonJs = require('rollup-plugin-commonjs');
var html = require('rollup-plugin-html');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: __dirname + "/src/index.js",//唯一入口文件 （如果是多入口可以是对象和数组，对象的可以可以在后面的情况中用得到）
    devtool: '#eval-source-map',
    output: {
        /* 输出目录，没有则新建 */
        path: path.resolve(__dirname, './dist/'),
        /* 静态目录，可以直接从这里取文件 */
        publicPath: '/dist/',
        /* 文件名 */
        filename: 'adopt.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
            'vue': 'vue/dist/vue.js'
        }
    },
    devServer: {
        // contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
    ],
    resolveLoader: {
        moduleExtensions: ['-loader'] // 自动给响应的loader加上模块拓展表示这东东是loader结尾，是用来干loader的（是webpack1.0和2.0需要注意的加上不会错）
    },
    performance: {
        hints: false
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}