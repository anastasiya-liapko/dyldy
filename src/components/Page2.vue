<template>
  <div class="alef-page2">
    <app-scale class="alef-page2__scale"></app-scale>
    <app-button class="alef-page2__button" @click.native="changeActivePage(3)">участвовать</app-button>
    <input v-model="value" type="number">
  </div>
</template>

<script>
import Scale from '@/components/Scale.vue'
import Button from '@/components/Button.vue'
import { mapActions } from 'vuex'

export default {
  name: 'page2',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    ...mapActions([
      'setCurrentHeight',
      'changeActivePage'
    ])
  },
  components: {
    'app-scale': Scale,
    'app-button': Button
  },
  watch: {
    value: function () {
      this.setCurrentHeight(this.value)
    }
  }
}
</script>

<style lang="sass">
.alef-page2
  display: flex
  // flex-direction: row
  // flex-wrap: nowrap
  // align-items: flex-start
  // justify-content: flex-start
  width: 100%
  height: 100%
  background-image: linear-gradient(to top, #ffcc08, #ff8400)

.alef-page2__scale
  width: 29.5%
  min-height: 1083px
  height: 76.69%

@media (min-width: 768px)
  .alef-page2__scale
    width: 19.13%
    min-height: 543px
    height: 83.53%

@media (min-width: 990px)
  .alef-page2__scale
    width: 15.65%
</style>
