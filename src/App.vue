<template>
  <div id="app">
    <sidebar/>
    <router-view/>
  </div>
</template>

<script>
import sidebar from './components/SideBar'

export default {
  name: 'App',
  components: { sidebar }
}
</script>

<style>
@import '../node_modules/font-awesome/css/font-awesome.css';
@import '../node_modules/bulma/css/bulma.css';

html {
  background: #1e1e2a;
}
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
