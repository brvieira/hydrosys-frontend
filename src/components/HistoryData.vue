<template>
  <div v-if="loaded" class="container is-fullhd">
    <chart v-for="(metric, index) of data" :data="metric" :key="index"></chart>
  </div>
</template>
<script>
import * as api from "../data/hydrosys";
import chart from "./Chart";
import moment from "moment";

export default {
  name: "HistoryData",
  components: { chart },
  data() {
    return {
      loaded: false,
      data: null
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
    }
  },
  mounted() {
    this.getAllData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
