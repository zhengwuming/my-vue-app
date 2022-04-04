const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
const imgPublicPath = 'https://wwww.test.com/xxx/xx'
const assetsPublicPath = 'https://wwww.test.com/xxx/xx'
const publicPath = isProduction ? assetsPublicPath : '/'

function resolve(dir) {
  return path.join(process.cwd(), dir)
}
module.exports = {
  publicPath,
  assetsDir: 'static',
  runtimeCompiler: true,
  indexPath: 'webserver/index.html',
  lintOnSave: true,
  devServer: {
    port: 8081,
    https: true,
    proxy: null,
    hotOnly: false,
    disableHostCheck: true,
  },
  /**
   * @name pluginOptions
   * @description 一些插件用到的额外配置
   * ---------------------------------------------------------|
   * @param resources
   * @description 可以将一些资源放在整个页面加载，不需要手动引入
   * @example resources: [resolve('src/styles/index.scss')]
   * ---------------------------------------------------------|
   * @param alias
   * @description 配置别名
   * ---------------------------------------------------------|
   * @param commonDefine
   * @description 定义公共变量，与proxy配合使用可实现跨域及mock数据
   * ---------------------------------------------------------|
   * @param needVConsole
   * @description vconsole 只在开发环境中使用
   * ---------------------------------------------------------|
   */
  pluginOptions: {
    isProduction,
    // imgPublicPath,
    // assetsPublicPath,
    needVConsole: true,
    alias: {
      '@': resolve('src'),
      '@src': resolve('src'),
    },
  },
  chainWebpack: (config) => {
    // set preserveWhitespace
    // config.module
    //   .rule("vue")
    //   .use("vue-loader")
    //   .loader("vue-loader")
    //   .tap((options) => {
    //     options.compilerOptions.preserveWhitespace = true;
    //     return options;
    //   })
    //   .end();

    // set script-ext-html-webpack-plugin
    // config.when(process.env.NODE_ENV !== "development", (config) => {
    //   config
    //     .plugin("ScriptExtHtmlWebpackPlugin")
    //     .after("html")
    //     .use("script-ext-html-webpack-plugin", [
    //       {
    //         // `runtime` must same as runtimeChunk name. default is `runtime`
    //         inline: /runtime\..*\.js$/,
    //       },
    //     ])
    //     .end();
    // });

    if (process.env.NODE_ENV === 'development') {
      const vConsole = require('vconsole-webpack-plugin')
      config.plugin('vconsole-webpack-plugin').use(
        new vConsole({
          enable: true,
        })
      )
    }
  },
}
