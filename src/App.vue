<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  @font-face{
    font-family: 'Google Sans';
    src: url('./assets/fonts/GoogleSans-Regular-v1.27.ttf');
  }
</style>
