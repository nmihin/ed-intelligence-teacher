<template>       
  <el-form :model="form" :rules="rules" ref="form">
    <div class="row">
      <!-- Student Information -->
      <div class="col-12 col-md-4">
        <div class="card-title">
          <h2>Student Information</h2>
        </div>
        <div class="card-content">
          <div class="row">
            <el-form-item label="Prefix" prop="prefix" class="col-12">
              <el-select @change="updateForm('prefix', form.prefix)" v-model="form.prefix" placeholder="Prefix">
                <el-option v-for="pre in options.prefixOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="First Name" prop="firstName" class="col-12">
              <el-input @input="updateForm('firstName', form.firstName)" v-model="form.firstName" placeholder="First name"></el-input>
            </el-form-item>
            <el-form-item label="Middle name" prop="middleName" class="col-12">
              <el-input @input="updateForm('middleName', form.middleName)" v-model="form.middleName" placeholder="Middle name"></el-input>
            </el-form-item>
            <el-form-item label="Last Name" prop="lastName" class="col-12">
              <el-input @input="updateForm('lastName', form.lastName)" v-model="form.lastName" placeholder="Last name"></el-input>
            </el-form-item>
            <el-form-item label="Email Address" prop="email" class="col-12">
              <el-input @input="updateForm('email', form.email)" v-model="form.email" placeholder="Email"></el-input>
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
              <el-input @input="updateForm('streetAddress', form.streetAddress)" v-model="form.streetAddress" placeholder="Street Address"></el-input>
            </el-form-item>
            <el-form-item label="City" prop="city" class="col-12 col-md-4">
              <el-input @input="updateForm('city', form.city)" v-model="form.city" placeholder="City"></el-input>
            </el-form-item>
            <el-form-item label="State" prop="state" class="col-12 col-md-4">
              <el-select @change="updateForm('state', form.state)" v-model="form.state" placeholder="State">
                <el-option v-for="pre in options.stateOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="Zip Code" prop="zipCode" class="col-12 col-md-4">
              <el-input @input="updateForm('zipCode', form.zipCode)"  v-model="form.zipCode" placeholder="Zip Code"></el-input>
            </el-form-item>
            <el-form-item label="Ward" prop="ward" class="col-12 col-md-4">
              <el-input @input="updateForm('ward', form.ward)"  v-model="form.ward" placeholder="Ward"></el-input>
            </el-form-item>
            <el-form-item label="State Residency Status" prop="stateResidencyStatus" class="col-12 col-md-4">
              <el-select @change="updateForm('stateResidencyStatus', form.stateResidencyStatus)" v-model="form.stateResidencyStatus" placeholder="State Residency Status">
                <el-option v-for="pre in options.stateResidencyStatusOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="State/District Verified Residency" prop="stateVerifiedResidencyStatus" class="col-12 col-md-4">
              <el-select @change="updateForm('stateVerifiedResidencyStatus', form.stateVerifiedResidencyStatus)" v-model="form.stateVerifiedResidencyStatus" placeholder="State/District Verified Residency">
                <el-option v-for="pre in options.stateVerifiedResidencyStatusOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="Ward of State Indicator" prop="wardStateIndicator" class="col-12 col-md-4">
              <el-select  @change="updateForm('wardStateIndicator', form.wardStateIndicator)" v-model="form.wardStateIndicator" placeholder="Ward of State Indicator">
                <el-option v-for="pre in options.wardStateIndicatorOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="At-Risk Indicator" prop="atRiskIndicator" class="col-12 col-md-4">
              <el-select @change="updateForm('atRiskIndicator', form.atRiskIndicator)" v-model="form.atRiskIndicator" placeholder="At-Risk Indicator">
                <el-option v-for="pre in options.atRiskIndicatorOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
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
              <el-select @change="updateForm('lepIndicator', form.lepIndicator)" v-model="form.lepIndicator" placeholder="LEP indicator">
                <el-option v-for="pre in options.lepIndicatorOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="LEP Status" prop="lepStatus" class="col-12">
              <el-input @input="updateForm('lepStatus', form.lepStatus)"  v-model="form.lepStatus" placeholder="LEP Status"></el-input>
            </el-form-item>
            <el-form-item label="Social Security Number" class="col-12">
              <el-input @input="updateForm('socialSecurityNumber', form.socialSecurityNumber)"  v-model="form.socialSecurityNumber" prop="socialSecurityNumber" placeholder="Social Security Number"></el-input>
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
              <el-select @change="updateForm('ethnicity', form.ethnicity)" v-model="form.ethnicity" placeholder="Ethnicity">
                <el-option v-for="pre in options.ethnicityOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="Race" prop="race" class="col-12">
              <el-select @change="updateForm('race', form.race)" v-model="form.race" placeholder="Race">
                <el-option v-for="pre in options.raceOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="Free and reduced meal status" prop="mealStatus" class="col-12">
              <el-select @change="updateForm('mealStatus', form.mealStatus)" v-model="form.mealStatus" placeholder="Free and reduced meal status">
                <el-option v-for="pre in options.mealStatusOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="Native Language" prop="nativeLanguage" class="col-12">
              <el-input @input="updateForm('nativeLanguage', form.nativeLanguage)"  v-model="form.nativeLanguage" placeholder="Native Language"></el-input>
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
            <el-form-item label="Weight - lbs" class="col-12">
              <el-input  @input="updateForm('weight', form.weight)"  v-model="form.weight" prop="weight"  placeholder="Weight"></el-input>
            </el-form-item>
            <div class="col-12">
              <div class="row">
                <el-form-item label="Height - feet" class="col-6">
                  <el-input  @input="updateForm('heightFeet', form.heightFeet)"  v-model="form.heightFeet" prop="heightFeet" placeholder="Height - feet"></el-input>
                </el-form-item>
                <el-form-item label="Height - inches" class="col-6">
                  <el-input  @input="updateForm('heightInches', form.heightInches)"  v-model="form.heightInches" prop="heightInches" placeholder="Height - inches"></el-input>
                </el-form-item>
              </div>
            </div>
            <el-form-item label="Birth Date" class="col-12">
              <i class="icon icon-box-plan"></i>
              <el-date-picker 
                @change="updateForm('birthDate', form.birthDate)"
                prop="birthDate" 
                v-model="form.birthDate" 
                type="date" 
                format="dd-MM-yyyy" 
                value-format="yyyy-MM-dd"  
                placeholder="Pick a date">
            </el-date-picker>
            </el-form-item>
            <el-form-item class="avatar-image">
              <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
              <el-upload
                  class="avatar-uploader col-12"
                  action="https://educationalschool.iteg.com.np/images"
                  :multiple="false"
                  accept="image/*"
                  :show-file-list="false">
                  <button class="button medium ed-btn__primary">
                    <i class="icon icon-profile"></i>
                  Upload Avatar Image</button> 
              </el-upload>
            </el-form-item>
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
              <el-radio-group @change="updateForm('homelesnessStatus', form.homelesnessStatus)" v-model="form.homelesnessStatus">
                <el-radio label="yes">Yes</el-radio>
                <el-radio label="no">No</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Special Need Indicator" prop="specialNeedIndicator" class="col-4 col-md-3">
              <el-radio-group  @change="updateForm('specialNeedIndicator', form.specialNeedIndicator)" v-model="form.specialNeedIndicator">
                <el-radio label="yes">Yes</el-radio>
                <el-radio label="no">No</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Gender" prop="gender" class="col-4 col-md-3">
              <el-radio-group @change="updateForm('gender', form.gender)"  v-model="form.gender">
                <el-radio label="male">Male</el-radio>
                <el-radio label="female">Female</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="form.specialNeedIndicator==='yes'">
      <!-- Special Need -->
      <div class="col-12">
        <div class="card-title">
          <h2>Special Needs</h2>
        </div>
        <div class="card-content">
          <div class="row">
            <el-form-item label="SEDS LEA Type" prop="sedsLeaType" class="col-12 col-md-4">
              <el-select @change="updateForm('sedsLeaType', form.sedsLeaType)" v-model="form.sedsLeaType" placeholder="SEDS LEA Type">
                <el-option v-for="pre in options.sedsLeaTypeOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="SEDS School Type" prop="sedsSchoolType" class="col-12 col-md-4">
              <el-select @change="updateForm('sedsSchoolType', form.sedsSchoolType)" v-model="form.sedsSchoolType" placeholder="SEDS School Type">
                <el-option v-for="pre in options.sedsSchoolTypeOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="SEDS Primary Disability" prop="sedsPrimaryDisability" class="col-12 col-md-4">
              <el-select @change="updateForm('sedsPrimaryDisability', form.sedsPrimaryDisability)" v-model="form.sedsPrimaryDisability" placeholder="SEDS Primary Disability">
                <el-option v-for="pre in options.sedsPrimaryDisabilityOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="Special Need Level" prop="specialNeedLevel" class="col-12 col-md-4">
              <el-select @change="updateForm('specialNeedLevel', form.specialNeedLevel)" v-model="form.specialNeedLevel" placeholder="Special Need Level">
                <el-option v-for="pre in options.specialNeedLevelOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="SEDS SPED Environment" class="col-12 col-md-4">
              <el-input  @input="updateForm('sedsSpedEnvironment', form.sedsSpedEnvironment)"  v-model="form.sedsSpedEnvironment" prop="sedsSpedEnvironment"  placeholder="SEDS SPED Environment"></el-input>
            </el-form-item>
            <el-form-item label="SEDS SPED Environment Date" class="col-12 col-md-4">
              <el-input @input="updateForm('sedsSpedEnvironmentDate', form.sedsSpedEnvironmentDate)"  v-model="form.sedsSpedEnvironmentDate" prop="sedsSpedEnvironmentDate"  placeholder="SEDS SPED Environment Date"></el-input>
            </el-form-item>
            <el-form-item label="Most recent IEP Date" class="col-12 col-md-4">
              <el-input @input="updateForm('mostRecentIepDate', form.mostRecentIepDate)" v-model="form.mostRecentIepDate" prop="mostRecentIepDate"  placeholder="Most recent IEP Date"></el-input>
            </el-form-item>
            <el-form-item label="Total Hours Out of General Ed Settings" class="col-12 col-md-4">
              <el-input @input="updateForm('totalHoursEdSettings', form.totalHoursEdSettings)" v-model="form.totalHoursEdSettings" prop="totalHoursEdSettings"  placeholder="Total Hours Out of General Ed Settings"></el-input>
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
        zipCode: ""
      },
      options: {
        //OPTIONS
        prefixOptions: [
            {value: 'Mr.', label: 'Mr.'},
            {value: 'Ms.', label: 'Ms.'}
        ],
        sedsLeaTypeOptions: [
            {value: 'sedsLeaType1', label: 'SEDS LEA Type 1'},
            {value: 'sedsLeaType2', label: 'SEDS LEA Type 2'}
        ],
        sedsSchoolTypeOptions: [
            {value: 'sedsSchoolType1', label: 'SEDS School Type 1'},
            {value: 'sedsSchoolType2', label: 'SEDS School Type 2'}
        ],
        sedsPrimaryDisabilityOptions: [
            {value: 'sedsPrimaryDisability1', label: 'SEDS Primary Disability 1'},
            {value: 'sedsPrimaryDisability2', label: 'SEDS Primary Disability 2'}
        ],
        specialNeedLevelOptions: [
            {value: 'specialNeedLevel1', label: 'Special Need Level 1'},
            {value: 'specialNeedLevel2', label: 'Special Need Level 2'}
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
        birthDate: [
          {
            type: "date",
            message: "Birth date should be date",
            trigger: "change",
          }      
        ],
        socialSecurityNumber: [
          {
            type: "number",
            message: "Social security number should be number",
            trigger: "change",
          }
        ],
        weight: [
          {
            min:1,
            max:3,
            message: 'Lengt should be 1-3 numbers',
            trigger: 'blur'
          },
          {
            type: "number",
            message: "Weight should be number",
            trigger: "change",
          }
        ],
        heightFeet: [
          {
            max:1,
            message: 'Length should be 1',
            trigger: 'blur'
          },
          {
            type: "number",
            message: "Height should be number",
            trigger: "change",
          }
        ],
        heightInches: [
          {
            min:1,
            max:2,
            message: 'Length should be 1-2',
            trigger: 'blur'
          },
          {
            type: "number",
            message: "Height should be number",
            trigger: "change",
          }
        ],
        prefix: [
          {
            required: true,
            message: "Prefix is required",
            trigger: "blur",
          },
        ],
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
        sedsLeaType: [
          {
            required: true,
            message: "SEDS LEA Type",
            trigger: "blur",
          },
        ],
        sedsPrimaryDisability: [
          {
            required: true,
            message: "SEDS Primary Disability",
            trigger: "blur",
          }
        ],
        specialNeedLevel: [
          {
            required: true,
            message: "Special Need Level",
            trigger: "blur",
          }
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
        lepIndicator: [
          {
            required: true,
            message: "LEP Indicator required",
            trigger: "blur",
          },
        ],
        ethnicity: [
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
        mealStatus: [
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
    loadMore() {
    const studentID = parseInt(this.$route.params.id);

    if(this.$route.params.id){
        this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-list-details.json").then((response) => {
          this.studentData = response.data.filter(function (student) {
              return student.sn === studentID;
          });
          this.studentData = this.studentData[0];

          if(this.studentData){
            this.form.atRiskIndicator = this.studentData.atRiskIndicator;
            this.form.birthDate =  this.studentData.birthDate;
            this.form.city =  this.studentData.city;
            this.form.email =  this.studentData.email;
            this.form.ethnicity =  this.studentData.ethnicity;
            this.form.firstName = this.studentData.firstName;
            this.form.gender =  this.studentData.gender;
            this.form.heightFeet =  this.studentData.heightFeet;
            this.form.heightInches =  this.studentData.heightInches;
            this.form.homelesnessStatus =  this.studentData.homelesnessStatus;
            this.form.imageUrl =  this.studentData.imageUrl;
            this.form.lastName = this.studentData.lastName;
            this.form.lepIndicator = this.studentData.lepIndicator;
            this.form.lepStatus = this.studentData.lepStatus;
            this.form.mealStatus =  this.studentData.mealStatus;
            this.form.mostRecentIepDate = this.studentData.mostRecentIepDate;
            this.form.nativeLanguage = this.studentData.nativeLanguage;
            this.form.prefix = this.studentData.prefix;
            this.form.race = this.studentData.race;
            this.form.sedsLeaType = this.studentData.sedsLeaType;
            this.form.sedsSchoolType = this.studentData.sedsSchoolType;
            this.form.sedsPrimaryDisability = this.studentData.sedsPrimaryDisability;
            this.form.sedsSpedEnvironment = this.studentData.sedsSpedEnvironment;
            this.form.sedsSpedEnvironmentDate = this.studentData.sedsSpedEnvironmentDate;
            this.form.socialSecurityNumber = this.studentData.socialSecurityNumber;
            this.form.specialNeedIndicator = this.studentData.specialNeedIndicator;
            this.form.specialNeedLevel =  this.studentData.specialNeedLevel;
            this.form.state = this.studentData.state;
            this.form.stateResidencyStatus =  this.studentData.stateResidencyStatus;
            this.form.stateVerifiedResidencyStatus =  this.studentData.stateVerifiedResidencyStatus;
            this.form.streetAddress =  this.studentData.streetAddress;
            this.form.totalHoursEdSettings =  this.studentData.totalHoursEdSettings;
            this.form.ward =  this.studentData.ward;
            this.form.wardStateIndicator = this.studentData.wardStateIndicator;
            this.form.weight = this.studentData.weight;
            this.form.zipCode = this.studentData.zipCode;
          }
        }).catch((error) => error.response.data)
    }
    },
    openStorage () {
      return JSON.parse(localStorage.getItem('form'))
    },
    saveStorage (form) {
      localStorage.setItem('form', JSON.stringify(form))
    },
    updateForm (input, value) {
      this.form[input] = value
      let storedForm = this.openStorage()
      if (!storedForm) storedForm = {}
      storedForm[input] = value
      this.saveStorage(storedForm)
    },
    validate() {
      return new Promise((resolve) => {
        this.$refs.form.validate((valid) => {
          this.$emit("on-validate", valid, this.model);
          resolve(valid);
        });
      });
    },
  },
  mounted () {
    this.loadMore();
  },
  created () { 

    const storedForm = this.openStorage()
    if (storedForm) {
      this.form = {
        ...this.form,
        ...storedForm
      }
    }
  }
};
</script>

<style></style>
