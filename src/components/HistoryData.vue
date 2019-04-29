<template>
  <div v-if="loaded" class="container is-fullhd">
    <p class="user-msg">
      Bem-vindo,
      <b>{{usuario.nome}}</b>!
    </p>

    <chart v-for="(metric, index) of data" :data="metric" :key="index"></chart>

    <div @click="sair" class="button is-rounded leave">
      <span>Sair</span>
      <span class="icon">
        <i class="fas fa-sign-out-alt"></i>
      </span>
    </div>
  </div>
</template>
<script>
import * as api from "../data/dados";
import chart from "./Chart";
import moment from "moment";

export default {
  name: "HistoryData",
  components: { chart },
  data() {
    return {
      loaded: false,
      data: null,
      usuario: null
    };
  },
  methods: {
    async getAllData() {
      try {
        let self = this;
        self.loaded = false;
        let result = await api.getAllData();

        self.data = result;
        self.loaded = true;
      } catch (error) {
        console.log(error);
      }
    },
    sair() {
      localStorage.removeItem("usuario");
      this.$router.push({ name: "login" });
    }
  },
  mounted() {
    this.getAllData();
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container .user-msg {
  color: white;
  font-size: 2rem;
  margin-top: 2rem;
}

.button.leave {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 1rem;
  margin-bottom: 1.5rem; 
  color: #1d1d2a;
}

.button.leave:hover {
  background-color: #ababc5;
}
</style>
