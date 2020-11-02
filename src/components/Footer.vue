<template>
    <footer>
      <div class="footer-primary">
        <img class="logo" src="../assets/hackfest_logo.svg" alt="hackfest-logo" />
        <p>Hackfest 2020 is the Developer Student Club Loyola's (DSC-L) flagship organised by students for students.</p>
        <a href="https://www.facebook.com/dscloyola" target="_blank" rel="noopener noreferrer"><img src="./assets/fb.png" alt="Facebook"></a>
        <a href="https://twitter.com/dscloyola?lang=en" target="_blank" rel="noopener noreferrer"><img src="./assets/tw.png" alt="Twitter"></a>
        <a href="https://www.instagram.com/dsc.loyola/" target="_blank" rel="noopener noreferrer"><img src="./assets/in.png" alt="Instagram"></a>
        <a href="https://www.linkedin.com/company/dsc-ateneo/" target="_blank" rel="noopener noreferrer"><img src="./assets/linkedin.png" alt="LinkedIn"></a>
      </div>
      <div class="footer-secondary">
        <div class="footer-menu">
          <h4>About</h4>
          <a href="#about">HackFest</a>
          <a href="#eligibility">Eligibility</a>
        </div>
        <div class="footer-menu"> 
          <h4>Schedule</h4>
          <a href="#">Timeline</a>
          <a href="#">Workshops</a>
          <a href="#">Hackathon</a>
        </div>
        <div class="footer-menu">
          <h4>Mechanics</h4>
          <a href="#">Partners</a>
          <a href="#">FAQs</a>
          <a href="#">Contact</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLGlLO3Ys313ia-h3v3zg03VblE-HdlvAsy_e2eDdzp4DA5w/viewform"><button>Register</button></a>
          
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

  footer button {
    font-family: "Google Sans", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    text-decoration: none;
    padding: 10px 20px;
    background: #4285F4;
    border-radius: 4px;
    border: none;
  }

  @media screen and (max-width: 900px) {
    footer {
      flex-direction: column;
      align-items: flex-start;
    }

    /* .footer-menu:nth-child(1) {
      padding: 0;
    } */

    .footer-secondary {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 640px) {
    footer {
      padding: 30px;
    }

    .footer-primary {
      width: 100%;
    }

    .footer-secondary {
      flex-direction: row;
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