<template>
  <div id="alef-app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      cdn: process.env.VUE_APP_CDN_LINK,
      frameSelector: process.env.VUE_APP_FRAME_SELECTOR,
      debounceInterval: 0,
      lastTimeout: ''
    }
  },
  created () {
    // document.querySelector('meta[property="vk:image"]').setAttribute("content", `${location.origin}/img/sharing.jpg`);
    // document.querySelector('meta[property="og:image"]').setAttribute("content", `${location.origin}/img/sharing.jpg`);
    document.querySelector('meta[property="vk:image"]').setAttribute("content", this.cdn + `/img/sharing.jpg`);
    document.querySelector('meta[property="og:image"]').setAttribute("content", this.cdn + `/img/sharing.jpg`);
    var links = document.querySelectorAll('link[rel="preload"][as="style"]')
    var stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
    // var scripts = document.querySelectorAll('script')
    var icons = document.querySelectorAll('link[rel="icon"]')
    var manifests = document.querySelectorAll('link[rel="manifest"]')
    links.forEach((link) => {
      var linkHref = link.getAttribute('href')
      link.setAttribute('href', this.cdn + linkHref)
    });
    stylesheets.forEach((link) => {
      var linkHref = link.getAttribute('href')
      if (linkHref !== 'https://use.fontawesome.com/releases/v5.8.2/css/all.css') {
        link.setAttribute('href', this.cdn + linkHref)
      }
    });
    // scripts.forEach((link) => {
    //   var linkHref = link.getAttribute('src')
    //   link.setAttribute('src', this.cdn + linkHref)
    // });
    icons.forEach((link) => {
      var linkHref = link.getAttribute('href')
      link.setAttribute('href', this.cdn + linkHref)
    });
    manifests.forEach((link) => {
      var linkHref = link.getAttribute('href')
      link.setAttribute('href', this.cdn + linkHref)
    });
    this.setFrameHeight()
    window.addEventListener('resize', this.debounce)
    document.querySelector(this.frameSelector).style.transition = 'height 0s 0.3s linear'

    // fonts
    var newStyle = document.createElement('style')
    newStyle.appendChild(document.createTextNode("\
    @font-face {\
      font-family: 'CTC_Sans';\
      src: url('/fonts/sans/CTCSans-Bold.eot');\
      src: url('/fonts/sans/CTCSans-Bold.eot?#iefix') format('embedded-opentype'), url('/fonts/sans/CTCSans-Bold.woff2') format('woff2'), url('/fonts/sans/CTCSans-Bold.woff') format('woff'), url('/fonts/sans/CTCSans-Bold.ttf') format('truetype');\
      font-weight: 600;\
      font-style: normal;\
    }\
    @font-face {\
      font-family: 'CTC_Sans';\
      src: url('/fonts/sans/CTCSans-Italic.eot');\
      src: url('/fonts/sans/CTCSans-Italic.eot?#iefix') format('embedded-opentype'), url('/fonts/sans/CTCSans-Italic.woff2') format('woff2'), url('/fonts/sans/CTCSans-Italic.woff') format('woff'), url('/fonts/sans/CTCSans-Italic.ttf') format('truetype');\
      font-weight: 400;\
      font-style: italic;\
    }\
    @font-face {\
      font-family: 'DIN Pro';\
      src: url('/fonts/sans/DINPro.eot');\
      src: url('/fonts/sans/DINPro.eot?#iefix') format('embedded-opentype'), url('/fonts/sans/DINPro.woff2') format('woff2'), url('/fonts/sans/DINPro.woff') format('woff'), url('/fonts/sans/DINPro.ttf') format('truetype');\
      font-weight: 400;\
      font-style: normal;\
    }\
    @font-face {\
      font-family: 'CTC_Sans';\
      src: url('/fonts/sans/CTCSans-ExtraBold.eot');\
      src: url('/fonts/sans/CTCSans-ExtraBold.eot?#iefix') format('embedded-opentype'), url('/fonts/sans/CTCSans-ExtraBold.woff2') format('woff2'), url('/fonts/sans/CTCSans-ExtraBold.woff') format('woff'), url('/fonts/sans/CTCSans-ExtraBold.ttf') format('truetype');\
      font-weight: 800;\
      font-style: normal;\
    }\
    @font-face {\
      font-family: 'CTC_Sans';\
      src: url('/fonts/sans/CTCSans-Regular.eot');\
      src: url('/fonts/sans/CTCSans-Regular.eot?#iefix') format('embedded-opentype'), url('/fonts/sans/CTCSans-Regular.woff2') format('woff2'), url('/fonts/sans/CTCSans-Regular.woff') format('woff'), url('/fonts/sans/CTCSans-Regular.ttf') format('truetype');\
      font-weight: 300;\
      font-style: normal;\
    }\
    @font-face {\
      font-family: 'CTC_Sans';\
      src: url('/fonts/sans/CTCSans-ExtraBoldItalic.eot');\
      src: url('/fonts/sans/CTCSans-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'), url('/fonts/sans/CTCSans-ExtraBoldItalic.woff2') format('woff2'), url('/fonts/sans/CTCSans-ExtraBoldItalic.woff') format('woff'), url('/fonts/sans/CTCSans-ExtraBoldItalic.ttf') format('truetype');\
      font-weight: 800;\
      font-style: italic;\
    }\
    @font-face {\
      font-family: 'CTC_Sans';\
      src: url('/fonts/sans/CTCSans-Thin.eot');\
      src: url('/fonts/sans/CTCSans-Thin.eot?#iefix') format('embedded-opentype'), url('/fonts/sans/CTCSans-Thin.woff2') format('woff2'), url('/fonts/sans/CTCSans-Thin.woff') format('woff'), url('/fonts/sans/CTCSans-Thin.ttf') format('truetype');\
      font-weight: 100;\
      font-style: normal;\
    }\
    @font-face {\
      font-family: 'DIN Pro';\
      src: url('/fonts/sans/DINPro-Medium.eot');\
      src: url('/fonts/sans/DINPro-Medium.eot?#iefix') format('embedded-opentype'), url('/fonts/sans/DINPro-Medium.woff2') format('woff2'), url('/fonts/sans/DINPro-Medium.woff') format('woff'), url('/fonts/sans/DINPro-Medium.ttf') format('truetype');\
      font-weight: 500;\
      font-style: normal;\
    }\
    @font-face {\
      font-family: 'DIN Pro';\
      src: url('/fonts/sans/DINPro-Bold.eot');\
      src: url('/fonts/sans/DINPro-Bold.eot?#iefix') format('embedded-opentype'), url('/fonts/sans/DINPro-Bold.woff2') format('woff2'), url('/fonts/sans/DINPro-Bold.woff') format('woff'), url('/fonts/sans/DINPro-Bold.ttf') format('truetype');\
      font-weight: 700;\
      font-style: normal;\
    }\
    @font-face {\
      font-family: 'CTC_Sans';\
      src: url('/fonts/sans/CTCSans-Black.eot');\
      src: url('/fonts/sans/CTCSans-Black.eot?#iefix') format('embedded-opentype'), url('/fonts/sans/CTCSans-Black.woff2') format('woff2'), url('/fonts/sans/CTCSans-Black.woff') format('woff'), url('/fonts/sans/CTCSans-Black.ttf') format('truetype');\
      font-weight: 900;\
      font-style: normal;\
    }\
    @font-face {\
      font-family: 'CTC_Sans';\
      src: url('/fonts/sans/CTCSans-BoldItalic.eot');\
      src: url('/fonts/sans/CTCSans-BoldItalic.eot?#iefix') format('embedded-opentype'), url('/fonts/sans/CTCSans-BoldItalic.woff2') format('woff2'), url('/fonts/sans/CTCSans-BoldItalic.woff') format('woff'), url('/fonts/sans/CTCSans-BoldItalic.ttf') format('truetype');\
      font-weight: 700;\
      font-style: italic;\
    }\
    @font-face {\
      font-family: 'CTC_Sans';\
      src: url('/fonts/sans/CTCSans-Medium.eot');\
      src: url('/fonts/sans/CTCSans-Medium.eot?#iefix') format('embedded-opentype'), url('/fonts/sans/CTCSans-Medium.woff2') format('woff2'), url('/fonts/sans/CTCSans-Medium.woff') format('woff'), url('/fonts/sans/CTCSans-Medium.ttf') format('truetype');\
      font-weight: 500;\
      font-style: normal;\
    }\
    @font-face {\
      font-family: 'CTC_Sans';\
      src: url('/fonts/sans/CTCSans-MediumItalic.eot');\
      src: url('/fonts/sans/CTCSans-MediumItalic.eot?#iefix') format('embedded-opentype'), url('/fonts/sans/CTCSans-MediumItalic.woff2') format('woff2'), url('/fonts/sans/CTCSans-MediumItalic.woff') format('woff'), url('/fonts/sans/CTCSans-MediumItalic.ttf') format('truetype');\
      font-weight: 500;\
      font-style: italic;\
    }\
    "));
    document.head.appendChild(newStyle);
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.debounce)
  },
  methods: {
    ...mapActions([
      'setFrameHeight'
    ]),
    debounce () {
      if (this.lastTimeout !== '') {
        clearTimeout(this.lastTimeout)
      }
      this.lastTimeout = setTimeout(() => {
        this.setFrameHeight()
      }, this.debounceInterval)
    }
  }
}
</script>

<style lang="sass">
@import '@/sass/_fonts.sass'
@import '@/sass/_variables.sass'

html
  min-height: 100%

body
  margin: 0

@media (min-width: 768px) and (max-width: 989px)
  body
    margin: 0 5px

#alef-app
  width: 100%
  height: 100%
  margin-left: auto
  margin-right: auto
  font-family: 'CTC_Sans'
  font-style: normal
  font-weight: 500
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $color-text
  box-sizing: border-box
  overflow-x: hidden
  div,
  form,
  input,
  button
    box-sizing: border-box
  input
    &:focus
      outline: none

.alef-title
  font-size: 16px
  font-weight: 800
  font-style: normal
  line-height: 1.31
  letter-spacing: normal
  text-transform: uppercase
  text-align: left
  color: $color-text

.alef-title_size_s
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

.alef-text
  font-size: 13px
  font-weight: 500
  font-style: normal
  font-stretch: normal
  line-height: 1.38
  letter-spacing: normal
  text-align: left
  color: $color-text

.alef-text_warning
  font-weight: 800

.fade-in-enter,
.fade-in-enter-active
  animation: fade-in 1s 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both

.fade-in-leave,
.fade-in-leave-active
  animation: fade-out 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both

@keyframes fade-in
  0%
    opacity: 0
  100%
    opacity: 1

@keyframes fade-out
  0%
    opacity: 1
  100%
    opacity: 0

.fade-enter,
.fade-enter-active
  animation: fade-in 0.3s linear

.fade-leave,
.fade-leave-active
  animation: fade-out 0.3s linear

.flip-enter,
.flip-enter-active
  animation: flip-in-ver-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
.flip-leave,
.flip-leave-active
  animation: flip-out-ver-left 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

@keyframes flip-out-ver-left
  0%
    transform: rotateY(0)
    opacity: 1
  100%
    transform: rotateY(-70deg)
    opacity: 0
@keyframes flip-in-ver-left
  0%
    transform: rotateY(80deg)
    opacity: 0
  100%
    transform: rotateY(0)
    opacity: 1

@media (min-width: 768px)
  .alef-title
    font-size: 28px
    line-height: 1.29

  .alef-title_size_s
    font-size: 18px
    line-height: 1.33

  .alef-text
    font-size: 14px
    line-height: 1.43

@media (min-width: 990px)
  .alef-title
    font-size: 32px
    line-height: 1.19

  .alef-title_size_s
    font-size: 20px
    line-height: 1.3

  .alef-text
    font-size: 16px
    line-height: 1.31

</style>
