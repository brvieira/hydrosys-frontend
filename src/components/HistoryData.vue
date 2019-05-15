<template>
  <div v-if="loaded" class="container is-fullhd">
    <h1 class="title is-3 has-text-weight-normal has-text-white">{{node.nome}}</h1>
    <div v-if="data.length > 0" class="show-area">
      <p class="is-6 has-text-weight-normal has-text-white">{{node.descricao}}</p>
      <chart v-for="(metric, index) of data" :data="metric" :key="index"></chart>
    </div>
    <div v-else class="mensagem-area"><p>Não há dados disponíveis no momento para o nó sensor selecionado.</p></div>
  </div>
  <spinner v-else/>
</template>
<script>
import * as api from "../data/dados";
import chart from "./Chart";
import moment from "moment";
import spinner from "./Spinner";

export default {
  name: "HistoryData",
  components: { chart, spinner },
  data() {
    return {
      loaded: false,
      data: null,
      token: null,
      node: null
    };
  },
  methods: {
    async getAllData(token) {
      try {
        let self = this;
        self.loaded = false;

        let usuario = JSON.parse(localStorage.getItem("usuario"));
        
        let node = usuario.token.find(x => x.token == token);
        self.node = node;

        let result = await api.getDataByToken(token);

        self.data = result;
        self.loaded = true;
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.token = this.$route.params.token;
    this.getAllData(this.token);
  }
};
</script>
<style scoped>
.container {
  padding-top: 6rem; 
}

.title {
  margin-bottom: 1rem;
}

.mensagem-area {
  display: flex;
  height: 40vh;
}

.mensagem-area p {
  color: white;
  font-size: 1.25rem;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 5rem;
  border-radius: 5px;
}
</style>
