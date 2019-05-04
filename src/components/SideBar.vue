<template>
  <div class="left-bar" id="bar">
    <div class="content">
      <p class="bar-title">
        <b>HYDRO</b>SYS
      </p>
      <hr>
      <ul>
        <li v-for="(node, index) of usuario.token" :key="index">
          <p>{{node.nome}}</p>
        </li>
      </ul>
      <router-link to="/addnode" class="add-button">
        <h1>+</h1>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "SideBar",
  props: {
    widthBar: {
      type: String
    }
  },
  computed: {
    usuario: function() {
      return JSON.parse(localStorage.getItem("usuario"));
    }
  },
  watch: {
    widthBar(newValue) {
      document.getElementById("bar").style.width = newValue + "rem";
    }
  },
  mounted() {
    document.getElementById("bar").style.width = this.widthBar + "rem";
  }
};
</script>
<style scoped>
.left-bar {
  padding-top: 60px;
  left: 0;
  z-index: 31;
  position: fixed;
  height: 100%;
  width: 0;
  background: linear-gradient(0deg, #389466, #42b883);
  top: 0;
  transition: 0.4s;
  overflow-x: hidden;
}

.left-bar .content {
  min-width: 15rem;
  position: relative;
  height: 100%;
}

.content ul {
  margin-left: 0;
  margin-right: 0; 
}

.content p {
  margin: 0;
}

.bar-title,
hr,
ul li,
.add-button {
  display: block;
}

p.bar-title,
p.bar-title strong {
  color: aliceblue;
  font-size: 2rem;
  transition: font-size 0.5s linear;
}

hr {
  margin: 0 1.5rem;
  height: 1.5px;
}

.add-button {
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  background: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.add-button h1 {
  line-height: 3rem;
  font-size: 2rem;
  color: #42b883;
}

.add-button:hover {
  cursor: pointer;
  box-shadow: 3px 5px 7px -1px black;
}
</style>
