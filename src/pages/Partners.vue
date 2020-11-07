<template>
  <main>
    <h1>Partners</h1>
    <div class="partners-wrapper">
      <div class="gold-partners">
        <h2>Gold</h2>
        <img src="../assets/partners/Gold/Accenture logo_Masterbrand.png" alt="Accenture logo">
        <img src="../assets/partners/Gold/SGVlogo_bbww_2015.png" alt="SGV logo">
        <img src="../assets/partners/Gold/WIM Logo (PNG).png" alt="When In Manila logo">
      </div>
      <div class="silver-partners">
        <h2>Silver</h2>
        <img src="../assets/partners/Silver/Ambidextr_logo_positive.png" alt="Ambidextr logo"> 
        <img src="../assets/partners/Silver/MVN PHOTOSTUDIO_logo222.png" alt="MVN Photostudio logo">
        <img src="../assets/partners/Silver/NP_Logo_Horizontal_Colored.png" alt="NextPay logo">
        <img src="../assets/partners/Silver/SparkUp_logo_navy.png" aalt="SparkUp logo">
        <img src="../assets/partners/Silver/UXPH Logo Full Colour CMYK.png" alt="UXPH logo">
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
    margin: 0 32px 32px 32px;
  }

  .gold-partners, .silver-partners {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px 0;
  }

  .silver-partners {
    margin-bottom: 90px;
  }

  .gold-partners h2, .silver-partners h2 {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 0 24px 0;

    font-size: 30px;
    color: #4285F4;
  }
  .gold-partners img {
    height: 80px;
  }

  .silver-partners img {
    height: 28px;
  }

  @media screen and (max-width: 600px) {
     .partners-wrapper {
       padding: 0;
     }
  }
</style>