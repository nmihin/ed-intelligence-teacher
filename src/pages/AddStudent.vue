<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid">
      <div class="row">
        <form-wizard
          @on-complete="onComplete"
          shape="tab"
          color="#02609B"
          error-color="#0799F5"
        >
          <tab-content
            title="Personal Information"
            icon="icon icon-profile"
            :before-change="validateFirstStep"
          >
            <div class="row">
              <div class="col-12 col-md-4 card-box">
                <div class="card-title">
                  <h2>Student Name</h2>
                </div>
                <div class="card-content">
                  <div class="row">
                    <div class="col-12">
                      <md-field>
                        <label>Prefix</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>First Name *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Middle Name</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Last Name *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Email Address *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 card-box">
                <div class="card-title">
                  <h2>Security Number Info</h2>
                </div>
                <div class="card-content">
                  <div class="row">
                    <div class="col-12">
                      <md-field>
                        <label>LEP Indicator *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>LEP Status *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Social Security Number</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 card-box">
                <div class="card-title">
                  <h2>Social Info</h2>
                </div>
                <div class="card-content">
                  <div class="row">
                    <div class="col-12">
                      <md-field>
                        <label>Ethnicity *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Race *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Free and reduced meal status</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Native Language</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-12 card-box">
                <div class="card-title">
                  <h2>Address Info</h2>
                </div>
                <div class="card-content">
                  <div class="row">
                    <div class="col-12 col-md-4">
                      <md-field>
                        <label>Street Address *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12 col-md-4">
                      <md-field>
                        <label>City *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12 col-md-4">
                      <md-field>
                        <label>State *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12 col-md-4">
                      <md-field>
                        <label>Zip Code *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12 col-md-4">
                      <md-field>
                        <label>Ward</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12 col-md-4">
                      <md-field>
                        <label>student Residency Status *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12 col-md-4">
                      <md-field>
                        <label>State/District Verified Residency</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12 col-md-4">
                      <md-field>
                        <label>Ward of State Indicator</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12 col-md-4">
                      <md-field>
                        <label>At-Risk Indicator *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 card-box">
                <div class="card-title">
                  <h2>Physical Info</h2>
                </div>
                <div class="card-content">
                  <div class="row">
                    <div class="col-12">
                      <md-field>
                        <label>Weight</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Height</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Birth Date</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Picture</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 card-box">
                <div class="card-title">
                  <h2>Status</h2>
                </div>
                <div class="card-content">
                  <div class="row">
                    <div class="col-12">
                        <label>Homelessness Status *</label>
                        <md-radio v-model="radio" :value="false">Yes</md-radio>
                        <md-radio v-model="radio" :value="true">No</md-radio>
                    </div>
                    <div class="col-12">
                        <label>Special Need Indicator *</label>
                        <md-radio v-model="radio" :value="false">Yes</md-radio>
                        <md-radio v-model="radio" :value="true">No</md-radio>
                    </div>
                    <div class="col-12">
                        <label>Gender *</label>
                        <md-radio v-model="radio" :value="male">Male</md-radio>
                        <md-radio v-model="radio" :value="female">Female</md-radio>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="Household Information" icon="icon icon-settings">
            <div class="row">
              <div class="col-12 col-md-4 card-box">
                <div class="card-title">
                  <h2>Primary Parent / Guardian Information</h2>
                </div>
                <div class="card-content">
                  <div class="row">
                    <div class="col-12">
                      <md-field>
                        <label>First Name *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Last Name *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Contact Number *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Email Address *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Parent/Guardian Relation *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 card-box">
                <div class="card-title">
                  <h2>Secondary Parent / Guardian Information</h2>
                </div>
                <div class="card-content">
                  <div class="row">
                    <div class="col-12">
                      <md-field>
                        <label>First Name *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Last Name *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Contact Number *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Email Address *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Parent/Guardian Relation *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 card-box">
                <div class="card-title">
                  <h2>Emergency Contact Information</h2>
                </div>
                <div class="card-content">
                  <div class="row">
                    <div class="col-12">
                      <md-field>
                        <label>First Name *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Last Name *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Contact Number *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Email Address *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="Enrollment History" icon="icon icon-student">
            <div class="row">
              <div class="col-12 col-md-4 card-box">
                <div class="card-content">
                  <div class="row">
                    <div class="col-12">
                      <md-field>
                        <label>Category *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Entry Code *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Entry Date *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Student Notification Date</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Slot Accepted Date</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Student Registration Date</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Last school Attended</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Last School Address</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Last School City</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Last School Zip Code</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Unique Student Identifier (USI)</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Grade *</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                      <md-field>
                        <label>Tuition Amount</label>
                        <md-input v-model="date"></md-input>
                      </md-field>
                    </div>
                    <div class="col-12">
                        <label>Tuition Indicator *</label>
                        <md-radio v-model="radio" :value="false">Yes</md-radio>
                        <md-radio v-model="radio" :value="true">No</md-radio>
                    </div>
                    <div class="col-12">
                        <label>Dual Enrollment *</label>
                        <md-radio v-model="radio" :value="false">Yes</md-radio>
                        <md-radio v-model="radio" :value="true">No</md-radio>
                    </div>
                    <div class="col-12">
                        <label>Residency Indicator *</label>
                        <md-radio v-model="radio" :value="false">Yes</md-radio>
                        <md-radio v-model="radio" :value="true">No</md-radio>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tab-content>

          <button class="button medium ed-btn__primary right" slot="prev">
            Back
          </button>
          <button class="button medium ed-btn__primary right" slot="next">
            Next
          </button>
          <button class="button medium ed-btn__primary right" slot="finish">
            Finish
          </button>
        </form-wizard>
      </div>
    </div>
  </div>
  <!-- main-content-END -->
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

export default {
  name: "add-student",
  components: {
    FormWizard,
    TabContent,
  },
  data() {
    return {
      male: { name: 'male' },
      female: { name: 'female' },
      radio: false,
      formInline: {
        user: "",
        region: "",
      },
      rules: {
        user: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    onComplete: function() {
      alert("Finished!");
    },
    validateFirstStep() {
      return new Promise((resolve) => {
        this.$refs.ruleForm.validate((valid) => {
          resolve(valid);
        });
      });
    },
  },
};
</script>
