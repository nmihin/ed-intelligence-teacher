<template>
  <md-dialog :md-active.sync="addFeedbackModal" class="modal-window feedback-list">
    <h2 class="modal-title">Add Feedback for {{feedbackName}}</h2>
    <div class="modal-content">
      <el-form :model="formAddFeedback" :rules="formAddFeedback.rules" ref="formAddFeedback">
        <div class="row">
          <el-form-item label="Incident Date" prop="occureddate" class="col-12 col-md-6">
            <i class="icon icon-box-plan"></i>
            <el-date-picker @change="updateForm('occureddate', formAddFeedback.occureddate)" prop="birthDate" v-model="formAddFeedback.occureddate" type="date" format="dd-MM-yyyy" value-format="yyyy-MM-dd" placeholder="Pick a date">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="School Response" prop="schoolResponse" class="col-12 col-md-6">
            <el-select @change="updateForm('schoolResponse', formAddFeedback.schoolResponse)" v-model="formAddFeedback.schoolResponse" placeholder="School Response">
              <el-option v-for="pre in formAddFeedbackOptions.schoolResponseOptions" :key="pre.value" :label="pre.label" :value="pre.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Support Services Recieved" prop="supportServicesRecieved" class="col-12 col-md-6">
            <el-select @change="updateForm('supportServicesRecieved', formAddFeedback.supportServicesRecieved)" v-model="formAddFeedback.supportServicesRecieved" placeholder="Support Services Recieved?">
              <el-option v-for="pre in formAddFeedbackOptions.supportServicesRecievedOptions" :key="pre.value" :label="pre.label" :value="pre.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Supporting Document" class="col-12 col-md-6">
            <el-upload action="https://educationalschool.iteg.com.np/files" @change="updateForm('supportingDocument', formAddFeedback.supportingDocument)" v-model="formAddFeedback.supportingDocument" multiple>
              <el-button class="button medium ed-btn__primary">
                Choose A File
              </el-button>
            </el-upload>
          </el-form-item>
        </div>
        <div class="row">
          <h3>Incident Comments</h3>
          <el-form-item label="Teacher Feedback" prop="teacherFeedback" class="col-12">
            <el-input type="textarea" @input="updateForm('teacherFeedback', formAddFeedback.teacherFeedback)" v-model="formAddFeedback.teacherFeedback" placeholder="Teacher Feedback"></el-input>
          </el-form-item>
          <el-form-item label="Parent Feedback" prop="parentFeedback" class="col-12">
            <el-input type="textarea" @input="updateForm('parentFeedback', formAddFeedback.parentFeedback)" v-model="formAddFeedback.parentFeedback" placeholder="Parent Feedback"></el-input>
          </el-form-item>
          <el-form-item label="Specialist Feedback" prop="specialistFeedback" class="col-12">
            <el-input type="textarea" @input="updateForm('specialistFeedback', formAddFeedback.specialistFeedback)" v-model="formAddFeedback.specialistFeedback" placeholder="Specialist Feedback"></el-input>
          </el-form-item>
          <el-form-item label="Action Outcomes" prop="actionOutcomes" class="col-12">
            <el-input type="textarea" @input="updateForm('actionOutcomes', formAddFeedback.actionOutcomes)" v-model="formAddFeedback.actionOutcomes" placeholder="Specialist Feedback"></el-input>
          </el-form-item>
          <el-form-item label="Action Date" prop="actionDate" class="col-12">
            <i class="icon icon-box-plan"></i>
            <el-date-picker @change="updateForm('actionDate', formAddFeedback.actionDate)" prop="birthDate" v-model="formAddFeedback.actionDate" type="date" format="dd-MM-yyyy" value-format="yyyy-MM-dd" placeholder="Pick a date">
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
</template>

<script>
  export default {
    name: "student-list-add-feedback-modal",
    components: {},
    props: {
        addFeedbackModalParent: Boolean
    },
    watch: {
       addFeedbackModalParent: function(){
            this.addFeedbackModal = true;
       }
    },
    // DATA
    data: () => ({
      feedbackName:"",
      sn:0,
      addFeedbackModalId: 0,
      addFeedbackModal: false,
        formAddFeedback: {
          occureddate: "",
          schoolResponse: "",
          supportServicesRecieved: "",
          supportingDocument: [],
          teacherFeedback: "",
          parentFeedback: "",
          specialistFeedback: "",
          actionOutcomes: "",
          actionDate: "",
          incidentStatus: "",
          rules: {
            occureddate: [{
              required: true,
              message: "Incident Date Required!",
              trigger: "blur",
            }],
            schoolResponse: [{
              required: true,
              message: "School Response Required!",
              trigger: "blur",
            }],
            supportServicesRecieved: [{
              required: true,
              message: "Support Services Recieved Required!",
              trigger: "blur",
            }],
            supportingDocument: [{
              required: true,
              message: "Supporting Document Required!",
              trigger: "blur",
            }],
            teacherFeedback: [{
              required: true,
              message: "Teacher Feedback Required!",
              trigger: "blur",
            }],
            parentFeedback: [{
              required: true,
              message: "Parent Feedback Required!",
              trigger: "blur",
            }],
            specialistFeedback: [{
              required: true,
              message: "Specialist Feedback Required!",
              trigger: "blur",
            }],
            actionOutcomes: [{
              required: true,
              message: "Action Outcomes Required!",
              trigger: "blur",
            }],
            actionDate: [{
              required: true,
              message: "Action Date Required!",
              trigger: "blur",
            }],
            incidentStatus: [{
              required: true,
              message: "Incident Status Required!",
              trigger: "blur",
            }]
          }
        },
        formAddFeedbackOptions: {
          schoolResponseOptions: [{
              value: "Family Phone Call",
              label: "Family Phone Call"
            },
            {
              value: "Family Meeting",
              label: "Family Meeting"
            },
            {
              value: "Suspended",
              label: "Suspended"
            },
            {
              value: "Expelled",
              label: "Expelled"
            }
          ],
          supportServicesRecievedOptions: [{
              value: "Family Meeting",
              label: "Family Meeting"
            },
            {
              value: "In Class Behavioral Plan",
              label: "In Class Behavioral Plan"
            },
            {
              value: "Out Class Behavioral Plan",
              label: "Out Class Behavioral Plan"
            }
          ]
        },
    }),
    methods: {
        validateAddFeedback() {
          return new Promise((resolve) => {
            this.$refs.formAddFeedback.validate((valid) => {
              this.$emit("on-validate", valid, this.model);
              resolve(valid);
              if (valid)
                this.addNewFeedback(this.sn);
            });
          });
        },
        addNewFeedback(id) {
          const feedbackListStorage = this.loadFeedbackListStorage();

          // FIND STUDENT INDEX
          const idx = feedbackListStorage.map(el => el.sn).indexOf(id)

          // FIND LARGEST ID
          const maxId = feedbackListStorage[idx].feedback.reduce(
            (max, character) => (character.id > max ? character.id : max),
            feedbackListStorage[idx].feedback[0].id
          );

          const newFeedback = {
            "id": maxId + 1,
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
            "action": ["view", "edit", "feedbackfollowup", "listfollowup", "delete"]
          }

          feedbackListStorage[idx].feedback.push(newFeedback);

          // UPDATE STORAGE
          localStorage.setItem("feedbackListJSONData", JSON.stringify(feedbackListStorage));

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
        // LOCALSTORAGE
        loadFeedbackListStorage() {
          return JSON.parse(localStorage.getItem("feedbackListJSONData"));
        },
        updateForm(input, value) {
          this.formAddFeedback[input] = value;
        },
        openModal(sn,name,surname){
          this.sn = sn;
          this.feedbackName = name+ " "+ surname;
          this.addFeedbackModal = true;
        }
    }
  }
</script>