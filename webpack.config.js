var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // require for react

    

    './index.js'
    // the entry point
  ],
  resolve: {
    modules: ["node_modules"]
  },
  context: path.resolve(__dirname, "src"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "src/js"),
    publicPath: "/js/"
  },
  devtool: 'eval',
  devServer: {
    hot: true,
    contentBase: "./src",
    // the output path

    publicPath: "/js/",
    // match the output publicPath
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/
      },
      {
        test: /\.css$/, use: ['style-loader', 'css-loader?modules', 'postcss-loader']
      },
      {
        test: /\.styl$/, use: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]', 'stylus-loader']
      },
      {
        test: /\.(png|jpg|jpeg)$/, use: ['file-loader?name=./images/[name].[ext]']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // Activate HMR
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      __DEV__: true
    })
  ]
}