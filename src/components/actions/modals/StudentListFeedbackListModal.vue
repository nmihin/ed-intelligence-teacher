<template>
  <div>
    <AddFollowUpModal ref="AddFollowUpModal" />
    <DeleteFeedbackModal :deleteFeedbackParent="deleteFeedbac" ref="DeleteFeedbackModal" />
    <EditFeedbackModal ref="EditFeedbackModal" />
    <ListFollowUpModal ref="ListFollowUpModal" />
    <StudentListAddFeedbackModal ref="StudentListAddFeedbackModal" />
    <md-dialog :md-active.sync="feedbackModal" class="modal-window filter-modal feedback-list">
      <h2 class="modal-title">Feedback List of {{feedbackName}}</h2>
      <div class="modal-content">
        <div class="row">
          <el-input class="col-6 offset-6 search-feedback" @input="searchFeedbackFilter()" placeholder="Search feedback..." v-model="searchFeedback"></el-input>
        </div>
        <div class="row">
          <el-table stripe ref="singleTable" :data="feedback" highlight-current-row style="width: 100%">
            <el-table-column sortable property="id" label="SN" width="60"></el-table-column>
            <el-table-column sortable property="homeroom" label="Home Room"></el-table-column>
            <el-table-column sortable property="period" label="Period"></el-table-column>
            <el-table-column sortable property="schoolResponse" label="Feedback Type"></el-table-column>
            <el-table-column sortable property="occureddate" label="Occured Date"></el-table-column>
            <el-table-column sortable property="incidentStatus" label="Status"></el-table-column>
            <el-table-column sortable property="action" width="220" label="Action">
              <template slot-scope="scope">
                <ul class="behavioural-report">
                  <li v-if="scope.row.action.includes('view')" class="behavioural-report-view">
                    <el-tooltip class="item" effect="dark" content="View Behavioural Report" placement="top">
                      <i class="icon icon-eye" @click="viewBehaviouralReport(scope.$index,scope.row)"></i>
                    </el-tooltip>
                  </li>
                  <li v-if="scope.row.action.includes('edit')" class="behavioural-report-edit">
                    <el-tooltip class="item" effect="dark" content="Edit Feedback" placement="top">
                      <i class="icon icon-edit" @click="openEditFeedbackModal(scope.$index,scope.row,studentId)"></i>
                    </el-tooltip>
                  </li>
                  <li v-if="scope.row.action.includes('feedbackfollowup')" class="behavioural-report-follow-up">
                    <el-tooltip class="item" effect="dark" content="Add Follow Up" placement="top">
                      <i class="icon icon-add" @click="addFollowUpModal(scope.$index,scope.row)"></i>
                    </el-tooltip>
                  </li>
                  <li v-if="scope.row.action.includes('listfollowup')" class="behavioural-report-list">
                    <el-tooltip class="item" effect="dark" content="List Follow Up" placement="top">
                      <i class="icon icon-menu-list" @click="listFollowUpModal(scope.$index,scope.row)"></i>
                    </el-tooltip>
                  </li>
                  <li v-if="scope.row.action.includes('delete')" class="behavioural-report-delete">
                    <el-tooltip class="item" effect="dark" content="Delete Feedback" placement="top">
                      <i class="icon icon-delete" @click="deleteFeedbackModal(scope.$index,scope.row,studentId)"></i>
                    </el-tooltip>
                  </li>
                </ul>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div v-if="toggleReport" class="row student-details">
          <div class="modal-content student-behaviour-preview">
            <div class="row student-report">
              <div class="col-6">
                <h2 class="student-report-title">ED-Intelligence</h2>
                <h3 class="student-report-subtitle">Student Behaviour Report</h3>
                <ul class="document-download">
                  <li class="download-pdf" @click="downloadPdfStudentBehaviour()">    
                    <el-tooltip class="item" effect="dark" content="Export to PDF" placement="top">       
                      <i class="icon icon-download-pdf"></i>
                    </el-tooltip>
                  </li>
                  <li class="send-email" @click="sendEmailStudentBehaviour()">
                    <el-tooltip class="item" effect="dark" content="Email to Parent" placement="top">       
                      <i class="icon icon-mail"></i>
                    </el-tooltip>
                  </li>
                </ul>
              </div>
              <div class="col-6">
                <h2 class="student-report-title">Student Details</h2>
                <div class="row student-information">
                  <ul>
                    <li>Name: <span>{{name}} {{surname}}</span></li>
                    <li>Grade: <span>{{grade}}</span></li>
                    <li>Homeroom: <span>{{room}}</span></li>
                    <li>Class Period: <span>{{report.period}}</span></li>
                    <li>School Year: <span>2020</span></li>
                  </ul>
                </div>
              </div>
              <div class="col-12">
                <div class="student-behaviour-table">
                  <div class="student-report-header">Student Behaviour</div>
                    <ul class="profile-list">
                      <li class="row">
                        <p class="col-4">Incident Occured Date</p>
                        <span class="col-8">{{report.occureddate}}</span>
                      </li>
                      <li class="row">
                         <p class="col-4">School Response</p>
                        <span class="col-8">{{report.schoolResponse}}</span>
                      </li>
                      <li class="row">
                         <p class="col-4">Incident Reason</p>
                        <span class="col-8">{{report.actionOutcomes}}</span>
                      </li>
                      <li class="row">
                         <p class="col-4">Support Service Received</p>
                        <span class="col-8">{{report.supportServicesRecieved}}</span>
                      </li>
                      <li class="row">
                         <p class="col-4">Supporting Document</p>
                         <span class="col-8" v-if="report.supportingDocument.length > 0">{{report.supportingDocument}}</span>
                      </li>
                      <li class="row">
                         <p class="col-4">Incident Status</p>
                        <span class="col-8">{{report.incidentStatus}}</span>
                      </li>
                    </ul>
                </div>
              </div>
              <div class="col-12">
                <div class="student-behaviour-table">
                  <div class="student-report-header">Student Feedbacks</div>
                    <ul class="profile-list">
                      <li class="row">
                        <p class="col-4">Teacher Feedback</p>
                        <span class="col-8">{{report.teacherFeedback}}</span>
                      </li>
                      <li class="row">
                        <p class="col-4">Parent Feedback</p>
                        <span class="col-8">{{report.parentFeedback}}</span>
                      </li>
                      <li class="row">
                        <p class="col-4">Specialist Feedback</p>
                        <span class="col-8">{{report.specialistFeedback}}</span>
                      </li>
                    </ul>
                </div>
              </div>
              <div class="col-12">
                <div class="student-behaviour-table">
                  <div class="student-report-header">Action Status</div>
                    <ul class="profile-list">
                      <li class="row">
                        <p class="col-4">Action Outcomes</p>
                        <span class="col-8">{{report.actionOutcomes}}</span>
                      </li>
                      <li class="row">
                        <p class="col-4">Action Date</p>
                        <span class="col-8">{{report.actionDate}}</span>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="button medium ed-btn__tertiary" @click="feedbackModal = false">
          Close
        </button>
      </div>
    </md-dialog>
  </div>
</template>

<script>
  import AddFollowUpModal from './AddFollowUpModal.vue';
  import DeleteFeedbackModal from './DeleteFeedbackModal.vue';
  import EditFeedbackModal from './EditFeedbackModal.vue';
  import ListFollowUpModal from './ListFollowUpModal.vue';

  import StudentListAddFeedbackModal from './StudentListAddFeedbackModal.vue'


  export default {
    name: "student-list-add-withdrawal-modal",
    components: {
      AddFollowUpModal,
      DeleteFeedbackModal,
      EditFeedbackModal,
      ListFollowUpModal,
      StudentListAddFeedbackModal
    },
    props: {
      feedbackModalParent: Boolean
    },
    watch: {
      feedbackModalParent: function() {
        this.feedbackModal = true;
      }
    },
    // DATA
    data: () => ({
      feedbackModal: false,
      feedbackName: "",
      feedback: [],
      viewFeedbackModalId: 0,
      searchFeedback: "",
      studentId:0,
      report:[],
      toggleReport:false,
      name:"",
      surname:"",
      grade:"",
      room:"",
      period:""
    }),
    methods: {
      deleteFeedbac(code){
        this.feedback = code;
      },
      openEditFeedbackModal(sn,data,studentId){
          this.$refs.StudentListAddFeedbackModal.openModalEdit(
            this.sn = sn,
            this.data = data,
            this.studentId = studentId
          );
      },
      downloadPdfStudentBehaviour(){

      },
      sendEmailStudentBehaviour(){

      },
      openModal(sn, name, surname, grade, room) {
        this.feedbackModal = true;
        this.feedbackName = name + ' ' + surname;
        this.studentId = sn;
        this.name = name;
        this.surname = surname;
        this.grade = grade;
        this.room = room;

        this.feedBackList(sn, name, surname);
      },
      viewBehaviouralReport(id, data) {

        if(this.toggleReport)
          this.toggleReport = false;
        else
          this.toggleReport = true;

        this.report = data;
      },
      editFeedbackModal(id, data) {
        this.$refs.EditFeedbackModal.openModal(
          this.sn = id,
          this.posts = data
        );
      },
      addFollowUpModal(id, data) {
        this.$refs.AddFollowUpModal.openModal(
          this.sn = id,
          this.posts = data
        );
      },
      listFollowUpModal(id, data) {
        this.$refs.ListFollowUpModal.openModal(
          this.sn = id,
          this.posts = data
        );
      },
      deleteFeedbackModal(id, data, studentId) {
        this.$refs.DeleteFeedbackModal.openModal(
          this.sn = id,
          this.posts = data,
          this.studentId = studentId
        );
      },
      searchFeedbackFilter() {
        const feedbackListStorage = this.loadFeedbackListStorage();

        // FIND STUDENT INDEX
        const idx = feedbackListStorage.map(el => el.sn).indexOf(this.viewFeedbackModalId)

        this.feedback = feedbackListStorage[idx].feedback.filter(data =>
          data.homeroom.toLowerCase().includes(this.searchFeedback.toLowerCase()) ||
          data.period.toLowerCase().includes(this.searchFeedback.toLowerCase()) ||
          data.schoolResponse.toLowerCase().includes(this.searchFeedback.toLowerCase()) ||
          data.incidentStatus.toLowerCase().includes(this.searchFeedback.toLowerCase())
        );
      },
      feedBackList(id, name, surname) {
        this.feedbackName = name + " " + surname;

        this.viewFeedbackModalId = id;

        const feedbackListStorage = this.loadFeedbackListStorage();

  

        if (feedbackListStorage) {
          const fdb = feedbackListStorage.filter(function(feedback) {
            return feedback.sn === id;
          });

          this.feedback = fdb[0].feedback;
        } else {
          this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/feedback-list.json").then((response) => {

            const fdb = response.data.filter(function(feedback) {
              return feedback.sn === id;
            });

            this.feedback = fdb[0].feedback;
            // UPDATE STORAGE
            localStorage.setItem("feedbackListJSONData", JSON.stringify(response.data));
          }).catch((error) => error.response.data)
        }

        this.feedbackModal = true;
      },
      // LOCALSTORAGE
      loadFeedbackListStorage() {
        return JSON.parse(localStorage.getItem("feedbackListJSONData"));
      }
    }
  }

</script>
