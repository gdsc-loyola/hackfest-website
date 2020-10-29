<template>
    <footer>
      <div class="footer-primary">
        <img src="../assets/hackfest_logo.svg" alt="hackfest-logo" />
        <p>Hackfest 2020 is the Developer Student Club Loyola's (DSC) flagship organised by students for students.</p>
        <img src="#">
      </div>
      <div class="footer-secondary">
        <div class="footer-menu">
          <h6>About</h6>
          <span>Vision</span>
          <span>Mission</span>
        </div>
        <div class="footer-menu">
          <h6>Help</h6>
          <span>Registration</span>
          <span>Sponsorships</span>
        </div>
      </div>
    </footer>

</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  footer {
    display: flex;
    flex-direction: column;
    height: 332px;
    width: 100%;
  }
</style>