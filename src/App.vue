<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/Navbar'

export default {
  name: 'App',
  components: { navbar }
}
</script>

<style>
@import '../node_modules/font-awesome/css/font-awesome.css';
@import '../node_modules/bulma/css/bulma.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

i {
  font-family: fontawesome;
  font-style: normal;
}
</style>
