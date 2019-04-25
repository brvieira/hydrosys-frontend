<template>
  <div class="left-bar">
    <p class="bar-title"><strong>HYDRO</strong>SYS</p>
    <hr>
  </div>
</template>
<script>
export default {
  name: "SideBar",
  methods: {

  }
};
</script>
<style scoped>
.left-bar {
  padding: 15px 5px;
  left: 10px;
  border-radius: 5px;
  z-index: 31;
  position: fixed;
  height: 95%;
  width: 4rem;
  background: linear-gradient(0deg,#389466,#42b883);;
  top: calc(5vh / 2);
  transition: width 0.5s linear;
}

p.bar-title, p.bar-title strong {
  color: aliceblue;
  font-size: 10px;
  transition: font-size 0.5s linear;
}

.left-bar:hover {
  width: 15rem;
}

.left-bar:hover p.bar-title, .left-bar:hover p.bar-title strong {
  font-size: 2rem;
}

hr {
  margin: 0 1.5rem;
  height: 1.5px;
}

</style>
