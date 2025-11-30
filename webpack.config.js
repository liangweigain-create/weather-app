// 引入 Node.js 内置的 path 模块（处理文件路径）
const path = require('path');
// 引入 html-webpack-plugin（自动生成 HTML 并注入打包后的 JS）
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1. 模式（mode）：开发环境（development）/生产环境（production）
  mode: 'development', // 开发环境：不压缩代码，保留注释，编译速度快

  // 2. 入口（entry）：Webpack 打包的起点
  entry: './src/index.js', // 指向我们的源码入口文件

  // 3. 出口（output）：打包后的文件存放位置和命名规则
  output: {
    filename: 'main.js', // 打包后的 JS 文件名
    path: path.resolve(__dirname, 'dist'), // 打包后的文件存放目录（dist 文件夹）
    clean: true, // 每次打包前清空 dist 文件夹（避免旧文件残留）
  },

  // 4. 模块（module）：处理不同类型的文件（Webpack 默认只认识 JS/JSON）
  module: {
    rules: [
      // 规则1：处理 CSS 文件（需要 css-loader 和 style-loader）
      {
        test: /\.css$/i, // 匹配所有 .css 后缀的文件
        use: [
          'style-loader', // 2. 将 CSS 注入到 HTML 的 <style> 标签中
          'css-loader'    // 1. 将 CSS 文件转换为 Webpack 能识别的模块
        ],
      },
    ],
  },

  // 5. 插件（plugins）：扩展 Webpack 功能（如生成 HTML、压缩代码等）
  plugins: [
    // 生成 HTML 文件，并自动注入打包后的 JS
    new HtmlWebpackPlugin({
      template: './public/index.html', // 以 public/index.html 为模板
      filename: 'index.html', // 打包后生成的 HTML 文件名（dist/index.html）
      title: 'Todo List' // 页面标题（会替换模板中的 <title>，如果模板中已写则以模板为准）
    }),
  ],

  // 6. 开发服务器（devServer）：本地开发时的热更新服务器
  devServer: {
    static: path.join(__dirname, 'dist'), // 服务器读取的文件目录（dist）
    open: true, // 启动服务器后自动打开浏览器
    hot: true, // 开启热更新（修改代码后无需刷新页面，自动更新）
    port: 8080 // 服务器端口（默认 8080，可自定义）
  },
};