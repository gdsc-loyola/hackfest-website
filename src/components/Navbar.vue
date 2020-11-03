<template>
  <nav>
      <router-link to="/">
          <img
            alt="Developer Student Clubs Loyola logo"
            src="@/assets/hackfest_icon.svg"
          />
        </router-link>
      <ul
        id="desktop-nav"
      >
       <router-link tag="li" to="/about">About</router-link>
       <router-link tag="li" to="/schedule">Schedule</router-link>
       <router-link tag="li" to="/mechanics">Mechanics</router-link>
       <router-link tag="li" to="/partners">Partners</router-link>
       <router-link tag="li" to="/faqs">FAQs</router-link>
       <router-link tag="li" to="/contact">Contact</router-link>
       <li><a href="bit.ly/RegisterHF2020Online" target="_blank" rel="noopener noreferrer"><button>Register</button></a></li>
      </ul>
  </nav>
</template>

<script>
export default {
};
</script>

<style scoped>
nav {
  top: 0;
  left: 0;
  z-index: 1000;
  background: #fff;
  padding: 16px 40px;
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
</style>