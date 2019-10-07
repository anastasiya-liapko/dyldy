<template>
  <div class="alef-page2">
    <app-scale class="alef-page2__scale"></app-scale>
    <div class="alef-page2__content">
      <transition-group name="alef-transition-group" class="alef-transition-group" tag="div">
        <app-form v-if="flip" class="alef-transition-group__item" v-bind:key="'app-form'"></app-form>
        <app-social v-if="!flip" class="alef-transition-group__item" v-bind:key="'app-social'"></app-social>
      </transition-group>
      <div class="alef-page2__prizes">
        <h2 class="alef-page2__prizes-title">наши призы!</h2>
        <div class="alef-page2__prizes-wrapper">
          <div class="alef-page2__prize">
            <div class="alef-page2__prize-img-wrapper">
              <img class="alef-page2__prize-img" :src="cdn + '/img/prize1.png'" alt="">
            </div>
            <p class="alef-page2__prize-descr">7 дней подписки на ctc.ru</p>
          </div>

          <div class="alef-page2__prize">
            <div class="alef-page2__prize-img-wrapper">
              <img class="alef-page2__prize-img" :src="cdn + '/img/prize2.png'" alt="">
            </div>
            <p class="alef-page2__prize-descr">Футболки СТС белая и желтая</p>
          </div>

          <div class="alef-page2__prize">
            <div class="alef-page2__prize-img-wrapper">
              <img class="alef-page2__prize-img" :src="cdn + '/img/prize3.png'" alt="">
            </div>
            <p class="alef-page2__prize-descr">Толстовка желтая</p>
          </div>

          <div class="alef-page2__prize">
            <div class="alef-page2__prize-img-wrapper">
              <img class="alef-page2__prize-img" :src="cdn + '/img/prize4.png'" alt="">
            </div>
            <p class="alef-page2__prize-descr">Свитшот черный</p>
          </div>
        </div>
      </div>
      <div class="alef-page2__content-img-wrapper">
        <div class="alef-page2__content-img"></div>
        <div class="alef-page2__content-img-descr">
          <p class="alef-page2__content-img-time">19:00 пн-чт</p>
          <p class="alef-page2__contents-img-place">Смотри в эфире или на СТС.RU</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scale from '@/components/Scale.vue'
import Form from '@/components/Page2/Page2Form.vue'
import Social from '@/components/Page2/Page2Social.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'page2',
  data () {
    return {
      cdn: process.env.VUE_APP_CDN_LINK
    }
  },
  computed: {
    ...mapGetters([
      'flip'
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
      var img = document.querySelector('.alef-page2__content-img')
      if (window.innerWidth >= 768) {
        img.setAttribute('style', 'background-image: url(' + this.cdn + '/img/dyldy2-tablet.png)')
      } else if (window.innerWidth >= 990) {
        img.setAttribute('style', 'background-image: url(' + this.cdn + '/img/dyldy2-desk.png)')
      } else {
        img.setAttribute('style', 'background-image: url(' + this.cdn + '/img/dyldy2-mob.png)')
      }
    }
  },
  components: {
    'app-scale': Scale,
    'app-form': Form,
    'app-social': Social
  }
}
</script>

<style lang="sass">
@import '@/sass/_variables.sass'

.alef-page2
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  align-items: flex-start
  justify-content: flex-start
  width: 100%
  min-height: 1412px
  height: 100%
  background-image: linear-gradient(to top, $color-gradient1, $color-gradient2)

.alef-page2__scale
  min-height: 1083px
  height: 76.69%
  margin-top: 18px

.alef-page2__content
  display: flex
  flex-direction: column
  align-items: stretch
  justify-content: flex-end
  width: 71%
  min-height: 1412px
  height: 100%

.alef-page2__prizes
  display: flex
  flex-direction: column
  min-height: 574px
  margin-left: -42%
  padding-left: calc(42% + 17px)
  padding-top: 24px
  padding-bottom: 24px
  padding-right: 15px
  background-image: linear-gradient(to top, $color-gradient1, $color-gradient2)

.alef-page2__prize
  display: flex
  flex-direction: column
  align-items: flex-start
  justify-content: flex-start
  margin-bottom: 50px
  &:last-child
    margin-bottom: 0

.alef-page2__prize-img-wrapper
  margin-bottom: 4px

.alef-page2__prizes-title
  margin: 0
  margin-bottom: 32px
  font-family: inherit
  font-size: 14px
  font-weight: 800
  font-style: normal
  font-stretch: normal
  line-height: 1.43
  letter-spacing: normal
  text-transform: uppercase
  text-align: left
  color: $color-text

.alef-page2__prize-descr
  margin: 0
  font-family: inherit
  font-size: 11px
  font-weight: 500
  font-style: normal
  font-stretch: normal
  line-height: 1.36
  letter-spacing: normal
  text-align: left
  color: $color-text

.alef-page2__content-img-wrapper
  position: relative
  width: 300px
  height: 312px
  margin-top: auto

.alef-page2__content-img
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  width: 180%
  height: 100%
  margin-left: -72%
  // background-image: url('../../assets/img/dyldy2-mob.png')
  background-size: cover
  background-position: bottom
  background-repeat: no-repeat

.alef-page2__content-img-descr
  display: none

.alef-transition-group
  position: relative
  overflow: hidden

.alef-transition-group__item
  transition: height 1s, opacity 1s

.alef-transition-group-enter,
.alef-transition-group-leave-to
  height: 526px
  // opacity: 0

.alef-transition-group-leave-to
  // opacity: 0

.alef-transition-group-leave-active
  position: absolute

.alef-transition-group-enter,
.alef-transition-group-enter-active
  animation: flip-in-ver-left 0.5s 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

.alef-transition-group-leave,
.alef-transition-group-leave-active
  animation: flip-out-ver-left 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

@media (min-width: 768px)
  .alef-page2
    position: relative
    align-items: center
    min-height: auto
    background-image: linear-gradient(to right, $color-gradient1, $color-gradient2)

  .alef-page2__scale
    min-height: 543px
    height: 83.53%
    margin-top: 0

  .alef-page2__content
    width: 80.87%
    min-height: auto
    padding-right: 17.12%

  .alef-page2__prizes
    z-index: 10
    position: absolute
    top: 0
    right: 0
    width: 17.12%
    min-height: 100%
    height: 100%
    margin: 0
    padding: 0
    padding-top: 45px
    padding-left: 16px
    padding-right: 16px
    padding-bottom: 16px
    background-image: linear-gradient(to right, $color-gradient1, $color-gradient2)
    overflow-y: scroll
    scrollbar-width: none
    scrollbar-base-color: transparent
    scrollbar-face-color: transparent
    scrollbar-highlight-color: transparent
    scrollbar-3dlight-color: transparent
    scrollbar-shadow-color: transparent
    scrollbar-darkshadow-color: transparent
    scrollbar-track-color: transparent
    scrollbar-arrow-color: transparent
    -ms-scrollbar-base-color: transparent
    -ms-scrollbar-face-color: transparent
    -ms-scrollbar-highlight-color: transparent
    -ms-scrollbar-3dlight-color: transparent
    -ms-scrollbar-shadow-color: transparent
    -ms-scrollbar-darkshadow-color: transparent
    -ms-scrollbar-track-color: transparent
    -ms-scrollbar-arrow-color: transparent
    &::-webkit-scrollbar
      display: none

  .alef-page2__prize
    align-items: center
    // margin-bottom: 40px
    margin-bottom: 34px

  .alef-page2__prize-img-wrapper
    margin-bottom: 6px

  .alef-page2__prize-img
    width: 103%
    height: 103%

  .alef-page2__prizes-title
    margin-bottom: 32px
    font-size: 18px
    line-height: 1.3
    text-align: center

  .alef-page2__prize-descr
    font-size: 12px
    line-height: 1.15
    text-align: center

  .alef-page2__content-img-wrapper
    width: 374px
    height: 255px

  .alef-page2__content-img
    width: 150%
    height: 100%
    margin-left: -30%
    // background-image: url('../../assets/img/dyldy2-tablet.png')

  .alef-page2__content-img-descr
    position: absolute
    top: 96px
    right: -80px
    display: block

  .alef-page2__content-img-time
    width: 70px
    margin: 0
    margin-bottom: 6px
    font-family: inherit
    font-size: 18px
    font-weight: 800
    font-style: normal
    font-stretch: normal
    line-height: 1.22
    letter-spacing: normal
    text-transform: uppercase
    text-align: left
    color: $color-text

  .alef-page2__contents-img-place
    width: 115px
    margin: 0
    font-family: inherit
    font-size: 14px
    font-weight: 500
    font-style: normal
    font-stretch: normal
    line-height: 1.43
    letter-spacing: normal
    text-align: left
    color: $color-text

  .alef-transition-group-enter,
  .alef-transition-group-leave-to
    height: 400px

@media (min-width: 990px)
  .alef-page2__content
    width: 84.35%
    padding-right: 15.15%

  .alef-page2__prizes
    width: 15.15%
    padding-top: 42px
    padding-left: 22px
    padding-right: 22px
    padding-bottom: 22px

  .alef-page2__prize-img
    width: 108%
    height: 108%

  .alef-page2__prizes-title
    margin-bottom: 26px
    font-size: 20px

  .alef-page2__prize-descr
    font-size: 13px

  .alef-page2__content-img-wrapper
    width: 462px
    height: 250px

  .alef-page2__content-img
    width: 153%
    height: 100%
    margin-left: -28%
    // background-image: url('../../assets/img/dyldy2-desk.png')

  .alef-page2__content-img-descr
    top: 92px
    right: -147px

  .alef-page2__content-img-time
    margin-bottom: 9px
    font-size: 20px
    line-height: 1.3

  .alef-page2__contents-img-place
    width: 140px
    font-size: 16px
    line-height: 1.31

</style>
