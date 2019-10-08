<template>
  <transition name="fade-in" mode="out-in" appear>
    <component :is="mode"></component>
  </transition>
</template>

<script>
import Page1 from '@/components/Page1.vue'
import Page2 from '@/components/Page2/Page2.vue'
import Page3 from '@/components/Page3.vue'
import Page4 from '@/components/Page4.vue'
import Page5 from '@/components/Page5.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      mode: ''
    }
  },
  computed: {
    ...mapGetters([
      'activePage',
      'currentHeight',
      'maxHeight',
      'participantId'
    ])
  },
  created () {
    this.getRemoteValue()
      .then(response => {
        this.setCurrentHeight(+response.value)
        this.setParticipantId(response.count)
        console.log(this.participantId)
        this.checkPage()
      }, error => {
        console.log(error)
      })
  },
  methods: {
    ...mapActions([
      'changeActivePage',
      'setCurrentHeight',
      'setParticipantId'
    ]),
    getRemoteValue() {
      const PARAM = {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        cache: 'no-cache',
      };

      return fetch('/api/json.php', PARAM)
        .then(ans => {
          if(!ans.ok) {
            throw Error(ans.statusText)
          }
          return ans.json();
        })
    },
    checkPage () {
      var page = this.currentHeight >= this.maxHeight ? 5 : 1
      this.changeActivePage(page)
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
    'app-page4': Page4,
    'app-page5': Page5
  }
}
</script>

<style lang="sass">

</style>
