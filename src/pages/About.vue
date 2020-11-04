<template>
  <main>
    <section id="landing">
      <div class="landing_wrapper">
        <img src="@/assets/icons/hackfest_icon.svg" alt="hackfest icon" class="hackfest_icon"><br>
        <img src="@/assets/images/hackfest_logo.svg" alt="hackfest logo" class="hackfest_logo">
        <h2>A 10-day event filled with workshops, webinars, and a 48-hour hackathon.</h2>
        <div class="landing_button_wrapper">
          <a href="bit.ly/RegisterHF2020Online" target="_blank" rel="noopener noreferrer"><button class="primary-cta">Register</button></a>
          <router-link tag="button" to="/about" class="secondary-cta">Learn More</router-link>
        </div>
        
      </div>
      <div class="landing_image">
        <img src="@/assets/images/landing.svg" alt="landing">
      </div>  
      
    </section>
    <section class="sponsors" id="sponsor">
        <h5>Co-presented by</h5>
        <div class="sponsor-child">
          <!-- TODO: Replace logos into white -->
          <img src="../assets/images/anc.png" alt="ANC Logo">
          <img src="../assets/images/paymongo.png" alt="PayMongo Logo">
          <img src="../assets/images/repl.it.svg" alt="Repl.it Logo">
          <img src="../assets/images/inquirer.png" alt="Inquirer Logo">
          <!-- TODO: Replace logos into white -->
          <img src="../assets/images/fwd.png" alt="FWD Logo">
          <img src="../assets/images/digitalocean.png" alt="Digital Ocean Logo">
          <img src="../assets/images/datacamp.png" alt="Datacamp Logo">
        </div>
    </section>
    <section class="about-section" id="hackfest">
      <div class="about-header">
        <p>About</p>
        <h5>HackFest 2020: Online</h5>
      </div>
      <div class="about-details">
        <p>
          HackFest 2020: Online is a <strong>10-day event composed of online technical workshops, webinars, and a 48-hour hackathon proper</strong> where students can exercise the skills they learned by <strong>coming up with creative, digital solutions</strong> to a given problem through the use of technology. 
          <br><br>
          Experts from different technological fields <strong>will share their expertise</strong>, provide insight and impart sufficient technical knowledge, all geared towards preparing the participants for the hackathon. In the hackathon, <strong>teams will compete with one another by creating software</strong>. 
        </p>
      </div>
    </section>
    <section class="about-section" id="eligibility">
      <div class="about-header">
        <p>Eligibility</p>
        <h5>Can I join?</h5>
      </div>
      <div class="about-details">
        <p>
          This competition is open to <strong>all college undergraduate students and senior high school students aged 15-24 nationwide</strong>. Individuals aged 15-24 and currently not enrolled in a school are also eligible to join, provided that they are not a college graduate. Members of each team need not come from the same school or be the same age. Teams will consist of <strong>three to four participants</strong>.
        </p>
      </div>
    </section>
    <section class="cta-section">
      <div>
         <h1>Ready to hack it?</h1>
         <div class="cta-button-wrapper">
            <a href="bit.ly/RegisterHF2020Online" target="_blank" rel="noopener noreferrer"><button class="primary-cta">Register</button></a>
         </div>
        
      </div>
    </section>
  </main>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  margin-top: 30px;
}

#landing {
  min-height: calc(100vh - 76px);
  padding-left: 144px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#landing h2 {
  font-family: "Google Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 48px;
  color: #000000;
  margin: 0 0 24px 0;
}

.hackfest_icon {
  margin-bottom: 24px;
  height: 60px;
}

.hackfest_logo {
  height: 80px;
}

.landing_image {
  height: 720px;
  margin-left: 60px;
}

.landing_button_wrapper {
  display: flex;
}
.primary-cta {
  font-family: "Google Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  background: #4285F4;
  border: 1px solid #4285F4;
  border-radius: 5px;
  padding: 8px 30px;
  margin-right: 16px;
}


.primary-cta:hover {
  background: #FFFFFF;
  color: #4285F4;
  cursor: pointer;
}

.secondary-cta {
  font-family: "Google Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  background: #FFFFFF;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 8px 30px;
}

.secondary-cta:hover {
  cursor: pointer;
  color: #FFFFFF;
  background: #000000;
}

/* SPONSOR SECTION */
.sponsors {
  background: #4285F4;
  padding: 48px 120px;
}

.sponsors h5 {
  font-family: 'Google Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;
  text-align: center;

  color: #FFFFFF;
  margin: 0 0 45px 0;
}

.sponsor-child {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}


.sponsor-child img {
  max-width: 180px;
  object-fit: contain;
  object-position: center;
  margin: 30px;
  
}


/* ABOUT SECTION */
.about-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  padding: 30px 0;
  margin: 30px auto;
  background-color: white;
  box-sizing: border-box;
}
.about-header {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 35%;
  margin-right: 5%;
}
.about-header p {
  font-family: "Google Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 110%;
  text-align: right;
  text-transform: uppercase;
  color: #4285F4;
}
.about-header h5 {
  font-family: "Google Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 110%;
  text-align: right;
  color: #000000;
  margin: 0;
}
.about-details {
  width: 60%;
  padding-top: 52px;
  box-sizing: border-box;
}
.about-details p {
  font-family: "Google Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
  margin-top: 0;
}
.about-details ul {
  padding-left: 20px;
}
.about-details li:nth-child(1) {
  color: #4285F4;
}
.about-details li:nth-child(2) {
  color: #EA4335;
}
.about-details li:nth-child(3) {
  color: #FBBC04;
}
.about-details li:nth-child(4) {
  color: #34A853;
}
.about-details li span {
  font-family: "Google Sans", sans-serif;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
}

.cta-section {
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cta-section h1 {
  font-family: "Google Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 61px;
  margin: 0 0 30px 0;
  color: #000000;
  text-align: center;
}

.cta-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 900px) {
  main {
    margin-top: 60px;
  }

  .landing_image img {
    width: 100%;
  }

  #landing {
    display: block;
    padding-left: 90px;
  }

  .landing_wrapper {
    padding-right: 90px;
  }

  .hackfest_logo {
    height: 60px;
  }
  .landing_image {
    height: 480px;
    margin-top: 30px;
    margin-left: 0;
    display: flex;
    justify-content: flex-end;
    padding-right: 90px;
  }
}

@media screen and (max-width: 768px) {
  #landing {
    padding-left: 60px;
  }

  .landing_wrapper {
    padding-right: 60px;
  }

  .hackfest_logo, .hackfest_icon {
    height: auto;
  }

  
  #landing h2 {
    font-size: 24px;
    line-height: 42px;
    color: #000000;
    margin: 0 0 24px 0;
  }

  .landing_image {
    height: 420px;
    padding-right: 60px;
  }
}

@media screen and (max-width: 540px) {
  #landing {
    padding-left: 30px;
  }

  .landing_wrapper {
    padding-right: 30px;
  }

  .landing_button_wrapper button {
    padding: 8px 16px;
  }

  .landing_image {
    height: 320px;
    padding-right: 30px;
    justify-content: center;
  }
}

@media screen and (max-width: 375px) {
  .landing_image {
    height: 300px;
    padding-right: 30px;
  }
}
</style>
