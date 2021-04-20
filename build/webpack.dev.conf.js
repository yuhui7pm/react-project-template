const { merge } = require('webpack-merge');
const BaseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const Webpack = require('webpack');

module.exports = merge(BaseWebpackConfig, {
  mode: 'development',
  output: {
    filename: "js/[name].[chunkhash].js",
  },
  devtool: 'inline-source-map', // 源错误检查
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      minify: {
        html5: true
      },
      hash: false
    }),
    new Webpack.HotModuleReplacementPlugin(), // 热更新
    new EslintWebpackPlugin({
      fix: true,
      extensions: ['js', 'jsx'],
      emitError: true,
      emitWarning: true,
      failOnError: true,
      failOnWarning: true
    })
  ],
  devServer: {  // 热更新服务配置
    port: '3000',
    compress: true,
    historyApiFallback: true,
    hot: true,  //开启
    https: false,
    noInfo: false,
    open: true,    
    overlay: {
      errors: true,//有错误就显示在网页上
      warnings: true
    }
  }
});