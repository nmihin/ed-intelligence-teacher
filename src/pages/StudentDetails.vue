<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid student-details">
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
                            <el-button class="button medium ed-btn__primary"><i class="icon icon-box-plan"></i>Student Schedule</el-button>
                          </li>
                          <li>
                            <el-button class="button medium ed-btn__primary"><i class="icon icon-profile"></i>Doctor/Regular Consultant</el-button>
                          </li>
                          <li>
                            <el-button class="button medium ed-btn__primary"><i class="icon icon-reports"></i>Overview Report</el-button>
                          </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-9 col-md-9">
              <div class="row">
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
                                    <ul class="col-6 profile-list">
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
                                    <ul class="col-6 profile-list">
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
                                    CONTENT 2
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="performance">
                                <span slot="label" class="label-icon"><i class="icon icon-performance"></i> Performance</span>
                                <div class="row">
                                    CONTENT 3
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
            <!--
            <div>{{post.name}} {{post.surname}}</div>
            <div>{{post.usi}}</div>
            <div>{{post.grade}}</div>
            <div>{{post.phone}}</div>
            <div>{{post.avatar}}</div>
            <div>{{post.guardian}}</div>
            <div>{{post.email}}</div>
            <div>{{post.room}}</div>
            <div>{{post.classdays}}</div>
            -->
        </div>
        <div v-if="busy" class="preloader">
            <span><img src="../assets/images/preloader.gif" /> Loading...</span>
        </div>
    </div>
  </div>
  <!-- main-content-END -->
</template>

<script>
export default {
    name: "student-details",
    components: {
    },
    // DATA
    data: () => ({
        post: [],
        feedback: [],
        profileDate: [],
        busy: true
        }),
    // METHODS
    methods: {
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