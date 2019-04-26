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
        let data = [];

        for (let item of result) {
          for (let metric in item) {
            if (metric != "_id" && metric != "token" && metric != "data") {
              if (!data.find(x => x.name == metric)) {
                data.push({ name: metric, data: [] });
              }
              data
                .find(x => x.name == metric)
                .data.push({
                  x: item.data,
                  y: item[metric]
                });
            }
          }
        }
        self.data = data;
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
