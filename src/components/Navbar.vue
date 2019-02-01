<template>
  <nav class="navbar is-info is-fixed-top" role="navigation">
    <div class="navbar-brand">
      <h1 class="navbar-item title is-4">HYDROSYS</h1>
    </div>
    <div class="navbar-end">
      <a class="navbar-item" href="https://www.facebook.com/brunosvieira" target="_blank">
        <i class="fab fa-facebook-square fa-2x"></i>
      </a>
      <a class="navbar-item" href="https://github.com/brvieira" target="_blank">
        <i class="fab fa-github fa-2x"></i>
      </a>
      <a
        class="navbar-item"
        href="https://www.linkedin.com/in/bruno-vieira-33481910b/"
        target="_blank"
      >
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar"
};
</script>
<style scoped>
.navbar {
  margin-bottom: 3rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}

.title {
  font-family: sans-serif
}
</style>
