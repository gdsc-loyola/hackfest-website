<template>
  <div class="landing">

    <div class="hero-about-section">
      <div class="hero-section">
        <div class="hero-details">
          <h1>
            Uplifting Communities <br />
            Through <span>Technology</span>
          </h1>
          <div class="hero-date">
            <img src="../assets/calendar.svg" alt="calendar-icon" />
            <div>
              <p>April 18, 2020</p>
              <p>8:00 AM - 5:00 PM</p>
            </div>
          </div>
          <div class="hero-location">
            <img src="../assets/location.svg" alt="location-icon" />
            <div>
              <p>Ateneo de Manila Univeristy</p>
              <p>Loyola Schools Campus</p>
            </div>
          </div>
        </div>
        <img class="hero-img" src="../assets/DSC Illustration 1.png" alt="DSC" />
      </div>
      <div class="about-section">
        <div class="about-header">
          <p>About</p>
          <h5>Hack <br> Festival</h5>
        </div>
        <div class="about-details">
          <p>
            HackFest 2020: Online is a 10-day event composed of online technical workshops, webinars, and a 48-hour hackathon proper where students can exercise the skills they learned by coming up with creative, digital solutions to a given problem through the use of technology. Experts from different technological fields will share their expertise, provide insight and impart sufficient technical knowledge, all geared towards preparing the participants for the hackathon. In the hackathon, teams will compete with one another by creating software applications that address the present-day plight of Filipinos across the country.
            <br>
            This competition is open to all college undergraduate students and senior high school students nationwide. Members of each time need not come from the same school or be the same age. Each team will consist of three to four participants, guided all-throughout the event by a team mentor assigned by the HackFest 2020: Online Event Committee.
          </p>
          <ul>
            <li><span>Web and Mobile Development</span></li>
            <li><span>Data Science and Cloud</span></li>
            <li><span>Business in Tech</span></li>
            <li><span>Women and Student in Tech</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sponsors">
      <h5>Sponsors</h5>
      <div class="sponsor-child">
        <img src="../assets/Ellipse 46.png" alt="Sponsor 1">
        <img src="../assets/Ellipse 46.png" alt="Sponsor 1">
        <img src="../assets/Ellipse 46.png" alt="Sponsor 1">
        <img src="../assets/Ellipse 46.png" alt="Sponsor 1">
        <img src="../assets/Ellipse 46.png" alt="Sponsor 1">
        <img src="../assets/Ellipse 46.png" alt="Sponsor 1">
        <img src="../assets/Ellipse 46.png" alt="Sponsor 1">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Landing'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landing {
  width: 100%;
}

.hero-about-section {
  width: 100%;
  background: url('../assets/grid.png');
  background-size: cover;
  padding-bottom: 340px;
}

.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px 0 20px;
  box-sizing: border-box;
}

.hero-details {
  margin: 0 0 170px 100px;
}

.hero-details h1{
  font-family: "Google Sans", sans-serif;
  font-weight: 500;
  font-size: 4vw;
  color: #000000;
}

.hero-details h1 span{
  color: #4285F4;
}

.hero-date,
.hero-location {
  display: flex;
  margin-bottom: 10px;
}

.hero-date img, 
.hero-location img {
  width: 2.1vw;
  margin-right: 15px;
}

.hero-date div p:nth-child(1), 
.hero-location div p:nth-child(1) {
  font-family: "Google Sans", sans-serif;
  font-size: 1.2vw;
  color: #000000;
  margin: 0;
}

.hero-date div p:nth-child(2), 
.hero-location div p:nth-child(2) {
  font-family: "Google Sans", sans-serif;
  font-size: 1vw;
  color: #000000;
  margin: 0;
}

.hero-img {
  width: 45%;
}

.about-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  padding: 40px 25px 25px 25px;
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
  font-size: 16px;
  color: #4285F4;
}

.about-header h5 {
  font-family: "Google Sans", sans-serif;
  font-weight: 500;
  font-size: 21px;
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
  font-size: 16px;
  line-height: 21px;
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

.sponsors {
  width: 100vw;
  background-color: #FAFAFA;
  height: 350px;
}

.sponsors h5 {
  font-family: "Google Sans", sans-serif;
  display: flex;
  justify-content: center;
  padding: 12px 0;
  font-size: 32px;
  font-weight: 500;
  margin: 0;
}

.sponsor-child {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 48px;
}

.sponsor-child img {
  height: 160px;
  width: 160px;
  padding-right: 44px;
}

.sponsor-child img:last-child {
  padding: 0;
}

@media screen and (max-width: 800px) {
  .hero-section {
    flex-direction: column;
  }

  .hero-details {
    align-self: flex-start;
    margin: 0 0 0 80px;
  }

  .hero-details h1{
    font-size: 6vw;
  }

  .hero-date img, 
  .hero-location img {
    width: 3vw;
    margin-right: 15px;
  }

  .hero-date div p:nth-child(1), 
  .hero-location div p:nth-child(1) {
    font-size: 2.2vw;
  }

  .hero-date div p:nth-child(2), 
  .hero-location div p:nth-child(2) {
    font-size: 2vw;
  }

  .hero-img {
    align-self: flex-end;
  }
}

@media screen and (max-width: 400px) {
  .hero-details {
    align-self: center;
    margin: 0;
  }
}
</style>
