const state = {
  flip: true,
  participantId: 0,
}

const mutations = {
  'SWITCH_FLIP' () {
    state.flip = !state.flip
  },
  setParticipantId(state, v) {
    state.participantId = v;
  },
}

const actions = {
  switchFlip: ({ commit }) => {
    commit('SWITCH_FLIP')
  }
}

const getters = {
  flip: state => {
    return state.flip
  },
  participantId: (state) => {
    return state.participantId;
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}
