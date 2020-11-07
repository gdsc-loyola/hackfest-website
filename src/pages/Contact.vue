<template>
    <main>
        <div class="contact-section"> 
            <h1>Contact</h1>
            <div class="contact-people">
                <div class="contact-person">
                    <h2>Lance Lao</h2>
                    <span>Events Lead</span>
                    <a href="mailto:christopher.lao@obf.ateneo.edu" target="blank" rel="noopener noreferrer">christopher.lao@obf.ateneo.edu</a>
                    <p>09053733350</p>
                </div>
                <div class="contact-person">
                    <h2>Al Pagayatan</h2>
                    <span>Secretariat</span>
                    <a href="mailto:allyn.pagayatan@obf.ateneo.edu" target="blank" rel="noopener noreferrer">allyn.pagayatan@obf.ateneo.edu</a>
                    <p>09175163005</p>
                </div>
                <div class="contact-person">
                    <h2>Ralph Macarasig</h2>
                    <span>Programs</span>
                    <a href="mailto:ralph.macarasig@obf.ateneo.edu" target="blank" rel="noopener noreferrer">ralph.macarasig@obf.ateneo.edu</a>
                    <p>09171090706</p>
                </div>
                <div class="contact-person">
                    <h2>Janelle Ong</h2>
                    <span>Logistics</span>
                    <a href="mailto:janella.ong@obf.ateneo.edu" target="blank" rel="noopener noreferrer">janella.ong@obf.ateneo.edu</a>
                    <p>09177910138</p>
                </div>
            </div>
        </div>
        <div class="stay-up-to-date-section">
            <h1>Stay up-to-date</h1>
            <div class="stay-up-to-date-socmed">
                <div class="socmed">
                  <a href="https://www.facebook.com/dscloyola" target="blank" rel="noopener noreferrer">
                    <img src="../components/assets/fb_filled.png">
                    <div class="socmed-content">
                        <h2>Facebook</h2>
                        <p>@dscloyola</p>
                    </div>
                  </a>
                </div>
                <div class="socmed">
                  <a href="https://www.linkedin.com/company/dsc-ateneo/" target="blank" rel="noopener noreferrer">
                    <img src="../components/assets/linkedin_hover.png">
                    <div class="socmed-content">
                        <h2>LinkedIn</h2>
                        <p>dsc-ateneo</p>
                    </div>
                  </a>
                </div>
                <div class="socmed">
                  <a href="https://www.instagram.com/dsc.loyola/" target="blank" rel="noopener noreferrer">
                    <img src="../components/assets/ig_filled.png">
                    <div class="socmed-content">
                        <h2>Instagram</h2>
                        <p>@dsc.ateneo</p>
                    </div>
                  </a>
                </div>
                <div class="socmed">
                  <a href="https://twitter.com/DSCLoyola" target="blank" rel="noopener noreferrer">
                    <img src="../components/assets/tw_hover.png">
                    <div class="socmed-content">
                        <h2>Twitter</h2>
                        <p>@dsc.ateneo</p>
                    </div>
                  </a>
                </div>
                <div class="socmed">
                  <a href="mailto:dsc.ateneo@gmail.com" target="blank" rel="noopener noreferrer">
                    <img src="../components/assets/email_filled.png">
                    <div class="socmed-content">
                        <h2>Email</h2>
                        <p>dsc.ateneo@gmail.com</p>
                    </div>
                  </a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
    main {
        font-family: "Google Sans", sans-serif;
    }
    .contact-section {
        display: flex;
        width: 100%;
        justify-items: center;
        flex-wrap: wrap;
    }

    .contact-section h1 {
        display: flex;
        width: 100%;
        font-size: 48px;
        justify-content: center;
    }

    .contact-people {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 20px 20vw 100px 20vw;
        flex-wrap: wrap;
    }

    .contact-person h2 {
        margin: 0;
    }
    
    .contact-person {
        width: 320px;
    }

    /* .contact-person:nth-child(2n) {
        padding: 0 24px 0 112px;
    } */

    .contact-person:nth-child(2n-1) {
        padding: 0 112px 80px 0;
    }

    .contact-person h2 {
        font-size: 32px;
        font-weight: 700;
    }

    .contact-person span {
        color: #EA4335;
        font-weight: 700;
    }

    .contact-person p {
        font-size: 20px;
    }

    .contact-person a {
        display: block;
        text-decoration: none;
        color: #000000;
    }

    .contact-person a:hover {
        font-weight: 700;
    }

    /* STAY UP-TO-DATE SECTION */

    .stay-up-to-date-section {
        width: 100%;
    }

    .stay-up-to-date-section h1 {
        display: flex;
        justify-content: center;
        padding-bottom: 44px;
    }

    .stay-up-to-date-socmed {
        display: flex;
        padding: 0 144px;
        flex-wrap: wrap;
        justify-items: space-between;
        justify-content: center;
    }

    .socmed {
        display: flex;
        /* flex-direction: row; */
        width: 552px;
        border: 1px solid #2F80ED;
        border-radius: 10px;
        margin-bottom: 28px;
    }

    .socmed a {
      display: flex;
      flex-direction: row;
    }

    .socmed:nth-child(2n) {
        margin-left: 48px;
    }

    .socmed:last-child {
        margin-bottom: 0;
    }

    .socmed img {
        width: 84px;
        height: 84px;
        padding: 30px 36px;
    }

    .socmed-content {
        display: flex;
        flex-direction: column;
        margin: auto 0;
    }

    .socmed-content h2, p {
        margin: 0;
    }

    .socmed a {
        text-decoration: none;
        color: #000000;
        width: 552px;
    }

    .socmed a:hover {
        background-color: #4285F4;
        border-radius: 10px;
        margin: 0;
        border-color: #000000;
        color: #FFFFFF;
    }

    /* Mobile Breakpoints */

    @media screen and (max-width: 1400px) {
        .socmed:nth-child(2n) {
           margin-left: 0;
       } 
    }

    @media screen and (max-width: 1250px){
       .contact-people {
           padding: 20px 10vw 100px 10vw;
       }
    }

    @media screen and (max-width: 924px) {
        .contact-people {
           padding: 20px 5vw 100px 5vw;
       } 
    }

    @media screen and (max-width: 832px) {
        .contact-people {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .contact-person:nth-child(2n-1) {
            padding: 0;
        }

        .contact-person{
            padding: 15px 0;
        }
        
        .stay-up-to-date-socmed {
            padding: 0;
            width: 95%;
        }

        .socmed {
            margin: 0 0 24px 0;
        }

        .socmed:nth-child(2n) {
            margin-left: 0;
        }
    }

    @media screen and (max-width: 480px) {

        .contact-person {
            width: 240px;
            padding: 0 0 24px 0;
        }
        .contact-person:nth-child(2n-1){
            padding: 0 0 24px 0;
        }

        .contact-people:nth-child(2n) {
            padding: 0 0 24px 0;
        }

        .stay-up-to-date-socmed {
            width: 100%;
            justify-content: center;
            padding: 0;
            margin: 0;
        }

        .socmed {
            width: 90%;
        }

        .socmed img {
            width: 50px;
            height: 50px;
            padding: 12px 8px 12px 16px;
        }

        .socmed:nth-child(2n) {
            margin-left: 0;
        }
        
    }
</style>
