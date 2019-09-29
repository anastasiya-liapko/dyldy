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
  .alef-button
    border: 1px solid red
</style>
