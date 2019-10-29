const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack');
const path = require('path');
var bootstrapEntryPoints = require('./webpack.bootstrap.config.js');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer:{
  	open:true,
  	port:4002,
  	contentBase:'src',
  	hot:true
  },
   plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
   module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
          loader: "css-loader" //将 CSS 转化成 CommonJS 模块
      }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
    },
    {
    	test:/\.css$/,
    	use:['style-loader', 'css-loader' ]
    },
    { 
    	test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" 
    },
    { 
    	test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" 
    },
    { 
    	test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" 
    },
    { 
    	test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" 
    },
    {
      test:require.resolve('jquery'),
      loader:"expose-loader?jQuery!expose-loader?$"
    }
     ]
  }
};