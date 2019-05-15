<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: ['chartdata', 'options'],
  mounted () {
    let gradientColor = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
    gradientColor.addColorStop(0, 'rgba(56, 148, 102, 0.5)')
    gradientColor.addColorStop(0.15, 'rgba(56, 148, 102, 0.3)')
    gradientColor.addColorStop(0.3, 'rgba(56, 148, 102, 0.1)');
    gradientColor.addColorStop(0.6, 'rgba(56, 148, 102, 0)');
    this.chartdata.datasets[0].backgroundColor = gradientColor;
    this.renderChart(this.chartdata, this.options)
  }
}
</script>