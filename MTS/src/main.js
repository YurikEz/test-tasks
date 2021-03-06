import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'

import './assets/sass/index.sass'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')