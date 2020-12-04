<template>
  <!-- Main Content -->
  <div class="main-content">
  <!-- START FEEDBACK LIST MODAL -->
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
  <!-- START FEEDBACK LIST MODAL -->   

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
              <el-table-column sortable property="schoolResponse" label="Feedback Type"></el-table-column>
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
  <!-- START FEEDBACK LIST MODAL -->    
    <div class="container-fluid student-list">
        <div class="row">
          <div class="col-8 col-sm-6 col-md-4">
            <el-select v-if="viewType ==='list'" @change="updatePagination()" v-model="value" placeholder="Records">
              <el-option
                v-for="item in recordsOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span v-if="viewType ==='list'" class="records">Records</span>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <button @click="viewTypeList('avatar')" class="change-view button medium ed-btn__primary">
              <i class="icon icon-manage"></i>
            </button>
            <button @click="viewTypeList('list')" class="change-view menu-list button medium ed-btn__primary">
              <i class="icon icon-menu-list"></i>
            </button>
          </div>
          <div class="col-12 col-sm-12 col-md-4">
            <el-input @input="searchFilter()" placeholder="Search name..." v-model="searchName"></el-input>
          </div>
        </div>
        <!-- LIST VIEW -->
        <el-table
          v-if="viewType ==='list'"
          stripe
          ref="singleTable"
          :data="posts"
          highlight-current-row
          style="width: 100%">
          <el-table-column sortable property="sn" label="SN" width="80"></el-table-column>
          <el-table-column sortable property="name" label="Name"></el-table-column>
          <el-table-column sortable property="surname" label="Surname"></el-table-column>
          <el-table-column sortable property="usi" label="USI"></el-table-column>
          <el-table-column sortable property="grade" label="Grade"></el-table-column>
          <el-table-column width="64" property="action" label="Action">
              <div class="student-list-edit" slot-scope="scope" v-if="scope.row.action.includes('edit')">
                  <el-popover
                      placement="top"
                      popper-class="student-list-options"
                      width="200"
                      trigger="hover">
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Add Feedback" placement="top">
                          <i @click="addFeedback(scope.row.sn,scope.row.name,scope.row.surname)" class="icon icon-information"></i>
                        </el-tooltip> 
                      </a>
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Add Withdrawal" placement="top">
                          <i @click="addWithdrawal(scope.row.sn)" class="icon icon-exit"></i>
                        </el-tooltip>
                      </a>
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Edit Profile" placement="top">
                          <i @click="editProfile(scope.row.sn)" class="icon icon-edit"></i>
                        </el-tooltip>
                      </a>
                      <a slot="reference" class="student-list-edit">
                        <i class="icon icon-edit"></i>
                      </a>
                  </el-popover>
              </div>
          </el-table-column>
          <el-table-column width="100" property="action">
              <div class="student-list-preview" slot-scope="scope" v-if="scope.row.action.includes('preview')">
                    <el-popover
                      placement="top"
                      popper-class="student-list-options"
                      width="200"
                      trigger="hover">
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="View Profile" placement="top">
                          <i @click="viewProfile(scope.row.sn)" class="icon icon-profile"></i>
                        </el-tooltip> 
                      </a>
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Feedback List" placement="top">
                          <i @click="feedBackList(scope.row.sn,scope.row.name,scope.row.surname)" class="icon icon-lesson"></i>
                        </el-tooltip>
                      </a>
                      <a slot="reference" class="student-list-preview">
                        <i class="icon icon-eye"></i>
                      </a>
                    </el-popover>
              </div>
          </el-table-column>
        </el-table>
        <!-- AVATAR VIEW -->
        <div v-if="viewType ==='avatar'" class="row search-results">
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
                        <el-tooltip class="item" effect="dark" content="Add Feedback" placement="top">
                          <i @click="addFeedback(post.sn,post.name,post.surname)" class="icon icon-information"></i>
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
                      <a slot="reference" class="student-list-preview edit-student-list">
                        <i class="icon icon-eye"></i>
                      </a>
                    </el-popover>
                  </div>
                  <figcaption>
                    <ul>
                      <li><h3>USI</h3><span>{{post.usi}}</span></li>
                      <li><h3>Grade</h3><span>{{post.grade}}</span></li>
                      <li><h3>Home Room</h3><span>{{post.room}}</span></li>
                      <li><h3>Class Days</h3>
                        <ul>
                          <li class="card-content-days" v-for="(p, idx) in post.classdays" :key="idx">{{p}}</li>
                        </ul>
                      </li>
                      <li><h3>Guardian</h3><span>{{post.guardian}}</span></li>
                      <li><h3>Phone</h3><span>{{post.phone}}</span></li>
                    </ul>
                  </figcaption>
                </figure>
            </div>
          </div>
          </div>
        </div>
      <el-pagination
          v-if="viewType ==='list'"
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :page-size="pageSize"
          :total="totalSize">
      </el-pagination>
      <div v-if="busy" class="preloader">
        <span><img src="../assets/images/preloader.gif" /> Loading...</span>
      </div>
    </div>
  </div>
  <!-- main-content-END -->
</template>

<script>
export default {
    name: "student-list",
    components: {
    },
    // DATA
    data: () => ({
       filtered: [],
       search: '',
       page: 1,
       pageSize: 10,
       totalSize: 0,
       posts: [],
       busy: true,
       value: 10,
       viewType:"list",
       searchName:"",
       feedbackName:"",
       feedbackModal: false,
       addFeedbackModal: false,
       addFeedbackModalId: 0,
       feedback: [],
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
       recordsOptions: [{
          value: 5,
          label: '5'
        }, {
          value: 10,
          label: '10'
        }, {
          value: 25,
          label: '25'
        }, {
          value: 50,
          label: '50'
        }, {
          value: 100,
          label: '100'
        }],
    }),
    // METHODS
    methods: {
      loadMore() {
        this.busy = true;
        const studentListStorage = this.loadStudentlistStorage();

        if(studentListStorage){
          
          this.totalSize = studentListStorage.length;

          const append = studentListStorage.slice(
            this.posts.length,
            this.posts.length + this.pageSize
          );

          this.posts = append;
          this.busy = false;
        }
        else {
          //this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/google-classroom.json").then((response) => {
            this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-list.json").then((response) => {

              this.totalSize = response.data.length;

              const append = response.data.slice(
                this.posts.length,
                this.posts.length + this.pageSize
              );

              this.posts = append;

              //this.posts = response.data;
              
              this.current_page= response.current_page;
              this.per_page = response.per_page;
              this.total = response.total;
              this.next_page_url = response.next_page_url;

              localStorage.setItem("studentListStorageJSONData",JSON.stringify(response.data));
              this.busy = false;
            }).catch((error) => error.response.data)
        }  
      },
      // LOCALSTORAGE
      loadStudentlistStorage() {
        return JSON.parse(localStorage.getItem("studentListStorageJSONData"));
      },
      handleCurrentChange(val) {
          this.busy = true;
          const studentListStorage = this.loadStudentlistStorage();
        
          this.page = val;

          // CHECK IF SEARCH EMPTY
          if(this.searchName === ''){
            this.totalSize = studentListStorage.length;

            const append = studentListStorage.slice(
              (this.page - 1)*this.pageSize,
              ((this.page - 1)*this.pageSize)+this.pageSize
            );

            this.posts = append;
          }
          else {
            this.posts = studentListStorage.filter(data => data.name.toLowerCase().includes(this.searchName.toLowerCase()));

            this.totalSize = this.posts.length;

            const append = this.posts.slice(
              (this.page - 1)*this.pageSize,
              ((this.page - 1)*this.pageSize)+this.pageSize
            );

            this.posts = append;
          }

          this.busy = false;
      },
      updatePagination() {

        this.pageSize = this.value;

        const studentListStorage = this.loadStudentlistStorage();

        this.posts = [];
        const append = studentListStorage.slice(
            this.posts.length,
            this.posts.length + this.pageSize
        );

        this.posts = append;
      },
      viewTypeList(type){
        if(type === "list")
          this.viewType = "list"
        if(type === "avatar"){
          this.viewType = "avatar"
          
          this.busy = true;
          const studentListStorage = this.loadStudentlistStorage();

          // LOAD ALL STUDENTS 
          if(studentListStorage){
            this.posts = studentListStorage;
            this.busy = false;
          }
          else {
            //this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/google-classroom.json").then((response) => {
              this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-list.json").then((response) => {

                this.posts = response.data;

                localStorage.setItem("studentListStorageJSONData",JSON.stringify(response.data));
                this.busy = false;
              }).catch((error) => error.response.data)
          }  
        }
      },
      searchFilter(){
        this.busy = true;

        const studentListStorage = this.loadStudentlistStorage();
        this.posts = studentListStorage.filter(data => data.name.toLowerCase().includes(this.searchName.toLowerCase()));
        this.totalSize = this.posts.length;

        this.busy = false;
        return this.posts;
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
      // LOCALSTORAGE
      loadFeedbackListStorage() {
        return JSON.parse(localStorage.getItem("feedbackListJSONData"));
      },
      editProfile(id){
        this.$router.push({path:'/add-student/'+id})
      },
      addFeedback(id,name,surname){
        this.feedbackName = name+" "+surname;
        this.addFeedbackModalId = id;

        this.addFeedbackModal = true;
      },
      updateForm (input, value) {
        this.formAddFeedback[input] = value
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
      viewProfile(id){
        this.$router.push({path:'/student-details/'+id})
      }
    },
    created() {
        this.loadMore();
    }
}
</script>