<template>
  <nav v-if="loaded" class="navbar is-fixed-top">
    <div class="navbar-start">
      <div class="navbar-item">
        <i @click="openMenu" class="fas fa-bars fa-lg has-text-white"></i>
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item username">
        {{usuario.nome}}
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <span class="navbar-link">
          <i class="fas fa-user-circle fa-2x"></i>
        </span>
        <div class="navbar-dropdown is-right">
          <router-link to="/manageuser" class="navbar-item">Alterar Senha</router-link>
          <hr class="navbar-divider">
          <a @click="sair" class="navbar-item">Sair</a>
        </div>
      </div>
    </div>
    <sidebar :widthBar="widthBar"/>
    <i v-if="showClose" @click="closeMenu" class="fas fa-times has-text-white close-button"></i>
  </nav>
</template>
<script>
import sidebar from './SideBar'

export default {
  name: "Navbar",
  components: { sidebar },
  data() {
    return {
      showNav: false,
      usuario: null,
      loaded: false,
      widthBar: '0',
      showClose: false
    };
  },
  methods: {
    sair() {
      localStorage.removeItem("usuario");
      this.$router.push({ name: "login" });
    },
    openMenu() {
      this.widthBar = '15';
      setTimeout(function(self) { self.showClose = true }, 500, this);
    }, 
    closeMenu() {
      this.widthBar = '0';
      this.showClose = false;
    }
  },
  mounted() {
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    this.loaded = true;
  }
};
</script>
<style scoped>
.navbar {
  background: #1e1e2a;
  padding: 0 15px;
}

.navbar .navbar-start .navbar-item i:hover {
  cursor: pointer;
}

.navbar .navbar-end .navbar-item.username {
  color: white;
}

.navbar .navbar-link,
.navbar .navbar-link::after {
  background-color: #1e1e2a;
  color: white;
  border-color: white;
}

.navbar .navbar-item:hover .navbar-link {
  background-color: rgba(250, 250, 250, 0.1);
}

.navbar .navbar-item .navbar-dropdown {
  border-top-left-radius: 6px;
}

.close-button {
  z-index: 32;
  position: fixed;
  top: 1rem;
  left: 13rem;
}
</style>
