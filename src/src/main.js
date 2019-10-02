import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
import SocialSharing from 'vue-social-sharing'
import Vuelidate from 'vuelidate'
import axios from 'axios'
// npm install dotenv
// npm install vue-social-sharing
// npm install vuelidate

require('dotenv').config()
Vue.use(SocialSharing)
Vue.use(Vuelidate)
Vue.config.productionTip = false
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
