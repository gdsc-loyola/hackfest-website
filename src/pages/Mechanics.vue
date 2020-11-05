<template>
  <main>
        <div class="mechanic-section">
      <div class="mechanics">
        <h1>Rules & Mechanics</h1>
        <p class="definition">
          By participating in this event, you fully and unconditionally agree to comply 
          with the following rules.  Failing to comply with any of the rules 
          automatically bans and disqualifies you and your team from the event 
          and the hackathon, respectively.
        </p>

        <DropCard>
          <h4 class="header-title" slot="header">Eligibility</h4>
          <p slot="details">
            In this session, you will learn the essentials 
            of creating a cohesive marketing strategy for 
            your product or service. The objective is to 
            give you clarity on how best to communicate 
            your solution through the best channel for 
            your target market. Topics include persona 
            creations, insighting, content and distribution 
            strategies, and the basics of digital marketing.
          </p>
        </DropCard>

        <DropCard>
          <h4 class="header-title" slot="header">Registration</h4>
          <ul slot="details">
            <li>
              Registration period will run from October 31 - November 13, 2020.
            </li>
            <li>
              Eligible teams must fill up the registration form provided here: bit.ly/RegisterHF2020Online.
            </li>
            <li>
              By filling up the registration form, you are accepting the event’s rules and regulations.
            </li>
            <li>
              Falsifying information regarding eligibility will result in the immediate disqualification of the entire team.
            </li>
            <li>
              Regarding withdrawal from the competition, teams must submit a short letter explaining their reason for withdrawal to dsc.ateneo@gmail.com with the subject title, “HackFest Withdrawal”. Participants who opt to withdraw from the event merit no compensation from the organizers and will have their data deleted.
            </li>
          </ul>
        </DropCard>

        <DropCard>
          <h4 class="header-title" slot="header">Communication</h4>
          <p slot="details">
            In this session, you will learn the essentials 
            of creating a cohesive marketing strategy for 
            your product or service. The objective is to 
            give you clarity on how best to communicate 
            your solution through the best channel for 
            your target market. Topics include persona 
            creations, insighting, content and distribution 
            strategies, and the basics of digital marketing.
          </p>
        </DropCard>

        <DropCard>
          <h4 class="header-title" slot="header">Webinars & Workshops</h4>
          <p slot="details">
            In this session, you will learn the essentials 
            of creating a cohesive marketing strategy for 
            your product or service. The objective is to 
            give you clarity on how best to communicate 
            your solution through the best channel for 
            your target market. Topics include persona 
            creations, insighting, content and distribution 
            strategies, and the basics of digital marketing.
          </p>
        </DropCard>

        <h1>Hackathon Proper</h1>
        <p class="definition">
          The 48-hour hackathon proper will be further divided into two parts: 
          the Elimination Round and the Final Round. All teams will 
          participate in the elimination round, while the Top 10 teams 
          advance to the finals.
        </p>

        <DropCard>
          <h4 class="header-title" slot="header">Elimination Round</h4>
          <p slot="details">
            In this session, you will learn the essentials 
            of creating a cohesive marketing strategy for 
            your product or service. The objective is to 
            give you clarity on how best to communicate 
            your solution through the best channel for 
            your target market. Topics include persona 
            creations, insighting, content and distribution 
            strategies, and the basics of digital marketing.
          </p>
        </DropCard>

        <DropCard>
          <h4 class="header-title" slot="header">Finalists’ Pitching</h4>
          <p slot="details">
            In this session, you will learn the essentials 
            of creating a cohesive marketing strategy for 
            your product or service. The objective is to 
            give you clarity on how best to communicate 
            your solution through the best channel for 
            your target market. Topics include persona 
            creations, insighting, content and distribution 
            strategies, and the basics of digital marketing.
          </p>
        </DropCard>

        <DropCard>
          <h4 class="header-title" slot="header">Prizes & Certificates</h4>
          <p slot="details">
            In this session, you will learn the essentials 
            of creating a cohesive marketing strategy for 
            your product or service. The objective is to 
            give you clarity on how best to communicate 
            your solution through the best channel for 
            your target market. Topics include persona 
            creations, insighting, content and distribution 
            strategies, and the basics of digital marketing.
          </p>
        </DropCard>

      </div>
      <img src="../assets/mechanics-img.png" class="mechanics-img"  alt="teacher" />
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

h1, h4, p, ul, li{
  font-family: "Google Sans", sans-serif;
  margin: 0%;
}

ul {
  list-style: none; 
}

ul li::before {
  content: "\2022"; 
  color: #4285F4; 
  font-weight: bold;
  display: inline-block; 
  width: 1em; 
  margin-left: -1em;
  margin-top: 15px;
}

.mechanic-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 50px;
}

.mechanics {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  width: 60%;
}

.mechanics h1 {
  align-self: start;
  font-weight: bold;
  font-size: 40px;
  line-height: 110%;
  color: #000000;
  margin: 30px 0 10px;
}

.header-title {
  font-weight: 500;
  font-size: 25px;
  line-height: 120%;
  color: #4285F4;
}

.definition {
  margin-bottom: 30px;
}

@media screen and (max-width: 1000px) {

  .mechanics {
    width: 100%;
    margin: 0 50px;
  }

  .mechanics-img {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  .mechanics {
    margin: 0 25px;
    
  }
  .header-title {
    font-size: 16px;
  }
}
</style>
