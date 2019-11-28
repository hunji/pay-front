const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const path = require('path')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')

const resolve = dir => path.join(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

module.exports = {
  publicPath: IS_PROD ? process.env.VUE_APP_SRC || '/' : './', // 默认'/'，部署应用包时的基本 URL
  outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  assetsDir: '', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: true,
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 生产环境的 source map

  configureWebpack: config => {
    // cdn引用时配置externals
    // config.externals = {
    // 'vue': 'Vue',
    // 'element-ui': 'ELEMENT',
    // 'vue-router': 'VueRouter',
    // 'vuex': 'Vuex',
    // 'axios': 'axios'
    // }

    if (IS_PROD) {
      const plugins = []

      // 去除多余css
      plugins.push(
      new PurgecssPlugin({
      paths: glob.sync([path.join(__dirname, "./**/*.vue")]),
      extractors: [
      {
      extractor: class Extractor {
      static extract(content) {
      const validSection = content.replace(
      /<style([\s\S]*?)<\/style>+/gim,
      ""
      );
      return validSection.match(/[A-Za-z0-9-_:/]+/g) || [];
      }
      },
      extensions: ['html', 'vue']
      }
      ],
      whitelist: ["html", "body"],
      whitelistPatterns: [/el-.*/],
      whitelistPatternsChildren: [/^token/, /^pre/, /^code/]
      })
      );

      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false
          },
          sourceMap: false,
          parallel: true
        })
      )
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )

      config.plugins = [...config.plugins, ...plugins]
    }
  },
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true)

    // 修复Lazy loading routes Error： Cyclic dependency [https://github.com/vuejs/vue-cli/issues/1669]
    config.plugin('html').tap(args => {
      args[0].chunksSortMode = 'none'
      return args
    })

    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'))
      .set('base', resolve('src/base'))
      .set('static', resolve('src/static'))

    // 压缩图片
    config.module
    .rule("images")
    .use("image-webpack-loader")
    .loader("image-webpack-loader")
    .options({
    mozjpeg: { progressive: true, quality: 65 },
    optipng: { enabled: false },
    pngquant: { quality: "65-90", speed: 4 },
    gifsicle: { interlaced: false },
    webp: { quality: 75 }
    });
  },
  css: {
    modules: false,
    extract: IS_PROD,
    // 为css后缀添加hash
    // extract: {
    // filename: 'css/[name].[hash:8].css',
    // chunkFilename: 'css/[name].[hash:8].css'
    //}，
    sourceMap: false,
    loaderOptions: {
      sass: {
        // 向全局sass样式传入共享的全局变量
        // data: `@import "~assets/scss/variables.scss";$src: "${process.env.VUE_APP_SRC}";`
        data: `$src: "${process.env.VUE_APP_SRC}";`
      }
      // px转换为rem
      // postcss: {
      // plugins: [
      // require('postcss-pxtorem')({
      // rootValue : 1, // 换算的基数
      // selectorBlackList : ['weui', 'el'], // 忽略转换正则匹配项
      // propList : ['*']
      // })
      // ]
      // }
    }
  },
  pluginOptions: {
    // 安装vue-cli-plugin-style-resources-loader插件
    // 添加全局样式global.scss
    // "style-resources-loader": {
    // preProcessor: "scss",
    // patterns: [
    // resolve(__dirname, "./src/scss/scss/variables.scss")
    // ]
    // }
  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8000,
    https: false,
    hotOnly: false,
    proxy: {
      '/card': {
        target: 'http://218.26.36.12:19094/card',
        changeOrigin: true,
        pathRewrite: {
          '^/card': ''
        }
      }
    }
  }
}