import Vue from 'vue'
import Vuex from 'vuex'
import frameHeight from '@/store/modules/frameHeight'
import scaleHeight from '@/store/modules/scaleHeight'
import pages from '@/store/modules/pages'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    frameHeight,
    scaleHeight,
    pages
  }
})
