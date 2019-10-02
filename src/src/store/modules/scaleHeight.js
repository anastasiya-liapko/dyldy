const state = {
  currentHeight: 100000,
  maxHeight: 1000000,
  minHeight: 0
}

const mutations = {
  'ADD_HEIGHT' (state, value) {
    state.currentHeight += value
    this.commit('SET_CURRENT_HEIGHT_ON_SCALE')
  },
  'SET_CURRENT_HEIGHT' (state, value) {
    state.currentHeight = value
    this.commit('SET_CURRENT_HEIGHT_ON_SCALE')
  },
  'SET_CURRENT_HEIGHT_ON_SCALE' (state) {
    var currentHeight = document.querySelector('.alef-scale__item_type_current')
    var heights = document.querySelectorAll('.alef-scale__item:not(.alef-scale__item_type_current)')
    var heightsL = document.querySelectorAll('.alef-scale__item_size_l:not(.alef-scale__item_type_current)')

    heights.forEach(function (elem) {
      elem.style.opacity = 1
    })

    for (var i = 0; i < heights.length; ++i) {
      var heightValueMax = parseInt(heights[i].getAttribute('data-value'))
      var heightValueMin = i + 1 >= heights.length ? 0 : parseInt(heights[i + 1].getAttribute('data-value'))

      if (heightValueMin < state.currentHeight && heightValueMax >= state.currentHeight) {
        if (heightValueMax === state.maxHeight && state.currentHeight < state.maxHeight) {
          heights[1].style.opacity = 0
          currentHeight.style.top = heights[1].style.top
        } else if (state.currentHeight === heightValueMax) {
          heights[i].style.opacity = 0
          currentHeight.style.top = heights[i].style.top
        } else if (heightValueMin === state.minHeight) {
          heights[heights.length - 1].style.opacity = 0
          currentHeight.style.top = heights[heights.length - 1].style.top
        } else {
          heights[i + 1].style.opacity = 0
          currentHeight.style.top = heights[i + 1].style.top
        }
        var currentHeightCoords = currentHeight.getBoundingClientRect()

        heightsL.forEach(function (elem) {
          elem.classList.remove('active')
          elem.querySelector('.alef-scale__item-descr').style.opacity = 1
          var heightLCoords = elem.getBoundingClientRect()

          if ((heightLCoords.top > currentHeightCoords.top && heightLCoords.top < currentHeightCoords.bottom) || (heightLCoords.bottom > currentHeightCoords.top && heightLCoords.bottom < currentHeightCoords.bottom)) {
            elem.classList.add('active')
            elem.querySelector('.alef-scale__item-descr').style.opacity = 0
          }
        })
      } else if (state.currentHeight > state.maxHeight) {
        heights[0].style.opacity = 0
        currentHeight.style.top = heights[0].style.top
      } else if (state.currentHeight <= state.minHeight) {
        heights[heights.length - 1].style.opacity = 0
        currentHeight.style.top = heights[heights.length - 1].style.top
      }
    }
  }
}

const actions = {
  addHeight: ({ commit }, value) => {
    commit('ADD_HEIGHT', value)
  },
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
  },
  maxHeight: state => {
    return state.maxHeight
  },
  minHeight: state => {
    return state.minHeight
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
