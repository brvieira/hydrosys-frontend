<template>
<div class="container">
    <line-chart v-if="loaded" :chartdata="dataCollection" :options="options"></line-chart>
</div>
</template>
<script>
import LineChart from "./LineChart";

export default {
  name: "InternalHumidity",
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
            label: "Umidade Interna",
            backgroundColor: "rgba(196, 43, 43, 0.3)",
            borderColor: "#c42b2b",
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

</style>