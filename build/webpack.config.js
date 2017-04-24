// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
       // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    // entry: ['webpack-hot-middleware/client', path.resolve(__dirname, '../app/index/index.js')],
    entry: {
         index: path.resolve(__dirname, '../app/index/index.js'),
          vendors: [
         'Vue'
     ]
         },
    // 编译的文件路径
     // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, '../output/static'),
        publicPath: 'static/',
        // publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    }, 
     resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'Vue': 'vue/dist/vue.js'
        }
    },
    module: {
        // 一些特定的编译规则
        loaders: [
            {
                // 让webpack去验证文件是否是.js结尾将其转换
                test: /\.js$/,
                // 通过babel转换
                loader: 'babel',
                // 不用转换的node_modules文件夹
                exclude: /node_modules/,
                query: {
                    presets: ["es2015"]
                }
            } ,
                // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // 加载图片
            {
                 test: /\.(png|jpg|gif|svg)$/,
                    loader: 'url',
                query: {
                     limit: 10000,
                    name: '[name].[ext]?[hash:7]'
            }
    }
        ]
    },
     plugins: [
             new HtmlWebpackPlugin({
                 // favicon:'./src/img/favicon.ico', //favicon路径
                 filename: '../index.html',
                 // filename: 'app/index/index.html',
                 template: path.resolve(__dirname, '../app/index/index.html'),
                 inject: true,  //允许插件修改哪些内容，包括head与body
                 hash:true,    //为静态资源生成hash值
                 minify:{    //压缩HTML文件
                        removeComments:true,    //移除HTML中的注释
                        collapseWhitespace:true    //删除空白符与换行符
                        }
             })
       ],
       devServer:{
             historyApiFallback:true,
            hot:true,
            inline:true,
            progress:true,
            port:9090 //端口你可以自定义
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
}
