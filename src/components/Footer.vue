<template>
    <footer>
      <div class="footer-primary">
        <img src="../assets/hackfest_logo.svg" alt="hackfest-logo" />
        <p>Hackfest 2020 is the Developer Student Club Loyola's (DSC) flagship organised by students for students.</p>
        <img src="#">
        <img>
        <img>
      </div>
      <div class="footer-secondary">
        <div class="footer-menu">
          <h4>About</h4>
          <a href="#">Who is DSC Loyola?</a>
        </div>
        <div class="footer-menu">
          <h4>Help</h4>
          <a href="#">Registration</a>
          <a href="#">Sponsorships</a>
        </div>
      </div>
    </footer>

</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  footer {
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 332px;
    width: 100%;
    box-sizing: border-box;
    font-family: "Google Sans", sans-serif;
  }

  .footer-secondary {
    display: flex;
    flex-direction: row;
  }

  .footer-menu {
    display: flex;
    flex-direction: column;
    padding-left: 40px;
  }

  .footer-menu a {
    text-decoration: none;
    color: #000000;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    .footer {
      flex-direction: column;
    } 

    .footer-secondary {
      flex-direction: column;
      right: auto;
    }
  }

  /* @media screen and (max-width: 500px) {
  } */
</style>