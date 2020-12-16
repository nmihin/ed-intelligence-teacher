<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid student-details">
        <!-- START STUDENT SCHEDULE MODAL -->
        <md-dialog :md-active.sync="showStudentScheduleDialog" class="modal-window student-details">
            <h2 class="modal-title">Student Schedule of {{post.firstName}} {{post.lastName}} (KG)</h2>
            <div class="modal-content">
                <div class="row">
                    <!-- LIST VIEW -->
                    <ul class="col-2 profile-list">
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                    </ul>
                    <ul v-if="schedule[1].firstPeriod" class="col-2 profile-list">
                        <h2>1st Period</h2>
                        <li v-for="(post, idx) in schedule[0].firstPeriod[0]" :key="idx">
                            <div>Class Room:<span>{{post[0].room}}</span></div>
                            <div>Subject:<span>{{post[0].subject}}</span></div>
                            <div>Time:<span>{{post[0].time}}</span></div>
                        </li>
                    </ul>
                    <ul v-if="schedule[1].secondPeriod" class="col-2 profile-list">
                        <h2>2nd Period</h2>
                        <li v-for="(post, idx) in schedule[1].secondPeriod[0]" :key="idx">
                            <div>Class Room:<span>{{post[0].room}}</span></div>
                            <div>Subject:<span>{{post[0].subject}}</span></div>
                            <div>Time:<span>{{post[0].time}}</span></div>
                        </li>
                    </ul>
                    <ul class="col-2 profile-list">
                        <h2>Break</h2>
                        <li><span class="center">--</span></li>
                        <li><span class="center">--</span></li>
                        <li><span class="center">--</span></li>
                        <li><span class="center">--</span></li>
                        <li><span class="center">--</span></li>
                    </ul>
                    <ul v-if="schedule[2].thirdPeriod" class="col-2 profile-list">
                        <h2>3rd Period</h2>
                        <li v-for="(post, idx) in schedule[2].thirdPeriod[0]" :key="idx">
                            <div>Class Room:<span>{{post[0].room}}</span></div>
                            <div>Subject:<span>{{post[0].subject}}</span></div>
                            <div>Time:<span>{{post[0].time}}</span></div>
                        </li>
                    </ul>
                    <ul v-if="schedule[3].fourthPeriod" class="col-2 profile-list">
                        <h2>4th Period</h2>
                        <li v-for="(post, idx) in schedule[3].fourthPeriod[0]" :key="idx">
                            <div>Class Room:<span>{{post[0].room}}</span></div>
                            <div>Subject:<span>{{post[0].subject}}</span></div>
                            <div>Time:<span>{{post[0].time}}</span></div>
                        </li>
                    </ul>
                    <ul v-if="schedule[4].fifthPeriod" class="col-2 profile-list">
                        <h2>5th Period</h2>
                        <li v-for="(post, idx) in schedule[4].fifthPeriod[0]" :key="idx">
                            <div>Class Room:<span>{{post[0].room}}</span></div>
                            <div>Subject:<span>{{post[0].subject}}</span></div>
                            <div>Time:<span>{{post[0].time}}</span></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="modal-footer">
                <button class="button medium ed-btn__tertiary" @click="showStudentScheduleDialog = false;">
                Close
                </button>
            </div>
        </md-dialog>
        <!-- END STUDENT SCHEDULE MODAL -->
        <!-- START DOCTOR/REGULAR CONSULTANT MODAL -->
        <md-dialog :md-active.sync="showDoctorConsultantDialog" class="modal-window student-details">
            <h2 class="modal-title">Doctor/Regular Consultant</h2>
            <div class="modal-content">
                <div class="row">
                    <!-- LIST VIEW -->
                    <ul class="col-4 profile-list">
                        <li>Doctor Name</li>
                    </ul>
                    <ul class="col-4 profile-list">
                        <li>Hospital</li>
                    </ul>
                    <ul class="col-4 profile-list">
                        <li>Phone</li>
                    </ul>
                </div>
            </div>
            <div class="modal-footer">
                <button class="button medium ed-btn__tertiary" @click="showDoctorConsultantDialog = false;">
                Close
                </button>
            </div>
        </md-dialog>
        <!-- END DOCTOR/REGULAR CONSULTANT MODAL -->  
        <!-- START OVERVIEW REPORT MODAL -->
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
        <!-- END OVERVIEW REPORT MODAL -->  
        <div class="row">
            <div class="col-xs-3 col-md-3">
              <div class="side-menu single profile">
                <div class="col-12 side-menu-header">
                  <div class="side-menu-profile">
                    <img v-if="!post.imageUrl" class="card-picture" src="../assets/images/avatar-aux.png" />
                    <img v-if="post.imageUrl" class="card-picture" :src="post.imageUrl" />
                    <h2>{{post.firstName}} {{post.lastName}}</h2>
                  </div>
                </div>
                <div class="col-12 side-menu-content">
                  <!-- Box -->
                  <div class="card-box">
                    <div class="card-content">
                      <ul>
                          <li>
                            <el-button @click="showStudentScheduleDialog = true" class="button medium ed-btn__primary"><i class="icon icon-box-plan"></i>Student Schedule</el-button>
                          </li>
                          <li>
                            <el-button @click="showDoctorConsultantDialog = true" class="button medium ed-btn__primary"><i class="icon icon-profile"></i>Doctor/Regular Consultant</el-button>
                          </li>
                          <li>
                            <el-button @click="showOverviewReportDialog = true" class="button medium ed-btn__primary"><i class="icon icon-reports"></i>Overview Report</el-button>
                          </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-9 col-md-9">
                <div class="side-menu__results card-boxes code-book">
                  <!-- Box -->
                  <div class="card-box">
                    <div class="card-content">
                      <div class="row">
                        <el-tabs type="border-card" @tab-click="handleClick">
                            <el-tab-pane label="profile">
                                <span slot="label" class="label-icon"><i class="icon icon-profile"></i> Profile</span>
                                <div class="row">
                                    <!-- LIST VIEW -->
                                    <ul class="col-12 col-md-6 profile-list">
                                        <li>USI:<span>{{post.usi}}</span></li>
                                        <li>Local ID:<span>{{post.sn}}</span></li>
                                        <li>Date od Birth:<span>{{post.birthDate}}</span></li>
                                        <li>Primary Parent/Guardian Name:<span>{{post.firstNamePrimaryParent}} {{post.lastNamePrimaryParent}}</span></li>
                                        <li>Emergency Parent/Guardian Name:<span>{{post.firstNameEmergency}} {{post.lastNameEmergency}}</span></li>
                                        <li>City:<span>{{post.city}}</span></li>
                                        <li>Risk Status:<span>{{post.atRiskIndicator}}</span></li>
                                        <li>Special Need Indicator:<span>{{post.specialNeedIndicator}}</span></li>
                                        <li>Slot Accepted:<span>{{post.slotAcceptedDate}}</span></li>
                                        <li>Dual Enrollment:<span>{{post.dualEnrollment}}</span></li>
                                    </ul>
                                    <ul class="col-12 col-md-6 profile-list">
                                        <li>Gender:<span>{{post.gender}}</span></li>
                                        <li>Grade:<span>{{post.grade}}</span></li>
                                        <li>Registered Date:<span>{{post.studentRegistrationDate}}</span></li>
                                        <li>Primary Parent/Guardian Contact Number:<span>{{post.contactNumberPrimaryParent}}</span></li>
                                        <li>Emergency Parent/Guardian Contact Number:<span>{{post.contactNumberEmergency}}</span></li>
                                        <li>Street:<span>{{post.streetAddress}}</span></li>
                                        <li>District Verified:<span>{{post.stateVerifiedResidencyStatus}}</span></li>
                                        <li>Homeless Status:<span>{{post.homelesnessStatus}}</span></li>
                                        <li>Tuition Indicator:<span>{{post.tuitionIndicator}}</span></li>
                                        <li>Residency Indicator:<span>{{post.residencyIndicator}}</span></li>
                                    </ul>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="attendance">
                                <span slot="label" class="label-icon"><i class="icon icon-box-plan"></i> Attendance</span>
                                <div class="row">
                                    <div class="col-12 col-md-3 attendance">
                                        <div class="card-box">
                                            <div class="card-title">Current Year Attendance</div>
                                            <div class="card-content">
                                                <ul>
                                                    <li><h3>(2020)</h3><span></span></li>
                                                    <li><h3>1st Period:</h3> <span>31.97%</span></li>
                                                    <li><h3>2nd Period:</h3> <span>1.36%</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-3 attendance">
                                        <div class="card-box">
                                            <div class="card-title">Prior Year Attendance</div>
                                            <div class="card-content">
                                                <ul>
                                                    <li><h3>(2020)</h3><span></span></li>
                                                    <li><h3>1st Period:</h3> <span>81.97%</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-3 attendance">
                                        <div class="card-box">
                                            <div class="card-title">Freqent Absent Reason</div>
                                            <div class="card-content">
                                                <ul>
                                                    <li><h3>(2020)</h3><span></span></li>
                                                    <li><h3>Student Illness:</h3><span>2</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-3 attendance">
                                        <div class="card-box">
                                            <div class="card-title">Freqent Absent Reason</div>
                                            <div class="card-content">
                                                <ul>
                                                    <li><h3>(2019)</h3></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div v-if="tabAttendance" class="col-12 col-md-6">
                                        <div class="abssence-reason-table">
                                            <h2>PMF Inseat Attendance by Month (Current Year)</h2>
                                            <AreaChart/>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="abssence-reason-table">
                                            <h2>Current Year Frequent Absent Reason</h2>
                                            <el-table
                                                stripe
                                                ref="singleTable"
                                                :data="currentYearAbsentReason"
                                                highlight-current-row
                                                style="width: 100%">
                                                <el-table-column property="sn" label="SN" width="60"></el-table-column>
                                                <el-table-column property="reason" label="Absent Reason"></el-table-column>
                                                <el-table-column property="total" label="Total" width="80"></el-table-column>
                                            </el-table>
                                        </div>
                                        <div class="abssence-reason-table">
                                            <h2>Prior Year Frequent Absent Reason</h2>
                                            <el-table
                                                stripe
                                                ref="singleTable"
                                                :data="priorYearAbsentReason"
                                                highlight-current-row
                                                style="width: 100%">
                                                <el-table-column property="sn" label="SN" width="60"></el-table-column>
                                                <el-table-column property="reason" label="Absent Reason"></el-table-column>
                                                <el-table-column property="total" label="Total" width="80"></el-table-column>
                                            </el-table>
                                        </div>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="performance">
                                <span slot="label" class="label-icon"><i class="icon icon-performance"></i> Performance</span>
                                <div v-if="tabPerformance" class="row">
                                    <div class="col-12 col-md-3 col-lg-2">
                                        <el-button class="performance-button button medium ed-btn__primary">NWEA</el-button>
                                    </div>
                                    <div class="col-12 col-md-9 col-lg-10">
                                        <div class="line-chart-performance">
                                            <h2>NWEA MAP:Reading</h2>
                                            <LineChart/>
                                        </div>
                                        <div class="line-chart-performance">
                                            <h2>NWEA MAP:Mathematics</h2>
                                            <LineChart/>
                                        </div>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="behaviour">
                                <span slot="label" class="label-icon"><i class="icon icon-search"></i> Behaviour</span>
                                <div class="row">
                                    <el-table
                                        stripe
                                        class="student-details-behaviour"
                                        ref="singleTable"
                                        :data="feedback"
                                        highlight-current-row
                                        style="width: 100%">
                                        <el-table-column sortable property="id" label="SN" width="60"></el-table-column>
                                        <el-table-column sortable property="homeroom" label="Home Room"></el-table-column>
                                        <el-table-column sortable property="period" label="Period"></el-table-column>
                                        <el-table-column sortable property="schoolResponse" label="Feedback Type"></el-table-column>
                                        <el-table-column sortable property="occureddate" label="Occured Date"></el-table-column>
                                        <el-table-column sortable property="incidentStatus" label="Status"></el-table-column>
                                        <el-table-column sortable property="action" label="Action"></el-table-column>
                                    </el-table>
                                </div>
                            </el-tab-pane>
                        </el-tabs>     
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div v-if="busy" class="preloader">
            <span><img src="../assets/images/preloader.gif" /> Loading...</span>
        </div>
    </div>
  </div>
  <!-- main-content-END -->
</template>

<script>
import LineChart from "../components/charts/LineChart.vue"
import AreaChart from "../components/charts/AreaChart.vue"

export default {
    name: "student-details",
    components: {
        LineChart,
        AreaChart
    },
    // DATA
    data: () => ({
        post: [],
        feedback: [],
        profileDate: [],
        schedule: [],
        showStudentScheduleDialog: false,
        showDoctorConsultantDialog: false,
        showOverviewReportDialog: false,
        firstPeriod: [],
        secondPeriod: [],
        thirdPeriod: [],
        fourthPeriod: [],
        fifthPeriod: [],
        tabProfile: false,
        tabAttendance: false,
        tabPerformance: false,
        tabBehaviour: false,
        readingPARCC: [
            {
                "year":2019,
                "score": "--"
            },
            {
                "year":2020,
                "score": "--"
            }
        ],
        readingSGP: [
            {
                "year":2019,
                "score": "--"
            },
            {
                "year":2020,
                "score": "--"
            }
        ],
        mathematicsPARCC: [
            {
                "year":2019,
                "score": "--"
            },
            {
                "year":2020,
                "score": "--"
            }
        ],
        mathematicsSGP: [
            {
                "year":2019,
                "score": "--"
            },
            {
                "year":2020,
                "score": "--"
            }
        ],
        attendanceData: [
            {
                "year":"2020",
                "percentage":"31.97%"
            },
            {
                "year":"2019",
                "percentage":"81.97%"
            }
        ],
        currentYearBehaviour: [
            {
                "totalSuspension": "N/A",
                "totalInSchoolSuspension": "N/A",
                "totalOutOfSchoolSuspension": "N/A",
                "totalSpecialistIntervention": "N/A",
                "totalFamilyMeeting": "N/A",
                "totalFamilyPhoneCall": "N/A",
                "others": "N/A",
                "totalExpelled": "N/A"
            }
        ],
        priorYearBehaviour: [
            {
                "totalSuspension": "N/A",
                "totalInSchoolSuspension": "N/A",
                "totalOutOfSchoolSuspension": "N/A",
                "totalSpecialistIntervention": "N/A",
                "totalFamilyMeeting": "N/A",
                "totalFamilyPhoneCall": "N/A",
                "others": "N/A",
                "totalExpelled": "N/A"
            }
        ],
        currentYearAbsentReason: [
            {
                "sn":1,
                "reason": "Studen Illness",
                "total": 2 
            },
            {
                "sn":2,
                "reason": "Legal or judicial requirement",
                "total": 1 
            },   
        ],
        priorYearAbsentReason: [
            {
                "sn":1,
                "reason": "Studen Illness",
                "total": 5
            }
        ],
        currentYearGrades: [
            {
                "r":"R1, Final",
                "subjectDance":"C+",
                "subjectMath":"A",
                "subjectReading":"A",
                "subjectScience":"B-",
                "subjectSocialStudies":"B",
                "subjectWriting":"C"
            },
            {
                "r":"R2, Final",
                "subjectDance":"C+",
                "subjectMath":"A",
                "subjectReading":"A",
                "subjectScience":"B-",
                "subjectSocialStudies":"B",
                "subjectWriting":"C"
            },
            {
                "r":"R3, Final",
                "subjectDance":"C+",
                "subjectMath":"A",
                "subjectReading":"A",
                "subjectScience":"B-",
                "subjectSocialStudies":"B",
                "subjectWriting":"C"
            }
        ],
        priorYearGrades: [
            {
                "r":"R1",
                "subjectDance":"C+",
                "subjectMath":"A",
                "subjectReading":"A",
                "subjectScience":"B-",
                "subjectSocialStudies":"B",
                "subjectWriting":"C"
            },
            {
                "r":"R2",
                "subjectDance":"C+",
                "subjectMath":"A",
                "subjectReading":"A",
                "subjectScience":"B-",
                "subjectSocialStudies":"B",
                "subjectWriting":"C"
            },
            {
                "r":"R3",
                "subjectDance":"C+",
                "subjectMath":"A",
                "subjectReading":"A",
                "subjectScience":"B-",
                "subjectSocialStudies":"B",
                "subjectWriting":"C"
            }
        ],
        busy: true
        }),
    // METHODS
    methods: {
        handleClick(tab, event) {
            if(tab.label === "profile")
                this.tabProfile = true;
            if(tab.label === "attendance")
                this.tabAttendance = true;
            if(tab.label === "performance")
                this.tabPerformance = true;
            if(tab.label == "behaviour")
                this.tabBehaviour = true;
        },
        loadMore(){
            this.busy = true;
            const studentID = parseInt(this.$route.params.id);

            // STUDENT DETAILS TAB
            const studentListStorage = this.loadStudentListStorage();
            if(studentListStorage){
                this.post = studentListStorage.filter(function (student) {
                    return student.sn === studentID;
                });

                this.post = this.post[0]; 

                this.busy = false;
            }
            else {
                this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-list-details.json").then((response) => {
                    this.post = response.data.filter(function (student) {
                        return student.sn === studentID;
                    });

                    
                    this.post = this.post[0];
                    this.busy = false;
                });
            }

            // BEHAVIOUR TAB
            const feedbackListStorage = this.loadFeedbackListStorage();
            if(feedbackListStorage){
                const fdb = feedbackListStorage.filter(function(feedback) {
                return feedback.sn === studentID;
                });

                this.feedback = fdb[0].feedback;
            }
            else{
            this.busy = true;
            this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/feedback-list.json").then((response) => {

                    const fdb = response.data.filter(function(feedback) {
                        return feedback.sn === studentID;
                    });

                    this.feedback = fdb[0].feedback;

                    // UPDATE STORAGE
                    localStorage.setItem("feedbackListJSONData",JSON.stringify(response.data));

                    this.busy = false;
                }).catch((error) => error.response.data)
            this.busy = false;
            }

            // LOAD SCHEDULE
            this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-schedule.json").then((response) => {

                this.schedule = response.data;

            }).catch((error) => error.response.data)
        },
        // LOCALSTORAGE
        loadStudentListStorage(){
            return JSON.parse(localStorage.getItem("studentListStorageJSONData"));
        },
        loadFeedbackListStorage() {
            return JSON.parse(localStorage.getItem("feedbackListJSONData"));
        },
    },
    created() {
        this.loadMore();
    }
}
</script>