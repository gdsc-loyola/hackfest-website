<template>
    <footer>
      <div class="footer-primary">
        <img class="logo" src="../assets/hackfest_logo.svg" alt="hackfest-logo" />
        <p>Hackfest 2020 is the Developer Student Club Loyola's (DSC) flagship organised by students for students.</p>
        <a href="https://www.facebook.com/dscloyola" target="_blank" rel="noopener noreferrer"><img src="./assets/fb.png" alt="fb"></a>
        <a href="https://twitter.com/dscloyola?lang=en" target="_blank" rel="noopener noreferrer"><img src="./assets/tw.png" alt="tw"></a>
        <a href="https://www.instagram.com/dsc.loyola/" target="_blank" rel="noopener noreferrer"><img src="./assets/in.png" alt="in"></a>
      </div>
      <div class="footer-secondary">
        <div class="footer-menu">
          <h4>About</h4>
          <a href="https://dscadmu.org/" target="_blank" rel="noopener noreferrer">What is DSC?</a>
        </div>
        <div class="footer-menu">
          <h4>Help</h4>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLGlLO3Ys313ia-h3v3zg03VblE-HdlvAsy_e2eDdzp4DA5w/viewform">Registration</a>
          <a href="#sponsor">Sponsorships</a>
        </div>
      </div>
    </footer>

</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  footer {
    padding: 50px 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    font-family: "Google Sans", sans-serif;
  }

  .footer-primary {
    width: 500px;
  }

  .footer-primary a {
    margin-right: 10px;
    cursor: pointer;
  }

  .footer-secondary {
    display: flex;
    flex-direction: row;
  }

  .footer-menu {
    display: flex;
    flex-direction: column;
    padding-left: 40px;
  }

  .footer-menu a {
    text-decoration: none;
    color: #000000;
    cursor: pointer;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 900px) {
    footer {
      flex-direction: column-reverse;
      align-items: flex-start;
    }

    .footer-menu:nth-child(1) {
      padding: 0;
    }

    .footer-secondary {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 640px) {
    footer {
      padding: 30px ;
    }

    .footer-primary {
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {    
    .logo {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    .footer {
      flex-direction: column;
    } 

    .footer-secondary {
      flex-direction: column;
      right: auto;
    }
  }

  /* @media screen and (max-width: 500px) {
  } */
</style>