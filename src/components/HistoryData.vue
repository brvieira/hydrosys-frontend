<template>
  <div class="container">
    <h1>HYDROSYS</h1>
    <internal-humidity v-if="loaded" :data="internalHumidity" :labels="labels"></internal-humidity>
    <internal-temp v-if="loaded" :data="internalTemp" :labels="labels"></internal-temp>
    <solution-temp v-if="loaded" :data="solutionTemp" :labels="labels"></solution-temp>
    <h4>Desenvolvido por Bruno Vieira Rosa</h4>
  </div>
</template>

<script>
import * as api from "../data/hydrosys";
import InternalTemp from "./InternalTemp";
import InternalHumidity from "./InternalHumidity";
import SolutionTemp from "./SolutionTemp";
import moment from "moment";

export default {
  name: "HistoryData",
  components: { InternalTemp, InternalHumidity, SolutionTemp },
  data() {
    return {
      loaded: false,
      internalTemp: null,
      internalHumidity: null,
      solutionTemp: null,
      labels: null,
      options: null
    };
  },
  methods: {
    async getAllData() {
      try {
        let self = this;
        self.loaded = false;
        let result = await api.getAllData();
        result = result.filter(
          x =>
            moment(x.data).minute() == 0 ||
            moment(x.data).minute() == 20 ||
            moment(x.data).minute() == 40
        )

        self.internalTemp = result.map(x => x.temperaturaInterna);
        self.internalHumidity = result.map(x => x.umidadeInterna);
        self.solutionTemp = result.map(x => x.temperaturaSolucao);
        self.labels  = result.map(x => moment(x.data).format("DD/MM/YY - HH:mm"));

        self.loaded = true;
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    let self = this;
    this.getAllData();
    setInterval(function() {
      self.getAllData();
      console.log("Loading data...");
    }, 5 * 60 * 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 2rem 5rem;
}
</style>
