<template>
  <social-sharing
    class="alef-page2__social"
    :url="domen"
    title="personal title"
    description="personal description"
    inline-template
    >
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
.alef-page2__social
  min-height: 526px
  height: 526px
  background: red

@media (min-width: 768px)
  .alef-page2__social
    min-height: 400px
    height: 400px
</style>
