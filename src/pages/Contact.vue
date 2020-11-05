<template>
    <main>
        <div class="contact-section"> 
            <h1>Contact</h1>
            <div class="contact-people">
                <div class="contact-person">
                    <h2>Lance Lao</h2>
                    <span>Events Lead</span>
                    <p>christopher.lao@obf.ateneo.edu</p>
                    <p>09053733350</p>
                </div>
                <div class="contact-person">
                    <h2>Al Pagayatan</h2>
                    <span>Secretariat</span>
                    <p>allyn.pagayatan@obf.ateneo.edu</p>
                    <p>09175163005</p>
                </div>
                <div class="contact-person">
                    <h2>Ralph Macarasig</h2>
                    <span>Programs</span>
                    <p>ralph.macarasig@obf.ateneo.edu</p>
                    <p>09171090706</p>
                </div>
                <div class="contact-person">
                    <h2>Janelle Ong</h2>
                    <span>Logistics</span>
                    <p>janella.ong@obf.ateneo.edu</p>
                    <p>09177910138</p>
                </div>
            </div>
        </div>
        <div class="stay-up-to-date-section">
            <h1>Stay up-to-date</h1>
            <div class="stay-up-to-date-socmed">
                <div class="socmed">
                    <img src="../components/assets/fb_filled.png">
                    <div class="socmed-content">
                        <h2>Facebook</h2>
                        <p>@dscloyola</p>
                    </div>
                </div>
                <div class="socmed">
                    <img src="../components/assets/linkedin_hover.png">
                    <div class="socmed-content">
                        <h2>LinkedIn</h2>
                        <p>dsc-ateneo</p>
                    </div>
                </div>
                <div class="socmed">
                    <img src="../components/assets/ig_filled.png">
                    <div class="socmed-content">
                        <h2>Instagram</h2>
                        <p>@dsc.ateneo</p>
                    </div>
                </div>
                <div class="socmed">
                    <img src="../components/assets/tw_hover.png">
                    <div class="socmed-content">
                        <h2>Twitter</h2>
                        <p>@dsc.ateneo</p>
                    </div>
                </div>
                <div class="socmed">
                    <img src="../components/assets/email_filled.png">
                    <div class="socmed-content">
                        <h2>Email</h2>
                        <p>dsc.ateneo@gmail.com</p>
                    </div>
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
        padding: 20px 270px 100px 270px;
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
        padding: 0 112px 24px 0;
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
        flex-direction: row;
        width: 552px;
        border: 1px solid #2F80ED;
        border-radius: 10px;
        margin-bottom: 28px;
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
    /* Mobile Breakpoints */

    /* @media screen and (max-width: 860px){
        
    } */

</style>
