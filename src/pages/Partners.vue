<template>
  <main>
    <h1>Partners</h1>
    <div class="partners-wrapper">
      <div class="gold-partners">
        <h2>Gold</h2>
        <img src="../assets/partners/gold/Accenture logo_Masterbrand.png">
        <img src="../assets/partners/gold/SGVlogo_bbww_2015.png">
        <img src="../assets/partners/gold/WIM Logo (PNG).png">
      </div>
      <div class="silver-partners">
        <h2>Silver</h2>
        <img src="../assets/partners/silver/Ambidextr_logo_positive.png">
        <img src="../assets/partners/silver/MVN PHOTOSTUDIO_logo222.png">
        <img src="../assets/partners/silver/NP_Logo_Horizontal_Colored.png">
        <img src="../assets/partners/silver/SparkUp_logo_navy.png">
        <img src="../assets/partners/silver/UXPH Logo Full Colour CMYK.png">
      </div>
    </div>
  </main>
</template>

<script>
// import Partner from '@/components/Partner.vue'
export default {
  name: 'Partners',
  // components: {
  //   Partner
  // },
  // data () {
  //   return {
  //     partner1: [{
  //       logo_source: "#",
  //       alt_name: "Partner 1 logo"
  //     }]
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  main {
    font-family: "Google Sans", sans-serif;
    margin-top: 76px;
  }

  main h1 {
    display: flex;
    justify-content: center;
  }

  .partners-wrapper {
    padding: 0 144px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .partners-wrapper img {
    display: flex;
    margin: 0 24px 24px 24px;
  }

  .gold-partners, .silver-partners {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .gold-partners h2, .silver-partners h2 {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .gold-partners img {
    height: 96px;
    width: 96px;
  }

  .silver-partners img {
    height: 64px;
    width: 64px;
  }
</style>