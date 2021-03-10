const currentTask = process.env.npm_lifecycle_event
const path = require('path');
const CssEx = require('mini-css-extract-plugin')
const HtmlPlugin = require('html-webpack-plugin');

let cssConfig = {
  test: /\.css$/i,
  use: [ 'css-loader', {loader: 'postcss-loader'}]
}

let config = {
  entry: './app/assets/scripts/App.js',
  module: {
    rules: [cssConfig]
  }
}

if (currentTask == 'dev') {
  cssConfig.use.unshift('style-loader')

  config.output = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app')
  }

  config.devServer = {
    before: function(app, server) {
      server._watch('./app/**/*.html')
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  }

  config.mode = 'development'

}

if (currentTask == 'build') {
  cssConfig.use.unshift(CssEx.loader)

  config.output = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
  config.mode = 'production'
  config.optimization = {
    splitChunks: {chunks: 'all'}
  }

  config.plugins = [new CssEx({filename: 'styles.css'}),
    new HtmlPlugin({filename: 'index.html', template: './app/index.html'})
  ]
}

module.exports = config;