<template>
  <div>
    <div class='hello'>
      <div class='top-bottom'>
        <a href='/'><img src="../assets/images/text-yin-fit-cropped.png"></a>
        <h2 style="padding: 1rem;">
          Your athleticsm starts here.<br/>
          Get your first-hand updates below!
        </h2>
      </div>
      
      
      <form class='form middle'>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" v-model="name" placeholder="e.g Alex Smith">
            </div>
            <p class="help is-danger" v-bind:class="{show: isNameValid}">Please enter a valid name.</p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" v-model="email" placeholder="e.g. alexsmith@gmail.com">
            </div>
            <p class="help is-danger" v-bind:class="{show: isEmailValid}">Please enter a valid email.</p>
          </div>
        
        <div class='wrapper'>
          <button class="button" style="text-align: center;" v-on:click="register()">Register</button>
        </div>
        
      </form>
      
      <footer class='footer' style='background-color: white;'>
        <div class="content has-text-centered">
          &copy; 2019 YIN & FIT Athletics.
          <!-- <span>Footer_placeholder</span>
          <span>Footer_placeholder</span>
          <span>Footer_placeholder</span> -->
        </div>
      </footer>
      
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
        isValid: false,
        isNameValid: true,
        isEmailValid: true
      }
    },
    methods: {
      register() {
        if (this.name === "") {
          this.isValid = false;
          this.isNameValid = false;
        } else {
          this.isNameValid = true;
        }
        if (this.email === "") {
          this.isValid = false;
          this.isEmailValid = false;
        } else {
          this.isValid = this.isEmailValid = (this.reg.test(this.email)) ? true : false;
        }
        console.log('isvalid', this.isValid);
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
  $dark-grey: #48484a;

  * {
    font-family: 'Roboto Mono';
    color: $dark-grey;
  }
  img {
    height: 100px;
  }
  .hello {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .middle {
    flex: 1;
    width: 90vw;
    max-width: 500px;
    margin: 0 auto;
  }

  .top-bottom {
    text-align: center;
    height: 30%;
    padding: 1rem;
  }

  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    background-color: #2aebad !important;
    margin: 0 auto;
  }

  .footer-link {
    padding: 0 1rem;
  }

  .wrapper {
    display: flex;
    justify-content: center;
  }

  .show {
    visibility: hidden;
  }
</style>
