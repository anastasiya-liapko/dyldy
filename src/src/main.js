import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
import SocialSharing from 'vue-social-sharing'
import Vuelidate from 'vuelidate'
// npm install dotenv
// npm install vue-social-sharing
// npm install vuelidate

require('dotenv').config()
Vue.use(SocialSharing)
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
