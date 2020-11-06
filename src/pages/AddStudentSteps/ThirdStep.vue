<template>
<el-form :model="form" :rules="rules" ref="form">
    <div class="row">
      <div class="card-title col-12">
          <h2>Enrolment Information</h2>
      </div>
      <!-- Enrolment Information -->
      <div class="col-12 col-md-4">
        <div class="card-content">
          <div class="row">
            <el-form-item label="Category" prop="category" class="col-12">
              <el-select @change="updateForm('category', form.category)" v-model="form.category" placeholder="Category">
                <el-option v-for="pre in options.categoryOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="Entry Code" prop="entryCode" class="col-12">
              <el-select @change="updateForm('entryCode', form.entryCode)" v-model="form.entryCode" placeholder="Entry Code">
                <el-option v-for="pre in options.entryCodeOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="Entry Date" class="col-12">
              <i class="icon icon-box-plan"></i>
              <el-date-picker  @change="updateForm('entryDate', form.entryDate)" prop="entryDate" v-model="form.entryDate" type="date" format="dd-MM-yyyy" value-format="yyyy-MM-dd"  placeholder="Pick a date"></el-date-picker>
            </el-form-item>
            <el-form-item label="Student Notification Date" class="col-12">
              <el-input @input="updateForm('studentNotificationDate', form.studentNotificationDate)"  v-model="form.studentNotificationDate" prop="studentNotificationDate" placeholder="Student Notification Date"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card-content">
          <div class="row">
            <el-form-item label="Slot Accepted Date" prop="slotAcceptedDate" class="col-12">
              <el-input @input="updateForm('slotAcceptedDate', form.slotAcceptedDate)"  v-model="form.slotAcceptedDate" placeholder="Slot Accepted Date"></el-input>
            </el-form-item>
            <el-form-item label="Student Registration Date" class="col-12">
              <i class="icon icon-box-plan"></i>
              <el-date-picker @change="updateForm('studentRegistrationDate', form.studentRegistrationDate)" prop="studentRegistrationDate" v-model="form.studentRegistrationDate" type="date" format="dd-MM-yyyy" value-format="yyyy-MM-dd"  placeholder="Pick a date"></el-date-picker>
            </el-form-item>
            <el-form-item label="Last School Attended" prop="prefix" class="col-12">
              <el-select @change="updateForm('lastSchoolAttended', form.lastSchoolAttended)" v-model="form.lastSchoolAttended" placeholder="Last School Attended">
                <el-option v-for="pre in options.lastSchoolAttendedOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="Last School Address" prop="lastSchoolAddress" class="col-12">
              <el-input @input="updateForm('lastSchoolAddress', form.lastSchoolAddress)"  v-model="form.lastSchoolAddress" placeholder="Last School Address"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
            <el-form-item label="Last School City" prop="lastSchoolCity" class="col-12">
              <el-input @input="updateForm('lastSchoolCity', form.lastSchoolCity)" v-model="form.lastSchoolCity" placeholder="Last School City"></el-input>
            </el-form-item>
            <el-form-item label="Last School Zip Code" prop="lastSchoolZipCode" class="col-12">
              <el-input @input="updateForm('lastSchoolZipCode', form.lastSchoolZipCode)" v-model="form.lastSchoolZipCode" placeholder="Last School Zip Code"></el-input>
            </el-form-item>
            <el-form-item label="Unique Student Identifier (USI)" prop="uniqueStudentIdentifier" class="col-12">
              <el-input @input="updateForm('uniqueStudentIdentifier', form.uniqueStudentIdentifier)" v-model="form.uniqueStudentIdentifier" placeholder="Unique Student Identifier (USI)"></el-input>
            </el-form-item>
            <el-form-item label="Grade" prop="grade" class="col-12">
              <el-select @change="updateForm('grade', form.grade)" v-model="form.grade" placeholder="Grade">
                <el-option v-for="pre in options.gradeOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="Tuition Amount" class="col-12">
              <el-input @input="updateForm('tuitionAmount', form.tuitionAmount)" v-model="form.tuitionAmount" prop="tuitionAmount" placeholder="Tuition Amount"></el-input>
            </el-form-item>
      </div>
    </div>
    <div class="row">
            <el-form-item label="Tuition Indicator" prop="tuitionIndicator" class="col-4 col-md-3">
              <el-radio-group @change="updateForm('tuitionIndicator', form.tuitionIndicator)" v-model="form.tuitionIndicator">
                <el-radio label="yes">Yes</el-radio>
                <el-radio label="no">No</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Dual Enrollment" prop="dualEnrollment" class="col-4 col-md-3">
              <el-radio-group @change="updateForm('dualEnrollment', form.dualEnrollment)" v-model="form.dualEnrollment">
                <el-radio label="yes">Yes</el-radio>
                <el-radio label="no">No</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Residency Indicator" prop="residencyIndicator" class="col-4 col-md-3">
              <el-radio-group @change="updateForm('residencyIndicator', form.residencyIndicator)" v-model="form.residencyIndicator">
                <el-radio label="yes">Yes</el-radio>
                <el-radio label="no">No</el-radio>
              </el-radio-group>
            </el-form-item>      
    </div>
</el-form>
</template>

<script>
export default {
  data(){
		return {
      form: {
        //DEFINITIONS
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
      options: {
        //OPTIONS
        categoryOptions: [
            {value: "category1", label: 'Category 1'},
            {value: "category2", label: 'Category 2'},
        ],
        ethnicityOptions: [
            {value: "continuing", label: 'Continuing'},
            {value: "entry", label: 'Entry'},    
            {value: "originalentry", label: 'Original Entry'},
            {value: "programend", label: 'Program End'},  
            {value: "stagefour", label: 'Stage 4 Pre-Enrollment'}
        ],  
        entryCodeOptions: [
            {value: "codeone", label: 'Code One'},
            {value: "codetwo", label: 'Code Two'},    
        ],
        lastSchoolAttendedOptions: [
            {value: "als", label: 'Apex Life School'},  
            {value: "als2", label: 'Apex Life School 2'},  
            {value: "als3", label: 'Apex Life School 3'}  
        ],
        gradeOptions: [
            {value: "one", label: 'One'},  
            {value: "two", label: 'Two'},  
            {value: "three", label: 'Three'}           
        ]
      },
      rules: {
        category: [
          {
            required: true,
            message: "Category is required",
            trigger: "blur",
          },
        ],
        entryCode: [
          {
            required: true,
            message: "Entry Code is required",
            trigger: "blur",
          },
        ],
        entryDate: [
          {
            required: true,
            message: "Entry date is required",
            trigger: "blur",
          },
        ],
        grade: [
          {
            required: true,
            message: "Grade is required",
            trigger: "blur",
          },
        ],
        tuitionAmount: [
          {
            type: "number",
            message: "Tuition is a number",
            trigger: "change",
          }
        ],
        tuitionIndicator: [
          {
            required: true,
            message: "Tuition Indicator is required",
            trigger: "blur",
          },
        ],
        dualEnrollment: [
          {
            required: true,
            message: "Dual Enrollment is required",
            trigger: "blur",
          },
        ],
        residencyIndicator: [
          {
            required: true,
            message: "Residency Indicator is required",
            trigger: "blur",
          },
        ]
      }
	}},
  methods: {
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
          this.$emit('on-validate', valid, this.model)
          resolve(valid);
        });
      })

    }
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
}
</script>

<style>

</style>
