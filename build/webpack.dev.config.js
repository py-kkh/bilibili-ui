/**
 * webpack.dev.config.js
 * 存放 dev 配置
 */

const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.base.config')
const { resolve } = require('./utils')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    quiet: true, // webpack 隐藏打包信息
    hot: true, // 热重载
    watchOptions: {
      poll: true
    },
    overlay: {
      warnings: true,
      errors: true
    },
    compress: true, // gzip 压缩
    open: false,
    host: 'localhost',
    port: 2333,
    contentBase: resolve('dist')
    // publicPath: resolve('public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('public/index.html'),
      inject: true
    })
  ]
})
