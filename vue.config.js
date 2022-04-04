'use strict'
class VueConf {
  constructor() {
    Object.assign(this, require('./config/index.ts'))
  }

  // 链式webpack可以在这里配置，已经配置了一些默认配置 详情请查阅 @zz-common/vue-cli-plugin-baseconfig
  chainWebpack(config) {
    config.plugins.delete('preload-index')
    config.plugins.delete('prefetch-index')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    // console.log('config-----', config)
    // console.log('pluginOptions-----', pluginOptions)
    // const conf = config.pluginOptions

    // if (process.env.NODE_ENV === 'development' && conf.needVConsole) {
    //   const vConsole = require('vconsole-webpack-plugin')
    //   config.plugin('vconsole-webpack-plugin').use(
    //     new vConsole({
    //       enable: true,
    //     })
    //   )
    // }
  }

  configureWebpack(config) {
    const plugins = []
    const optimization = {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          // commons: {
          //   name: "chunk-commons",
          //   test: /(src\/components)/, // can customize your rules
          //   minChunks: 3, //  minimum common number
          //   priority: 5,
          //   reuseExistingChunk: true,
          // },
          vendor: {
            chunks: 'all',
            name: 'vendor',
            test: /[\\/]node_modules[\\/](vue|vue-router|vue-lazyload)/,
            priority: -10,
          },
        },
      },
    }

    return { optimization, plugins }
  }
}

module.exports = new VueConf()
