<template>
  <div id="app">
    <sidebar v-if="!hide"/>
    <router-view/>
  </div>
</template>

<script>
import sidebar from './components/SideBar'

export default {
  name: 'App',
  components: { sidebar },
  computed: {
  hide () {
    return this.$route.path === '/' || this.$route.path === '/register'; 
  }
}
}
</script>

<style>
@import '../node_modules/font-awesome/css/font-awesome.css';
@import '../node_modules/bulma/css/bulma.css';
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html {
  background: #1e1e2a;
}
#app {
  font-family: 'Roboto Condensed', 'Avenir', Helvetica, Arial, sans-serif;
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
