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
  font-family: Google Sans, sans-serif;
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
  margin-right: 16px;
}


.primary-cta:hover {
  background: #FFFFFF;
  color: #4285F4;
  cursor: pointer;
}

.secondary-cta {
  font-family: Google Sans, sans-serif;
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

@media screen and (max-width: 900px) {
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
    height: 360px;
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
