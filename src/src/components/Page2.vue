<template>
  <div class="alef-page2">
    <app-scale class="alef-page2__scale"></app-scale>
    <div class="alef-page2__content">
      <form class="alef-page2__form">
        <h1 class="alef-title alef-page2__title">
          Помоги набрать
          <br>
          <span class="alef-page2__goal">1 000 000 см</span>
           роста!
        </h1>
        <div class="alef-text alef-page2__subtitle">
          <p>Мы понимаем, как тяжело высоким девушкам, и хотим порадовать вас!</p>
          Заполни анкету, внеси вклад в ростовую линейку и участвуй в нашем конкурсе!
        </div>
        <div class="alef-page2__form-input-wrapper">
          <input class="alef-page2__form-input" v-model="data.height" type="text" placeholder="Рост в см">
          <input class="alef-page2__form-input" v-model="data.name" type="text" placeholder="имя">
          <input class="alef-page2__form-input" v-model="data.email" type="text" placeholder="email">
          <input class="alef-page2__form-input" v-model="data.city" type="text" placeholder="город">
        </div>
        <div class="alef-page2__button-wrapper">
          <app-button
            class="alef-page2__button"
            @click.native="changeActivePage(3)"
            type="submit">
            участвовать
          </app-button>
          <p class="alef-page2__privacy">
            Отправляя анкету ты соглашаешься с
            <a href="#" class="alef-page2__privacy-link">правилами конкурса</a>
          </p>
        </div>
      </form>
      <div class="alef-page2__prizes">
        <social-sharing
          :url="domen"
          title="personal title"
          description="personal description"
          inline-template>
        <div>
          <network network="facebook">
            <i class="fa fa-facebook"></i> Facebook
          </network>
          <network network="vk">
            <i class="fa fa-vk"></i> VK
          </network>
          <network network="odnoklassniki">
            <i class="fa fa-odnoklassniki"></i> odnoklassniki
          </network>
        </div>
      </social-sharing>
      </div>
      <div class="alef-page2__content-img-wrapper">
        <div class="alef-page2__content-img"></div>
      </div>
    <!-- <app-button class="alef-page2__button" @click.native="changeActivePage(3)">участвовать</app-button>
    <input v-model="value" type="number"> -->
    </div>
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
      data: {
        height: '',
        name: '',
        email: '',
        city: ''
      }
    }
  },
  computed: {
    domen () {
      return location.origin
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
  background-image: linear-gradient(to top, #ffcc08, #ff8400)

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
  height: 100%
  border: 1px solid green

.alef-page2__form
  min-height: 526px
  padding-top: 35px
  padding-left: 14px
  padding-right: 16px
  border: 1px solid red

.alef-page2__title
  margin: 0
  margin-bottom: 11px

.alef-page2__subtitle
  margin: 0
  margin-bottom: 20px
  p
    margin: 0

.alef-page2__goal
  white-space: nowrap

.alef-page2__form-input-wrapper
  display: flex
  flex-direction: column

.alef-page2__form-input
  width: 100%
  height: 40px
  margin-bottom: 8px
  padding: 0
  padding-left: 15px
  padding-right: 15px
  font-family: inherit
  font-size: 12px
  font-weight: 800
  font-style: normal
  font-stretch: normal
  line-height: 12px
  letter-spacing: normal
  text-transform: uppercase
  color: #ffffff
  background-color: $color-scale
  border: none
  border-radius: 0
  border-radius: 4px
  box-sizing: border-box
  -webkit-appearance: none
  &::placeholder,
  &::-webkit-input-placeholder
    font-family: inherit
    font-size: 12px
    font-weight: 800
    font-style: normal
    font-stretch: normal
    line-height: normal
    letter-spacing: normal
    text-transform: uppercase
    color: #ffffff
    opacity: 1
    transition: color 0.3s linear
  &::-moz-placeholder,
  &:-moz-placeholder,
  &:-ms-input-placeholder
    font-family: inherit
    font-size: 12px
    font-weight: 800
    font-style: normal
    font-stretch: normal
    line-height: normal
    letter-spacing: normal
    text-transform: uppercase
    color: #ffffff
    opacity: 1
    transition: color 0.3s linear
  &:focus::placeholder,
  &:focus::-webkit-input-placeholder
    color: rgba(255, 255, 255, 0.3)
    border: none
  &:focus::-moz-placeholder,
  &:focus:-moz-placeholder,
  &:focus:-ms-input-placeholder
    color: rgba(255, 255, 255, 0.3)
    border: none

.alef-page2__button-wrapper
  display: flex
  flex-direction: column

.alef-page2__button
  width: 100%
  margin-top: 10px
  margin-bottom: 12px

.alef-page2__privacy,
.alef-page2__privacy-link
  margin: 0
  font-family: inherit
  font-size: 10px
  font-weight: normal
  font-style: normal
  font-stretch: normal
  line-height: 1.4
  letter-spacing: normal
  text-align: left
  color: $color-text

.alef-page2__privacy-link
  text-decoration: underline
  &:hover
    color: $color-text
    cursor: pointer

.alef-page2__prizes
  display: flex
  flex-direction: column
  min-height: 574px
  margin-left: -42%
  padding-left: calc(42% + 20px)
  background-image: linear-gradient(to top, #ffcc08, #ff8400)
  // border: 1px solid red

.alef-page2__content-img-wrapper
  position: relative
  width: 300px
  height: 312px

.alef-page2__content-img
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  width: 180%
  height: 100%
  margin-left: -72%
  background-image: url('../assets/img/dyldy2-mob.png')
  background-size: cover
  background-position: bottom
  background-repeat: no-repeat

@media (min-width: 768px)
  .alef-page2
    position: relative
    align-items: center
    min-height: auto

  .alef-page2__scale
    min-height: 543px
    height: 83.53%
    margin-top: 0

  .alef-page2__content
    width: 80.87%
    padding-right: 17.12%
    border: 1px solid green

  .alef-page2__form
    flex-shrink: 0
    // width: 63.75%
    min-height: 400px
    height: 400px
    margin: 0
    padding-top: 40px
    padding-left: 50px
    padding-right: 28px

  .alef-page2__title
    margin-bottom: 6px

  .alef-page2__subtitle
    margin-bottom: 18px
    p
      display: inline

  .alef-page2__form-input-wrapper
    flex-direction: row
    flex-wrap: wrap
    align-items: flex-start
    justify-content: flex-start
    margin-bottom: 5px

  .alef-page2__form-input
    // width: 190px
    width: 47.4%
    height: 44px
    margin-right: 10px
    font-size: 14px
    line-height: 14px
    border-radius: 8px
    // &:nth-child(2n+1)
    //   margin-right: 10px
    &::placeholder,
    &::-webkit-input-placeholder
      font-size: 14px
    &::-moz-placeholder,
    &:-moz-placeholder,
    &:-ms-input-placeholder
      font-size: 14px

  .alef-page2__button-wrapper
    flex-direction: row
    flex-wrap: nowrap
    align-items: center
    justify-content: flex-start

  .alef-page2__button
    flex-shrink: 0
    width: 47.4%
    margin-right: 13px

  .alef-page2__privacy,
  .alef-page2__privacy-link
    font-size: 11px
    line-height: 1.18

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
    background-image: linear-gradient(to right, #ffcc08, #ff8400)

  .alef-page2__content-img-wrapper
    width: 374px
    height: 255px
    border: 1px solid red

  .alef-page2__content-img
    width: 150%
    height: 100%
    margin-left: -30%
    background-image: url('../assets/img/dyldy2-tablet.png')

@media (min-width: 990px)
  .alef-page2__content
    width: 84.35%
    padding-right: 15.15%

  .alef-page2__form
    padding-left: 85px
    padding-right: 73px

  .alef-page2__title
    margin-bottom: 12px

  .alef-page2__subtitle
    margin-bottom: 22px

  .alef-page2__form-input-wrapper
    margin-bottom: 0

  .alef-page2__form-input
    width: 47.4%
    height: 50px
    margin-bottom: 10px
    padding-left: 20px
    padding-right: 20px

  .alef-page2__button
    margin-right: 11px

  .alef-page2__privacy,
  .alef-page2__privacy-link
    font-size: 13px
    line-height: 1.23

  .alef-page2__prizes
    width: 15.15%

  .alef-page2__content-img-wrapper
    width: 462px
    height: 250px

  .alef-page2__content-img
    width: 153%
    height: 100%
    margin-left: -28%
    background-image: url('../assets/img/dyldy2-desk.png')

</style>
