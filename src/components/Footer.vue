<template>
    <footer>
      <div class="footer-primary">
        <img class="logo" src="../assets/images/hackfest_logo.svg" alt="hackfest-logo" />
        <p>Hackfest 2020 is the Developer Student Club Loyola's (DSC) flagship organised by students for students.</p>
        <div class="fb">
          <a href="https://www.facebook.com/dscloyola" target="_blank" rel="noopener noreferrer">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" @mouseover="hoverFb" @mouseleave="notHoverFb">
            <circle cx="24" cy="24" r="23" stroke="#2F80ED" stroke-width="2"/>
            <path d="M29.4999 13.1666H26.2499C24.8133 13.1666 23.4356 13.7373 22.4198 14.7531C21.4039 15.769 20.8333 17.1467 20.8333 18.5833V21.8333H17.5833V26.1666H20.8333V34.8333H25.1666V26.1666H28.4166L29.4999 21.8333H25.1666V18.5833C25.1666 18.296 25.2807 18.0204 25.4839 17.8173C25.6871 17.6141 25.9626 17.5 26.2499 17.5H29.4999V13.1666Z" stroke="#2F80ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a> 
        </div>   
        <div class="tw">
          <a href="https://twitter.com/dscloyola?lang=en" target="_blank" rel="noopener noreferrer">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" @mouseover="hoverTw" @mouseleave="notHoverTw">
            <circle cx="24" cy="24" r="23" stroke="#2F80ED" stroke-width="2"/>
            <path d="M35 15C34.0424 15.6755 32.9821 16.1922 31.86 16.53C31.2577 15.8376 30.4573 15.3467 29.567 15.124C28.6767 14.9012 27.7395 14.9572 26.8821 15.2845C26.0247 15.6118 25.2884 16.1944 24.773 16.9538C24.2575 17.7131 23.9877 18.6124 24 19.53V20.53C22.2426 20.5756 20.5013 20.1859 18.931 19.3955C17.3607 18.6051 16.0103 17.4387 15 16C15 16 11 25 20 29C17.9405 30.398 15.4872 31.099 13 31C22 36 33 31 33 19.5C32.9991 19.2215 32.9723 18.9436 32.92 18.67C33.9406 17.6635 34.6608 16.3928 35 15V15Z" stroke="#2F80ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        <div class="ig">
          <a href="https://www.instagram.com/dsc.loyola/" target="_blank" rel="noopener noreferrer"> 
            <img src="./assets/in.png" @mouseover="hoverIg" @mouseleave="notHoverIg">
            <!-- <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" @mouseover="hoverIg" @mouseleave="notHoverIg">
              <circle cx="24" cy="24" r="23" stroke="#2F80ED" stroke-width="2"/>
              <path d="M29 14H19C16.2386 14 14 16.2386 14 19V29C14 31.7614 16.2386 34 19 34H29C31.7614 34 34 31.7614 34 29V19C34 16.2386 31.7614 14 29 14Z" stroke="#2F80ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M28 23.3701C28.1234 24.2023 27.9812 25.0523 27.5937 25.7991C27.2062 26.5459 26.5931 27.1515 25.8416 27.5297C25.0901 27.908 24.2384 28.0397 23.4077 27.906C22.5771 27.7723 21.8097 27.3801 21.2148 26.7852C20.6199 26.1903 20.2277 25.4229 20.094 24.5923C19.9604 23.7616 20.092 22.91 20.4703 22.1584C20.8485 21.4069 21.4541 20.7938 22.2009 20.4063C22.9477 20.0188 23.7977 19.8766 24.63 20.0001C25.4789 20.1259 26.2648 20.5215 26.8716 21.1284C27.4785 21.7352 27.8741 22.5211 28 23.3701Z" stroke="#2F80ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M29.5 18.5H29.51" stroke="#2F80ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> -->
          </a>
        </div>
        <div class="li">
          <a href="https://www.linkedin.com/company/dsc-ateneo/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/linkedin.png"  @mouseover="hoverLi" @mouseleave="notHoverLi">
            <!-- <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" @mouseover="hoverLi" @mouseleave="notHoverLi">
              <path d="M29.2613 17.9412C28.2465 17.9412 27.4951 18.1971 26.9068 18.5204C26.8125 18.1851 26.5027 17.9397 26.1375 18.013H21.671C21.2294 17.9397 20.8717 18.2974 21.0079 18.7614V35.2264C20.8717 35.6455 21.2294 36.0048 21.671 35.9748H26.1375C26.579 36.0048 26.9368 35.6455 26.9368 35.204L26.9353 25.2531C26.9338 25.2486 26.9173 24.7726 27.2182 24.4448C27.4592 24.1844 27.8738 24.0512 28.4471 24.0512C29.402 24.0512 29.8271 24.4418 29.9858 25.316V35.204C29.8286 35.6455 30.1864 36.0048 30.6279 35.9748H35.3354C35.777 36.0048 36.1347 35.6455 35.9761 35.204V24.9837C36.1332 19.7867 32.4316 17.9412 29.2613 17.9412ZM34.5346 34.478H31.4272V25.316C31.4272 23.5482 30.2852 22.4526 28.4486 22.4526C27.4098 22.4526 26.6015 22.7579 26.0447 23.3596C25.2708 24.1979 25.3307 25.2606 25.4968 25.4971V34.478H22.4703V19.5398H25.3382V20.0427C25.337 20.1925 25.3781 20.3396 25.4568 20.4671C25.5355 20.5946 25.6485 20.6973 25.783 20.7635C25.9174 20.8296 26.0678 20.8565 26.2168 20.841C26.3658 20.8255 26.5075 20.7682 26.6254 20.6759L26.835 20.5142C27.4412 20.0367 28.0684 19.5413 29.2628 19.5413C30.4992 19.5413 34.5361 19.9349 34.5361 24.9852V34.478H34.5346Z" fill="#4285F4"/>
              <path d="M16.516 10.4778C14.8365 10.4778 13.4714 11.8429 13.4714 13.5223C13.4714 15.2017 14.8365 16.5668 16.516 16.5668C18.1954 16.5668 19.5605 15.2017 19.5605 13.5223C19.5605 11.8429 18.1954 10.4778 16.516 10.4778ZM16.516 14.9682C15.7197 14.9682 15.07 14.3186 15.07 13.5223C15.07 12.726 15.7197 12.0764 16.516 12.0764C17.3123 12.0764 17.9619 12.726 17.9619 13.5223C17.9619 14.3186 17.3123 14.9682 16.516 14.9682Z" fill="#4285F4"/>
              <path d="M18.6534 17.9397H14.2108C13.7693 17.9397 13.4115 18.2974 13.5223 18.7615V35.2265C13.4115 35.6456 13.7693 36.0048 14.2108 35.9749H18.6534C19.0949 36.0048 19.4527 35.6456 19.4527 35.204V18.739C19.4527 18.527 19.3685 18.3237 19.2186 18.1738C19.0687 18.0239 18.8654 17.9397 18.6534 17.9397ZM18.0127 34.4781H15.0101V19.5398H18.0127V34.4781Z" fill="#4285F4"/>
              <path d="M24 0C10.7651 0 0 10.7651 0 24C0 37.2349 10.7651 48 24 48C37.2349 48 48 37.2349 48 24C48 10.7651 37.2349 0 24 0ZM24 46.4014C11.6482 46.4014 1.5986 36.3518 1.5986 24C1.5986 11.6482 11.6482 1.5986 24 1.5986C36.3518 1.5986 46.4014 11.6482 46.4014 24C46.4014 36.3518 36.3518 46.4014 24 46.4014Z" fill="#4285F4"/>
            </svg> -->
          </a>
        </div>
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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLGlLO3Ys313ia-h3v3zg03VblE-HdlvAsy_e2eDdzp4DA5w/viewform" target="_blank" rel="noopener noreferrer"><button>Register</button></a>
        </div>
      </div>
      
    </footer>

</template>

<script>
import ig_filled from "../assets/ig_filled.png";
import linkedin_hover from "../assets/linkedin_hover.png";
import ig from "../assets/in.png";
import linkedin from "../assets/linkedin.png";

export default {
  name: 'Footer',
  methods: {
    hoverTw: function () {
      document.querySelector('.tw svg').style.fill = "#4285F4";
      document.querySelector('.tw path').style.stroke ="#FFFFFF";
    },
    notHoverTw: function () {
      document.querySelector('.tw svg').style.fill = "none";
      document.querySelector('.tw path').style.stroke ="#4285F4";
    },
    hoverFb: function () {
      document.querySelector('.fb svg').style.fill = "#4285F4";
      document.querySelector('.fb path').style.stroke ="#FFFFFF";
    },
    notHoverFb: function () {
      document.querySelector('.fb svg').style.fill = "none";
      document.querySelector('.fb path').style.stroke ="#4285F4";
    },
    hoverIg: function () {
      // document.querySelector('.ig path').style.stroke ="#FFFFFF";
      // document.querySelector('.ig circle').style.fill ="#4285F4";
      document.querySelector('.ig img').src = ig_filled; 
    },
    notHoverIg: function () {
      // document.querySelector('.ig circle').style.fill ="none";
      // document.querySelector('.ig path').style.stroke ="#4285F4";
      document.querySelector('.ig img').src = ig;
    },
    hoverLi: function () {
      // document.querySelectorAll('.li svg').style.fill = "#FFFFFF";
      // document.querySelectorAll('.li path:first-child').style.fill ="#FFFFFF";
      document.querySelector('.li img').src = linkedin_hover;
    },
    notHoverLi: function () {
      // document.querySelectorAll('.li svg').style.fill = "#4285F4";
      // document.querySelectorAll('.li path').style.stroke ="#4285F4";
      document.querySelector('.li img').src = linkedin;
    }
  }
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
  .footer-primary {
    width: 500px;
  }
  .footer-primary a {
    margin-right: 10px;
    cursor: pointer;
  }
  /* .footer-primary img {
    height: 48px;
    width: 48px;
  } */
  .ig img {
    width: 48px;
    height: 48px;
  }

  .li img {
    width: 48px;
    height: 48px;
  }

  .footer-primary div {
    display: inline;
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

  .footer-menu a {
    text-decoration: none;
    color: #000000;
    cursor: pointer;
    margin-bottom: 10px;
  }

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
    .footer-secondary {
      margin-bottom: 20px;
    }

    .footer-button-wrapper {
      display: none;
    }

  }
  @media screen and (max-width: 640px) {
    footer {
      padding: 30px;
    }
    .footer-primary {
      width: 100%;
    }
  }
  @media screen and (max-width: 500px) {    
    .logo {
      width: 100%;
    }
    .footer-menu {
      display: flex;
      flex-direction: column;
      padding-left: 20px;
    }
  }
</style>