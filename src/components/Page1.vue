<template>
  <div class="alef-page1">
    <app-scale class="alef-page1__scale"></app-scale>
    <div class="alef-page1__content">
      <div class="alef-page1__content-img-wrapper">
        <div class="alef-page1__content-img"></div>
      </div>
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
    width: 29%
    height: 95%
    border: 1px solid red

  .alef-page1__content
    flex-grow: 1
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    align-items: flex-start
    justify-content: flex-end
    width: 71%
    height: 100%
    border: 1px solid green

  .alef-page1__content-img-wrapper
    position: relative
    order: 2
    flex-shrink: 0
    width: 300px
    height: 175px

  .alef-page1__content-img
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    width: 135%
    height: 100%
    margin-left: -33%
    background-image: url('../assets/img/dyldy1-mob.png')
    background-size: cover
    background-position: bottom
    background-repeat: no-repeat

  .alef-page1__content-descr
    order: 1
    position: relative
    // flex-grow: 1
    display: flex
    flex-direction: column
    justify-content: flex-end
    align-items: flex-start
    // width: 100%
    // width: 210px
    margin-bottom: -7px
    padding-left: 15px
    padding-right: 15px
    border: 1px solid red

  .alef-page1__title
    margin: 0

  .alef-page1__subtitle
    margin: 0
    margin-top: 10px

  .alef-page1__button
    width: 180px
    height: 40px
    margin-top: 20px
    padding: 0

  .alef-page1__warning
    display: none

  @media (min-width: 768px)
    .alef-page1
      background-image: linear-gradient(to right, #ffcc08, #ff8400)

    .alef-page1__scale
      width: 19.13%
      height: 97.75%

    .alef-page1__content
      flex-direction: row
      align-items: flex-end
      justify-content: flex-start
      width: 80.87%

    .alef-page1__content-img-wrapper
      order: 1
      width: 374px
      height: 400px

    .alef-page1__content-img
      width: 135%
      height: 100%
      margin-left: -26%
      background-image: url('../assets/img/dyldy1-tablet.png')

    .alef-page1__content-descr
      order: 2
      height: 100%

    .alef-page1__button
      width: 190px
      height: 44px

    .alef-page1__warning
      display: block

  @media (min-width: 990px)
    .alef-page1__scale
      width: 15.65%
      height: 96.26%

    .alef-page1__content-img-wrapper
      width: 467px
      height: 400px

    .alef-page1__content-img
      width: 135%
      height: 100%
      margin-left: -20%
      background-image: url('../assets/img/dyldy1-desk.png')

    .alef-page1__content-descr
      height: 82%
      margin-left: -56px

    .alef-page1__button
      width: 210px
      height: 50px

</style>
