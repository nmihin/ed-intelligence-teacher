<template>
        <md-dialog :md-active.sync="showOverviewReportDialog" class="modal-window student-details">
            <h2 class="modal-title">Student Overview Report</h2>
            <div class="modal-content">
                <div class="row student-report">
                    <div class="col-6">
                        <h2 class="student-report-title">ED-Intelligence</h2>
                        <h3 class="student-report-subtitle">Student Overview Report</h3>
                    </div>
                    <div class="col-6"> 
                        <h2 class="student-report-title">Student Details</h2>
                        <div class="row student-information">
                            <ul>
                                <li>Name: <span>{{post.firstName}} {{post.lastName}}</span></li>
                                <li>Grade: <span>{{post.grade}}</span></li>
                                <li>School Year: <span>2020</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12"> 
                        <div class="student-report-header">Attendance</div>
                        <div class="row">
                            <el-table
                                stripe
                                ref="singleTable"
                                :data="attendanceData"
                                highlight-current-row
                                style="width: 100%"> 
                                <el-table-column property="year" label="Year"></el-table-column>
                                <el-table-column property="percentage" label="Percentage Attendance"></el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <div class="col-12"> 
                        <div class="student-report-header">Current Year (2020)</div>
                        <div class="row">
                            <el-table
                                stripe
                                ref="singleTable"
                                :data="currentYearBehaviour"
                                highlight-current-row
                                style="width: 100%"> 
                                <el-table-column property="totalSuspension" label="Total Suspension"></el-table-column>
                                <el-table-column property="totalInSchoolSuspension" label="Total In School Suspension"></el-table-column>
                                <el-table-column property="totalOutOfSchoolSuspension" label="Total Out of School Suspension"></el-table-column>
                                <el-table-column property="totalSpecialistIntervention" label="Total Specialist Intervention"></el-table-column>
                                <el-table-column property="totalFamilyMeeting" label="Total Family Meeting"></el-table-column>
                                <el-table-column property="totalFamilyPhoneCall" label="Total Family Phone Call"></el-table-column>
                                <el-table-column property="others" label="Others"></el-table-column>
                                <el-table-column property="totalExpelled" label="Total Expelled"></el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <div class="col-12"> 
                        <div class="student-report-header">Prior Year (2020)</div>
                        <div class="row">
                            <el-table
                                stripe
                                ref="singleTable"
                                :data="priorYearBehaviour"
                                highlight-current-row
                                style="width: 100%">
                                <el-table-column property="totalSuspension" label="Total Suspension"></el-table-column>
                                <el-table-column property="totalInSchoolSuspension" label="Total In School Suspension"></el-table-column>
                                <el-table-column property="totalOutOfSchoolSuspension" label="Total Out of School Suspension"></el-table-column>
                                <el-table-column property="totalSpecialistIntervention" label="Total Specialist Intervention"></el-table-column>
                                <el-table-column property="totalFamilyMeeting" label="Total Family Meeting"></el-table-column>
                                <el-table-column property="totalFamilyPhoneCall" label="Total Family Phone Call"></el-table-column>
                                <el-table-column property="others" label="Others"></el-table-column>
                                <el-table-column property="totalExpelled" label="Total Expelled"></el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="student-report-header">Grade Current Year (2020)</div> 
                        <div class="row">
                            <el-table
                                stripe
                                ref="singleTable"
                                :data="currentYearGrades"
                                highlight-current-row
                                style="width: 100%">
                                <el-table-column property="r" label="R" width="80"></el-table-column>
                                <el-table-column property="subjectDance" label="5th Grade Dance"></el-table-column>
                                <el-table-column property="subjectMath" label="5th Grade Math"></el-table-column>
                                <el-table-column property="subjectReading" label="5th Grade Reading"></el-table-column>
                                <el-table-column property="subjectScience" label="5th Grade Science"></el-table-column>
                                <el-table-column property="subjectSocialStudies" label="5th Grade Social Studies"></el-table-column>
                                <el-table-column property="subjectWriting" label="5th Grade Writing"></el-table-column>
                            </el-table>
                        </div>
                        <div class="student-report-header">Grade Prior Year (2019)</div>
                        <div class="row">                   
                            <el-table
                                stripe
                                ref="singleTable"
                                :data="priorYearGrades"
                                highlight-current-row
                                style="width: 100%">
                                <el-table-column property="r" label="R" width="80"></el-table-column>
                                <el-table-column property="subjectDance" label="4th Grade Dance"></el-table-column>
                                <el-table-column property="subjectMath" label="4th Grade Math"></el-table-column>
                                <el-table-column property="subjectReading" label="4th Grade Readind"></el-table-column>
                                <el-table-column property="subjectScience" label="4th Grade Science"></el-table-column>
                                <el-table-column property="subjectSocialStudies" label="4th Grade Social Studies"></el-table-column>
                                <el-table-column property="subjectWriting" label="4th Grade Writing"></el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="student-report-header">Reading</div> 
                            <div class="row card-box"> 
                                <div class="col-8">
                                    <LineChart />
                                </div>
                                <div class="col-4">
                                    <div class="student-report-header inside">PARCC</div> 
                                    <el-table
                                        stripe
                                        class="student-report-chart-table"
                                        ref="singleTable"
                                        :data="readingPARCC"
                                        highlight-current-row
                                        style="width: 100%">
                                        <el-table-column property="year" label="Year" ></el-table-column>
                                        <el-table-column property="score" label="Score"></el-table-column>
                                    </el-table>
                                    <div class="student-report-header inside">SGP</div> 
                                    <el-table
                                        stripe
                                        class="student-report-chart-table"
                                        ref="singleTable"
                                        :data="readingSGP"
                                        highlight-current-row
                                        style="width: 100%">
                                        <el-table-column property="year" label="Year" ></el-table-column>
                                        <el-table-column property="score" label="Score"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                    </div>
                    <div class="col-12">
                        <div class="student-report-header">Mathematics</div> 
                            <div class="row card-box"> 
                                <div class="col-8">
                                    <LineChart />
                                </div>
                                <div class="col-4">
                                    <div class="student-report-header inside">PARCC</div> 
                                    <el-table
                                        stripe
                                        class="student-report-chart-table"
                                        ref="singleTable"
                                        :data="mathematicsPARCC"
                                        highlight-current-row
                                        style="width: 100%">
                                        <el-table-column property="year" label="Year" ></el-table-column>
                                        <el-table-column property="score" label="Score"></el-table-column>
                                    </el-table>
                                    <div class="student-report-header inside">SGP</div> 
                                    <el-table
                                        stripe
                                        class="student-report-chart-table"
                                        ref="singleTable"
                                        :data="mathematicsSGP"
                                        highlight-current-row
                                        style="width: 100%">
                                        <el-table-column property="year" label="Year" ></el-table-column>
                                        <el-table-column property="score" label="Score"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="button medium ed-btn__tertiary" @click="showOverviewReportDialog = false;">
                Close
                </button>
            </div>
        </md-dialog>
</template>

<script>
import LineChart from "../../../components/charts/LineChart.vue"

  export default {
    name: "student-details-overview-modal",
    components: {
      LineChart
    },
    // DATA
    data: () => ({
      post: [],
      showOverviewReportDialog: false,
      attendanceData: [], 
      currentYearBehaviour: [],
      priorYearBehaviour: [],
      currentYearGrades: [],
      priorYearGrades: [],
      readingPARCC: [],
      readingSGP: [],
      mathematicsPARCC: [],
      mathematicsSGP: []
    }),
    props: {
      showOverviewReportDialogParent: Boolean,
      attendanceDataParent: Array,
      currentYearBehaviourParent: Array,
      priorYearBehaviourParent: Array,
      currentYearGradesParent: Array,
      priorYearGradesParent: Array,
      readingPARCCParent: Array,
      readingSGPParent: Array,
      mathematicsPARCCParent: Array,
      mathematicsSGPParent: Array
    },
    watch: {
      showOverviewReportDialogParent: function() {
        this.showOverviewReportDialog = true
      }
    },
    methods: {
      loadMore() {
        this.attendanceData = this.attendanceDataParent;
        this.currentYearBehaviour = this.currentYearBehaviourParent;
        this.priorYearBehaviour = this.priorYearBehaviourParent;
        this.currentYearGrades = this.currentYearGradesParent;
        this.priorYearGrades = this.priorYearGradesParent;
        this.readingPARCC = this.readingPARCCParent;
        this.readingSGP = this.readingSGPParent;
        this.mathematicsPARCC = this.mathematicsPARCCParent;
        this.mathematicsSGP = this.mathematicsSGPParent;
      },
      openModal(){
          this.showOverviewReportDialog = true;
      }
    },
    created() {
      this.loadMore();
    }
  }

</script>
