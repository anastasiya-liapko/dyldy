<template>
  <div class="alef-page1">
    <app-scale class="alef-page1__scale"></app-scale>
    <div class="alef-page1__content">
      <div class="alef-page1__content-img"></div>
      <div class="alef-page1__content-descr">
        <h1 class="alef-title alef-page1__title">давайте станем выше вместе!</h1>
        <p class="alef-text alef-page1__subtitle">И не будем этого стесняться. Введи свои параметры роста и участвуй в розыгрыше призов.</p>
        <app-button class="alef-page1__button" @click.native="changeActivePage(2)">хочу призов</app-button>
        <p class="alef-text alef-text alef-page1__warning">
          <span class="alef-text_warning">ОСТОРОЖНО!</span>
          Только для девушек!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Scale from '@/components/Scale.vue'
import Button from '@/components/Button.vue'
import { mapActions } from 'vuex'

export default {
  name: 'page1',
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
  .alef-page1
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    align-items: center
    justify-content: flex-start
    width: 100%
    height: 100%
    background-image: linear-gradient(to top, #ffcc08, #ff8400)

  .alef-page1__scale
    flex-shrink: 0
    width: 15.65%
    height: 96.26%
    border: 1px solid red

  .alef-page1__content
    flex-grow: 1
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    align-items: flex-start
    justify-content: flex-end
    height: 100%
    border: 1px solid red

  .alef-page1__content-img
    position: relative
    order: 2
    flex-shrink: 0
    // width: 76.14%
    // height: 100%
    // margin-left: -11.51%
    // background-image: url('../assets/img/dyldy1-mob.png')
    // background-size: cover
    // background-position: bottom
    // background-repeat: no-repeat
    // background-image: url('../assets/img/dyldy.png')
    // background-size: 152% 125%
    // background-position-y: 27%
    // background-position-x: 56%
    // background-repeat: no-repeat
    width: 242px
    height: 175px
    margin-left: 0
    background-image: url('../assets/img/dyldy1-tablet.png')
    background-size: cover
    background-position: bottom
    background-repeat: no-repeat
    // border: 1px solid red

  .alef-page1__content-descr
    order: 1
    z-index: 5
    position: relative
    flex-grow: 1
    display: flex
    flex-direction: column
    justify-content: flex-end
    align-items: flex-start
    border: 1px solid green

  .alef-page1__button
    width: 180px
    height: 40px

  .alef-page1__warning
    display: none

  @media (min-width: 768px)
    .alef-page1
      background-image: linear-gradient(to right, #ffcc08, #ff8400)

    .alef-page1__content
      flex-direction: row
      align-items: center
      justify-content: flex-start

    .alef-page1__content-img
      position: relative
      order: 1
      flex-shrink: 0
      // width: 76.14%
      // height: 100%
      // margin-left: -10.4%
      width: 494px
      height: 100%
      margin-left: -68px
      background-image: url('../assets/img/dyldy1-tablet.png')
      background-size: cover
      background-position: bottom
      background-repeat: no-repeat

    .alef-page1__content-descr
      order: 2
      height: 100%

    .alef-page1__button
      width: 190px
      height: 44px

    .alef-page1__warning
      display: block

  @media (min-width: 990px)
    .alef-page1__content-img
      position: relative
      flex-shrink: 0
      // width: 76.14%
      // height: 100%
      // margin-left: -11.51%
      width: 627px
      margin-left: -95px
      background-image: url('../assets/img/dyldy1-desk.png')
      background-size: cover
      background-position: bottom
      background-repeat: no-repeat

    .alef-page1__content-descr
      height: 82%
      margin-left: -56px

    .alef-page1__button
      width: 210px
      height: 50px

</style>
