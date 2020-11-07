<template>
  <main>
    <h1>Partners</h1>
    <p>Brought to you by:</p>
    <div class="partners-wrapper">
      <div class="gold-partners">
        <h2>Gold</h2>
        <a href="https://www.sgv.ph" target="blank" rel="noopener noreferrer">
          <img src="../assets/partners/Gold/SGVlogo_bbww_2015.png" alt="SGV logo">
        </a>
        <a href="https://www.accenture.com/ph-en" target="blank" rel="noopener noreferrer">
          <img src="../assets/partners/Gold/Accenture logo_Masterbrand.png" alt="Accenture logo">
        </a>
        <a href="https://www.wheninmanila.com" target="blank" rel="noopener noreferrer">
          <img src="../assets/partners/Gold/WIM Logo (PNG).png" alt="When In Manila logo">
        </a>
      </div>
      <div class="silver-partners">
        <h2>Silver</h2>
        <a href="http://ambidextr.media/" target="blank" rel="noopener noreferrer">
          <img src="../assets/partners/Silver/Ambidextr_logo_positive.png" alt="Ambidextr logo"> 
        </a>
        <a href="http://mvnphotostudio.com" target="blank" rel="noopener noreferrer">
          <img src="../assets/partners/Silver/MVN PHOTOSTUDIO_logo222.png" alt="MVN Photostudio logo">
        </a>
        <a href="https://nextpay.world/" target="blank" rel="noopener noreferrer">
          <img src="../assets/partners/Silver/NP_Logo_Horizontal_Colored.png" alt="NextPay logo">
        </a>
        <a href="https://www.bworldonline.com/sparkup/" target="blank" rel="noopener noreferrer">
          <img src="../assets/partners/Silver/SparkUp_logo_navy.png" aalt="SparkUp logo">
        </a>
        <a href="https://www.uxph.org" target="blank" rel="noopener noreferrer">
          <img src="../assets/partners/Silver/UXPH Logo Full Colour CMYK.png" alt="UXPH logo">
        </a>
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
    background-color: #4285F4;
    margin: 0;
    padding: 1em 0;
    color: #FFFFFF;
  }

  main p {
    display: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
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
    object-fit: contain;
  }

  .silver-partners img {
    height: 28px;
    object-fit: contain;
  }

  @media screen and (max-width: 600px) {
     .partners-wrapper {
       padding: 0;
     }
  }
</style>