<template>
  <div class="alef-page2__social">
    <div class="alef-page2__social-header">
      <div class="alef-page2__social-current-height">
        +
        <span class="alef-page2__social-current-height-value">{{ addedHeight }}</span>
        &nbsp;
        <span class="alef-page2__social-current-height-sm">см</span>
      </div>
      <div class="alef-page2__social-header-descr">
        <h2 class="alef-title_size_s alef-page2__social-title2">ты добавила к шкале роста всех участниц</h2>
        <p class="alef-text_size_s alef-page2__social-subtitle2">
          Ты занимаешь с
          <span class="alef-page2__social-height-min">{{ previousHeight }}</span>
          по
          <span class="alef-page2__social-height-max">{{ currentHeight }}</span>
            см в ростовой линейке
        </p>
      </div>
    </div>
    <h1 class="alef-title alef-page2__social-title">для участия в розыгрыше поделись результатом</h1>
    <p class="alef-text alef-page2__social-subtitle">Призы будут разыграны среди пользователей, поделившихся постом в социальных сетях</p>
    <div class="alef-page2__social-footer">
      <h2 class="alef-title_size_s alef-page2__social-title2 alef-page2__social-title2_type_share">поделиться:</h2>
      <social-sharing
        class="alef-page2__social-items"
        :url="domen"
        title="Поздравляем! Ты в команде #Дылды"
        inline-template
        @close="close">
        <div>
          <network network="vk" class="alef-page2__social-item">
            <i class="fab fa-vk"></i>
          </network>
          <network network="facebook" class="alef-page2__social-item">
            <i class="fab fa-facebook-f"></i>
          </network>
          <network network="odnoklassniki" class="alef-page2__social-item">
            <i class="fab fa-odnoklassniki"></i>
          </network>
        </div>
      </social-sharing>
      <!-- <a @click="vkontakte(domen,'TITLE', '@/assets/img/sharing.png','DESC')"> {шарь меня полностью}</a> -->
      <!-- <a @click="facebook(domen,'TITLE','@/assets/img/sharing.png','DESC')"> {шарь меня полностью}</a> -->
      <!-- <a @click="odnoklassniki('URL','DESC')"> {шарь меня полностью}</a> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'addedHeight',
      'previousHeight',
      'currentHeight'
    ]),
    domen () {
      return location.origin
    }
  },
  methods: {
    ...mapActions([
      'changeActivePage'
    ]),
    close () {
      this.changeActivePage(4)
    }
    // vkontakte (purl, ptitle, pimg, text) {
    //   var url = ''
    //   url  = 'http://vkontakte.ru/share.php?';
    //   url += 'url='          + encodeURIComponent(purl);
    //   url += '&title='       + encodeURIComponent(ptitle);
    //   url += '&description=' + encodeURIComponent(text);
    //   url += '&image='       + encodeURIComponent(pimg);
    //   url += '&noparse=true';
    //   this.popup(url);
    // },
    // odnoklassniki (purl, text) {
    //   url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
    //   url += '&st.comments=' + encodeURIComponent(text);
    //   url += '&st._surl='    + encodeURIComponent(purl);
    //   Share.popup(url);
    // },
    // facebook (purl, ptitle, pimg, text) {
    //   var url = ''
    //   url  = 'http://www.facebook.com/sharer.php?s=100';
    //   url += '&p[title]='     + encodeURIComponent(ptitle);
    //   url += '&p[summary]='   + encodeURIComponent(text);
    //   url += '&p[url]='       + encodeURIComponent(purl);
    //   url += '&p[images][0]=' + encodeURIComponent(pimg);
    //   this.popup(url);
    // },

    // popup (url) {
    //   window.open(url,'','toolbar=0,status=0,width=626,height=436');
    // }
  }
}
</script>

<style lang="sass">
@import '@/sass/_variables.sass'

.alef-page2__social
  width: 210px
  min-height: 460px
  height: 460px
  padding-top: 39px
  padding-left: 15px
  padding-right: 15px

.alef-page2__social-header
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  align-items: flex-start
  justify-content: flex-start

.alef-page2__social-footer
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  align-items: flex-start
  justify-content: flex-start

.alef-page2__social-current-height
  display: flex
  align-items: baseline
  justify-content: center
  flex-shrink: 0
  width: 47px
  height: 19px
  font-family: inherit
  font-size: 10px
  font-weight: 800
  font-style: normal
  font-stretch: normal
  line-height: 19px
  letter-spacing: normal
  text-transform: uppercase
  color: #ffffff
  background-color: $color-scale
  border-radius: 4px
  white-space: nowrap

.alef-page2__social-current-height-sm
  font-size: 8px

.alef-page2__social-title2
  margin: 0
  margin-top: 6px
  margin-bottom: 10px

.alef-page2__social-title2_type_share
  margin-bottom: 4px

.alef-page2__social-subtitle2
  margin: 0
  padding-right: 25px

.alef-page2__social-height-min,
.alef-page2__social-height-max
  font-weight: 800

.alef-page2__social-title
  margin-top: 23px
  margin-bottom: 10px
  padding-right: 60px

.alef-page2__social-items
  display: flex
  flex-direction: row
  align-items: center
  justify-content: flex-start

.alef-page2__social-item
  display: flex
  align-items: center
  justify-content: center
  width: 40px
  height: 40px
  margin-right: 10px
  background-color: $color-button
  border-radius: 50%
  box-shadow: 0 3px 0 0 $color-text
  transition: background-color 0.3s linear
  &:last-child
    margin-right: 0
  .fab
    &::before
      font-size: 20px
  &:hover
    background-color: $color-button-hover
    cursor: pointer
  &:focus
    outline: none

@media (min-width: 768px)
  .alef-page2__social
    width: 484px
    min-height: 400px
    height: 400px
    padding-left: 53px
    padding-right: 15px

  .alef-page2__social-header
    flex-direction: row

  .alef-page2__social-footer
    flex-direction: row
    align-items: center

  .alef-page2__social-current-height
    width: 75px
    height: 30px
    font-size: 18px
    line-height: 30px

  .alef-page2__social-current-height-sm
    font-size: 10px

  .alef-page2__social-header-descr
    margin-left: 12px

  .alef-page2__social-title2
    margin-top: 7px
    margin-bottom: 5px

  .alef-page2__social-subtitle2
    padding-right: 85px

  .alef-page2__social-title2_type_share
    margin-bottom: 0
    margin-right: 20px

  .alef-page2__social-title
    margin-top: 33px
    margin-bottom: 6px
    padding-right: 0

  .alef-page2__social-subtitle
    margin: 0
    margin-bottom: 16px

  .alef-page2__social-item
    width: 45px
    height: 45px
    margin-right: 15px
    box-shadow: 0 4px 0 0 $color-text
    .fab
      &::before
        font-size: 22px

@media (min-width: 990px)
  .alef-page2__social
    width: auto
    padding-left: 87px
    // padding-right: 15px

  .alef-page2__social-current-height
    width: 78px
    font-size: 20px

  .alef-page2__social-header-descr
    margin-left: 20px
    padding-right: 130px

  .alef-page2__social-title2
    margin-top: 3px
    margin-bottom: 9px

  .alef-page2__social-title2_type_share
    margin-top: 9px
    margin-bottom: 0

  .alef-page2__social-subtitle2
    padding-right: 80px

  .alef-page2__social-title
    margin-top: 35px
    margin-bottom: 13px

  .alef-page2__social-subtitle
    margin-bottom: 20px
    padding-right: 100px

  .alef-page2__social-item
    width: 50px
    height: 50px
    box-shadow: 0 5px 0 0 $color-text
    .fab
      &::before
        font-size: 25px
</style>
