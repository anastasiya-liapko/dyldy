const state = {
  frame: process.env.VUE_APP_FRAME_SELECTOR,
  frameHeight: '400px',
  activePage: 0,
  segmentsQuantity: 4
}

const mutations = {
  'CHANGE_ACTIVE_PAGE' (state, pageNumber) {
    state.activePage = pageNumber
    var self = this
    setTimeout(function () {
      self.commit('SET_FRAME_HEIGHT')
    }, 300)
  },
  'SET_FRAME_HEIGHT' (state) {
    if (state.activePage === 0 || state.activePage === 1 || state.activePage === 5) {
      state.frameHeight = '400px'
      state.segmentsQuantity = 4
    } else {
      if (window.innerWidth < 768) {
        state.frameHeight = 'auto'
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
