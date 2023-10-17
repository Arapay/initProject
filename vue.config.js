const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['stage.3d.com'],
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `http://192.168.100.85:9529/yuanqu`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  css: {
    // sourceMap: process.env.NODE_ENV === 'development',
    sourceMap: false,
    extract: false,
    loaderOptions: { 
      sass: {
        additionalData: `@import "~@/style/global.sass"`
      },
      scss: {
        additionalData: `@import "~@/style/global.scss";`
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src'))
    config.module
      .rule('worker')
      .test(/\.worker\.js$/)
      .use('worker')
      .loader('worker-loader')
      .options({
        inline: true
      })
      config.plugin('html').tap((args) => {
        args[0].title = '自定义名字'
        return args
      })
  }
})
