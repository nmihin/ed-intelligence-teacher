<template>
  <md-dialog :md-active.sync="addFollowUpModal" class="modal-window filter-modal feedback-list">
    <h2 class="modal-title">Add Follow Up</h2>
    <div class="modal-content">
        <el-form :model="formAddFollowUp" :rules="formAddFollowUp.rules" ref="formAddFollowUp">
          <div class="row">
            <el-form-item label="Followup date" prop="followUpDate" class="col-12 col-md-6">
              <i class="icon icon-box-plan"></i>
              <el-date-picker @change="updateForm('followUpDate', formAddFollowUp.followUpDate)" prop="followUpDate" v-model="formAddFollowUp.followUpDate" type="date" format="dd-MM-yyyy" value-format="yyyy-MM-dd" placeholder="Pick a date">
              </el-date-picker>
          </el-form-item>
          <el-form-item label="Title" prop="followUpTitle" class="col-12 col-md-6">
            <el-input  @input="updateForm('followUpTitle', formAddFollowUp.followUpTitle)" v-model="formAddFollowUp.followUpTitle" placeholder="Title"></el-input>
          </el-form-item>
          <el-form-item label="Supporting Document" class="col-12 col-md-6">
            <el-upload action="https://educationalschool.iteg.com.np/files" @change="updateForm('supportingDocument', formAddFollowUp.supportingDocument)" v-model="formAddFollowUp.supportingDocument" multiple>
              <el-button class="button medium ed-btn__primary">
                Choose A File
              </el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="Guardian Informed" prop="guardianInformed" class="col-12 col-md-6">
            <el-radio-group @change="updateForm('guardianInformed', formAddFollowUp.guardianInformed)" v-model="formAddFollowUp.guardianInformed">
              <el-radio label="Yes">Yes</el-radio>
              <el-radio label="No">No</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Description" prop="followUpDescription" class="col-12">
            <el-input type="textarea" @input="updateForm('followUpDescription', formAddFollowUp.followUpDescription)" v-model="formAddFollowUp.followUpDescription" placeholder="Description"></el-input>
          </el-form-item>
          <el-form-item label="Incident Status" prop="incidentStatus" class="col-12">
            <el-radio-group @change="updateForm('incidentStatus', formAddFollowUp.incidentStatus)" v-model="formAddFollowUp.incidentStatus">
              <el-radio label="Pending">Pending</el-radio>
              <el-radio label="Closed">Closed</el-radio>
            </el-radio-group>
          </el-form-item>
          </div>
        </el-form>
    </div>
    <div class="modal-footer">
      <button class="button medium ed-btn__primary" @click="validateAddFollowUp()">
        Add
      </button>
      <button class="button medium ed-btn__tertiary" @click="addFollowUpModal = false">
        Close
      </button>
    </div>
  </md-dialog>
</template>

<script>
  export default {
    name: "add-follow-up-modal",
    components: {},
    // DATA
    data: () => ({
      addFollowUpModal: false,
      formAddFollowUp: {
        followUpDate:"",
        followUpTitle:"",
        supportingDocument:[],
        guardianInformed:"",
        followUpDescription:"",
        incidentStatus:"",
        rules:{
           followUpDate: [{
            required: true,
            message: "Followup Date Required!",
            trigger: "blur",
          }],         
           followUpTitle: [{
            required: true,
            message: "Title Required!",
            trigger: "blur",
          }],     
           guardianInformed: [{
            required: true,
            message: "Guardian Informed Required!",
            trigger: "blur",
          }], 
           followUpDescription: [{
            required: true,
            message: "Description Required!",
            trigger: "blur",
          }], 
           incidentStatus: [{
            required: true,
            message: "Status Required!",
            trigger: "blur",
          }], 
        }
      }

    }),
    methods: {
      updateForm(input, value) {
        this.formAddFollowUp[input] = value;
      },
      validateAddFollowUp() {
        return new Promise((resolve) => {
          this.$refs.formAddFollowUp.validate((valid) => {
            this.$emit("on-validate", valid, this.model);
            resolve(valid);
            if (valid)
              this.addNewFollowup();
          });
        });
      },
      addNewFollowup(){
        const feedbackListStorage = this.loadFeedbackListStorage();

        if(feedbackListStorage){


          const newFollowUp = {
            "followUpDate": this.formAddFollowUp.followUpDate,
            "followUpTitle": this.formAddFollowUp.followUpTitle,
            "supportingDocument": this.formAddFollowUp.supportingDocument,
            "guardianInformed": this.formAddFollowUp.guardianInformed,
            "followUpDescription": this.formAddFollowUp.followUpDescription,
            "incidentStatus": this.formAddFollowUp.incidentStatus
          }
        }
      },
      // LOCALSTORAGE
      loadFeedbackListStorage() {
        return JSON.parse(localStorage.getItem("feedbackListJSONData"));
      },
      openModal(sn, data) {
        console.log(sn)
          this.addFollowUpModal = true;
      }
    }
  }
</script>