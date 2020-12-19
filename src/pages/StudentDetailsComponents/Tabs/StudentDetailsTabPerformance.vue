<template>
  <div class="row">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="NWEA">
      <div class="row">
        <ul class="document-download">
          <li class="download-pdf" @click="downloadPdfReport()">    
            <el-tooltip class="item" effect="dark" content="Export to PDF" placement="top">       
              <i class="icon icon-download-pdf"></i>
            </el-tooltip>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="line-chart-performance">
          <h2>NWEA MAP:Reading</h2>
          <LineChart />
        </div>
        <div class="line-chart-performance">
          <h2>NWEA MAP:Mathematics</h2>
          <LineChart />
        </div>
      </div>
      </el-tab-pane>
      <el-tab-pane label="PARCC"></el-tab-pane>
      <el-tab-pane label="SGP"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import LineChart from "../../../components/charts/LineChart.vue"

  export default {
    name: "student-details-performance",
    components: {
        LineChart
    },
    // DATA
    data: () => ({
      tabPosition: 'left',
      window: {
        width: 0
      }
    }),
    props: {
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      downloadPdfReport(){

      },
      handleResize() {
          this.window.width = window.innerWidth;

          if(this.window.width >= 940)
            this.tabPosition = "left";
          else
            this.tabPosition = "top";
      }
    }
  }

</script>
