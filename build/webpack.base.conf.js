const Path = require('path'); // node.js自带的路径参数
const APP_PATH = Path.resolve(__dirname, '../src'); // 源文件目录
const DIST_PATH = Path.resolve(__dirname, '../dist'); // 生产目录

module.exports = {
    entry: {
      app: './src/index.jsx',
    },
    output: {
      filename: 'js/[name].[chunkhash].js', //使用hash进行标记
      path: DIST_PATH
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /(node_modules)/,
          use: "babel-loader",
          include: APP_PATH
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.(png|svg|jpe?g)$/i,
          loader: 'url-loader',
          options: {
            esModule: false
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          loader: 'file-loader',
          options: {
            esModule: false
          }
        }
      ]
    }
};