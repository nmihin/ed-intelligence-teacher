<template>
  <!-- Main Content -->
  <div class="main-content">
  <!-- START ADD FEEDBACK LIST MODAL -->
    <md-dialog :md-active.sync="addFeedbackModal" class="modal-window feedback-list">
        <h2 class="modal-title">Add Feedback for {{feedbackName}}</h2>
        <div class="modal-content">
          <el-form :model="formAddFeedback" :rules="formAddFeedback.rules" ref="formAddFeedback">
            <div class="row">
              <el-form-item label="Incident Date" class="col-12 col-md-6">
                <i class="icon icon-box-plan"></i>
                <el-date-picker 
                  @change="updateForm('incidentDate', formAddFeedback.incidentDate)"
                  prop="birthDate" 
                  v-model="formAddFeedback.incidentDate" 
                  type="date" 
                  format="dd-MM-yyyy" 
                  value-format="yyyy-MM-dd"  
                  placeholder="Pick a date">
              </el-date-picker>
              </el-form-item>
              <el-form-item label="School Response" class="col-12 col-md-6">
                <el-select @change="updateForm('schoolResponse', formAddFeedback.schoolResponse)" v-model="formAddFeedback.schoolResponse" placeholder="School Response">
                  <el-option v-for="pre in formAddFeedbackOptions.schoolResponseOptions"
                            :key="pre.value"
                            :label="pre.label"
                            :value="pre.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Support Services Recieved" class="col-12 col-md-6">
                <el-select @change="updateForm('supportServicesRecieved', formAddFeedback.supportServicesRecieved)" v-model="formAddFeedback.supportServicesRecieved" placeholder="Support Services Recieved?">
                  <el-option v-for="pre in formAddFeedbackOptions.supportServicesRecievedOptions"
                            :key="pre.value"
                            :label="pre.label"
                            :value="pre.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Supporting Document" class="col-12 col-md-6">
              <el-upload
                action="https://educationalschool.iteg.com.np/files"
                @change="updateForm('supportingDocument', formAddFeedback.supportingDocument)" v-model="formAddFeedback.supportingDocument"
                multiple>
                <el-button class="button medium ed-btn__primary">
                    Choose A File
                </el-button> 
              </el-upload>
              </el-form-item>
            </div>
            <div class="row">
              <h3>Incident Comments</h3>
              <el-form-item label="Teacher Feedback" class="col-12">
                <el-input type="textarea" @input="updateForm('teacherFeedback', formAddFeedback.teacherFeedback)"  v-model="formAddFeedback.teacherFeedback" prop="teacherFeedback"  placeholder="Teacher Feedback"></el-input>
              </el-form-item>
              <el-form-item label="Parent Feedback" class="col-12">
                <el-input type="textarea" @input="updateForm('parentFeedback', formAddFeedback.parentFeedback)"  v-model="formAddFeedback.parentFeedback" prop="parentFeedback"  placeholder="Parent Feedback"></el-input>
              </el-form-item>
              <el-form-item label="Specialist Feedback" class="col-12">
                <el-input type="textarea" @input="updateForm('specialistFeedback', formAddFeedback.specialistFeedback)"  v-model="formAddFeedback.specialistFeedback" prop="specialistFeedback"  placeholder="Specialist Feedback"></el-input>
              </el-form-item>
              <el-form-item label="Action Outcomes" class="col-12">
                <el-input type="textarea" @input="updateForm('actionOutcomes', formAddFeedback.actionOutcomes)"  v-model="formAddFeedback.actionOutcomes" prop="actionOutcomes"  placeholder="Specialist Feedback"></el-input>
              </el-form-item>
              <el-form-item label="Action Date" class="col-12">
                <i class="icon icon-box-plan"></i>
                <el-date-picker 
                  @change="updateForm('actionDate', formAddFeedback.actionDate)"
                  prop="birthDate" 
                  v-model="formAddFeedback.actionDate" 
                  type="date" 
                  format="dd-MM-yyyy" 
                  value-format="yyyy-MM-dd"  
                  placeholder="Pick a date">
              </el-date-picker>
              </el-form-item>
            </div>
            <div class="row">
              <el-form-item label="Incident Status" prop="incidentStatus" class="col-12">
                <el-radio-group @change="updateForm('incidentStatus', formAddFeedback.incidentStatus)" v-model="formAddFeedback.incidentStatus">
                  <el-radio label="Pending">Pending</el-radio>
                  <el-radio label="Closed">Closed</el-radio>
                </el-radio-group>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="modal-footer">
            <button class="button medium ed-btn__primary" @click="validateAddFeedback()">
              Add
            </button>
            <button class="button medium ed-btn__tertiary" @click="addFeedbackModal = false">
              Cancel
            </button>
        </div>
    </md-dialog>
  <!-- END ADD FEEDBACK LIST MODAL -->  
  <!-- START FEEDBACK LIST MODAL -->
    <md-dialog :md-active.sync="feedbackModal" class="modal-window filter-modal feedback-list">
        <h2 class="modal-title">Feedback List of {{feedbackName}}</h2>
        <div class="modal-content">
          <el-table
            stripe
            ref="singleTable"
            :data="feedback"
            highlight-current-row
            style="width: 100%">
              <el-table-column sortable property="id" label="SN" width="60"></el-table-column>
              <el-table-column sortable property="homeroom" label="Home Room"></el-table-column>
              <el-table-column sortable property="period" label="Period"></el-table-column>
              <el-table-column sortable property="type" label="Feedback Type"></el-table-column>
              <el-table-column sortable property="occureddate" label="Occured Date"></el-table-column>
              <el-table-column sortable property="status" label="Status"></el-table-column>
              <el-table-column sortable property="action" label="Action"></el-table-column>
          </el-table>
          <div v-if="busy" class="preloader">
            <span><img src="../assets/images/preloader.gif" /> Loading...</span>
          </div>
        </div>
        <div class="modal-footer">
            <button class="button medium ed-btn__tertiary" @click="feedbackModal = false">
              Close
            </button>
        </div>
    </md-dialog>
  <!-- END FEEDBACK LIST MODAL -->    
    <div class="container-fluid search-results">
      <div class="row">
          <div class="col-12 col-sm-6 col-md-8">
            <el-select @change="updateSearchTerm()" v-model="searchTerm" placeholder="Search By">
              <el-option
                v-for="item in searchByOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span class="search-by">Search By</span>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <el-input @keyup.enter.native="searchFilter()" v-on:keyup.enter="searchFilter" placeholder="Search by keyword..." v-model="searchName">
              <el-button  @click="searchFilter()" slot="append" icon="icon icon-search"></el-button>
            </el-input>
          </div>
      </div>
      <div class="row">
        <!-- Box -->
        <div v-for="(post, idx) in posts" :key="idx" class="col-12 col-md-6 col-lg-4 ed_card-boxes">
          <div class="card-box">
            <div class="card-title">
                <h2>{{post.name}} {{post.surname}}</h2>
            </div>
            <div class="card-content">
                <figure>
                  <img v-if="!post.avatar" class="card-picture" src="../assets/images/avatar-aux.png" />
                  <img v-if="post.avatar" class="card-picture" :src="post.avatar" />
                  <div class="card-element">
                    <el-popover
                      placement="top"
                      popper-class="student-list-options"
                      width="200"
                      trigger="hover">
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="View Profile" placement="top">
                          <i @click="viewProfile(post.sn)" class="icon icon-profile"></i>
                        </el-tooltip> 
                      </a>
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Feedback List" placement="top">
                          <i @click="feedBackList(post.sn,post.name,post.surname)" class="icon icon-lesson"></i>
                        </el-tooltip>
                      </a>
                      <a slot="reference" class="student-list-preview">
                        <i class="icon icon-eye"></i>
                      </a>
                    </el-popover>
                    <el-popover
                        placement="top"
                        popper-class="student-list-options"
                        width="200"
                        trigger="hover">
                        <a class="student-list-preview">
                          <el-tooltip class="item" effect="dark" content="Add Feedback" placement="top">
                            <i @click="addFeedback(post.sn)" class="icon icon-information"></i>
                          </el-tooltip> 
                        </a>
                        <a class="student-list-preview">
                          <el-tooltip class="item" effect="dark" content="Add Withdrawal" placement="top">
                            <i @click="addWithdrawal(post.sn)" class="icon icon-exit"></i>
                          </el-tooltip>
                        </a>
                        <a class="student-list-preview">
                          <el-tooltip class="item" effect="dark" content="Edit Profile" placement="top">
                            <i @click="editProfile(post.sn)" class="icon icon-edit"></i>
                          </el-tooltip>
                        </a>
                        <a slot="reference" class="student-list-edit">
                          <i class="icon icon-edit"></i>
                        </a>
                    </el-popover>
                  </div>
                  <figcaption>
                    <ul>
                      <li><h3>USI</h3><span>{{post.usi}}</span></li>
                      <li><h3>Grade</h3><span>{{post.grade}}</span></li>
                      <li><h3>Guardian</h3><span>{{post.guardian}}</span></li>
                      <li><h3>Phone</h3><span>{{post.phone}}</span></li>
                    </ul>
                  </figcaption>
                </figure>
            </div>
          </div>
        </div>
        <div class="no-results" v-if="posts.length === 0"><h3>No results found...</h3></div>
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
    name: "search-results",
    components: {
    },
    // DATA
    data: () => ({
      searchQuery:"",
      searchName:"",
      posts:[],
      feedbackModal:false,
      feedbackName: "",
      addFeedbackModal: false,
      feedback: [],
      searchTerm: "name",
      searchByOptions: [ {
          value: "name",
          label: 'First Name'
        }, {
          value: "surname",
          label: 'Last Name'
        }, 
        {
          value: "usi",
          label: 'USI'
        },
        {
          value: "phoen",
          label: 'Home Phone Number'
        }, {
          value: "email",
          label: 'Email Address'
        }, {
          value: "guardian",
          label: 'Guardian Name'
        }
      ],
       formAddFeedback: [{
         incidentDate:"",
         schoolResponse:"",
         supportServicesRecieved:"",
         supportingDocument:[],
         teacherFeedback:"",
         parentFeedback:"",
         specialistFeedback:"",
         actionOutcomes:"",
         actionDate:"",
         incidentStatus:"",
         rules: {
          incidentDate: [
            {
              required: true,
              message: "Incident Date Required!",
              trigger: "blur",
            }
          ],
          schoolResponse: [
            {
              required: true,
              message: "Incident Date Required!",
              trigger: "blur",
            }
          ],
          supportServicesRecieved: [
            {
              required: true,
              message: "Incident Date Required!",
              trigger: "blur",
            }
          ],
          supportingDocument: [
            {
              required: true,
              message: "Incident Date Required!",
              trigger: "blur",
            }
          ],
          teacherFeedback: [
            {
              required: true,
              message: "Incident Date Required!",
              trigger: "blur",
            }
          ],
          parentFeedback: [
            {
              required: true,
              message: "Incident Date Required!",
              trigger: "blur",
            }
          ],
          specialistFeedback: [
            {
              required: true,
              message: "Incident Date Required!",
              trigger: "blur",
            }
          ],
          actionOutcomes: [
            {
              required: true,
              message: "Incident Date Required!",
              trigger: "blur",
            }
          ],
          actionDate: [
            {
              required: true,
              message: "Incident Date Required!",
              trigger: "blur",
            }
          ],
          incidentStatus: [
            {
              required: true,
              message: "Incident Date Required!",
              trigger: "blur",
            }
          ]
         }
       }],
       formAddFeedbackOptions: {
          schoolResponseOptions: [
            { value: "familyphone", label: "Family Phone Call" },
            { value: "familymeeting", label: "Family Meeting" },
            { value: "suspended", label: "Suspended" },
            { value: "expelled", label: "Expelled" }
          ],
          supportServicesRecievedOptions: [
            { value: "familymeeting", label: "Family Meeting" },
            { value: "inclassplan", label: "In Class Behavioral Plan" },
            { value: "outclassplan", label: "Out Class Behavioral Plan" }
          ]
       }
    }),
    // METHODS
    methods: {
      loadMore() {
        this.searchQuery = this.$route.params.searchResults;
        this.busy = true;

        this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-list.json").then((response) => {

              this.posts = response.data.filter(data => data.name.toLowerCase().includes(this.searchQuery.toLowerCase()));

              this.busy = false;
        }).catch((error) => error.response.data)

      },
      filterSearchTerm(dataSource){
         if(this.searchTerm == "name")
          this.posts = dataSource.filter(data => data.name.toLowerCase().includes(this.searchName.toLowerCase()));
         if(this.searchTerm == "surname")
          this.posts = dataSource.filter(data => data.surname.toLowerCase().includes(this.searchName.toLowerCase()));
         if(this.searchTerm == "usi")
          this.posts = dataSource.filter(data => data.usi.toString().toLowerCase().includes(this.searchName.toLowerCase()));
         if(this.searchTerm == "phone")
          this.posts = dataSource.filter(data => data.phone.toLowerCase().includes(this.searchName.toLowerCase()));
         if(this.searchTerm == "email")
          this.posts = dataSource.filter(data => data.email.toLowerCase().includes(this.searchName.toLowerCase()));
         if(this.searchTerm == "guardian")
          this.posts = dataSource.filter(data => data.guardian.toLowerCase().includes(this.searchName.toLowerCase()));
      },
      searchFilter(){
        this.busy = true;
        const studentListStorage = this.loadStudentlistStorage();

        if(studentListStorage){
            this.filterSearchTerm(studentListStorage);
        }
        else {
          this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-list.json").then((response) => {

              this.filterSearchTerm(response.data);

                this.busy = false;
          }).catch((error) => error.response.data)
        }

        this.busy = false;
      },
      // LOCALSTORAGE
      loadStudentlistStorage() {
        return JSON.parse(localStorage.getItem("studentListStorageJSONData"));
      },
      // LOCALSTORAGE
      loadFeedbackListStorage() {
        return JSON.parse(localStorage.getItem("feedbackListJSONData"));
      },
      feedBackList(id,name,surname){
        this.feedbackName = name+" "+surname;

        const feedbackListStorage = this.loadFeedbackListStorage();
        if(feedbackListStorage){
            const fdb = feedbackListStorage.filter(function(feedback) {
              return feedback.sn === id;
            });

            this.feedback = fdb[0].feedback;
        }
        else{
          this.busy = true;
          this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/feedback-list.json").then((response) => {

                  const fdb = response.data.filter(function(feedback) {
                    return feedback.sn === id;
                  });

                  this.feedback = fdb[0].feedback;

                  // UPDATE STORAGE
                  localStorage.setItem("feedbackListJSONData",JSON.stringify(response.data));

                  this.busy = false;
            }).catch((error) => error.response.data)
          this.busy = false;
        }

        this.feedbackModal = true;
      },
      viewProfile(id){
        this.$router.push({path:'/student-details/'+id})
      },
      editProfile(id){
        this.$router.push({path:'/add-student/'+id})
      },
      addFeedback(id,name,surname){
        this.feedbackName = name+" "+surname;

        this.addFeedbackModal = true;
      },
      validateAddFeedback(){
        return new Promise((resolve) => {
          this.$refs.formAddFeedback.validate((valid) => {
            this.$emit("on-validate", valid, this.formAddFeedback);
            resolve(valid);
            if(valid)
              console.log("valid")
          });
        });
      },
      updateSearchTerm() {


      },
    },
    created() {
        this.loadMore();
    }
}
</script>