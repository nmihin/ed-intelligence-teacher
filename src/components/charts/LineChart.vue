<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Winter 2018-2019",
          "Spring 2018-2019",
          "Fall 2018-2019",
          "Winter 2019-2020",
          "Spring 2019-2020",
          "Fall 2019-2020"
        ],
        datasets: [
          {
            label: "Conditional Growth Percentile",
            borderColor: "#00884e",
            pointBackgroundColor: "#00884e",
            borderWidth: 2,
            pointBorderColor: "#00884e",
            backgroundColor: "transparent",
            data: [63, 4, 4, 14, 36, 73]
          },
          {
            label: "Start Percentile",
            borderColor: "#ff9200",
            pointBackgroundColor: "#ff9200",
            pointBorderColor: "#ff9200",
            borderWidth: 2,
            backgroundColor: "transparent",
            data: [28, 80, 80, 14, 2, 17]
          },
          {
            label: "End Percentile",
            borderColor: "#f3c641",
            pointBackgroundColor: "#f3c641",
            borderWidth: 2,
            pointBorderColor: "#f3c641",
            backgroundColor: "transparent",
            data: [38, 0, 2, 4, 70, 20]
          },
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