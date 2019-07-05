<template>
  <div>
    <NavBar/>
    <LandingPage/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import NavBar from '../components/NavBar';
import LandingPage from '../components/LandingPage';

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar,
    LandingPage
  },
  data () {
    return {
      //
    }
  }
}
</script>
