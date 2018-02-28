/*global module:true*/
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Home',
    meta: [
      {charset: 'utf-8'},
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'sock demo'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: './favicon.ico'
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
      //开发状态下+客户端下, 保存的时候
      //验证语法js与vue的语法(vue相关代码有效)
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)|(assets\/js)/
        })
      }
    },
    //抽出"css"中设置的第三方样式
    extractCSS: true,
    //修改打包路径
    publicPath: '/site/',//中间件
    //...无需重复打包的包(可以通过"npm run build-a"对比打包结果)
    //EventSource的polyfill
    vendor: [
      '~/plugins/http',
      '~/components/cp.vue'
    ]
  },
  css: [],
  loading: '~/components/loading.vue',
  //全局配置
  env: {
    base: {},
    prod: {},
    dev: {}
  },
  router: {},
  render: {
    //取消预读prefetch功能(就是首次加载, prefetch一堆后续可能会加载的js, 真正跳转到需要这些js的页面就可以直接从缓存中获取已经预读过的js文件)
    //首次加载会预读多一堆的js, 虽然优先级低, 不过如果浏览器当前性能低, 并发下载js时可能会卡顿.
    //这一堆的js, 是每个page的独立的逻辑js, size都很小, 即使不prefetch, 暂时几乎无感.
    //如果出现了跳转的卡顿, 可以考虑恢复为true
    //该配置会影响一些网站测试工具, 误以为过多的js文件.
    resourceHints: false
  },
  plugins: ['~/plugins/http']
}
