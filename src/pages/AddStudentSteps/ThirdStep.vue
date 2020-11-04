<template>
<el-form :model="model" :rules="rules" ref="form">
    <div class="row">
      <div class="card-title col-12">
          <h2>Enrolment Information</h2>
      </div>
      <!-- Enrolment Information -->
      <div class="col-12 col-md-4">
        <div class="card-content">
          <div class="row">
            <el-form-item label="Category" prop="category" class="col-12">
              <el-select v-model="model.category" placeholder="Category">
                <el-option v-for="pre in options.categoryOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="Entry Code" prop="entryCode" class="col-12">
              <el-select v-model="model.entryCode" placeholder="Entry Code">
                <el-option v-for="pre in options.entryCodeOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="Student Notification Date" class="col-12">
              <i class="icon icon-dots"></i>
              <el-date-picker prop="entryDate" v-model="model.entryDate" type="date" format="dd-MM-yyyy" value-format="yyyy-MM-dd"  placeholder="Pick a date"></el-date-picker>
            </el-form-item>
            <el-form-item label="Student Notification Date" prop="studentNotificationDate" class="col-12">
              <i class="icon icon-dots"></i>
              <el-input v-model="model.studentNotificationDate" placeholder="Student Notification Date"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card-content">
          <div class="row">
            <el-form-item label="Slot Accepted Date" prop="slotAcceptedDate" class="col-12">
              <el-input v-model="model.slotAcceptedDate" placeholder="Slot Accepted Date"></el-input>
            </el-form-item>
            <el-form-item label="Student Registration Date" class="col-12">
              <i class="icon icon-dots"></i>
              <el-date-picker prop="studentRegistrationDate" v-model="model.studentRegistrationDate" type="date" format="dd-MM-yyyy" value-format="yyyy-MM-dd"  placeholder="Pick a date"></el-date-picker>
            </el-form-item>
            <el-form-item label="Last School Attended" prop="prefix" class="col-12">
              <el-select v-model="model.lastSchoolAttended" placeholder="Last School Attended">
                <el-option v-for="pre in options.lastSchoolAttendedOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="Last School Address" prop="lastSchoolAddress" class="col-12">
              <el-input v-model="model.lastSchoolAddress" placeholder="Last School Address"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
            <el-form-item label="Last School City" prop="lastSchoolCity" class="col-12">
              <el-input v-model="model.lastSchoolCity" placeholder="Last School City"></el-input>
            </el-form-item>
            <el-form-item label="Last School Zip Code" prop="lastSchoolZipCode" class="col-12">
              <el-input v-model="model.lastSchoolZipCode" placeholder="Last School Zip Code"></el-input>
            </el-form-item>
            <el-form-item label="Unique Student Identifier (USI)" prop="uniqueStudentIdentifier" class="col-12">
              <el-input v-model="model.uniqueStudentIdentifier" placeholder="Unique Student Identifier (USI)"></el-input>
            </el-form-item>
            <el-form-item label="Grade" prop="grade" class="col-12">
              <el-select v-model="model.grade" placeholder="Grade">
                <el-option v-for="pre in options.gradeOptions"
                          :key="pre.value"
                          :label="pre.label"
                          :value="pre.value">
                </el-option>
              </el-select>
              <i class="icon icon-arrow"></i>
            </el-form-item>
            <el-form-item label="Tuition Amount" prop="tuitionAmount" class="col-12">
              <el-input v-model="model.tuitionAmount" placeholder="Tuition Amount"></el-input>
            </el-form-item>
      </div>
    </div>
    <div class="row">
            <el-form-item label="Tuition Indicator" prop="tuitionIndicator" class="col-4 col-md-3">
              <el-radio-group v-model="model.tuitionIndicator">
                <el-radio label="yes">Yes</el-radio>
                <el-radio label="no">No</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Dual Enrollment" prop="dualEnrollment" class="col-4 col-md-3">
              <el-radio-group v-model="model.dualEnrollment">
                <el-radio label="yes">Yes</el-radio>
                <el-radio label="no">No</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Residency Indicator" prop="residencyIndicator" class="col-4 col-md-3">
              <el-radio-group v-model="model.residencyIndicator">
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
      model: {
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
    validate() {
      return new Promise((resolve) => {
        this.$refs.form.validate((valid) => {
          this.$emit('on-validate', valid, this.model)
          resolve(valid);
        });
      })

    }
  }

}
</script>

<style>

</style>
