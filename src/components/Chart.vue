<template>
    <div class="container">
      <div class="header-area">
        <h1 class="title has-text-left">{{data.name}}</h1>
      </div>
      <line-chart v-if="loaded" :chartdata="dataCollection" :options="options"></line-chart>
    </div>
</template>
<script>
import LineChart from "./LineChart";
import moment from "moment";

export default {
  name: "Chart",
  components: { LineChart },
  props: {
    data: {
      type: Object
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
        datasets: [
          {
            label: "Umidade Interna",
            backgroundColor: null,
            borderColor: "#389466",
            data: self.data.data
          }
        ]
      }
      self.options = {
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false,
                color: "#fff",
                drawBorder: false
              }
            }
          ],
          xAxes: [
            { 
              ticks: {
                padding: 10
              },
              gridLines: {
                display: true,
                color: "#373a56",
                drawBorder: false,
                offsetGridLines: false
              },
              type: 'time'
            }
          ]
        },
        tooltips: {
            callbacks: {
                title: function(tooltipItem) {
                  return new moment(tooltipItem[0].xLabel).format('DD/MM/YYYY - hh:mm a');;
                }
            }
        },
        legend: {
          display: false
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
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  background: #27293d;
  border-radius: 10px;
}

.header-area {
  padding: 1rem
}

.title {
  color: white;
  font-weight: 300;
}
</style>
