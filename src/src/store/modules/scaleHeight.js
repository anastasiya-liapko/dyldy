const state = {
  currentHeight: 645000
}

const mutations = {
  'SET_CURRENT_HEIGHT' (state, value) {
    state.currentHeight = value
    this.commit('SET_CURRENT_HEIGHT_ON_SCALE')
  },
  'SET_CURRENT_HEIGHT_ON_SCALE' (state) {
    var currentHeight = document.querySelector('.alef-scale__item_type_current')
    var heights = document.querySelectorAll('.alef-scale__item')
    var heightsL = document.querySelectorAll('.alef-scale__item_size_l:not(.alef-scale__item_type_current)')

    for (var i = 0; i < heights.length; ++i) {
      heights[i].style.display = 'flex'
      var heightValue = parseInt(heights[i].getAttribute('data-value'))

      if (heightValue <= state.currentHeight) {
        heights[i].style.display = 'none'
        currentHeight.style.top = heights[i].style.top
        var currentHeightCoords = currentHeight.getBoundingClientRect()

        heightsL.forEach(function (elem) {
          var heightLCoords = elem.getBoundingClientRect()

          if ((heightLCoords.top > currentHeightCoords.top && heightLCoords.top < currentHeightCoords.bottom) || (heightLCoords.bottom > currentHeightCoords.top && heightLCoords.bottom < currentHeightCoords.bottom)) {
            elem.classList.remove('alef-scale__item_size_l')
            elem.querySelector('.alef-scale__item-descr').style.display = 'none'
          }
        })
        return false
      }
    }
  }
}

const actions = {
  setCurrentHeight: ({ commit }, value) => {
    commit('SET_CURRENT_HEIGHT', value)
  },
  setCurrentHeightOnScale: ({ commit }) => {
    commit('SET_CURRENT_HEIGHT_ON_SCALE')
  }
}

const getters = {
  currentHeight: state => {
    return state.currentHeight
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
