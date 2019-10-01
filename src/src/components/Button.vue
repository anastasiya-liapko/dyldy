<template>
  <button class="alef-button">
    <slot></slot>
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
  height: 40px
  padding: 0
  font-family: inherit
  font-size: 16px
  font-weight: 800
  font-style: normal
  font-stretch: normal
  line-height: 40px
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

@media (min-width: 768px)
  .alef-button
    height: 44px
    font-size: 18px
    line-height: 44px
    box-shadow: 0 4px 0 0 $color-text

@media (min-width: 990px)
  .alef-button
    height: 50px
    line-height: 52px
    box-shadow: 0 5px 0 0 $color-text
</style>
