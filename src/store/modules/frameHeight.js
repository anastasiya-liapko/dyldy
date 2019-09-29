const state = {
  frame: process.env.VUE_APP_FRAME_SELECTOR,
  frameHeight: '400px',
  activePage: 1
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
    if (state.activePage === 1) {
      state.frameHeight = '400px'
    } else {
      state.frameHeight = window.innerWidth < 768 ? 'auto' : '650px'
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
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
