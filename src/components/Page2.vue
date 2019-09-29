<template>
  <div class="alef-page2">
    <app-scale class="alef-page2__scale"></app-scale>
    <app-button class="alef-page2__button" @click.native="changeActivePage(3)">участвовать</app-button>
  </div>
</template>

<script>
import Scale from '@/components/Scale.vue'
import Button from '@/components/Button.vue'
import { mapActions } from 'vuex'

export default {
  name: 'page2',
  methods: {
    ...mapActions([
      'changeActivePage'
    ])
  },
  components: {
    'app-scale': Scale,
    'app-button': Button
  }
}
</script>

<style lang="sass">
  .alef-page2
    display: flex
    width: 100%
    height: 100%
    background-image: linear-gradient(to top, #ffcc08, #ff8400)
</style>
