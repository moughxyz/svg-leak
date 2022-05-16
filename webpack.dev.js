const { merge } = require('webpack-merge')
const config = require('./webpack.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  const port = argv.port || 2999
  return merge(config(env, argv), {
    mode: 'development',
    optimization: {
      minimize: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.dev.html',
        inject: true,
        templateParameters: {
          env: process.env,
        },
      }),
    ],
    devServer: {
      hot: 'only',
      port,
      devMiddleware: {
        writeToDisk: argv.writeToDisk,
      },
    },
  })
}
