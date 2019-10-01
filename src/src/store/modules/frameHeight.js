const state = {
  frame: process.env.VUE_APP_FRAME_SELECTOR,
  frameHeight: '400px',
  activePage: 1,
  segmentsQuantity: 4
}

const mutations = {
  'CHANGE_ACTIVE_PAGE' (state, pageNumber) {
    state.activePage = pageNumber
    var self = this
    setTimeout(function () {
      self.commit('SET_FRAME_HEIGHT')
      self.commit('SET_CURRENT_HEIGHT_ON_SCALE')
    }, 300)
  },
  'SET_FRAME_HEIGHT' (state) {
    if (state.activePage === 1) {
      state.frameHeight = '400px'
      state.segmentsQuantity = 4
    } else {
      if (window.innerWidth < 768) {
        state.frameHeight = 'auto'
        // state.frameHeight = '1412px'
        state.segmentsQuantity = 12
      } else {
        state.frameHeight = '650px'
        state.segmentsQuantity = 6
      }
    }
    var frame = document.querySelector(state.frame)
    frame.style.height = state.frameHeight
  }
}

const actions = {
  changeActivePage: ({ commit }, pageNumber) => {
    commit('CHANGE_ACTIVE_PAGE', pageNumber)
  },
  setFrameHeight: ({ commit }) => {
    commit('SET_FRAME_HEIGHT')
  }
}

const getters = {
  frameHeight: state => {
    return state.frameHeight
  },
  activePage: state => {
    return state.activePage
  },
  segmentsQuantity: state => {
    return state.segmentsQuantity
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
