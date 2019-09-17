//引入node自带的path模块
const path = require('path');

module.exports = {
//打包的入口文件
  entry: './src/js/main.js',
//打包完成的输出文件
  output: {
//输出路径--当前目录下的dist目录下
    path: path.resolve(__dirname, 'dist'),
//输出的文件名称
    filename: 'bundle.js'
  },
//webpack-dev-server的配置
  devServer: {
//指定打包js文件在服务器上的路径
    publicPath: '../dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },{loader: 'css-loader'}
          
        ]
      }
    ]
  }
}
