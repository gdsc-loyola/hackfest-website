<template>
    <footer>
      <div class="footer-primary">
        <img class="logo" src="../assets/hackfest_logo.svg" alt="hackfest-logo" />
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

<<<<<<< HEAD
<style scoped>
=======
<style>
>>>>>>> 4005f9e3cf6ebb19af32d92f6b7d37d14bc6ed1a
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
>>>>>>> 4005f9e3cf6ebb19af32d92f6b7d37d14bc6ed1a
  .footer-primary a {
    margin-right: 10px;
    cursor: pointer;
  }
<<<<<<< HEAD

=======
>>>>>>> 4005f9e3cf6ebb19af32d92f6b7d37d14bc6ed1a
  .footer-secondary {
    display: flex;
    flex-direction: row;
  }
<<<<<<< HEAD

=======
>>>>>>> 4005f9e3cf6ebb19af32d92f6b7d37d14bc6ed1a
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

>>>>>>> 4005f9e3cf6ebb19af32d92f6b7d37d14bc6ed1a
  .footer-menu a {
    text-decoration: none;
    color: #000000;
    cursor: pointer;
    margin-bottom: 10px;
  }

<<<<<<< HEAD
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
  @media screen and (max-width: 900px) {
    footer {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
    .footer-menu:nth-child(1) {
      padding: 0;
    }
>>>>>>> 4005f9e3cf6ebb19af32d92f6b7d37d14bc6ed1a
    .footer-secondary {
      margin-bottom: 20px;
    }
  }
<<<<<<< HEAD

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

=======
  @media screen and (max-width: 640px) {
    footer {
      padding: 30px ;
    }
    .footer-primary {
      width: 100%;
    }
  }
>>>>>>> 4005f9e3cf6ebb19af32d92f6b7d37d14bc6ed1a
  @media screen and (max-width: 500px) {    
    .logo {
      width: 100%;
    }
  }
<<<<<<< HEAD

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
=======
>>>>>>> 4005f9e3cf6ebb19af32d92f6b7d37d14bc6ed1a
</style>