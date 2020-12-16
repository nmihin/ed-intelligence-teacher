<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid student-details">
        <!-- START STUDENT SCHEDULE MODAL -->
        <StudentDetailsModalSchedule 
        :showStudentScheduleDialogParent="showStudentScheduleDialog" 
        :parentData="post"
        :parentDataSchedule="schedule"
        />
        <!-- END STUDENT SCHEDULE MODAL -->
        <!-- START DOCTOR/REGULAR CONSULTANT MODAL -->
        <StudentDetailsModalDoctor :showDoctorConsultantDialogParent="showDoctorConsultantDialog" />
        <!-- END DOCTOR/REGULAR CONSULTANT MODAL -->  
        <!-- START OVERVIEW REPORT MODAL -->
        <StudentDetailsModalOverview 
            :showOverviewReportDialogParent="showOverviewReportDialog"
            :attendanceDataParent="attendanceData"
            :currentYearBehaviourParent="currentYearBehaviour"
            :priorYearBehaviourParent="priorYearBehaviour"
            :currentYearGradesParent="currentYearGrades"
            :priorYearGradesParent="priorYearGrades"
            :readingPARCCParent="readingPARCC"
            :readingSGPParent="readingSGP"
            :mathematicsPARCCParent="mathematicsPARCC"
            :mathematicsSGPParent="mathematicsSGP"
        />
        <!-- END OVERVIEW REPORT MODAL -->  
        <div class="row">
            <div class="col-xs-3 col-md-3">
              <div class="side-menu single profile">
                <div class="col-12 side-menu-header">
                  <div class="side-menu-profile">
                    <img v-if="!post.imageUrl" class="card-picture" src="../../assets/images/avatar-aux.png" />
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
                                <StudentDetailsTabProfile :parentData="post" />
                            </el-tab-pane>
                            <el-tab-pane label="attendance">
                                <span slot="label" class="label-icon"><i class="icon icon-box-plan"></i> Attendance</span>
                                 <StudentDetailsTabAttendance
                                    :currentYearAbsentReasonParent="currentYearAbsentReason"
                                    :priorYearAbsentReasonParent="priorYearAbsentReason"
                                 />
                            </el-tab-pane>
                            <el-tab-pane label="performance">
                                <span slot="label" class="label-icon"><i class="icon icon-performance"></i> Performance</span>
                                <StudentDetailsTabPerformance v-if="tabPerformance" />
                            </el-tab-pane>
                            <el-tab-pane label="behaviour">
                                <span slot="label" class="label-icon"><i class="icon icon-search"></i> Behaviour</span> 
                                <StudentDetailsTabBehaviour :parentData="feedback" />
                            </el-tab-pane>
                        </el-tabs>     
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div v-if="busy" class="preloader">
            <span><img src="../../assets/images/preloader.gif" /> Loading...</span>
        </div>
    </div>
  </div>
  <!-- main-content-END -->
</template>

<script>
// TABS
import StudentDetailsTabBehaviour from "./Tabs/StudentDetailsTabBehaviour.vue";
import StudentDetailsTabPerformance from "./Tabs/StudentDetailsTabPerformance.vue";
import StudentDetailsTabAttendance from "./Tabs/StudentDetailsTabAttendance.vue";
import StudentDetailsTabProfile from "./Tabs/StudentDetailsTabProfile.vue";

// MODALS
import StudentDetailsModalDoctor from "./Modals/StudentDetailsModalDoctor.vue";
import StudentDetailsModalSchedule from "./Modals/StudentDetailsModalSchedule.vue";
import StudentDetailsModalOverview from "./Modals/StudentDetailsModalOverview.vue";

export default {
    name: "student-details",
    components: {
        StudentDetailsTabBehaviour,
        StudentDetailsTabPerformance,
        StudentDetailsTabAttendance,
        StudentDetailsTabProfile,
        StudentDetailsModalDoctor,
        StudentDetailsModalSchedule,
        StudentDetailsModalOverview
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