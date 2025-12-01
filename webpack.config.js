const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  // SENIOR NOTE: Remove 'mode' here. 
  // Let your package.json scripts ("dev" vs "build") decide the mode.
  mode: 'development', 

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // Add this to ensure images have clean names in the dist folder
    assetModuleFilename: 'assets/[name][ext]', 
  },

  // Source maps help you debug. It shows you the line number in your 
  // SRC file, not the bundle file. Essential for dev!
  devtool: 'source-map', 

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // --- ADD THIS FOR IMAGES ---
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // --- ADD THIS FOR HTML IMAGES ---
      // (Optional, only if you put <img src="./pic.jpg"> in your HTML file)
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Changed from public/index.html (Standard convention)
      filename: 'index.html',
      title: 'Weather App'
    }),
    new Dotenv(),
  ],

  devServer: {
    static: path.join(__dirname, 'dist'),
    open: true,
    hot: true,
    port: 8080,
    // Helps avoid 404s if you use Client-side routing later
    historyApiFallback: true, 
  },
};