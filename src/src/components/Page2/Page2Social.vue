<template>
  <div class="alef-page2__social">
    <div class="alef-page2__social-current-height">+<span>192</span> см</div>
    <h2 class="alef-page2__social-title2">ты добавила к шкале роста всех участниц</h2>
    <p class="alef-page2__social-subtitle2">Ты занимаешь с <span class="alef-page2__social-height-min">10324</span> по <span class="alef-page2__social-height-max">10516</span> см в ростовой линейке</p>
    <h1 class="alef-title alef-page2__social-title">для участия в розыгрыше поделись результатом</h1>
    <p class="alef-text alef-page2__social-subtitle">Призы будут разыграны среди пользователей, поделившихся постом в социальных сетях</p>
    <h2 class="alef-page2__social-title2">поделиться:</h2>
    <social-sharing
      class="alef-page2__social-items"
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
</template>

<script>
export default {
  computed: {
    domen () {
      return location.origin
      // context.$router.push({ name: 'order-accept' })
    }
  }
}
</script>

<style lang="sass">
@import '@/sass/_variables.sass'

.alef-page2__social
  min-height: 460px
  height: 460px
  padding-top: 39px
  padding-left: 15px
  padding-right: 15px
  background: red

.alef-page2__social-current-height
  width: 47px
  height: 19px
  font-family: inherit
  font-size: 10px
  font-weight: 800
  font-style: normal
  font-stretch: normal
  line-height: 19px
  letter-spacing: normal
  color: #ffffff
  background-color: $color-scale
  border-radius: 4px

.alef-page2__social-title2
  margin: 0
  margin-top: 6px
  margin-bottom: 6px
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

.alef-page2__social-subtitle2
  font-family: inherit
  font-size: 13px
  font-weight: 500
  font-style: normal
  font-stretch: normal
  line-height: 1.38
  letter-spacing: normal
  color: $color-text

@media (min-width: 768px)
  .alef-page2__social
    min-height: 400px
    height: 400px
</style>
