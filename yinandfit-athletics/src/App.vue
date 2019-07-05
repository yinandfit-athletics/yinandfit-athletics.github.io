<template>
  <transition name="fade">
    <router-view/>
  </transition>
</template>

<script>
import Home from './views/Home';
import HelloWorld from './components/HelloWorld';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar,
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style lang='scss' scoped>
  .fade-enter-active {
    transition: opacity .65s;
  }
  .fade-enter /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
