<template>
  <div id="app">
    <navbar v-if="!hideNav"/>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import navbar from "./components/Navbar";

export default {
  name: "App",
  components: { navbar },
  computed: {
    hideNav() {
      return this.$route.path === "/" || this.$route.path === "/cadastro";
    }
  }
};
</script>

<style>
@import "../node_modules/font-awesome/css/font-awesome.css";
@import "../node_modules/bulma/css/bulma.css";
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

html {
  background: #1e1e2a;
}
#app {
  font-family: "Roboto Condensed", "Avenir", Helvetica, Arial, sans-serif;
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
