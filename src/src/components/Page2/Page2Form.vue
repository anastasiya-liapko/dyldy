<template>
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
      <div class="alef-page2__form-input-field">
        <input
          class="alef-page2__form-input"
          :class="{invalid: $v.data.height.$error}"
          v-model="data.height"
          type="text"
          name="height"
          placeholder="Рост в см"
          @blur="$v.data.height.$touch()">
        <p class="alef-page2__error-text"
          v-if="!$v.data.height.between && $v.data.height.numeric && $v.data.height.$dirty">
          <span class="alef-page2__error-text-descr">укажите рост</span>
          <span class="alef-page2__error-text-descr">от 140 до 205 см</span>
        </p>
        <p class="alef-page2__error-text"
          v-if="!$v.data.height.numeric && $v.data.height.$dirty">
          <span class="alef-page2__error-text-descr">укажите рост цифрами</span>
          <span class="alef-page2__error-text-value">2 метра</span>
        </p>
        <p class="alef-page2__error-text"
          v-if="!$v.data.height.required && $v.data.height.$dirty">
          <span class="alef-page2__error-text-descr">Обязательное поле</span>
          <span class="alef-page2__error-text-value">рост</span>
        </p>
      </div>
      <div class="alef-page2__form-input-field">
        <input
          class="alef-page2__form-input"
          :class="{invalid: $v.data.name.$error}"
          v-model="data.name"
          type="text"
          name="name"
          placeholder="имя"
          @blur="$v.data.name.$touch()">
        <p class="alef-page2__error-text"
          v-if="!$v.data.name.required && $v.data.name.$dirty">
          <span class="alef-page2__error-text-descr">Обязательное поле</span>
          <span class="alef-page2__error-text-value">имя</span>
        </p>
      </div>
      <div class="alef-page2__form-input-field">
        <input
          class="alef-page2__form-input"
          :class="{invalid: $v.data.email.$error || !valid}"
          v-model="data.email"
          type="text"
          name="email"
          placeholder="email"
          @blur="touchEmail()">
        <p class="alef-page2__error-text"
          v-if="!$v.data.email.required && $v.data.email.$dirty">
          <span class="alef-page2__error-text-descr">Обязательное поле</span>
          <span class="alef-page2__error-text-value">email</span>
        </p>
        <p class="alef-page2__error-text"
          v-if="!$v.data.email.email && $v.data.email.$dirty">
          <span class="alef-page2__error-text-descr">укажите в формате</span>
          <span class="alef-page2__error-text-value" style="text-transform: lowercase">example@email.com</span>
        </p>
        <p class="alef-page2__error-text"
          v-if="!valid">
          <span class="alef-page2__error-text-descr">{{ errorText }}</span>
        </p>
      </div>
      <div class="alef-page2__form-input-field">
        <input
          class="alef-page2__form-input"
          :class="{invalid: $v.data.city.$error}"
          v-model="data.city"
          type="text"
          name="city"
          placeholder="город"
          @blur="$v.data.city.$touch()">
        <p class="alef-page2__error-text"
          v-if="!$v.data.city.required && $v.data.city.$dirty">
          <span class="alef-page2__error-text-descr">Обязательное поле</span>
          <span class="alef-page2__error-text-value">город</span>
        </p>
      </div>
    </div>
    <div class="alef-page2__button-wrapper">
      <app-button
        class="alef-page2__button"
        :class="{active: submitStatus === 'pending'}"
        @click.native="submit"
        type="submit">
        <span v-if="submitStatus === 'error'">ошибка</span>
        <span v-else>участвовать</span>
      </app-button>
      <p class="alef-page2__privacy">
        Отправляя анкету ты соглашаешься с
        <a href="files/rules.pdf" class="alef-page2__privacy-link" target="_blank">правилами конкурса</a>
      </p>
    </div>
  </form>
</template>

<script>
import Button from '@/components/Button.vue'
import { mapActions, mapMutations } from 'vuex'
import { required, between, email, numeric } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  name: 'page2Form',
  data () {
    return {
      data: {
        height: '',
        name: '',
        email: '',
        city: ''
      },
      submitStatus: 'success',
      valid: 1,
      errorText: ''
    }
  },
  methods: {
    ...mapActions([
      'addHeight',
      'changeActivePage',
      'switchFlip',
      'setCurrentHeight',
    ]),
    ...mapMutations(['setParticipantId']),
    submit (e) {
      e.preventDefault()
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('error')
        // this.submitStatus = 'error'
      } else {
        this.submitStatus = 'pending'
        console.log('pending')

        this.post()
          .then(result => {
            if(result.status) {
              this.setCurrentHeight(parseInt(result.toll))
              this.reset();
              this.setParticipantId(result.value);
              this.submitStatus = 'success';
              this.switchFlip();
            } else {
              console.log('Message:', result.message);
              this.valid = 0
              this.errorText = result.message
              setTimeout(() => {
                this.submitStatus = 'error'
                setTimeout(() => {
                  this.submitStatus = 'success'
                }, 2000)
              }, 1000)
            }
          }, error => {
            setTimeout(() => {
              this.submitStatus = 'error'
              setTimeout(() => {
                this.submitStatus = 'success'
              }, 2000)
            }, 1000)
          })
      }
    },
    reset () {
      var self = this
      Object.keys(self.data).forEach(function (key, index) {
        self.data[key] = ''
      })
      self.$v.$reset()
    },
    post () {
      const dt = new FormData();
      dt.append('name', this.data.name);
      dt.append('email', this.data.email);
      dt.append('toll', this.data.height);
      dt.append('city', this.data.city);
      dt.append('sig', MD5(`${this.data.height}${this.data.email}fnuwuqqxweu23c23f`));

      const PARAM = {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        cache: 'no-cache',
        body: dt
      };

      return fetch('/api/add.php', PARAM)
                .then(ans => {
                  if(!ans.ok) {
                    throw Error(ans.statusText);
                  }
                  return ans.json();
                })
                .catch(Err => {
                  console.log(Err)
                  throw Error(Err);
                });
    },
    touchEmail () {
      this.$v.data.email.$touch()
      this.valid = 1
    }
  },
  components: {
    'app-button': Button
  },
  validations: {
    data: {
      height: {
        required,
        between: between(140, 205),
        numeric
      },
      name: {
        required
      },
      email: {
        required,
        email
      },
      city: {
        required
      }
    }
  }
}
</script>

<style lang="sass">
@import '@/sass/_variables.sass'
.alef-page2__form
  width: 213px
  min-height: 526px
  height: 526px
  padding-top: 36px
  padding-left: 17px
  padding-right: 16px

.alef-page2__title
  margin: 0
  margin-bottom: 12px

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

.alef-page2__form-input-field
  position: relative
  width: 100%
  height: 40px
  margin-bottom: 8px

.alef-page2__form-input
  width: 100%
  height: 100%
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
  box-shadow: 0 2px 0 0 transparent
  box-sizing: border-box
  -webkit-appearance: none
  transition: box-shadow 0.3s linear, color 0.3s linear
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
    transition: color 0.3s linear, opacity 0.3s linear
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
    transition: color 0.3s linear, opacity 0.3s linear
  &:focus::placeholder,
  &:focus::-webkit-input-placeholder
    color: rgba(255, 255, 255, 0.3)
    border: none
  &:focus::-moz-placeholder,
  &:focus:-moz-placeholder,
  &:focus:-ms-input-placeholder
    color: rgba(255, 255, 255, 0.3)
    border: none
  &.invalid
    color: transparent
    box-shadow: 0 2px 0 0 $color-error
    &::placeholder,
    &::-webkit-input-placeholder
      opacity: 0
    &::-moz-placeholder,
    &:-moz-placeholder,
    &:-ms-input-placeholder
      opacity: 0
    &:focus
      color: #ffffff
    &:focus+.alef-page2__error-text
      opacity: 0
    &:focus
      &::placeholder,
      &::-webkit-input-placeholder
        opacity: 1
      &::-moz-placeholder,
      &:-moz-placeholder,
      &:-ms-input-placeholder
        opacity: 1

.alef-page2__error-text
  position: absolute
  top: 0
  left: 15px
  display: flex
  flex-direction: column
  align-items: flex-start
  justify-content: center
  height: 100%
  margin: 0
  text-align: left
  opacity: 1
  pointer-events: none
  transition: opacity 0.3s linear

.alef-page2__error-text-descr
  margin-top: 3px
  font-family: inherit
  font-size: 9px
  font-weight: 800
  font-style: normal
  font-stretch: normal
  line-height: 1
  letter-spacing: normal
  text-transform: uppercase
  color: #ffffff

.alef-page2__error-text-value
  margin-top: 3px
  font-family: inherit
  font-size: 12px
  font-weight: 800
  font-style: normal
  font-stretch: normal
  line-height: 1
  letter-spacing: normal
  text-transform: uppercase
  color: #ffffff

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

@media (min-width: 768px)
  .alef-page2__form
    flex-shrink: 0
    // width: 63.75%
    width: auto
    min-height: 400px
    height: 400px
    margin: 0
    padding-top: 40px
    padding-left: 52px
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
    margin-bottom: 0px

  .alef-page2__form-input-field
    width: 47.4%
    height: 44px
    margin-right: 10px
    margin-bottom: 10px

  .alef-page2__form-input
    font-size: 14px
    line-height: 14px
    border-radius: 8px
    box-shadow: 0 3px 0 0 transparent
    &::placeholder,
    &::-webkit-input-placeholder
      font-size: 14px
    &::-moz-placeholder,
    &:-moz-placeholder,
    &:-ms-input-placeholder
      font-size: 14px
    &.invalid
      box-shadow: 0 3px 0 0 $color-error

  .alef-page2__error-text-descr
    margin-top: 3px
    font-size: 11px

  .alef-page2__error-text-value
    margin-top: 3px
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

@media (min-width: 990px)
  .alef-page2__form
    padding-left: 87px
    padding-right: 75px

  .alef-page2__title
    margin-bottom: 12px

  .alef-page2__subtitle
    margin-bottom: 22px

  .alef-page2__form-input-field
    width: 47.4%
    height: 50px

  .alef-page2__form-input
    padding-left: 20px
    padding-right: 20px

  .alef-page2__error-text
    left: 20px

  .alef-page2__button
    margin-right: 11px

  .alef-page2__privacy,
  .alef-page2__privacy-link
    font-size: 13px
    line-height: 1.23
</style>
