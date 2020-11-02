<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid">
      <div class="row">
        <div class="card-boxes addstudent">
          <div class="card-box">
              <div class="card-title">
                <h2>Add Student</h2>
              </div>
              <div class="card-content">
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
                  <div class="col-12 col-md-4">
                    <div class="card-title">
                      <h2>Student Name</h2>
                    </div>
                    <div class="card-content">
                      <div class="row">
                        <div class="col-12">
                          <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                              <md-field>
                                <label for="prefix">Prefix</label>
                                <md-select
                                  v-model="inline"
                                  name="prefix"
                                  id="prefix"
                                >
                                  <md-option value="fight-club">Mr.</md-option>
                                  <md-option value="godfather">Ms.</md-option>
                                </md-select>
                              </md-field>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <md-field>
                            <label>First Name *</label>
                            <md-input v-model="inline"></md-input>
                          </md-field>
                        </div>
                        <div class="col-12">
                          <md-field>
                            <label>Middle Name</label>
                            <md-input v-model="inline"></md-input>
                          </md-field>
                        </div>
                        <div class="col-12">
                          <md-field>
                            <label>Last Name *</label>
                            <md-input v-model="inline"></md-input>
                          </md-field>
                        </div>
                        <div class="col-12">
                          <md-field>
                            <label>Email Address *</label>
                            <md-input v-model="inline"></md-input>
                          </md-field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="card-title">
                      <h2>Security Number Info</h2>
                    </div>
                    <div class="card-content">
                      <div class="row">
                        <div class="col-12">
                          <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                              <md-field>
                                <label for="lepindicator">LEP indicator *</label>
                                <md-select
                                  v-model="inline"
                                  name="lepindicator"
                                  id="lepindicator"
                                >
                                  <md-option value="fight-club">Yes</md-option>
                                  <md-option value="godfather">No</md-option>
                                </md-select>
                              </md-field>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <md-field>
                            <label>LEP Status *</label>
                            <md-input v-model="inline"></md-input>
                          </md-field>
                        </div>
                        <div class="col-12">
                          <md-field>
                            <label>Social Security Number</label>
                            <md-input v-model="inline"></md-input>
                          </md-field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="card-title">
                      <h2>Social Info</h2>
                    </div>
                    <div class="card-content">
                      <div class="row">
                        <div class="col-12">
                          <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                              <md-field>
                                <label for="ethnicity">Ethnicity *</label>
                                <md-select
                                  v-model="inline"
                                  name="ethnicity"
                                  id="ethnicity"
                                >
                                  <md-option value="hispanic"
                                    >H - Hispanic/Latino</md-option
                                  >
                                  <md-option value="nothispanic"
                                    >N - Not Hispanic/Latino</md-option
                                  >
                                </md-select>
                              </md-field>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                              <md-field>
                                <label for="race">Race *</label>
                                <md-select v-model="inline" name="race" id="race">
                                  <md-option value="asian">Asian</md-option>
                                  <md-option value="asian"
                                    >Black/African American</md-option
                                  >
                                  <md-option value="asian"
                                    >American Indian/Alaskan Native</md-option
                                  >
                                  <md-option value="asian">Multiple</md-option>
                                  <md-option value="asian"
                                    >Pacific Islander/Native Hawaiian</md-option
                                  >
                                  <md-option value="asian"
                                    >White/Caucasian</md-option
                                  >
                                </md-select>
                              </md-field>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                              <md-field>
                                <label for="race"
                                  >Free and reduced meal status *</label
                                >
                                <md-select v-model="inline" name="race" id="race">
                                  <md-option value="asian">Free</md-option>
                                  <md-option value="asian">Paid</md-option>
                                  <md-option value="asian">CEP</md-option>
                                </md-select>
                              </md-field>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <md-field>
                            <label>Free and reduced meal status</label>
                            <md-input v-model="inline"></md-input>
                          </md-field>
                        </div>
                        <div class="col-12">
                          <md-field>
                            <label>Native Language</label>
                            <md-input v-model="inline"></md-input>
                          </md-field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-12">
                    <div class="card-title">
                      <h2>Address Info</h2>
                    </div>
                    <div class="card-content">
                      <div class="row">
                        <div class="col-12 col-md-4">
                          <md-field>
                            <label>Street Address *</label>
                            <md-input v-model="inline"></md-input>
                          </md-field>
                        </div>
                        <div class="col-12 col-md-4">
                          <md-field>
                            <label>City *</label>
                            <md-input v-model="inline"></md-input>
                          </md-field>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                              <md-field>
                                <label for="lepindicator">State *</label>
                                <md-select v-model="inline" name="state" id="state">
                                  <md-option value="alaska">Alaska</md-option>
                                  <md-option value="alabama">Alabama</md-option>
                                  <md-option value="arkansas">Arkansas</md-option>
                                </md-select>
                              </md-field>
                            </div>
                          </div>
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
                          <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                              <md-field>
                                <label for="residency"
                                  >State Residency Status *</label
                                >
                                <md-select
                                  v-model="inline"
                                  name="residency"
                                  id="residency"
                                >
                                  <md-option value="resident">Resident</md-option>
                                  <md-option value="nonresident"
                                    >Non-Resident</md-option
                                  >
                                </md-select>
                              </md-field>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                              <md-field>
                                <label for="stateresidency"
                                  >State/District Verified Residency</label
                                >
                                <md-select
                                  v-model="inline"
                                  name="stateresidency"
                                  id="stateresidency"
                                >
                                  <md-option value="yes">Yes</md-option>
                                  <md-option value="no">No</md-option>
                                </md-select>
                              </md-field>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                              <md-field>
                                <label for="wardofstate"
                                  >Ward of State Indicator</label
                                >
                                <md-select
                                  v-model="inline"
                                  name="wardofstate"
                                  id="wardofstate"
                                >
                                  <md-option value="yes">Yes</md-option>
                                  <md-option value="no">No</md-option>
                                </md-select>
                              </md-field>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                              <md-field>
                                <label for="atrisk">At-Risk Indicator *</label>
                                <md-select
                                  v-model="inline"
                                  name="atrisk"
                                  id="atrisk"
                                >
                                  <md-option value="yes">Yes</md-option>
                                  <md-option value="no">No</md-option>
                                </md-select>
                              </md-field>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="card-title">
                      <h2>Physical Info</h2>
                    </div>
                    <div class="card-content">
                      <div class="row">
                        <div class="col-12">
                          <md-field>
                            <label>Weight</label>
                            <md-input v-model="inline"></md-input>
                          </md-field>
                        </div>
                        <div class="col-12">
                          <md-field>
                            <label>Height</label>
                            <md-input v-model="inline"></md-input>
                            <md-input v-model="inline"></md-input>
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
                            <label>Picture (*.jpg format only)</label>
                            <md-file v-model="single" />
                          </md-field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="card-title">
                      <h2>Status</h2>
                    </div>
                    <div class="card-content">
                      <div class="row">
                        <div class="col-12">
                          <label>Homelessness Status *</label>
                          <md-radio v-model="homelessness" :value="true"
                            >Yes</md-radio
                          >
                          <md-radio v-model="homelessness" :value="false"
                            >No</md-radio
                          >
                        </div>
                        <div class="col-12">
                          <label>Special Need Indicator *</label>
                          <md-radio v-model="specialneed" :value="true"
                            >Yes</md-radio
                          >
                          <md-radio v-model="specialneed" :value="false"
                            >No</md-radio
                          >
                        </div>
                        <div class="col-12">
                          <label>Gender *</label>
                          <md-radio v-model="gender" :value="true">Male</md-radio>
                          <md-radio v-model="gender" :value="false"
                            >Female</md-radio
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </tab-content>
              <tab-content title="Household Information" icon="icon icon-settings">
                <div class="row">
                  <div class="col-12 col-md-4">
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
                  <div class="col-12 col-md-4">
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
                  <div class="col-12 col-md-4">
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
                  <div class="col-12 col-md-4">
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
      gender: false,
      specialneed: false,
      homelessness: false,
    };
  },
  methods: {
    onComplete: function () {
      alert("Finished!");
    },
    validateFirstStep() {
      return new Promise((resolve) => {
        this.$refs.ruleForm.validate((valid) => {
          resolve(valid);
        });
      });
    }
  },
};
</script>
