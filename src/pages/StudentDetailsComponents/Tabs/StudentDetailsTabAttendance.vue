<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-3 attendance">
        <div class="card-box">
          <div class="card-title">Current Year Attendance</div>
          <div class="card-content">
            <ul>
              <li>
                <h3>(2020)</h3><span></span>
              </li>
              <li>
                <h3>1st Period:</h3> <span>31.97%</span>
              </li>
              <li>
                <h3>2nd Period:</h3> <span>1.36%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3 attendance">
        <div class="card-box">
          <div class="card-title">Prior Year Attendance</div>
          <div class="card-content">
            <ul>
              <li>
                <h3>(2020)</h3><span></span>
              </li>
              <li>
                <h3>1st Period:</h3> <span>81.97%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3 attendance">
        <div class="card-box">
          <div class="card-title">Freqent Absent Reason</div>
          <div class="card-content">
            <ul>
              <li>
                <h3>(2020)</h3><span></span>
              </li>
              <li>
                <h3>Student Illness:</h3><span>2</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3 attendance">
        <div class="card-box">
          <div class="card-title">Freqent Absent Reason</div>
          <div class="card-content">
            <ul>
              <li>
                <h3>(2019)</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="abssence-reason-table">
          <h2>PMF Inseat Attendance by Month (Current Year)</h2>
          <AreaChart />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="abssence-reason-table">
          <h2>Current Year Frequent Absent Reason</h2>
          <el-table stripe ref="singleTable" :data="currentYearAbsentReason" highlight-current-row style="width: 100%">
            <el-table-column property="sn" label="SN" width="60"></el-table-column>
            <el-table-column property="reason" label="Absent Reason"></el-table-column>
            <el-table-column property="total" label="Total" width="80"></el-table-column>
          </el-table>
        </div>
        <div class="abssence-reason-table">
          <h2>Prior Year Frequent Absent Reason</h2>
          <el-table stripe ref="singleTable" :data="priorYearAbsentReason" highlight-current-row style="width: 100%">
            <el-table-column property="sn" label="SN" width="60"></el-table-column>
            <el-table-column property="reason" label="Absent Reason"></el-table-column>
            <el-table-column property="total" label="Total" width="80"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AreaChart from "../../../components/charts/AreaChart.vue"

  export default {
    name: "student-details-attendance",
    components: {
        AreaChart
    },
    props: {
        currentYearAbsentReasonParent: Array,
        priorYearAbsentReasonParent: Array
    },
    watch: {
    
    },
    // DATA
    data: () => ({
        currentYearAbsentReason: [],
        priorYearAbsentReason: [],
    }),
    methods: {
      loadMore() {
          this.currentYearAbsentReason = this.currentYearAbsentReasonParent;
          this.priorYearAbsentReason = this.priorYearAbsentReasonParent;
      }
    },
    created() {
      this.loadMore();
    }
  }

</script>
