<template>
  <div class="alef-page4">
    <app-scale class="alef-page4__scale"></app-scale>
    <div class="alef-page4__content">
      <div class="alef-page4__descr">
        <div class="alef-page4__main">
          <h1 class="alef-title alef-page4__title">Ура! теперь<br> ты участвуешь в конкурсе</h1>
          <p class="alef-text alef-page4__text">Как только общий рост всех участниц достигнет <span class="alef-page4__text-goal">1 000 000 см</span>, мы откроем розыгрыш призов!</p>
          <h2 class="alef-title_size_s alef-page4__title_size_s">твой номер в команде:</h2>
          <div class="alef-page4__id">{{ participantId }}</div>
        </div>
        <div class="alef-page4__footer">
          <h2 class="alef-title_size_s alef-page4__title_size_s">ДЫЛДЫ<br> 19:00 пн-чт</h2>
          <p class="alef-text alef-page4__text_size_s">Смотри в эфире<br> или на СТС.RU</p>
        </div>
      </div>
      <div class="alef-page4__content-img-wrapper">
        <div class="alef-page4__content-img"></div>
        <div
          class="alef-page4__content-img-number"
          :class="{'alef-page4__content-img-number_size_s': participantId.toString().length > 2}">
          {{ participantId }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scale from '@/components/Scale.vue'

export default {
  data () {
    return {
      participantId: 1588
    }
  },
  components: {
    'app-scale': Scale
  }
}
</script>

<style lang="sass">
@import '@/sass/_variables.sass'

.alef-page4
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  align-items: center
  justify-content: flex-start
  width: 100%
  min-height: 579px
  height: 100%
  background-image: linear-gradient(to top, $color-gradient1, $color-gradient2)

.alef-page4__scale
  min-height: 543px
  height: 93.78%

.alef-page4__content
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  align-items: flex-start
  justify-content: flex-end
  width: 71%
  min-height: 579px
  padding-left: 16px

.alef-page4__main
  padding-right: 20px

.alef-page4__descr
  z-index: 1
  margin-bottom: auto
  padding-top: 25px

.alef-page4__title
  padding-right: 30px

.alef-page4__title_size_s
  margin-bottom: 5px
  padding-right: 80px

.alef-page4__text-goal
  white-space: nowrap

.alef-page4__id
  width: 42px
  height: 40px
  font-family: inherit
  font-size: 12px
  font-weight: 800
  font-style: normal
  font-stretch: normal
  line-height: 40px
  letter-spacing: normal
  color: #ffffff
  background-color: $color-scale
  border-radius: 4px

.alef-page4__content-img-wrapper
  position: relative
  flex-shrink: 0
  width: 247px
  height: 196px
  margin-top: -40px
  // margin-top: auto
  // &::before
  //   content: ''
  //   position: absolute
  //   top: 0
  //   left: 0
  //   right: 0
  //   bottom: 0
  //   opacity: 0.6
  //   -webkit-filter: blur(28.7px)
  //   filter: blur(28.7px)
  //   background-color: #ffffff

.alef-page4__content-img
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  width: 147%
  height: 100%
  margin-left: -30%
  background-image: url('../assets/img/dyldy4-mob.png')
  background-size: cover
  background-position: bottom
  background-repeat: no-repeat

.alef-page4__footer
  margin-top: 20px
  padding-top: 17px
  border-top: 1px solid rgba(19, 20, 21, 0.2)
  .alef-page4__title_size_s
    margin: 0
    margin-bottom: 5px
  .alef-page4__text_size_s
    margin: 0

.alef-page4__content-img-number
  position: absolute
  top: 88%
  left: 32%
  width: 100px
  height: 50px
  margin-left: -50px
  margin-top: -25px
  font-family: inherit
  font-size: 50.6px
  font-weight: 800
  font-style: normal
  font-stretch: normal
  line-height: 50px
  letter-spacing: normal
  text-align: center
  color: #ffffff

.alef-page4__content-img-number_size_s
  font-size: calc(50.6px / 1.8)

@media(min-width: 768px)
  .alef-page4
    min-height: auto
    background-image: linear-gradient(to right, $color-gradient1, $color-gradient2)

  .alef-page4__scale
    height: 83.53%

  .alef-page4__content
    flex-direction: row
    justify-content: flex-start
    width: 80.87%

  .alef-page4__descr
    order: 2
    margin: 0
    margin-left: -150px
    padding-top: 115px

  .alef-page4__title
    margin: 0
    padding: 0

  .alef-page4__text
    padding-right: 20px

  .alef-page4__title_size_s
    margin-top: 32px
    margin-bottom: 10px
    padding: 0

  .alef-page4__id
    width: 62px
    height: 40px
    font-size: 18px
    line-height: 40px
    border-radius: 8px

  .alef-page4__footer
    margin-top: 103px
    padding-top: 25px

  .alef-page4__content-img-wrapper
    order: 1
    width: 466px
    height: 643px
    margin-top: 0

  .alef-page4__content-img
    width: 130%
    height: 100%
    margin-left: -33%
    background-image: url('../assets/img/dyldy4-tablet.png')

  .alef-page4__content-img-number
    top: 46%
    left: 21%
    width: 140px
    height: 90px
    margin-left: -70px
    margin-top: -45px
    font-size: 88.7px
    line-height: 90px

  .alef-page4__content-img-number_size_s
    font-size: calc(88.7px / 1.8)

@media(min-width: 990px)
  .alef-page4__descr
    margin: 0
    margin-left: -96px
    padding-top: 130px

  .alef-page4__title
    padding-right: 20px

  .alef-page4__title_size_s
    margin-top: 25px

  .alef-page4__text
    margin-top: 7px
    padding: 0

  .alef-page4__id
    width: 72px
    height: 50px
    line-height: 50px

  .alef-page4__footer
    width: 300px
    margin-top: 75px

  .alef-page4__content-img-wrapper
    width: 553px
    height: 650px

  .alef-page4__content-img
    width: 133%
    height: 100%
    margin-left: -22%
    background-image: url('../assets/img/dyldy4-desk.png')

  .alef-page4__content-img-number
    top: 53%
    left: 35%
    width: 180px
    height: 106px
    margin-left: -90px
    margin-top: -53px
    font-size: 105.6px
    line-height: 106px

  .alef-page4__content-img-number_size_s
    font-size: calc(105.6px / 1.8)

</style>
