<template>
    <nav>
        <img src="../assets/hackfest_logo.svg" alt="hackfest-logo" />
        <a href="#">Buy Tickets</a>
    </nav>

</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 0 40px;
    box-sizing: border-box;
}

a {
    font-family: "Google Sans", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    text-decoration: none;
    padding: 10px 20px;
    background: #4285F4;
    border-radius: 4px;
}

@media screen and (max-width: 600px) {
    img {
        width: 200px;
    }

    a {
        font-size: 14px;
        padding: 10px 15px;
    }
}

@media screen and (max-width: 500px) {
    nav {
        padding: 0 15px;
    }

    img {
        width: 180px;
    }

    a {
        font-size: 11px;
        padding: 7px 14px;
    }
}
</style>
