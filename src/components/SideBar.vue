<template>
  <div class="left-bar" id="bar">
    <div class="content">
      <router-link to="/inicio" tag="p" class="bar-title"><b>HYDRO</b>SYS</router-link>
      <hr>
      <div v-for="(node, index) of usuario.token" :key="index" class="menu-item">
        <router-link tag="p" :to="{ name: 'dashboard', params: { token: node.token }}">{{index+1}} - {{node.nome}}</router-link>
      </div>
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
  background: linear-gradient(0deg, #238855, #42b883);
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

.bar-title:hover {
  cursor: pointer;
}

.bar-title,
hr,
ul li {
  display: block;
}

p.bar-title,
p.bar-title strong {
  color: aliceblue;
  font-size: 2rem;
  transition: font-size 0.5s linear;
}

hr {
  margin: 0 0.75rem;
  height: 1px;
  margin-bottom: 1rem;
}

.menu-item {
  height: 4rem;
  padding: 0 0.75rem;
}

.menu-item p {
  line-height: 4rem;
  border-radius: 5px;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: left;
  padding-left: 1rem;
}

.menu-item p:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3)
}
</style>
