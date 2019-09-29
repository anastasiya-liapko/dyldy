<template>
  <div id="alef-app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      frameSelector: process.env.VUE_APP_FRAME_SELECTOR,
      debounceInterval: 0,
      lastTimeout: ''
    }
  },
  created () {
    this.setFrameHeight()
    window.addEventListener('resize', this.debounce)
    document.querySelector(this.frameSelector).style.transition = 'height 0s 0.3s linear'
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.debounce)
  },
  methods: {
    ...mapActions([
      'setFrameHeight'
    ]),
    debounce () {
      var self = this
      if (this.lastTimeout !== '') {
        clearTimeout(this.lastTimeout)
      }
      this.lastTimeout = setTimeout(function () {
        self.setFrameHeight()
      }, this.debounceInterval)
    }
  }
}
</script>

<style lang="sass">
@import '@/sass/_fonts.sass'
@import '@/sass/_variables.sass'

html
  height: 100%

body
  margin: 0

#alef-app
  width: 100%
  height: 100%
  margin-left: auto
  margin-right: auto
  font-family: 'CTC_Sans'
  font-style: normal
  font-weight: 500
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $color-text
  box-sizing: border-box
  div
    box-sizing: border-box

.alef-title
  font-size: 16px
  font-weight: 800
  font-style: normal
  line-height: 1.31
  letter-spacing: normal
  text-transform: uppercase
  text-align: left
  color: $color-text

.alef-text
  font-size: 13px
  font-weight: 500
  font-style: normal
  font-stretch: normal
  line-height: 1.38
  letter-spacing: normal
  color: $color-text

.alef-text_warning
  font-weight: 800

.fade-in-enter,
.fade-in-enter-active
  animation: fade-in 1s 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both

.fade-in-leave,
.fade-in-leave-active
  animation: fade-out 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both

@keyframes fade-in
  0%
    opacity: 0
  100%
    opacity: 1

@keyframes fade-out
  0%
    opacity: 1
  100%
    opacity: 0

@media (min-width: 768px)
  .alef-title
    font-size: 28px
    line-height: 1.29

  .alef-text
    font-size: 14px
    line-height: 1.43

@media (min-width: 990px)
  .alef-title
    font-size: 32px
    line-height: 1.19

  .alef-text
    font-size: 16px
    line-height: 1.31

</style>
