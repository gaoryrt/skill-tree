const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const CleanWbpk = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const FriendlyErrors = require('friendly-errors-webpack-plugin')

const HtmlWbpk = require('html-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')
const OptimizeCss = require('optimize-css-assets-webpack-plugin')
const TS = require('dayjs')().format('MMDDHHmm')
const HTMLInline = require('html-webpack-inline-source-plugin')

module.exports = merge(base, {
  output: {

    filename: 'js/[name].[contenthash:8].js',
    publicPath: ' '
  },
  mode: 'production',
  performance: {
    maxAssetSize: 1000000
  },
  stats: {
    timings: false,
    builtAt: false,
    children: false,
    entrypoints: false,
    hash: false,
    modules: false
  },
  optimization: {

    splitChunks: {
      name: 'vendors',
      chunks: 'all'
    },

    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        extractComments: false
      }),

      new OptimizeCss({})

    ]
  },
  plugins: [
    new FriendlyErrors(),
    new CleanWbpk(['../dist'], {
      allowExternal: true,
      verbose: false
    }),

    new MiniCss({
      filename: 'css/main.[contenthash:8].css'
    }),
    new HtmlWbpk({
      title: 'testtitle',
      filename: `index.html`,
      template: 'public/index.html',
      inlineSource: '\.()$'
    }),
    new HTMLInline()

  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCss.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [

              ]
            }
          }
        ]
      }
    ]
  }

})
