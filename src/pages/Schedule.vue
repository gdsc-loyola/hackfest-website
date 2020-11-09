<template>
  <main>
    <div class="timeline-section">
      <h1 class="timeline-header">Timeline</h1>
      <div class="collage">
        <div class="row">
          <div class="block-sm light-red">
            <p>Oct 31 - Nov 13</p>
            <h1>Registration <br /> Period</h1>
          </div>
          <div class="block-sm blue">
            <p>November 20</p>
            <p>7:00 PM - 8:05 PM</p>
            <h1>Opening <br /> Ceremony</h1>
          </div>
          <div class="block-lg maroon">
            <p>Nov 21 - Nov 26</p>
            <p>5:00 PM - 8:00 PM</p>
            <h1>Online <br /> Workshops</h1>
          </div>
        </div>
        <div class="row">
          <div class="block-lg yellow">
            <p>Nov 27 - Nov 29</p>
            <p>1:00 PM - 1:00 PM</p>
            <h1>Hackathon <br /> Proper</h1>
          </div>
          <div class="block-sm orange">
            <p>Nov 29</p>
            <p>7:00 PM</p>
            <h1>Top 10 <br /> Finalists</h1>
          </div>
          <div class="block-sm green">
            <p>Nov 30</p>
            <p>1:00 PM Onwards</p>
            <h1>Final <br /> Pitching</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="workshop-section">
      <div class="workshops">
        <h1>Workshops</h1>

        <DropCard>
          <div class="drop-header-details" slot="header">
              <div class="drop-header-details-primary">
                <h4 class="drop-day">Day 1</h4>
                <div class="drop-title-speaker">
                  <h4>Product Pitching</h4>
                  <p>Matt Tan, Chief Operations Officer of Exora Technologies Inc.</p>
                </div>
              </div>
              <h4 class="drop-time">4:50 - 6:35 PM</h4>
          </div>
          <p slot="details">
            Learn how to get your message across by exploring the facets of perfect hooks, seller-customer relationships, and problem-solving. 
          </p>
        </DropCard>
        <DropCard>
          <div class="drop-header-details" slot="header">
              <div class="drop-header-details-primary">
                <h4 class="drop-day">Day 1</h4>
                <div class="drop-title-speaker">
                  <h4>Marketing</h4>
                  <p>Miggy Azurin, Managing Partner of Huskee Digital</p>
                </div>
              </div>
              <h4 class="drop-time">6:35 - 8:00 PM</h4>
          </div>
          <p slot="details">
            In this session, you will learn the essentials of creating 
            a cohesive marketing strategy for your product or service. 
            The objective is to give you clarity on how best to 
            communicate your solution through the best channel for 
            your target market. Topics include persona creations, 
            insighting, content and distribution strategies, and the 
            basics of digital marketing.
          </p>
        </DropCard>

        <DropCard>
          <div class="drop-header-details" slot="header">
              <div class="drop-header-details-primary">
                <h4 class="drop-day">Day 2</h4>
                <div class="drop-title-speaker">
                  <h4>Intro to UX/UI Design</h4>
                  <p>Francis Alturas, co-founder and Chief Design Officer of Abstract Digital</p>
                </div>
              </div>
              <h4 class="drop-time">4:50 - 6:25 PM</h4>
          </div>
          <p slot="details">
            Through a fun game and a little show-and-tell, designers 
            will get bite-sized tips & tricks to improve their user 
            interface.
          </p>
        </DropCard>

        <DropCard>
          <div class="drop-header-details" slot="header">
              <div class="drop-header-details-primary">
                <h4 class="drop-day">Day 3</h4>
                <div class="drop-title-speaker">
                  <h4>Prototyping with Figma</h4>
                  <p>Polly Baterna, UX Researcher at Kumu & Ceej Atienza, Product Manager at TAYO</p>
                </div>
              </div>
              <h4 class="drop-time">4:50 - 7:35 PM</h4>
          </div>
          <p slot="details">
            Design is at the core of most apps and websites we see. In this workshop, you will learn how to create a prototype for your idea — from creating shapes, to adding text, all the way to designing the visuals and interactions of your different screens using Figma, a collaborative prototyping tool.
          </p>
        </DropCard>
        <DropCard>
          <div class="drop-header-details" slot="header">
              <div class="drop-header-details-primary">
                <h4 class="drop-day">Day 3</h4>
                <div class="drop-title-speaker">
                  <h4>Product Pitching</h4>
                  <p>JP Bayang, Founder of Bayay Innovation Hub</p>
                </div>
              </div>
              <h4 class="drop-time">7:35 - 8:55 PM</h4>
          </div>
          <p slot="details">
            The topic of crafting an elevator pitch will revolve around techniques, structure, the art of persuasion, and profiling. Based on his experience, JP Bayang will discuss attitude towards pitching, rebuttal, rejection, and the recommended steps to make your 30-second product elevator pitch worthwhile for your desired listener from preparation to exit. In this session, you will also learn from cases of successful and unsuccessful elevator pitches done by founders that we know.
          </p>
        </DropCard>
        <DropCard>
          <div class="drop-header-details" slot="header">
              <div class="drop-header-details-primary">
                <h4 class="drop-day">Day 4</h4>
                <div class="drop-title-speaker">
                  <h4>Intro to WebDev</h4>
                  <p>Arnelle Balane, Google Developer Expert in Web Technologies</p>
                </div>
              </div>
              <h4 class="drop-time">4:50 - 8:00 PM</h4>
          </div>
          <p slot="details">
            Web development is the process of building websites and 
            applications for the Internet. In this talk we will 
            take at the different areas of focus in Web development.
            We will start with discussing the fundamentals of each area 
            and end with a workshop where we will build our first website.
          </p>
        </DropCard>

        <DropCard>
          <div class="drop-header-details" slot="header">
              <div class="drop-header-details-primary">
                <h4 class="drop-day">Day 5</h4>
                <div class="drop-title-speaker">
                  <h4>Flutter</h4>
                  <p>Joni Sindo and Joshua de Guzman, Flutter Philippines Community Organizers</p>
                </div>
              </div>
              <h4 class="drop-time">4:50 - 8:00 PM</h4>
          </div>
          <p slot="details">
            This workshop aims to help the participants get a good understanding of how state management works with Flutter without having to deal with so much complexity.
          </p>
        </DropCard>


        <DropCard>
          <div class="drop-header-details" slot="header">
              <div class="drop-header-details-primary">
                <h4 class="drop-day">Day 6</h4>
                <div class="drop-title-speaker">
                  <h4>Intro to Firebase</h4>
                  <p>Harvey Sison, Full Stack UX Engineer</p>
                </div>
              </div>
              <h4 class="drop-time">4:50 - 8:00 PM</h4>
          </div>
          <p slot="details">
            Firebase is a developer platform, powered by Google, with a 
            diverse set of tools and services such as hosting, database 
            management and storage as well as authentication and analytics. 
            In this workshop, you’ll learn how to utilize Firebase for both 
            your web and mobile application from scratch with no experience 
            needed.
          </p>
        </DropCard>

      </div>
      <img src="../assets/workshop-img.png" class="workshop-img"  alt="teacher" />
    </div>

    <div class="schedule-section">
      <h1 class="schedule-header">Hackathon Schedule</h1>
      <div class="table">
        <div class="col">
          <p class="col-header"> Date </p>
          <p>Nov 27, 2020</p>
          <p>Nov 27-29, 2020</p>
          <p>Nov 29, 2020</p>
          <p>Nov 30, 2020</p>
        </div>
        <div class="col">
          <p class="col-header"> Time </p>
          <p>TBD</p>
          <p>1:00 PM (48 Hours)</p>
          <p>TBD</p>
          <p>1:00 - 5:00 PM</p>
        </div>
        <div class="col">
          <p class="col-header"> Activity </p>
          <p>Opening Ceremony</p>
          <p>Hackathon (48 hours)</p>
          <p>Announcement of Winners</p>
          <p>Pitching</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import DropCard from '@/components/DropCard.vue'

export default {
  components: {
    DropCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h4, p {
  font-family: "Google Sans", sans-serif;
  margin: 0%;
}

.timeline-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 50px;
  box-sizing: border-box;
}

.timeline-header{
  font-family: "Google Sans", sans-serif;
  font-weight: bold;
  font-size: 48px;
  line-height: 61px;
  text-align: center;
  color: #000000;
  margin: 30px 0;
}

.collage {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.row {
  display: flex;
  width: 100%;
}

.row p {
  font-size: 20px;
  color: #FFFFFF;
  line-height: 140%;
}

.row h1 {
  font-weight: bold;
  font-size: 35px;
  color: #FFFFFF;
  text-align: left;
  line-height: 110%;
}

.row:nth-child(1) {
  margin-bottom: 10px;
}

.block-sm {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 30%;
  height: 300px;
  padding: 20px;
  box-sizing: border-box;
}

.block-lg {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 40%;
  height: 300px;
  padding: 20px;
  box-sizing: border-box;
}

.block-lg {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 39%;
  height: 300px;
}

.block-sm {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 29%;
  height: 300px;
}

.light-red {
  background-color: #EA4335;
}

.blue {
  background-color: #4285F4;
  margin: 0 1%;
}

.maroon {
  background-color: #A50E0E;
}

.yellow {
  background-color: #FBBC04;
}

.orange {
  background-color: #E37400;
  margin: 0 1%;
}

.green {
  background-color: #0F9D58;
}

/* WORKSHOP SECTION */

.workshop-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 50px;
}

.workshops {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  width: 60%;
}

.workshops h1 {
  align-self: start;
  font-weight: bold;
  font-size: 40px;
  line-height: 110%;
  color: #000000;
  margin: 20px 0 30px;
}

.drop-header-details {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: calc(100% - 35px);
}

.drop-header-details-primary {
  display: flex;
  align-items: flex-start;
  width: calc(100% - 130px);
}

.drop-day {
  font-weight: 500;
  font-size: 25px;
  line-height: 120%;
  color: #4285F4;
}

.drop-title-speaker {
  margin-left: 10%;
}

.drop-title-speaker h4 {
  font-weight: bold;
  font-size: 25px;
  line-height: 120%;
  color: #000000;
}

.drop-title-speaker p {
  font-size: 16px;
  line-height: 110%;
  color: #000000;
}

.drop-time {
  align-self: center;
  margin-right: 15px;
  color: #4285F4;
}

/* SCHEDULE SECTION */

.schedule-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 50px;
  box-sizing: border-box;
  margin: 50px 0;
}

.schedule-header{
  font-family: "Google Sans", sans-serif;
  font-weight: bold;
  font-size: 48px;
  line-height: 61px;
  text-align: center;
  color: #000000;
  margin: 30px 0;
}

.table {
  display: flex;
  width: 100%;
  padding: 20px;
  border: 1px solid #4285F4;
  box-sizing: border-box;
  border-radius: 15px;
}

.table p {
  margin: 20px 0;
  text-align: center;
}

.col {
  width: calc(100% / 3);
}

.col:nth-child(1) p {
  font-weight: bold;
}

.col-header {
  font-weight: bold;
  color: #4285F4;
}



@media screen and (max-width: 1000px) {

  .workshops {
    width: 100%;
    margin: 0 50px;
  }

  .workshop-img {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  .row {
    flex-direction: column;
  }

  .row:nth-child(1) {
    margin-bottom: 0;
  }


  .light-red, 
  .blue, 
  .maroon, 
  .yellow, 
  .orange, 
  .green {
    width: 100%;
    height: 200px;
    margin: 0 0 10px;
  }
}

@media screen and (max-width: 630px) {
  .schedule-section {
    padding: 0 15px;
  }

  .schedule-header{
    font-size: 25px;
    line-height: 40px;
  }

  .table p {
    font-size: 12px;
  }
}

@media screen and (max-width: 600px) {
  .timeline-section {
    padding: 0 15px;
  }
  
  .workshops {
    margin: 0 15px;
  }
  
  .drop-header-details {
    flex-direction: column-reverse;
    width: calc(100% - 30px);
  }

  .drop-header-details-primary {
    width: 100%;
  }

  .drop-day,
  .drop-title-speaker h4 {
    font-size: 18px;
  }

  .drop-title-speaker p {
    font-size: 15px;
  }

  .drop-time {
    align-self: flex-start;
    margin-bottom: 10px;
  }
}

</style>
