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
        padding: 20px 270px 0 270px;
        flex-wrap: wrap;
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

    /* Mobile Breakpoints */

    /* @media screen and (max-width: 860px){
        
    } */

</style>
