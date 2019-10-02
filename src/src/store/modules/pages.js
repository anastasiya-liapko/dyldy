const state = {
  flip: true
}

const mutations = {
  'SWITCH_FLIP' () {
    state.flip = !state.flip
  }
}

const actions = {
  switchFlip: ({ commit }) => {
    commit('SWITCH_FLIP')
  }
}

const getters = {
  flip: state => {
    return state.flip
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
