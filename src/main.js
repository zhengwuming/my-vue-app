import Vue from 'vue'
import App from './App'
// import store from './store'
import router from './router'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/styles/global.scss' // global css

import '@/utils/flexible'
import '@/utils/global'
import Bus from '@/utils/bus'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  // store,
  render: (h) => h(App),
})

class __App__ {
  init() {
    // tryCatch(() => {
    //   // 全局初始化埋点的值
    //   Vue.use(Global)
    // })

    // 挂载bus-一般用于回退页面的通信
    this.installBus()
    // 注册vue实例
    this.mount()
  }

  mount() {
    new Vue({
      router,
      render: (h) => h(App),
    }).$mount('#app')
  }

  installBus() {
    Vue.prototype.$bus = Bus
  }
}

const app = new __App__()
app.init()
