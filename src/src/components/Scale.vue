<template>
  <div class="alef-scale">
    <div class="alef-scale__content">
      <div
        v-for="(elemM, iM) in segmentsQuantityM"
        v-bind:key="elemM">
        <span
          class="alef-scale__item alef-scale__item_size_m"
          :class="{'alef-scale__item_size_l': getHeightPosition(iM, segmentsQuantityM) === 0 || getHeightPosition(iM, segmentsQuantityM) === 50}"
          :style="'top: ' + getHeightPosition(iM, segmentsQuantityM) + '%'"
          :data-value="getHeightValue(iM, segmentsQuantityM)">
          <span class="alef-scale__item-inner"></span>
          <span
            v-if="getHeightPosition(iM, segmentsQuantityM) === 0"
            class="alef-scale__item-descr">
            {{ getHeightValue(iM, segmentsQuantityM) | number}}
          </span>
          <span
            v-if="getHeightPosition(iM, segmentsQuantityM) === 50"
            class="alef-scale__item-descr">
            {{ getHeightValue(iM, segmentsQuantityM) | number}}
          </span>
          <span
            v-else
            class="alef-scale__item-descr"></span>
        </span>
        <span
          v-for="elemS in segmentsQuantity - 1"
          v-bind:key="elemS * elemM"
          class="alef-scale__item alef-scale__item_size_s"
          :style="'top: ' + (elemS * 10 / segmentsQuantity + getHeightPosition(iM, segmentsQuantityM)) + '%'"
          :data-value="1000000 - (elemS * 10 / segmentsQuantity + getHeightPosition(iM, segmentsQuantityM)) * 10000">
          <span class="alef-scale__item-inner"></span>
          <span class="alef-scale__item-descr"></span>
        </span>
      </div>
      <span
        class="alef-scale__item alef-scale__item_size_m alef-scale__item_size_l"
        style="top: 100%"
        data-value="0">
        <span class="alef-scale__item-inner"></span>
        <span class="alef-scale__item-descr">0</span>
      </span>
      <span
        class="alef-scale__item alef-scale__item_type_current alef-scale__item_size_l"
        style="top: 100%">
        <span class="alef-scale__item-inner"></span>
        <span class="alef-scale__item-descr">{{ currentHeight | number }} см</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Scale',
  data () {
    return {
      segmentsQuantityM: 10,
      max: 1000000,
      min: 10000,
      percents: 100
    }
  },
  computed: {
    ...mapGetters([
      'segmentsQuantity',
      'currentHeight'
    ])
  },
  filters: {
    number: function (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
  },
  mounted () {
    this.setCurrentHeightOnScale()
  },
  methods: {
    ...mapActions([
      'setCurrentHeightOnScale'
    ]),
    getHeightValue (i, quantity) {
      return this.max - i * this.percents / quantity * this.min
    },
    getHeightPosition (i, quantity) {
      return i * this.percents / quantity
    }
  }
  // watch: {
  //   currentHeight: function () {
  //     this.setCurrentHeightOnScale()
  //   }
  // }
}
</script>

<style lang="sass">
@import '@/sass/_variables.sass'

.alef-scale
  z-index: 5
  flex-shrink: 0
  display: flex
  align-items: stretch
  width: 29.5%
  border: 1px solid red

.alef-scale__content
  position: relative
  flex-grow: 1

.alef-scale__item
  position: absolute
  left: 0
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  align-items: center
  justify-content: flex-start
  margin-top: -1.5px
  transition: top 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both

.alef-scale__item-inner
  width: 10px
  height: 3px
  // margin-top: -1.5px
  margin-right: 0px
  background-color: $color-scale

.alef-scale__item_size_s
  .alef-scale__item-inner
    width: 10px

.alef-scale__item_size_m
  .alef-scale__item-inner
    width: 20px

.alef-scale__item_size_l
  margin-top: -9px
  .alef-scale__item-inner
    width: 30px
  .alef-scale__item-descr
    padding: 4px
    font-family: inherit
    font-size: 10px
    font-weight: 800
    font-style: normal
    font-stretch: normal
    line-height: 1
    letter-spacing: normal
    color: $color-scale
    white-space: nowrap

.alef-scale__item_type_current
  .alef-scale__item-descr
    color: #ffffff
    background-color: $color-scale
    border-radius: 4px

@media (min-width: 768px)
  .alef-scale
    width: 19.13%

  .alef-scale__item_size_s
    .alef-scale__item-inner
      width: 30px

  .alef-scale__item_size_m
    .alef-scale__item-inner
      width: 40px

  .alef-scale__item_size_l
    margin-top: -15px
    .alef-scale__item-inner
      width: 50px
    .alef-scale__item-descr
      padding: 6px
      font-size: 18px

@media (min-width: 990px)
  .alef-scale
    width: 15.65%

  .alef-scale__item_size_l
    .alef-scale__item-descr
      padding: 5px
      font-size: 20px

</style>
