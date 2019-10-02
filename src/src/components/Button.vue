<template>
  <button class="alef-button">
    <span><slot></slot></span>
    <div class="alef-button__preloader-wrapper">
      <div class="alef-button__preloader"></div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="sass">
@import '@/sass/_variables.sass'

.alef-button
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  align-items: center
  justify-content: center
  height: 40px
  padding: 0
  font-family: inherit
  font-size: 16px
  font-weight: 800
  font-style: normal
  font-stretch: normal
  line-height: 44px
  letter-spacing: normal
  text-align: center
  text-transform: uppercase
  color: $color-text
  background-color: $color-button
  border: none
  border-radius: 8px
  box-shadow: 0 3px 0 0 $color-text
  transition: background-color 0.3s linear
  &:hover
    background-color: $color-button-hover
    cursor: pointer
  &:focus
    outline: none
  &.active
    .alef-button__preloader-wrapper
      width: 22px
    .alef-button__preloader
      opacity: 1

.alef-button__preloader-wrapper
  width: 0px
  margin-bottom: 2px
  transition: width 0.3s linear

.alef-button__preloader
  position: relative
  width: 14px
  height: 14px
  margin-left: 45%
  background-image: conic-gradient(#ffffff 0%, #000000 100%, #ffffff 0%)
  opacity: 0
  border-radius: 50%
  transition: opacity 0.15s linear
  animation: preloader 1s linear infinite
  box-sizing: border-box
  &::after
    content: ''
    position: absolute
    top: 3px
    left: 3px
    right: 3px
    bottom: 3px
    background-color: #ffffff
    border-radius: 50%

@keyframes preloader
  0%
    transform: rotate(0)
  100%
    transform: rotate(360deg)

@media (min-width: 768px)
  .alef-button
    height: 44px
    font-size: 18px
    line-height: 48px
    box-shadow: 0 4px 0 0 $color-text

@media (min-width: 990px)
  .alef-button
    height: 50px
    line-height: 54px
    box-shadow: 0 5px 0 0 $color-text
</style>
