<template>
  <!-- Main Content -->
  <div class="main-content">
  <!-- START ADD FEEDBACK MODAL -->
    <md-dialog :md-active.sync="addFeedbackModal" class="modal-window feedback-list">
        <h2 class="modal-title">Add Feedback for {{feedbackName}}</h2>
        <div class="modal-content">
          <el-form :model="formAddFeedback" :rules="formAddFeedback.rules" ref="formAddFeedback">
            <div class="row">
              <el-form-item label="Incident Date" prop="occureddate" class="col-12 col-md-6">
                <i class="icon icon-box-plan"></i>
                <el-date-picker 
                  @change="updateForm('occureddate', formAddFeedback.occureddate)"
                  prop="birthDate" 
                  v-model="formAddFeedback.occureddate" 
                  type="date" 
                  format="dd-MM-yyyy" 
                  value-format="yyyy-MM-dd"  
                  placeholder="Pick a date">
              </el-date-picker>
              </el-form-item>
              <el-form-item label="School Response" prop="schoolResponse" class="col-12 col-md-6">
                <el-select @change="updateForm('schoolResponse', formAddFeedback.schoolResponse)" v-model="formAddFeedback.schoolResponse" placeholder="School Response">
                  <el-option v-for="pre in formAddFeedbackOptions.schoolResponseOptions"
                            :key="pre.value"
                            :label="pre.label"
                            :value="pre.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Support Services Recieved" prop="supportServicesRecieved" class="col-12 col-md-6">
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
              <el-form-item label="Teacher Feedback" prop="teacherFeedback"  class="col-12">
                <el-input type="textarea" @input="updateForm('teacherFeedback', formAddFeedback.teacherFeedback)"  v-model="formAddFeedback.teacherFeedback"  placeholder="Teacher Feedback"></el-input>
              </el-form-item>
              <el-form-item label="Parent Feedback" prop="parentFeedback" class="col-12">
                <el-input type="textarea" @input="updateForm('parentFeedback', formAddFeedback.parentFeedback)"  v-model="formAddFeedback.parentFeedback"  placeholder="Parent Feedback"></el-input>
              </el-form-item>
              <el-form-item label="Specialist Feedback" prop="specialistFeedback"   class="col-12">
                <el-input type="textarea" @input="updateForm('specialistFeedback', formAddFeedback.specialistFeedback)"  v-model="formAddFeedback.specialistFeedback" placeholder="Specialist Feedback"></el-input>
              </el-form-item>
              <el-form-item label="Action Outcomes" prop="actionOutcomes" class="col-12">
                <el-input type="textarea" @input="updateForm('actionOutcomes', formAddFeedback.actionOutcomes)"  v-model="formAddFeedback.actionOutcomes"  placeholder="Specialist Feedback"></el-input>
              </el-form-item>
              <el-form-item label="Action Date" prop="actionDate" class="col-12">
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
  <!-- END ADD FEEDBACK MODAL -->   
  <!-- START ADD WITHDRAWAL MODAL -->
    <md-dialog :md-active.sync="addWithdrawalModal" class="modal-window feedback-list">
        <h2 class="modal-title">Add Withdrawal for {{feedbackName}}</h2>
        <div class="modal-content">
          <el-form :model="formAddWithdrawal" :rules="formAddWithdrawal.rules" ref="formAddWithdrawal">
            <div class="row">
              <el-form-item label="Withdrawal Type" prop="withdrawalType" class="col-12 col-md-6">
                    <el-select @change="updateWithdrawalForm('withdrawalType', formAddWithdrawal.withdrawalType)" v-model="formAddWithdrawal.withdrawalType" placeholder="Withdrawal Type">
                      <el-option v-for="pre in formAddWithdrawalOptions.withdrawalTypeOptions"
                                :key="pre.value"
                                :label="pre.label"
                                :value="pre.value">
                      </el-option>
                    </el-select>
              </el-form-item>
              <el-form-item label="Withdrawal Date" prop="withdrawalDate" class="col-12 col-md-6">
                <i class="icon icon-box-plan"></i>
                <el-date-picker 
                  @change="updateWithdrawalForm('withdrawalDate', formAddWithdrawal.withdrawalDate)"
                  prop="birthDate" 
                  v-model="formAddWithdrawal.withdrawalDate" 
                  type="date" 
                  format="dd-MM-yyyy" 
                  value-format="yyyy-MM-dd"  
                  placeholder="Pick a date">
              </el-date-picker>
              </el-form-item>
              <el-form-item label="Witdrawal Code" prop="withdrawalCode" class="col-12 col-md-12">
                <el-select @change="updateWithdrawalForm('withdrawalCode', formAddWithdrawal.withdrawalCode)" v-model="formAddWithdrawal.withdrawalCode" placeholder="Withdrawal Code">
                  <el-option v-for="pre in formAddWithdrawalOptions.withdrawalCodeOptions"
                            :key="pre.value"
                            :label="pre.label"
                            :value="pre.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Supporting Document" class="col-12 col-md-6">
              <el-upload
                action="https://educationalschool.iteg.com.np/files"
                @change="updateWithdrawalForm('supportingDocument', formAddWithdrawal.supportingDocument)" v-model="formAddWithdrawal.supportingDocument"
                multiple>
                <el-button class="button medium ed-btn__primary">
                    Choose A File
                </el-button> 
              </el-upload>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="modal-footer">
            <button class="button medium ed-btn__primary" @click="validateAddWithdrawal()">
              Add
            </button>
            <button class="button medium ed-btn__tertiary" @click="addWithdrawalModal = false">
              Cancel
            </button>
        </div>
    </md-dialog>
  <!-- END ADD WITHDRAWAL MODAL -->   
  <!-- START FEEDBACK LIST MODAL -->
    <md-dialog :md-active.sync="feedbackModal" class="modal-window filter-modal feedback-list">
        <h2 class="modal-title">Discipline List of {{feedbackName}}</h2>
        <div class="modal-content">
          <div class="row">
            <el-input class="col-6 offset-6 search-feedback" @input="searchFeedbackFilter()" placeholder="Search discipline..." v-model="searchFeedback"></el-input>
          </div>
          <el-table
            stripe
            ref="singleTable"
            :data="feedback"
            highlight-current-row
            style="width: 100%">
              <el-table-column sortable property="id" label="SN" width="60"></el-table-column>
              <el-table-column sortable property="homeroom" label="Home Room"></el-table-column>
              <el-table-column sortable property="period" label="Period"></el-table-column>
              <el-table-column sortable property="schoolResponse" label="Discipline Type"></el-table-column>
              <el-table-column sortable property="occureddate" label="Occured Date"></el-table-column>
              <el-table-column sortable property="incidentStatus" label="Status"></el-table-column>
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
                        <el-tooltip class="item" effect="dark" content="Discipline List" placement="top">
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
                          <el-tooltip class="item" effect="dark" content="Add Discipline" placement="top">
                            <i @click="addFeedback(post.sn,post.name,post.surname)" class="icon icon-information"></i>
                          </el-tooltip> 
                        </a>
                        <a class="student-list-preview">
                          <el-tooltip class="item" effect="dark" content="Add Withdrawal" placement="top">
                            <i @click="addWithdrawal(post.sn,post.name,post.surname)" class="icon icon-exit"></i>
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
      busy: true,
      value: 10,
      viewType:"list",
      searchFeedback:"",
      addWithdrawalModal: false,
      addFeedbackModalId: 0,
      viewFeedbackModalId: 0,
       formAddWithdrawal: {
         withdrawalType:"",
         withdrawalDate:"",
         withdrawalCode:"",
         supportingDocument:[],
         rules: {
          withdrawalType: [
            {
              required: true,
              message: "Withdrawal Type Required!",
              trigger: "blur",
            }
          ],
          withdrawalDate: [
            {
              required: true,
              message: "Withdrawal Date Required!",
              trigger: "blur",
            }
          ],
          withdrawalCode: [
            {
              required: true,
              message: "Withdrawal Code Required!",
              trigger: "blur",
            }
          ]
         }
       },
       formAddFeedback: {
         occureddate:"",
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
          occureddate: [
            {
              required: true,
              message: "Incident Date Required!",
              trigger: "blur",
            }
          ],
          schoolResponse: [
            {
              required: true,
              message: "School Response Required!",
              trigger: "blur",
            }
          ],
          supportServicesRecieved: [
            {
              required: true,
              message: "Support Services Recieved Required!",
              trigger: "blur",
            }
          ],
          supportingDocument: [
            {
              required: true,
              message: "Supporting Document Required!",
              trigger: "blur",
            }
          ],
          teacherFeedback: [
            {
              required: true,
              message: "Teacher Feedback Required!",
              trigger: "blur",
            }
          ],
          parentFeedback: [
            {
              required: true,
              message: "Parent Feedback Required!",
              trigger: "blur",
            }
          ],
          specialistFeedback: [
            {
              required: true,
              message: "Specialist Feedback Required!",
              trigger: "blur",
            }
          ],
          actionOutcomes: [
            {
              required: true,
              message: "Action Outcomes Required!",
              trigger: "blur",
            }
          ],
          actionDate: [
            {
              required: true,
              message: "Action Date Required!",
              trigger: "blur",
            }
          ],
          incidentStatus: [
            {
              required: true,
              message: "Incident Status Required!",
              trigger: "blur",
            }
          ]
         }
       },
       formAddFeedbackOptions: {
            schoolResponseOptions: [
              { value: "Family Phone Call", label: "Family Phone Call" },
              { value: "Family Meeting", label: "Family Meeting" },
              { value: "Suspended", label: "Suspended" },
              { value: "Expelled", label: "Expelled" }
            ],
            supportServicesRecievedOptions: [
              { value: "Family Meeting", label: "Family Meeting" },
              { value: "In Class Behavioral Plan", label: "In Class Behavioral Plan" },
              { value: "Out Class Behavioral Plan", label: "Out Class Behavioral Plan" }
            ]
        },
        formAddWithdrawalOptions: {
          withdrawalTypeOptions: [
            { value: "Credential", label: "Credential" },
            { value: "Exited", label: "Exited" },
            { value: "Discharge", label: "Discharge" }
          ],
          withdrawalCodeOptions: [
            { value: "Code1", label: "Code1" },
            { value: "Code2", label: "Code2" },
            { value: "Code3", label: "Code3" }
          ]
       },
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
      ]
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
      searchFeedbackFilter(){
          const feedbackListStorage = this.loadFeedbackListStorage();

          // FIND STUDENT INDEX
          const idx = feedbackListStorage.map( el => el.sn).indexOf(this.viewFeedbackModalId)

          this.feedback = feedbackListStorage[idx].feedback.filter(data => 
                    data.homeroom.toLowerCase().includes(this.searchFeedback.toLowerCase()) ||
                    data.period.toLowerCase().includes(this.searchFeedback.toLowerCase()) ||
                    data.schoolResponse.toLowerCase().includes(this.searchFeedback.toLowerCase()) ||
                    data.incidentStatus.toLowerCase().includes(this.searchFeedback.toLowerCase())
          );    
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
      updateForm (input, value) {
        this.formAddFeedback[input] = value;
      },
      updateWithdrawalForm (input, value){
        this.formAddWithdrawal[input] = value;
      },
      // LOCALSTORAGE
      loadFeedbackListStorage() {
        return JSON.parse(localStorage.getItem("feedbackListJSONData"));
      },
      feedBackList(id,name,surname){
        this.feedbackName = name+" "+surname;

        this.viewFeedbackModalId = id;

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
        this.addFeedbackModalId = id;

        this.addFeedbackModal = true;
      },
      updateWithdrawalForm (input, value){
        this.formAddWithdrawal[input] = value;
      },
      addWithdrawal(id,name,surname){
        this.feedbackName = name+" "+surname;
        this.addWithdrawalModal = true;

      },
      addNewFeedback(){
        const feedbackListStorage = this.loadFeedbackListStorage();

        // FIND STUDENT INDEX
        const idx = feedbackListStorage.map( el => el.sn).indexOf(this.addFeedbackModalId)

        // FIND LARGEST ID
        const maxId = feedbackListStorage[idx].feedback.reduce(
          (max, character) => (character.id > max ? character.id : max),
          feedbackListStorage[idx].feedback[0].id
        );

        const newFeedback = {
          "id": maxId+1,
          "occureddate": this.formAddFeedback.occureddate,
          "schoolResponse": this.formAddFeedback.schoolResponse,
          "supportServicesRecieved": this.formAddFeedback.supportServicesRecieved,
          "supportingDocument": this.formAddFeedback.supportingDocument,
          "teacherFeedback": this.formAddFeedback.teacherFeedback,
          "parentFeedback": this.formAddFeedback.parentFeedback,
          "specialistFeedback": this.formAddFeedback.specialistFeedback,
          "actionOutcomes": this.formAddFeedback.actionOutcomes,
          "actionDate": this.formAddFeedback.actionDate,
          "homeroom": "jo baker",
          "period": "2nd Period",
          "incidentStatus": this.formAddFeedback.incidentStatus,
          "action": ["view","edit","feedbackfollowup","listfollowup","delete"]
        }

        feedbackListStorage[idx].feedback.push(newFeedback);

        // UPDATE STORAGE
        localStorage.setItem("feedbackListJSONData",JSON.stringify(feedbackListStorage));

        // CLEAR FORM
         this.formAddFeedback.occureddate = "";
         this.formAddFeedback.schoolResponse = "";
         this.formAddFeedback.supportServicesRecieved = "";
         this.formAddFeedback.supportingDocument = [];
         this.formAddFeedback.teacherFeedback = "";
         this.formAddFeedback.parentFeedback = "";
         this.formAddFeedback.specialistFeedback = "";
         this.formAddFeedback.actionOutcomes = "";
         this.formAddFeedback.actionDate = "";
         this.formAddFeedback.incidentStatus = "";

         this.addFeedbackModal = false;
      },
      validateAddFeedback(){
        return new Promise((resolve) => {
          this.$refs.formAddFeedback.validate((valid) => {
            this.$emit("on-validate", valid, this.model);
            resolve(valid);
            if(valid)
              this.addNewFeedback();
          });
        });
      },
      validateAddWithdrawal(){
        return new Promise((resolve) => {
          this.$refs.formAddWithdrawal.validate((valid) => {
            this.$emit("on-validate", valid, this.model);
            resolve(valid);
            if(valid){
              this.formAddWithdrawal.withdrawalType = "";
              this.formAddWithdrawal.withdrawalDate = "";
              this.formAddWithdrawal.withdrawalCode = "";
              this.formAddWithdrawal.supportingDocument = [];
              // TO ADD SUBMIT 
              this.addWithdrawalModal = false;
            }
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