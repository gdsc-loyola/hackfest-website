<template>
    <footer>
      <div class="footer-primary">
        <img class="logo" src="../assets/images/hackfest_logo.svg" alt="hackfest-logo" />
        <p>Hackfest 2020 is the Developer Student Club Loyola's (DSC) flagship organised by students for students.</p>
        <a href="https://www.facebook.com/dscloyola" target="_blank" rel="noopener noreferrer"><img src="../assets/icons/fb.svg" alt="facebook"></a>
        <a href="https://twitter.com/dscloyola?lang=en" target="_blank" rel="noopener noreferrer"><img src="../assets/icons/tw.svg" alt="twitter"></a>
        <a href="https://www.instagram.com/dsc.loyola/" target="_blank" rel="noopener noreferrer"><img src="../assets/icons/ig.svg" alt="instagram"></a>
         <a href="https://www.linkedin.com/company/dsc-ateneo/" target="_blank" rel="noopener noreferrer"><img src="../assets/icons/linkedin.svg" alt="linkedin"></a>
      </div>
      <div>
        <div class="footer-secondary">
            <div class="footer-menu">
                <a href="/about" class="margin-bottom-24"><h4>About</h4></a>
                <a href="/about#hackfest">HackFest</a>
                <a href="/about#eligibility">Eligibility</a>
            </div>
            <div class="footer-menu">
                <a href="/about" class="margin-bottom-24"><h4>Schedule</h4></a>
                <a href="/schedule#timeline">Timeline</a>
                <a href="/schedule#workshops">Workshops</a>
                <a href="/schedule#hackathon">Hackathon</a>
            </div>
            <div class="footer-menu">
                <a href="/help" class="margin-bottom-16"><h4 >Help</h4></a>
                <a href="/partners" class="margin-bottom-16"><h4 >Partners</h4></a>
                <a href="/faqs" class="margin-bottom-16"><h4>FAQs</h4></a>
                <a href="/contact" class="margin-bottom-16"><h4 >Contact</h4></a>
            </div>
        </div>
        <div class="footer-button-wrapper">
            <a href="bit.ly/RegisterHF2020Online" target="_blank" rel="noopener noreferrer"><button>Regiser</button></a>
        </div>
      </div>
      
    </footer>

</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  footer {
    padding: 50px 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    font-family: "Google Sans", sans-serif;
  }
<<<<<<< HEAD

  .footer-primary {
    width: 500px;
  }

=======
  .footer-primary {
    width: 500px;
  }
>>>>>>> e1987ac55789241012189858d37c99933450c11d
  .footer-primary a {
    margin-right: 10px;
    cursor: pointer;
  }
<<<<<<< HEAD

=======
>>>>>>> e1987ac55789241012189858d37c99933450c11d
  .footer-secondary {
    display: flex;
    flex-direction: row;
  }
<<<<<<< HEAD

=======
>>>>>>> e1987ac55789241012189858d37c99933450c11d
  .footer-menu {
    display: flex;
    flex-direction: column;
    padding-left: 40px;
  }

<<<<<<< HEAD
=======
  .footer-menu h4 {
    padding: 0;
    margin: 0;
  }

.margin-bottom-16 {
    margin-bottom: 16px !important;
}

.margin-bottom-24 {
    margin-bottom: 24px !important;
}

>>>>>>> e1987ac55789241012189858d37c99933450c11d
  .footer-menu a {
    text-decoration: none;
    color: #000000;
    cursor: pointer;
    margin-bottom: 10px;
  }

<<<<<<< HEAD
=======
  .footer-button-wrapper {
      display: flex;
      justify-content: flex-end;
      margin-top: 30px;
  }

    .footer-button-wrapper button {
        font-family: Google Sans, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
        background: #4285F4;
        border: 1px solid #4285F4;
        border-radius: 5px;
        padding: 8px 30px;
  }

  .footer-button-wrapper button:hover {
        background: #FFFFFF;
        color: #4285F4;
        cursor: pointer;
  }
>>>>>>> e1987ac55789241012189858d37c99933450c11d
  @media screen and (max-width: 900px) {
    footer {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
<<<<<<< HEAD

    .footer-menu:nth-child(1) {
      padding: 0;
    }

=======
    .footer-menu:nth-child(1) {
      padding: 0;
    }
>>>>>>> e1987ac55789241012189858d37c99933450c11d
    .footer-secondary {
      margin-bottom: 20px;
    }
  }
<<<<<<< HEAD

=======
>>>>>>> e1987ac55789241012189858d37c99933450c11d
  @media screen and (max-width: 640px) {
    footer {
      padding: 30px ;
    }
<<<<<<< HEAD

=======
>>>>>>> e1987ac55789241012189858d37c99933450c11d
    .footer-primary {
      width: 100%;
    }
  }
<<<<<<< HEAD

=======
>>>>>>> e1987ac55789241012189858d37c99933450c11d
  @media screen and (max-width: 500px) {    
    .logo {
      width: 100%;
    }
  }
</style>