<template>
  <transition name="fade-in" mode="out-in" appear>
    <component :is="mode"></component>
  </transition>
</template>

<script>
import Page1 from '@/components/Page1.vue'
import Page2 from '@/components/Page2.vue'
import Page3 from '@/components/Page3.vue'
import Page4 from '@/components/Page4.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      mode: 'app-page1'
    }
  },
  computed: {
    ...mapGetters([
      'activePage'
    ])
  },
  created () {

  },
  methods: {
    entered () {

    }
  },
  watch: {
    activePage: function (val) {
      this.mode = 'app-page' + val
    }
  },
  components: {
    'app-page1': Page1,
    'app-page2': Page2,
    'app-page3': Page3,
    'app-page4': Page4
  }
}
</script>

<style lang="sass">

</style>
