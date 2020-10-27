<template>
  <div id="app">
    <Navbar />
    <Landing />
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Landing from './pages/Landing.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Landing
  }
}
</script>

<style>
  @font-face{
    font-family: 'Google Sans';
    src: url('./assets/fonts/GoogleSans-Regular-v1.27.ttf');
  }
</style>
