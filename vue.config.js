const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const path = require('path')
module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 64,
            propList: ['*']
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      // 反向代理的规则  /api代表所有以/api开始的请求都要被反向代理
      '/myapi': {
        // 目标服务器   /aaa/users
        // http://localhost:8888/api/private/v1/aaa/users
        target: 'http://127.0.0.1:9090/api',
        pathRewrite: { '^/myapi': '' }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        images: path.join(__dirname, 'src/assets/images')
      }
    }
  }
}
