<template>
  <nav>
    <div id="desktop-nav">
      <router-link to="/">
          <img
            alt="Developer Student Clubs Loyola logo"
            src="@/assets/icons/hackfest_icon.svg"
          />
        </router-link>
      <ul>
        <router-link tag="li" to="/about">About</router-link>
        <router-link tag="li" to="/schedule">Schedule</router-link>
        <router-link tag="li" to="/mechanics">Mechanics</router-link>
        <router-link tag="li" to="/partners">Partners</router-link>
        <router-link tag="li" to="/faqs">FAQs</router-link>
        <router-link tag="li" to="/contact">Contact</router-link>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdLGlLO3Ys313ia-h3v3zg03VblE-HdlvAsy_e2eDdzp4DA5w/viewform" target="_blank" rel="noopener noreferrer"><button>Register</button></a></li>
      </ul>
    </div>
      
      <div id="mobile-nav">
       <vue-drawer-layout
          :drawer-width="800"
          :enable="true"
          :animatable="true"
          :z-index="0"
          :drawable-distance="Math.floor(800/3)"
          :content-drawable="true"
          :backdrop="false"
          @slide-start="handleSlideStart"
          @slide-move="handleSlideMove"
          @slide-end="handleSlideEnd"
          @mask-click="handleMaskClick"
          ref="drawerLayout">
          <div class="drawer" slot="drawer">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" @click="handleToggleDrawer" id="initial-btn">
                <circle cx="20" cy="20" r="20" fill="#4285F4"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7065 12.2937C27.7996 12.3866 27.8735 12.4969 27.9239 12.6184C27.9743 12.7399 28.0002 12.8701 28.0002 13.0016C28.0002 13.1331 27.9743 13.2633 27.9239 13.3848C27.8735 13.5063 27.7996 13.6166 27.7065 13.7095L13.7092 27.7068C13.5214 27.8945 13.2668 28 13.0013 28C12.7358 28 12.4812 27.8945 12.2935 27.7068C12.1057 27.5191 12.0002 27.2644 12.0002 26.9989C12.0002 26.7334 12.1057 26.4788 12.2935 26.2911L26.2908 12.2937C26.3837 12.2006 26.494 12.1268 26.6155 12.0763C26.7369 12.0259 26.8671 12 26.9986 12C27.1302 12 27.2604 12.0259 27.3818 12.0763C27.5033 12.1268 27.6136 12.2006 27.7065 12.2937V12.2937Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2937 12.2937C12.2006 12.3866 12.1268 12.4969 12.0763 12.6184C12.0259 12.7399 12 12.8701 12 13.0016C12 13.1331 12.0259 13.2633 12.0763 13.3848C12.1268 13.5063 12.2006 13.6166 12.2937 13.7095L26.2911 27.7068C26.4788 27.8945 26.7334 28 26.9989 28C27.2644 28 27.5191 27.8945 27.7068 27.7068C27.8945 27.5191 28 27.2644 28 26.9989C28 26.7334 27.8945 26.4788 27.7068 26.2911L13.7095 12.2937C13.6166 12.2006 13.5063 12.1268 13.3848 12.0763C13.2633 12.0259 13.1331 12 13.0016 12C12.8701 12 12.7399 12.0259 12.6184 12.0763C12.4969 12.1268 12.3866 12.2006 12.2937 12.2937V12.2937Z" fill="white"/>
            </svg>
            <div class="drawer-logo">
              <router-link to="/">
                <img
                  alt="Developer Student Clubs Loyola logo"
                  src="@/assets/icons/hackfest_icon.svg"
                />
              </router-link>
            </div>
            <ul>
                <router-link tag="li" to="/about">About</router-link>
                <router-link tag="li" to="/schedule">Schedule</router-link>
                <router-link tag="li" to="/mechanics">Mechanics</router-link>
                <router-link tag="li" to="/partners">Partners</router-link>
                <router-link tag="li" to="/faqs">FAQs</router-link>
                <router-link tag="li" to="/contact">Contact</router-link>
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdLGlLO3Ys313ia-h3v3zg03VblE-HdlvAsy_e2eDdzp4DA5w/viewform" target="_blank" rel="noopener noreferrer"><button>Register</button></a></li>
            </ul>
          </div>
          <div class="content" slot="content">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" @click="handleToggleDrawer">
              <circle cx="20" cy="20" r="20" fill="#4285F4"/>
              <path d="M11 26H29M11 14H29H11ZM11 20H29H11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
          </div>
        </vue-drawer-layout>
      </div>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      expand: true
    }
  },

  methods: {
      handleToggleDrawer() {
        this.$refs.drawerLayout.toggle();
        let dl = document.querySelector(".drawer-layout")
        let cw = document.querySelector(".content-wrap")
        if(this.expand) {
          dl.style.height = "100vh"
          cw.style.height = "100vh"
          this.expand = false
        } else {
          dl.style.height = "72px"
          cw.style.height = "72px"
          this.expand = true
        } 
      }
    }
};
</script>

<style scoped>
nav {
  top: 0;
  left: 0;
  z-index: 1000;
  background: #fff;
  padding: 16px 40px;
  
}

#desktop-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  letter-spacing: 0.02em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
}

li {
    font-family: Google Sans, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
    margin: 0 16px;
    color: #151522;
    text-decoration: none;
}

li:hover {
    font-weight: bold;
    cursor: pointer;
}


li > a > button {
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
}

li > a > button:hover {
    background: #FFFFFF;
    color: #4285F4;
    cursor: pointer;
}

#mobile-nav {
    display: none
}

.drawer-layout {
  position: fixed !important;
  height: 76px;
}

.content {
  padding: 16px 40px;
}

.drawer {
  background: white;
  padding: 16px 40px;
  min-height: 100vh;
  width: 250px;
  box-sizing: border-box;
}

.drawer-logo {
  display: flex;
  justify-content: center;
  margin: 24px 0 30px 0;
  width: 100%;
}

@media screen and (max-width: 900px) {
  #desktop-nav {
    display: none;
  }

  #mobile-nav {
    display: block;
  }

  ul {
    flex-direction: column;
    justify-content: space-between;
  }

  li {
      font-family: "Google Sans", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 110%;
      margin: 16px 0;
      color: #000000;
      text-align: center;
  }

}

@media screen and (max-width: 768px) {
  .content, .drawer {
    padding: 16px 60px;
  }
}

@media screen and (max-width: 540px) {
  .content, .drawer {
    padding: 16px 30px;
  }
}


@media screen and (max-width: 375px) {
  .content, .drawer {
    padding: 16px;
  }
}

</style>