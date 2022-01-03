import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Semantic from 'semantic-ui-css'
import '../node_modules/semantic-ui-css/semantic.min.css'

import '@/styles/index.scss' // global css
import '@/styles/me_tcefrep.css'

import App from './App'
import store from './store'
import router from './router'
import '@/icons' // icon

Vue.use(ElementUI)

Vue.use(Semantic)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
