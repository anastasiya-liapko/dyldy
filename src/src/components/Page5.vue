<template>
  <div class="alef-page5">
    <div class="alef-page5__content">
      <div class="alef-page5__scale">
        <div
          v-for="(elemM, iM) in q1"
          v-bind:key="elemM">
          <div
            class="alef-page5__scale-item alef-page5__scale-item_size_m"
            :class="{'alef-page5__scale-item_size_l': iM === 2 || iM === 7 }"
            :style="'top: ' + iM * 100 / q1 + '%'">
            <span class="alef-page5__scale-item-inner"></span>
            <div
              v-if="iM === 2"
              class="alef-page5__scale-item-descr">
              <p class="alef-page5__title alef-page5__title_position_1">мы набрали</p>
              <p class="alef-page5__goal">{{ currentHeight }} <span class="alef-page5__goal-sm">см</span></p>
              <p class="alef-page5__title alef-page5__title_position_2">
                благодаря
                <span class="alef-page5__total-participants">{{ participantId }}</span>
                 участницам!
              </p>
              <p class="alef-page5__subtitle">Регистрация закрыта</p>
            </div>
          </div>
          <div
            v-for="elemS in q2 - 1"
            v-bind:key="elemS * elemM"
            class="alef-page5__scale-item alef-page5__scale-item_size_s"
            :style="'top: ' + (elemS * 9 / q2 + iM * 100 / q1) + '%'">
            <span class="alef-page5__scale-item-inner"></span>
          </div>
        </div>
      </div>
      <div class="alef-page5__img"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      q1: 11,
      q2: 4,
      cdn: process.env.VUE_APP_CDN_LINK
    }
  },
  computed: {
    ...mapGetters([
      'currentHeight',
      'participantId'
    ])
  },
  mounted () {
    this.setBackImage()
    window.addEventListener('resize', this.setBackImage)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setBackImage)
  },
  methods: {
    setBackImage () {
      var img = document.querySelector('.alef-page5__img')
      if (window.innerWidth >= 990) {
        img.setAttribute('style', 'background-image: url(' + this.cdn + '/img/dyldy5-desk.png)')
      } else if (window.innerWidth >= 768) {
        img.setAttribute('style', 'background-image: url(' + this.cdn + '/img/dyldy5-tablet.png)')
      } else {
        img.setAttribute('style', 'background-image: url(' + this.cdn + '/img/dyldy5-mob.png)')
      }
    }
  }
}
</script>

<style lang="sass">
@import '@/sass/_variables.sass'

.alef-page5
  position: relative
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  align-items: flex-start
  justify-content: flex-start
  width: 100%
  height: 100%
  background-image: linear-gradient(to top, $color-gradient1, $color-gradient2)

.alef-page5__content
  width: 100%
  height: 100%
  overflow: hidden

.alef-page5__scale
  z-index: 1
  position: relative
  width: 100%
  height: 98.75%
  margin-top: 5px

.alef-page5__scale-item
  position: absolute
  left: 0
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  align-items: center
  justify-content: flex-start
  height: 3px

.alef-page5__scale-item-inner
  width: 20px
  height: 3px
  background-color: $color-scale

.alef-page5__scale-item_size_m
  .alef-page5__scale-item-inner
    width: 30px

.alef-page5__scale-item_size_l
  .alef-page5__scale-item-inner
    width: 50px

.alef-page5__scale-item-descr
  position: relative
  width: 220px

.alef-page5__title
  position: absolute
  left: 15px
  margin: 0
  font-family: inherit
  font-size: 20px
  font-weight: 800
  font-style: normal
  font-stretch: normal
  line-height: 1.15
  letter-spacing: normal
  text-transform: uppercase
  text-align: left
  color: $color-text

.alef-page5__title_position_1
  top: -25px

.alef-page5__title_position_2
  top: 51px

.alef-page5__goal
  width: 168px
  height: 40px
  margin: 0
  font-family: inherit
  font-size: 24px
  font-weight: 800
  font-style: normal
  font-stretch: normal
  line-height: 40px
  letter-spacing: normal
  color: #ffffff
  background-color: $color-scale
  border-radius: 4px

.alef-page5__goal-sm
  font-size: 12px
  text-transform: uppercase

.alef-page5__subtitle
  position: absolute
  top: 112px
  left: 15px
  margin: 0
  font-family: inherit
  font-size: 13px
  font-weight: 500
  font-style: normal
  font-stretch: normal
  line-height: 1.62
  letter-spacing: normal
  text-align: left
  color: $color-scale

.alef-page5__img
  position: absolute
  bottom: 0
  left: 0
  width: 300px
  height: 301px
  // background-image: url('../assets/img/dyldy5-mob.png')
  background-size: cover
  background-position: bottom
  background-repeat: no-repeat

@media (min-width: 768px)
  .alef-page5
    background-image: linear-gradient(to right, $color-gradient1, $color-gradient2)

  .alef-page5__scale
    // height: 250%
    // margin-top: -4.3%
    height: 1000px
    margin-top: -28.5px

  .alef-page5__scale-item-inner
    width: 20px
    height: 9px

  .alef-page5__scale-item_size_m
    .alef-page5__scale-item-inner
      width: 50px

  .alef-page5__scale-item_size_l
    .alef-page5__scale-item-inner
      width: 70px

  .alef-page5__scale-item-descr
    width: 265px

  .alef-page5__title
    left: 20px
    font-size: 27px
    line-height: 1.3

  .alef-page5__title_position_1
    top: -42px

  .alef-page5__title_position_2
    top: 82px

  .alef-page5__goal
    width: 266px
    height: 70px
    font-size: 40px
    line-height: 70px
    border-radius: 12px

  .alef-page5__goal-sm
    font-size: 18px

  .alef-page5__subtitle
    top: 200px
    left: 20px
    font-size: 16px
    line-height: 1.31

  .alef-page5__img
    left: auto
    right: 0
    width: 564px
    height: 400px
    // background-image: url('../assets/img/dyldy5-tablet.png')

@media (min-width: 990px)
  .alef-page5__scale-item-inner
    width: 40px

  .alef-page5__scale-item_size_m
    .alef-page5__scale-item-inner
      width: 70px

  .alef-page5__scale-item_size_l
    .alef-page5__scale-item-inner
      width: 100px

  .alef-page5__scale-item-descr
    width: 450px

  .alef-page5__title
    left: 25px
    font-size: 33px
    line-height: 1.24

  .alef-page5__title_position_1
    top: -47px

  .alef-page5__title_position_2
    top: 105px

  .alef-page5__goal
    width: 386px
    height: 90px
    font-size: 60px
    line-height: 90px

  .alef-page5__goal-sm
    font-size: 24px

  .alef-page5__subtitle
    top: 220px
    left: 25px

  .alef-page5__img
    width: 689px
    height: 400px
    // background-image: url('../assets/img/dyldy5-desk.png')
</style>
