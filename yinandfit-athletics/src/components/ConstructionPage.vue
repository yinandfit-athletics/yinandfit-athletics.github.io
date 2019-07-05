<template>
  <div class='construction-page'>
    <nav-bar/>
    <div class='container'>
      <p class='title is-1' style="color: white;">Currently under construction &#128296;</p>
      <p class='subtitle is-4' style="color: white;">In the meantime, register below!</p>
      <button class="button" style="align-self:center; font-family: Roboto Mono;" v-on:click="register()">Register Here!</button>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  components: {
    NavBar
  },
  methods: {
    register() {
      this.$router.push({ path: 'register' });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
  .construction-page {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)), url("../assets/images/raise-the-bar.jpg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Mono';
  }

  h2 {
    color: white;
  }

  .button {
    border: none;
  }
  .button:hover, .button:active {
    background-color: #2aebad;
    transition: 0.3s;
  }

  .container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    text-align: center;
    margin-bottom: 5%;
    font-family: 'Roboto Mono' !important;
  }

  @media screen and (max-width: 768px) {
    .container {
      margin-bottom: 40%;
    }

    .is-1 {
      font-size: 2rem;
    }
    .is-3 {
      font-size: 1.15rem;
    }
  }
</style>


