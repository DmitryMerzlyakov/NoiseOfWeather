const { merge } = require('webpack-merge')
const TerserPlugin = require("terser-webpack-plugin")
const commonConfig = require('./webpack.config.common')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }
})
