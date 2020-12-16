<template>
  <div class="row">
    <div class="col-12 col-md-3 col-lg-2">
      <el-button class="performance-button button medium ed-btn__primary">NWEA</el-button>
    </div>
    <div class="col-12 col-md-9 col-lg-10">
      <div class="line-chart-performance">
        <h2>NWEA MAP:Reading</h2>
        <LineChart />
      </div>
      <div class="line-chart-performance">
        <h2>NWEA MAP:Mathematics</h2>
        <LineChart />
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "../../../components/charts/LineChart.vue"

  export default {
    name: "student-details-performance",
    components: {
        LineChart
    },
    props: {
    },
    watch: {

    },
    // DATA
    data: () => ({
    
    }),
    methods: {
      loadMore() {

      }
    },
    created() {
      this.loadMore();
    }
  }

</script>
