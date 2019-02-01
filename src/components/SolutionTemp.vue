<template>
<div class="container">
    <line-chart v-if="loaded" :chartdata="dataCollection" :options="options"></line-chart>
</div>
</template>
<script>
import LineChart from "./LineChart";

export default {
  name: "SolutionTemp",
  components: { LineChart },
  props: {
    data: {
      type: Array
    },
    labels: {
      type: Array
    }
  },
  data() {
    return {
      options: null,
      dataCollection: null,
      loaded: false
    };
  },
  methods: {
    doChart() {
      let self = this;
      self.loaded = false;

      self.dataCollection = {
        labels: self.labels,
        datasets: [
          {
            label: "Temperatura da Solução Nutritiva",
            backgroundColor: "rgba(43, 190, 196, 0.3)",
            borderColor: "#2bbec4",
            data: self.data
          }
        ]
      };

      self.options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
      self.loaded = true;
    }
  },
  mounted() {
    this.doChart();
  }
};
</script>
<style scoped>
.container {
    margin: 5rem 2rem;
}
</style>