<template>
  <div class='landing-page'>
    <img src="../assets/images/text-white-yin-fit.png">
    <h2>your go-to space for reclaiming sustainable + bada$s control of your athleticism.</h2>
    <!-- <v-btn class='v-btn'>
      <router-link to="/register">Sign Up!</router-link>
    </v-btn> -->
  </div>
</template>

<style lang='scss' scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
  
  $green: #2aebad;
  a:visited {

  }

  .landing-page {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)), url("../assets/images/generic-picture.jpg");
    /* background: url(../assets/img/generic-picture.jpg); */
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 9rem;
  }

  h2 {
    color: white;
    text-transform: uppercase;
    font-family: 'Roboto Mono';
    padding: 1.5rem 0 1rem 0;
  }

  // .v-btn {
  //   background-color: #2aebad !important;
  //   color: #191919 !important;
  // }
  
  a:visited {
    background-color: #2aebad !important;
    color: #191919 !important;
    text-decoration-line: none !important;
  }
</style>