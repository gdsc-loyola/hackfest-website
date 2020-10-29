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
            Hackfest 2020 is the Developer Student Clubs’ flagship 
            technology conference organized by students. This is 
            a one-day event that aims to equip aspiring innovators 
            with much-coveted technological insights to aid them 
            in the process of shaping the future they wish to behold. 
            In line with this, the event will be addressing 4 of the 
            current hot trends in tech, namely:
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

    <div class="keynote">
      <h1>"Keynote Speaker"</h1>
      <div class="keynote-speakers">
        <div class="keynote-speaker">
          <img src="../assets/shad.png" alt="sirshad" />
          <h5>Shad Roi de la Cruz</h5>
          <p>DSC Manager, Google</p>
        </div>
        <div class="keynote-speaker">
          <img src="../assets/frabau.png" alt="frabau" />
          <h5>Francis Bautista</h5>
          <p>Co-Founder, Indigo Research</p>
        </div>
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
  padding-bottom: 30px;
  box-sizing: border-box;
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

.keynote {
  display: none;
  flex-direction: column;
  background-color: #4285F4;
}

.keynote h1 {
  font-family: "Google Sans", sans-serif;
  font-weight: 500;
  font-size: 31.25px;
  text-align: center;
  color: #FFFFFF;
  margin: 40px 0;
}

.keynote-speakers {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
}

.keynote-speaker {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.keynote-speaker img {
  width: 200px;
}

.keynote-speaker h5 {
  font-family: "Google Sans", sans-serif;
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  color: #FFFFFF;
  margin: 20px 0 0;
}

.keynote-speaker p {
  font-family: "Google Sans", sans-serif;
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  color: #FFFFFF;
  margin: 5px 0 5px;
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
    width: 70%;
    margin-top: 20px;
  }

  .about-section {
    flex-direction: column;
  }

  .about-header {
    width: 100%;
    align-items: flex-start;
  }

  .about-header h5{
    font-size: 30px;
    text-align: left;
  }

  .about-details {
    width: 100%;
    padding-top: 20px;
  }

  .keynote-speakers {
    flex-direction: column;
    margin-bottom: 0;
  }

  .keynote-speaker {
    margin-bottom: 70px;
  }
}

@media screen and (max-width: 400px) {
  .hero-details {
    align-self: center;
    margin: 0;
  }

  .hero-details h1{
    font-size: 20px;
  }

  .hero-date img, 
  .hero-location img {
    width: 20px;
    margin-right: 15px;
  }

  .hero-date div p:nth-child(1), 
  .hero-location div p:nth-child(1) {
    font-size: 15px;
  }

  .hero-date div p:nth-child(2), 
  .hero-location div p:nth-child(2) {
    font-size: 13px;
  }

  .about-details p {
    font-size: 14px;
  }

  .about-details li span {
    font-size: 14px;
  }
}
</style>
