// import 'normalize.css'
// import './vue-fullpage.css'
import Vue from 'vue'
import App from './App'
import VueFullpage from '../npm/vue-fullpage'
Vue.use(VueFullpage)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
