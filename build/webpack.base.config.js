/**
 * webpack.base.config.js
 * 存放 dev 和 prod 通用配置
 */

const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

const { resolve } = require('./utils')
module.exports = {
  entry: {
    app: [resolve('src/index.js')], //入口
  },
  output: {
    path: resolve('dist'),
    // publicPath: getPublicPath(),
    filename: '[name].js',
    // chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      // 它会应用到普通的 `.css` 文件.
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],// 插件
};