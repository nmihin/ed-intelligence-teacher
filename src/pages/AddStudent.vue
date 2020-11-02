<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid">
      <div class="row">
        <div class="card-boxes addstudent">
          <div class="card-box">
            <div class="card-content">
              <form novalidate class="md-layout" @submit.prevent="validateUser">
                  <form-wizard
                    @on-complete="onComplete"
                    shape="circle"
                    color="#02609B"
                    error-color="#0799F5"
                  >
                    <tab-content
                      title="1. Personal Information"
                      icon="icon icon-m-profile"
                      class="card-tab"
                    >
                      <div class="row">
                        <div class="col-12 col-md-4">
                          <div class="card-title">
                            <h2>Student Information</h2>
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
                                        <md-option value="fight-club"
                                          >Mr.</md-option
                                        >
                                        <md-option value="godfather">Ms.</md-option>
                                      </md-select>
                                    </md-field>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12">
                                <md-field :class="getValidationClass('firstName')">
                                  <label for="first-name">First Name *</label>
                                  <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                                  <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                                  <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
                                </md-field>
                              </div>
                              <div class="col-12">
                                <md-field>
                                  <label>Middle Name</label>
                                  <md-input v-model="inline"></md-input>
                                </md-field>
                              </div>
                              <div class="col-12">
                                <md-field :class="getValidationClass('lastName')">
                                  <label for="last-name">Last Name *</label>
                                  <md-input name="last-name" id="last-name" autocomplete="given-name" v-model="form.lastName" :disabled="sending" />
                                  <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                                  <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
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
                        <div class="col-12 col-md-8">
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
                                      <md-select
                                        v-model="inline"
                                        name="state"
                                        id="state"
                                      >
                                        <md-option value="alaska">Alaska</md-option>
                                        <md-option value="alabama"
                                          >Alabama</md-option
                                        >
                                        <md-option value="arkansas"
                                          >Arkansas</md-option
                                        >
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
                                        <md-option value="resident"
                                          >Resident</md-option
                                        >
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
                                      <label for="atrisk"
                                        >At-Risk Indicator *</label
                                      >
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
                      </div>
                      <div class="row">
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
                                      <label for="lepindicator"
                                        >LEP indicator *</label
                                      >
                                      <md-select
                                        v-model="inline"
                                        name="lepindicator"
                                        id="lepindicator"
                                      >
                                        <md-option value="fight-club"
                                          >Yes</md-option
                                        >
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
                                      <md-select
                                        v-model="inline"
                                        name="race"
                                        id="race"
                                      >
                                        <md-option value="asian">Asian</md-option>
                                        <md-option value="asian"
                                          >Black/African American</md-option
                                        >
                                        <md-option value="asian"
                                          >American Indian/Alaskan Native</md-option
                                        >
                                        <md-option value="asian"
                                          >Multiple</md-option
                                        >
                                        <md-option value="asian"
                                          >Pacific Islander/Native
                                          Hawaiian</md-option
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
                                      <md-select
                                        v-model="inline"
                                        name="race"
                                        id="race"
                                      >
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
                      </div>
                      <div class="row">
                        <div class="col-12 col-md-12">
                          <div class="card-title">
                            <h2>Status</h2>
                          </div>
                          <div class="card-content">
                            <div class="row">
                              <div class="col-12 col-md-2">
                                <label class="card-label"
                                  >Homelessness Status *</label
                                >
                                <md-radio v-model="homelessness" :value="true"
                                  >Yes</md-radio
                                >
                                <md-radio v-model="homelessness" :value="false"
                                  >No</md-radio
                                >
                              </div>
                              <div class="col-12 col-md-2">
                                <label class="card-label"
                                  >Special Need Indicator *</label
                                >
                                <md-radio v-model="specialneed" :value="true"
                                  >Yes</md-radio
                                >
                                <md-radio v-model="specialneed" :value="false"
                                  >No</md-radio
                                >
                              </div>
                              <div class="col-12 col-md-2">
                                <label class="card-label">Gender *</label>
                                <md-radio v-model="gender" :value="true"
                                  >Male</md-radio
                                >
                                <md-radio v-model="gender" :value="false"
                                  >Female</md-radio
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </tab-content>
                    <tab-content
                      title="2. Household Information"
                      icon="icon icon-home"
                      class="card-tab"
                    >
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
                    <tab-content
                      title="3.Enrollment History"
                      icon="icon icon-lesson"
                      class="card-tab"
                    >
                      <div class="card-content">
                        <div class="card-title">
                          <h2>Enrolment Information</h2>
                        </div>
                        <div class="row">
                          <div class="col-12 col-md-4">
                            <div class="md-layout md-gutter">
                              <div class="md-layout-item">
                                <md-field>
                                  <label for="category">Category *</label>
                                  <md-select
                                    v-model="inline"
                                    name="category"
                                    id="category"
                                  >
                                    <md-option value="continuing"
                                      >Continuing</md-option
                                    >
                                    <md-option value="entry">Entry</md-option>
                                    <md-option value="originalentry"
                                      >Original Entry</md-option
                                    >
                                    <md-option value="programend"
                                      >Program End</md-option
                                    >
                                    <md-option value="stagefour"
                                      >Stage 4 Pre-Enrollment</md-option
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
                                  <label for="entrycode">Entry Code *</label>
                                  <md-select
                                    v-model="inline"
                                    name="entrycode"
                                    id="entrycode"
                                  >
                                    <md-option value="code1">Code 1</md-option>
                                    <md-option value="code2">Code 2</md-option>
                                  </md-select>
                                </md-field>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-md-4">
                              <label class="card-date-label">Entry Date *</label>
                              <md-datepicker v-model="selectedDate" :md-open-on-focus="false" />
                          </div>
                          <div class="col-12 col-md-4">
                            <md-field>
                              <label>Student Notification Date</label>
                              <md-input v-model="date"></md-input>
                            </md-field>
                          </div>
                          <div class="col-12 col-md-4">
                            <md-field>
                              <label>Slot Accepted Date</label>
                              <md-input v-model="date"></md-input>
                            </md-field>
                          </div>
                          <div class="col-12 col-md-4">
                            <label class="card-date-label">Student Registration Date *</label>
                            <md-datepicker v-model="selectedStudentRegistrationDate" :md-open-on-focus="false" />
                          </div>
                          <div class="col-12 col-md-4">
                            <div class="md-layout md-gutter">
                              <div class="md-layout-item">
                                <md-field>
                                  <label for="latestschool"
                                    >Last School Attended</label
                                  >
                                  <md-select
                                    v-model="inline"
                                    name="latestschool"
                                    id="latestschool"
                                  >
                                    <md-option value="moralacademy"
                                      >Moral Academy</md-option
                                    >
                                    <md-option value="lotuspublicschool"
                                      >Lotus Public School</md-option
                                    >
                                  </md-select>
                                </md-field>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-md-4">
                            <md-field>
                              <label>Last School Address</label>
                              <md-input v-model="date"></md-input>
                            </md-field>
                          </div>
                          <div class="col-12 col-md-4">
                            <md-field>
                              <label>Last School City</label>
                              <md-input v-model="date"></md-input>
                            </md-field>
                          </div>
                          <div class="col-12 col-md-4">
                            <md-field>
                              <label>Last School Zip Code</label>
                              <md-input v-model="date"></md-input>
                            </md-field>
                          </div>
                          <div class="col-12 col-md-4">
                            <md-field>
                              <label>Unique Student Identifier (USI)</label>
                              <md-input v-model="date"></md-input>
                            </md-field>
                          </div>
                          <div class="col-12 col-md-4">
                            <md-field>
                              <label>Grade *</label>
                              <md-input v-model="date"></md-input>
                            </md-field>
                          </div>
                          <div class="col-12 col-md-4">
                            <md-field>
                              <label>Tuition Amount</label>
                              <md-input v-model="date"></md-input>
                            </md-field>
                          </div>
                            <div class="row">
                            <div class="col-12 col-md-4 card-radio">
                              <label class="card-label">Tuition Indicator *</label>
                              <md-radio v-model="tuition" :value="true"
                                >Yes</md-radio
                              >
                              <md-radio v-model="tuition" :value="false"
                                >No</md-radio
                              >
                            </div>
                            <div class="col-12 col-md-4">
                              <label class="card-label">Dual Enrollment *</label>
                              <md-radio v-model="dualenrolment" :value="true"
                                >Yes</md-radio
                              >
                              <md-radio v-model="dualenrolment" :value="false"
                                >No</md-radio
                              >
                            </div>
                            <div class="col-12 col-md-4">
                              <label class="card-label"
                                >Residency Indicator *</label
                              >
                              <md-radio v-model="residencyindicator" :value="true"
                                >Yes</md-radio
                              >
                              <md-radio v-model="residencyindicator" :value="false"
                                >No</md-radio
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </tab-content>
                    <button class="button medium ed-btn__primary right" slot="prev">
                      Back
                    </button>

                    <button class="button medium ed-btn__primary right" slot="next" :disabled="sending">
                      Next
                    </button>
                    <button
                      class="button medium ed-btn__primary right"
                      slot="finish"
                    >
                      Finish
                    </button>
                  </form-wizard>
              </form>
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
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';
import "vue-form-wizard/dist/vue-form-wizard.min.css";

export default {
  name: "add-student",
  mixins: [validationMixin],
  components: {
    FormWizard,
    TabContent,
  },
  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        email: null,
      },
      sending: false,
      selectedDate: new Date('2018/03/26'),
      selectedStudentRegistrationDate: new Date('2018/04/26'),
      gender: false,
      specialneed: false,
      homelessness: false,
      tuition: false,
      dualenrolment: false,
      residencyindicator: false,
    };
  },
  validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        email: {
          required,
          email
        }
      }
  },
  methods: {
    getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
    },
    validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
    },
    onComplete: function() {
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
