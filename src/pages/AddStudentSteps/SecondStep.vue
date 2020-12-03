<template>
<el-form :model="form" :rules="rules" ref="form">
    <div class="row">
      <!-- Primary Parent / Guardian Information -->
      <div class="col-12 col-md-4">
        <div class="card-title">
          <h2>Primary Parent / Guardian Information</h2>
        </div>
        <div class="card-content">
          <div class="row">
            <el-form-item label="First Name" prop="firstNamePrimaryParent" class="col-12">
              <el-input @input="updateForm('firstNamePrimaryParent', form.firstNamePrimaryParent)"  v-model="form.firstNamePrimaryParent" placeholder="First name"></el-input>
            </el-form-item>
            <el-form-item label="Last Name" prop="lastNamePrimaryParent" class="col-12">
              <el-input @input="updateForm('lastNamePrimaryParent', form.lastNamePrimaryParent)" v-model="form.lastNamePrimaryParent" placeholder="Last name"></el-input>
            </el-form-item>
            <el-form-item label="Contact Number (XXX) XXX-XXXX" prop="contactNumberPrimaryParent" class="col-12">
              <el-input @input="updateForm('contactNumberPrimaryParent', form.contactNumberPrimaryParent)"  v-model="form.contactNumberPrimaryParent" placeholder="Contact Number"></el-input>
            </el-form-item>
            <el-form-item label="Email Address" prop="emailPrimaryParent" class="col-12">
              <el-input @input="updateForm('emailPrimaryParent', form.emailPrimaryParent)"  v-model="form.emailPrimaryParent" placeholder="Email Address"></el-input>
            </el-form-item>
            <el-form-item label="Parent/Guardian Relation" prop="parentGuardianRelationPrimaryParent" class="col-12">
              <el-select @change="updateForm('parentGuardianRelationPrimaryParent', form.parentGuardianRelationPrimaryParent)"  v-model="form.parentGuardianRelationPrimaryParent" placeholder="Parent/Guardian Relation">
                <el-option v-for="pre in options.parentGuardianRelationOptions"
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
      <!-- Secondary Parent / Guardian Information -->
      <div class="col-12 col-md-4">
        <div class="card-title">
          <h2>Secondary Parent / Guardian Information</h2>
        </div>
        <div class="card-content">
          <div class="row">
            <el-form-item label="First Name" prop="firstNameSecondaryParent" class="col-12">
              <el-input @input="updateForm('firstNameSecondaryParent', form.firstNameSecondaryParent)"  v-model="form.firstNameSecondaryParent" placeholder="First name"></el-input>
            </el-form-item>
            <el-form-item label="Last Name" prop="lastNameSecondaryParent" class="col-12">
              <el-input @input="updateForm('lastNameSecondaryParent', form.lastNameSecondaryParent)" v-model="form.lastNameSecondaryParent" placeholder="Last name"></el-input>
            </el-form-item>
            <el-form-item label="Contact Number (XXX) XXX-XXXX" prop="contactNumberSecondaryParent" class="col-12">
              <el-input @input="updateForm('contactNumberSecondaryParent', form.contactNumberSecondaryParent)" v-model="form.contactNumberSecondaryParent" placeholder="Contact Number"></el-input>
            </el-form-item>
            <el-form-item label="Email Address" prop="emailSecondaryParent" class="col-12">
              <el-input @input="updateForm('emailSecondaryParent', form.emailSecondaryParent)"  v-model="form.emailSecondaryParent" placeholder="Email Address"></el-input>
            </el-form-item>
            <el-form-item label="Parent/Guardian Relation" prop="parentGuardianRelationSecondaryParent" class="col-12">
              <el-select @change="updateForm('parentGuardianRelationSecondaryParent', form.parentGuardianRelationSecondaryParent)"  v-model="form.parentGuardianRelationSecondaryParent" placeholder="Parent/Guardian Relation">
                <el-option v-for="pre in options.parentGuardianRelationOptions"
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
      <!-- Emergency Contact Information -->
      <div class="col-12 col-md-4">
        <div class="card-title">
          <h2>Emergency Contact Information</h2>
        </div>
        <div class="card-content">
          <div class="row">
            <el-form-item label="First Name" prop="firstNameEmergency" class="col-12">
              <el-input @input="updateForm('firstNameEmergency', form.firstNameEmergency)"  v-model="form.firstNameEmergency" placeholder="First name"></el-input>
            </el-form-item>
            <el-form-item label="Last Name" prop="lastNameEmergency" class="col-12">
              <el-input @input="updateForm('lastNameEmergency', form.lastNameEmergency)" v-model="form.lastNameEmergency" placeholder="Last name"></el-input>
            </el-form-item>
            <el-form-item label="Contact Number (XXX) XXX-XXXX" prop="contactNumberEmergency" class="col-12">
              <el-input @input="updateForm('contactNumberEmergency', form.contactNumberEmergency)" v-model="form.contactNumberEmergency" placeholder="Contact Number"></el-input>
            </el-form-item>
            <el-form-item label="Email Address" prop="emailEmergency" class="col-12">
              <el-input @input="updateForm('emailEmergency', form.emailEmergency)" v-model="form.emailEmergency" placeholder="Email Address"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
    </div>
</el-form>
</template>

<script>
export default {
  data(){
		return {
      form: {
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
        parentGuardianRelationSecondaryParent: ""
      },
      options: {
        parentGuardianRelationOptions: [
            {value: 'bfther', label: 'Bilogical Father'},
            {value: 'bmother', label: 'Bilogical Mother'},
            {value: 'smother', label: 'Stepmother'},
            {value: 'sfather', label: 'Stepfather'},
            {value: 'brother', label: 'Brother'},
            {value: 'sister', label: 'Sister'},
        ]
      },
      rules: {
        firstNamePrimaryParent: [
          {
            required: true,
            message: "First name is required",
            trigger: "blur",
          },
        ],
        lastNamePrimaryParent: [
          {
            required: true,
            message: "Last name is required",
            trigger: "blur",
          },
        ],
        contactNumberPrimaryParent: [
          {
            required: true,
            message: "Contact number is required",
            trigger: "blur",
          },
          {
            pattern: /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/,
            max: 20,
            message: "Invalid phone",
            trigger: "change",
          },
        ],
        emailPrimaryParent: [
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
        parentGuardianRelationPrimaryParent: [
          {
            required: true,
            message: "Primary Parent / Guardian Information is required",
            trigger: "blur",
          },
        ],
        firstNameSecondaryParent: [
          {
            required: true,
            message: "First name is required",
            trigger: "blur",
          },
        ],
        lastNameSecondaryParent: [
          {
            required: true,
            message: "Last name is required",
            trigger: "blur",
          },
        ],
        contactNumberSecondaryParent: [
          {
            required: true,
            message: "Contact number is required",
            trigger: "blur",
          },
          {
            pattern: /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/,
            max: 20,
            message: "Invalid phone",
            trigger: "change",
          },
        ],
        emailSecondaryParent: [
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
        parentGuardianRelationSecondaryParent: [
          {
            required: true,
            message: "Secondary Parent / Guardian Information is required",
            trigger: "blur",
          },
        ],
        firstNameEmergency: [
          {
            required: true,
            message: "First name is required",
            trigger: "blur",
          },
        ],
        lastNameEmergency: [
          {
            required: true,
            message: "Last name is required",
            trigger: "blur",
          },
        ],
        emailEmergency: [
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
        contactNumberEmergency: [
          {
            required: true,
            message: "Contact number is required",
            trigger: "blur",
          },
          {
            pattern: /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/,
            max: 20,
            message: "Invalid phone",
            trigger: "change",
          },
        ],
      }
	}},
  methods: {
    loadMore(){
    const studentID = parseInt(this.$route.params.id);

    if(this.$route.params.id){
        this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-list-details.json").then((response) => {
          this.studentData = response.data.filter(function (student) {
              return student.sn === studentID;
          });
          this.studentData = this.studentData[0];

          if(this.studentData){
          this.form.contactNumberEmergency =  this.studentData.contactNumberEmergency;
          this.form.contactNumberPrimaryParent = this.studentData.contactNumberPrimaryParent;
          this.form.contactNumberSecondaryParent = this.studentData.contactNumberSecondaryParent;
          this.form.emailEmergency = this.studentData.emailEmergency;
          this.form.emailPrimaryParent = this.studentData.emailPrimaryParent;
          this.form.emailSecondaryParent = this.studentData.emailSecondaryParent;
          this.form.firstNameEmergency = this.studentData.firstNameEmergency;
          this.form.firstNamePrimaryParent = this.studentData.firstNamePrimaryParent;
          this.form.firstNameSecondaryParent = this.studentData.firstNameSecondaryParent;
          this.form.lastNameEmergency = this.studentData.lastNameEmergency;
          this.form.lastNamePrimaryParent = this.studentData.lastNamePrimaryParent;
          this.form.lastNameSecondaryParent = this.studentData.lastNameSecondaryParent;
          this.form.parentGuardianRelationPrimaryParent = this.studentData.parentGuardianRelationPrimaryParent;
          this.form.parentGuardianRelationSecondaryParent = this.studentData.parentGuardianRelationSecondaryParent;
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
  created () {
    this.loadMore();

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