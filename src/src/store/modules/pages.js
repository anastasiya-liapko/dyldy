const state = {
  flip: true,
  participantId: 0
}

const mutations = {
  'SWITCH_FLIP' () {
    state.flip = !state.flip
  },
  'SET_PARTICIPANT_ID' (state, v) {
    state.participantId = v
  }
}

const actions = {
  switchFlip: ({ commit }) => {
    commit('SWITCH_FLIP')
  },
  setParticipantId: ({ commit }, v) => {
    commit('SET_PARTICIPANT_ID', v)
  }
}

const getters = {
  flip: state => {
    return state.flip
  },
  participantId: (state) => {
    return state.participantId
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
