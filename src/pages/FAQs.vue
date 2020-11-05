<template>
  <main>
    <section class="faq-header-wrapper">
        <h1>Frequently Asked Questions</h1>
    </section>
    <section class="faq-section">
      <DropCard>
          <h4 class="drop-day" slot="header">How much is the registration fee?</h4>
          <p slot="details">
            There is no registration fee or hidden charges. The event is entirely free to join.
          </p>
        </DropCard>
      <DropCard>
         <h4 class="drop-day"  slot="header">Do I need to have some background in coding or software development?</h4>
          <p slot="details">
            It is recommended but not necessary to have some background in coding. By the end of the series of online workshops and webinars, participants are expected to have the technical knowledge and skill to know basic web and app development.
          </p>
        </DropCard>
        <DropCard>
          <h4 class="drop-day" slot="header">Do we have to join the event’s Discord server and Facebook Group?</h4>
          <p slot="details">
            Yes. Participants are required to join the official HackFest Discord
            server and HackFest Facebook group. These platforms will be the
            official communication channels between the participants and the
            organizers. Details and announcements regarding the event will be
            posted there.
          </p>
        </DropCard>
        <DropCard>
          <h4 class="drop-day" slot="header">Who should I have on my team?</h4>
          <p slot="details">
            We recommend having at least two designers and two coders with
            some pitching skill.
          </p>
        </DropCard>
        <DropCard>
          <h4 class="drop-day" slot="header">Will we code our output?</h4>
          <p slot="details">
            Yes, the judges will take into account the code written and the
            technology stack used by each team.
          </p>
      </DropCard>
      <DropCard>
          <h4 class="drop-day" slot="header">What tech stack should we be familiar with?</h4>
          <p slot="details">
            Any technology stack used for software engineering will do.
            <br><br>
            <strong>For example:</strong><br>
            Flutter for mobile apps <br>
            Java or Python Tkinter for desktop apps <br>
            HTML/CSS/JS for websites <br>
          </p>
      </DropCard>
      <DropCard>
          <h4 class="drop-day" slot="header">What language should we use for the video presentation and the product pitching?</h4>
          <p slot="details">
            You may use Filipino or English provided that you use only one of either.
          </p>
      </DropCard>
       <DropCard>
          <h4 class="drop-day" slot="header">Where will the workshops and webinars be held?</h4>
          <p slot="details">
            All workshops and webinars will be held on Zoom; the link will be
            provided to participants on the official Facebook group and Discord
            server.
          </p>
      </DropCard>
      <DropCard>
          <h4 class="drop-day" slot="header">When will the prompt be announced?</h4>
          <p slot="details">
            The prompt will be provided before the 48-hour hackathon proper. (November 27, 2020)
          </p>
      </DropCard>
    </section>
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
main {
  margin-top: 76px;
  min-height: 100vh;
  margin-bottom: 120px;
}

.faq-section {
  padding: 0 90px 30px 90px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.faq-section .drop-card {
  width: 48%;
  padding: 0 24px;
}

.faq-section .drop-card .drop-details p {
  font-family: "Google Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */


  color: #000000;
}
.drop-day {
  font-family: "Google Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #4285F4;
}

.faq-header-wrapper {
  padding: 0 90px 30px 90px;
}

.faq-header-wrapper h1 {
  margin: 0 0 40px 0;
  font-family: "Google Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: #000000;
}

@media screen and (max-width: 900px) {
  main {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .faq-section .drop-card {
      width: 100%;
  }

  .faq-header-wrapper {
    font-size: 32px;
    line-height: 48px;
  }
}

@media screen and (max-width: 768px) {

  .faq-header-wrapper, .faq-section {
    padding: 0 60px 0 60px;
  }
  
}

@media screen and (max-width: 540px) {

  .faq-header-wrapper, .faq-section {
    padding: 0 30px 0 30px;
  }

  .faq-header-wrapper h1 {
    font-size: 28px;
    line-height: 36px;
  }
}

@media screen and (max-width: 375px) {

  .faq-header-wrapper, .faq-section {
    padding: 0 16px 0 16px;
  }
}
</style>
