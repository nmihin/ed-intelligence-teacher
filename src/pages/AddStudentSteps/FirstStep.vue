<template>       
  <el-form :model="model" :rules="rules" ref="form">
    <div class="row">
      <!-- Student Information -->
      <div class="col-12 col-md-4">
        <div class="card-title">
          <h2>Student Information</h2>
        </div>
        <div class="card-content">
          <div class="row">
            <el-form-item label="Prefix" prop="prefix" class="col-12">
              <el-select v-model="model.prefix" placeholder="Prefix">
                <el-option v-for="pre in model.prefixOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="First Name" prop="firstName" class="col-12">
              <el-input v-model="model.firstName" placeholder="First name"></el-input>
            </el-form-item>
            <el-form-item label="Middle name" prop="middleName" class="col-12">
              <el-input v-model="model.middleName" placeholder="First name"></el-input>
            </el-form-item>
            <el-form-item label="Last Name" prop="lastName" class="col-12">
              <el-input v-model="model.lastName" placeholder="Last name"></el-input>
            </el-form-item>
            <el-form-item label="Email Address" prop="email" class="col-12">
              <el-input v-model="model.email" placeholder="Email"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <!-- Address Information -->
      <div class="col-12 col-md-8">
        <div class="card-title">
          <h2>Address Information</h2>
        </div>
        <div class="card-content">
          <div class="row">
            <el-form-item label="Street Address" prop="streetAddress" class="col-12 col-md-4">
              <el-input v-model="model.streetAddress" placeholder="Street Address"></el-input>
            </el-form-item>
            <el-form-item label="City" prop="city" class="col-12 col-md-4">
              <el-input v-model="model.city" placeholder="City"></el-input>
            </el-form-item>
            <el-form-item label="State" prop="state" class="col-12 col-md-4">
              <el-select v-model="model.state" placeholder="State">
                <el-option v-for="pre in model.stateOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Zip Code" prop="zipCode" class="col-12 col-md-4">
              <el-input v-model="model.zipCode" placeholder="Zip Code"></el-input>
            </el-form-item>
            <el-form-item label="Ward" prop="ward" class="col-12 col-md-4">
              <el-input v-model="model.ward" placeholder="Ward"></el-input>
            </el-form-item>
            <el-form-item label="State Residency Status" prop="stateResidencyStatus" class="col-12 col-md-4">
              <el-select v-model="model.stateResidencyStatus" placeholder="State Residency Status">
                <el-option v-for="pre in model.stateResidencyStatusOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="State/District Verified Residency" prop="stateVerifiedResidencyStatus" class="col-12 col-md-4">
              <el-select v-model="model.stateVerifiedResidencyStatus" placeholder="State/District Verified Residency">
                <el-option v-for="pre in model.stateVerifiedResidencyStatusOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Ward of State Indicator" prop="wardStateIndicator" class="col-12 col-md-4">
              <el-select v-model="model.wardStateIndicator" placeholder="Ward of State Indicator">
                <el-option v-for="pre in model.wardStateIndicatorOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="At-Risk Indicator" prop="atRiskIndicator" class="col-12 col-md-4">
              <el-select v-model="model.atRiskIndicator" placeholder="At-Risk Indicator">
                <el-option v-for="pre in model.atRiskIndicatorOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- Security Number Information -->
      <div class="col-12 col-md-4">
        <div class="card-title">
          <h2>Security Number Information</h2>
        </div>
        <div class="card-content">
          <div class="row">
            <el-form-item label="LEP indicator" prop="lepIndicator" class="col-12">
              <el-select v-model="model.lepIndicator" placeholder="LEP indicator">
                <el-option v-for="pre in model.lepIndicatorOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="LEP Status" prop="lepStatus" class="col-12">
              <el-input v-model="model.lepStatus" placeholder="LEP Status"></el-input>
            </el-form-item>
            <el-form-item label="Social Security Number" prop="socialSecurityNumber" class="col-12">
              <el-input v-model="model.socialSecurityNumber" placeholder="Social Security Number"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <!-- Social Information -->
      <div class="col-12 col-md-4">
        <div class="card-title">
          <h2>Social Information</h2>
        </div>
        <div class="card-content">
          <div class="row">
            <el-form-item label="Ethnicity" prop="ethnicity" class="col-12">
              <el-select v-model="model.ethnicity" placeholder="Ethnicity">
                <el-option v-for="pre in model.ethnicityOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Race" prop="race" class="col-12">
              <el-select v-model="model.race" placeholder="Race">
                <el-option v-for="pre in model.raceOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Free and reduced meal status" prop="mealStatus" class="col-12">
              <el-select v-model="model.mealStatus" placeholder="Free and reduced meal status">
                <el-option v-for="pre in model.mealStatusOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Native Language" prop="nativeLanguage" class="col-12">
              <el-input v-model="model.nativeLanguage" placeholder="Native Language"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <!-- Pysical Information -->
      <div class="col-12 col-md-4">
        <div class="card-title">
          <h2>Physical Information</h2>
        </div>
        <div class="card-content">
          <div class="row">
            <el-form-item label="Weight" prop="weight" class="col-12">
              <el-input v-model="model.weight" placeholder="Weight"></el-input>
            </el-form-item>
            <el-form-item label="Height - feet" prop="heightFeet" class="col-12">
              <el-input v-model="model.heightFeet" placeholder="Height - feet"></el-input>
            </el-form-item>
            <el-form-item label="Height - inches" prop="heightInches" class="col-12">
              <el-input v-model="model.heightInches" placeholder="Height - inches"></el-input>
            </el-form-item>
            <el-date-picker prop="birthDate" v-model="model.birthDate" type="date" class="col-12" format="dd-MM-yyyy" value-format="yyyy-MM-dd"  placeholder="Pick a date"></el-date-picker>
            <el-upload
                class="avatar-uploader col-12"
                action=""
                accept="image/*"
                :show-file-list="false">
                <img v-if="model.imageUrl" :src="model.imageUrl" class="avatar">
                <i v-else class="icon icon-profile"></i>
            </el-upload>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- Status -->
      <div class="col-12">
        <div class="card-title">
          <h2>Status</h2>
        </div>
        <div class="card-content">
          <div class="row">
            <el-form-item label="Homelessness Status" prop="homelesnessStatus" class="col-4 col-md-3">
              <el-radio-group v-model="model.homelesnessStatus">
                <el-radio label="yes">Yes</el-radio>
                <el-radio label="no">No</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Special Need Indicator" prop="specialNeedIndicator" class="col-4 col-md-3">
              <el-radio-group v-model="model.specialNeedIndicator">
                <el-radio label="yes">Yes</el-radio>
                <el-radio label="no">No</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Gender" prop="gender" class="col-4 col-md-3">
              <el-radio-group v-model="model.gender">
                <el-radio label="yes">Yes</el-radio>
                <el-radio label="no">No</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
        </div>
      </div>
    </div>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        //DEFINITIONS
        firstName: "",
        lastName: "",
        email: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        ward: "",
        stateResidencyStatus: "",
        stateVerifiedResidencyStatus: "",
        wardStateIndicator: "",
        atRiskIndicator: "",
        lepIndicator: "",
        lepStatus: "",
        socialSecurityNumber: "",
        ethnicity: "",
        race:"",
        mealStatus:"",
        nativeLanguage:"",
        weight:"",
        heightFeet: "",
        heightInches: "",
        birthDate: "",
        imageUrl: "",
        homelesnessStatus: "",
        specialNeedIndicator: "",
        gender: "",
        prefix: "-- title --",
        //OPTIONS
        prefixOptions: [
            {value: 'Mr.', label: 'Mr.'},
            {value: 'Ms.', label: 'Ms.'}
        ],
        stateOptions: [
            {value: 'Alabama', label: 'AL'},
            {value: 'Alaska', label: 'AK'}
        ],
        stateResidencyStatusOptions: [
            {value: 'Resident', label: 'Resident'},
            {value: 'Non-Resident', label: 'Non-Resident'}       
        ],
        stateVerifiedResidencyStatusOptions: [
            {value: true, label: 'Yes'},
            {value: false, label: 'No'}        
        ],
        wardStateIndicatorOptions: [
            {value: true, label: 'Yes'},
            {value: false, label: 'No'}        
        ],
        atRiskIndicatorOptions: [
            {value: true, label: 'Yes'},
            {value: false, label: 'No'}           
        ],
        lepIndicatorOptions: [
            {value: true, label: 'Yes'},
            {value: false, label: 'No'}           
        ],    
        ethnicityOptions: [
            {value: "hispanic", label: 'H - Hispanic/Latino'},
            {value: "nothispanic", label: 'N - Not Hispanic/Latino'}           
        ],  
        raceOptions: [
            {value: "asian", label: 'Asian'},
            {value: "blackafricanamerican", label: 'Black/African American'},   
            {value: "americanindianalaskan", label: 'American Indian/Alaskan Native'},
            {value: "multiple", label: 'Pacific Islander/Native Hawaiian'},        
            {value: "white", label: 'White/Caucasian'}
        ],  
        mealStatusOptions: [
            {value: "free", label: 'Free'},
            {value: "paid", label: 'Paid'},
            {value: "cep", label: 'CEP'}
        ]
      },
      rules: {
        firstName: [
          {
            required: true,
            message: "First name is required",
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: "Last name is required",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Email is required",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Invalid email",
            trigger: "change",
          },
        ],
        streetAddress: [
          {
            required: true,
            message: "Street Address is required",
            trigger: "blur",
          },
        ],
        city: [
          {
            required: true,
            message: "City is required",
            trigger: "blur",
          },
        ],
        state: [
          {
            required: true,
            message: "State is required",
            trigger: "blur",
          },
        ],
        zipCode: [
          {
            required: true,
            message: "Zip Code is required",
            trigger: "blur",
          },
        ],
        stateResidencyStatus: [
          {
            required: true,
            message: "State Residency Status required",
            trigger: "blur",
          },
        ],
        atRiskIndicator: [
          {
            required: true,
            message: "At-Risk Indicator required",
            trigger: "blur",
          },
        ],
        lepIndicatorOptions: [
          {
            required: true,
            message: "LEP Indicator required",
            trigger: "blur",
          },
        ],
        lepStatus: [
          {
            required: true,
            message: "LEP Status required",
            trigger: "blur",
          },
        ],
        ethnicityOptions: [
          {
            required: true,
            message: "Ethnicity required",
            trigger: "blur",
          },
        ],
        raceOptions: [
          {
            required: true,
            message: "Race required",
            trigger: "blur",
          },
        ],
        mealStatusOptions: [
          {
            required: true,
            message: "Free and reduced meal status required",
            trigger: "blur",
          },
        ],
        homelesnessStatus: [
           {
            required: true,
            message: "Homelesness Status required",
            trigger: "blur",
          },         
        ],
        specialNeedIndicator: [
           {
            required: true,
            message: "Special Need Indicator required",
            trigger: "blur",
          },         
        ],
        gender: [
           {
            required: true,
            message: "Gender required",
            trigger: "blur",
          },         
        ]
      },
    };
  },
  methods: {
    validate() {
      return new Promise((resolve) => {
        this.$refs.form.validate((valid) => {
          this.$emit("on-validate", valid, this.model);
          resolve(valid);
        });
      });
    },
  },
};
</script>

<style></style>
