import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueLazyLoad from 'vue-lazyload'

var loadImage = require('./assets/loading.gif')
var errorImage = require('./assets/no-image.png')

Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  error: errorImage,
  loading : loadImage,
  attempt: 3
})

new Vue({
  render: h => h(App),
}).$mount('#app')
