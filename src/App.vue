<template>
  <div id="app">
    <Navbar />
    <Landing />
    <Footer />
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Landing from './pages/Landing.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Landing,
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
