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
  font-family: inherit
  font-size: 16px
  font-weight: 800
  font-style: normal
  font-stretch: normal
  line-height: 1
  letter-spacing: normal
  text-align: center
  text-transform: uppercase
  color: $color-text
  background-color: $color-button
  border: none
  border-radius: 8px
  transition: background-color 0.3s linear
  &:hover
    background-color: $color-button-hover
    cursor: pointer

@media (min-width: 768px)
  .alef-button
    font-size: 18px
</style>
