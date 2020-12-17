<template>
  <!-- Main Content -->
  <div id="add-student" class="main-content">
    <div class="container-fluid">
      <div class="row">
        <div class="card-boxes addstudent">
          <div class="card-box">
            <div class="card-content">
            <!-- <pre v-html="prettyJSON"></pre> -->
            <form-wizard @on-complete="onComplete" ref="wizard" :start-index.sync="activeTabIndex" shape="circle" color="#02609B" error-color="#0799F5">
              <!-- 1. Step -->
              <tab-content title="1. Personal Information" icon="icon icon-m-profile" class="card-tab" :before-change="() => validate('firstStep')">
                <first-step ref="firstStep" @on-validate="onStepValidate"></first-step>
              </tab-content>
              <!-- 2. Step -->
              <tab-content title="2. Household Information" icon="icon icon-home" class="card-tab" :before-change="() => validate('secondStep')">
                <second-step ref="secondStep" @on-validate="onStepValidate"></second-step>
              </tab-content>
              <!-- 3. Step -->
              <tab-content title="3. Enrollment History" icon="icon icon-lesson" class="card-tab" :before-change="() => validate('thirdStep')">
                <third-step ref="thirdStep" @on-validate="onStepValidate"></third-step>
              </tab-content>
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
import FirstStep from "./Steps/FirstStep.vue";
import SecondStep from "./Steps/SecondStep.vue";
import ThirdStep from "./Steps/ThirdStep.vue";
import prettyJSON from "../../prettyJson.js";
import { FormWizard, TabContent } from "vue-form-wizard";
import { validationMixin } from "vuelidate";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import Element from 'element-ui'

export default {
  name: "add-student",
  mixins: [validationMixin],
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
    FormWizard,
    TabContent,
    Element
  },
  data() {
    return {
      finalModel: {},
      busy:false,
      activeTabIndex: 0,
      studentData:[],
      form: {
        //DEFINITIONS
        atRiskIndicator: "",
        birthDate: "",
        city: "",
        email: "",
        ethnicity: "",
        firstName: "",
        gender: "",
        heightFeet: "",
        heightInches: "",
        homelesnessStatus: "",
        imageUrl: "",
        lastName: "",
        lepIndicator: "",
        lepStatus: "",
        mealStatus:"",
        mostRecentIepDate:"",
        nativeLanguage:"",
        prefix: "",
        race:"",
        sedsLeaType:"",
        sedsSchoolType:"",
        sedsPrimaryDisability:"",
        sedsSpedEnvironment:"",
        sedsSpedEnvironmentDate:"",
        socialSecurityNumber: "",
        specialNeedIndicator: "",
        specialNeedLevel:"",
        state: "",
        stateResidencyStatus: "",
        stateVerifiedResidencyStatus: "",
        streetAddress: "",
        totalHoursEdSettings:"",
        ward: "",
        wardStateIndicator: "",
        weight:"",
        zipCode: "",
        contactNumberEmergency: "",
        contactNumberPrimaryParent: "",
        contactNumberSecondaryParent: "",
        emailEmergency: "",
        emailPrimaryParent: "",
        emailSecondaryParent: "",
        firstNameEmergency: "",
        firstNamePrimaryParent: "",
        firstNameSecondaryParent: "",
        lastNameEmergency: "",
        lastNamePrimaryParent: "",
        lastNameSecondaryParent: "",
        parentGuardianRelationPrimaryParent: "",
        parentGuardianRelationSecondaryParent: "",
        category: "",
        dualEnrollment: "",
        entryCode: "",
        grade: "",
        lastSchoolAddress: "",
        lastSchoolAttended: "",
        lastSchoolCity: "",
        lastSchoolZipCode: "",
        residencyIndicator: "",
        slotAcceptedDate: "",
        studentNotificationDate: "",
        studentRegistrationDate: "",
        tuitionAmount: "",
        tuitionIndicator: "",
        uniqueStudentIdentifier: ""
      },
    };
  },
  computed: {
    prettyJSON() {
      return prettyJSON(this.finalModel);
    }
  },
  methods: {
    onComplete() {
      alert("All required data submited!");
    },
    forceClearError() {
      this.$refs.wizard.tabs[this.activeTabIndex].validationError = null;
    },
    validate(ref) {
      return this.$refs[ref].validate();
    },
    onStepValidate(validated, model) {
      if (validated) {
        this.finalModel = { ...this.finalModel, ...model };
      }
    }
  },
  created() {
   
  }
};
</script>
