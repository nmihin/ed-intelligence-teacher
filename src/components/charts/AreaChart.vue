<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(2,96,155,0.5)");
    this.gradient.addColorStop(0.5, "rgba(2,96,155,0.25)");
    this.gradient.addColorStop(1, "rgba(2,96,155,0)");

    this.renderChart(
      {
        labels: [
          "2020 May",
          "2020 June",
          "2020 July",
          "2020 September"
        ],
        datasets: [
          {
            label: "PMF Inseat Attendance by Month ( Current Year )",
            borderColor: "#02609B",
            pointBackgroundColor: "#02609B",
            borderWidth: 2,
            pointBorderColor: "#02609B",
            backgroundColor: this.gradient,
            data: [94, 95, 89, 100]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false
      }
    );
  }
};
</script>