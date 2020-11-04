<template>
<el-form :model="model" :rules="rules" ref="form">
    <div class="row">
      <!-- Primary Parent / Guardian Information -->
      <div class="col-12 col-md-4">
        <div class="card-title">
          <h2>Primary Parent / Guardian Information</h2>
        </div>
        <div class="card-content">
          <div class="row">
            <el-form-item label="First Name" prop="firstNamePrimaryParent" class="col-12">
              <el-input v-model="model.firstNamePrimaryParent" placeholder="First name"></el-input>
            </el-form-item>
            <el-form-item label="Last Name" prop="lastNamePrimaryParent" class="col-12">
              <el-input v-model="model.lastNamePrimaryParent" placeholder="Last name"></el-input>
            </el-form-item>
            <el-form-item label="Contact Number (XXX) XXX-XXXX" prop="contactNumberPrimaryParent" class="col-12">
              <el-input v-model="model.contactNumberPrimaryParent" placeholder="Contact Number"></el-input>
            </el-form-item>
            <el-form-item label="Email Address" prop="emailPrimaryParent" class="col-12">
              <el-input v-model="model.emailPrimaryParent" placeholder="Email Address"></el-input>
            </el-form-item>
            <el-form-item label="Parent/Guardian Relation" prop="parentGuardianRelationPrimaryParent" class="col-12">
              <el-select v-model="model.parentGuardianRelationPrimaryParent" placeholder="Parent/Guardian Relation">
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
              <el-input v-model="model.firstNameSecondaryParent" placeholder="First name"></el-input>
            </el-form-item>
            <el-form-item label="Last Name" prop="lastNameSecondaryParent" class="col-12">
              <el-input v-model="model.lastNameSecondaryParent" placeholder="Last name"></el-input>
            </el-form-item>
            <el-form-item label="Contact Number (XXX) XXX-XXXX" prop="contactNumberSecondaryParent" class="col-12">
              <el-input v-model="model.contactNumberSecondaryParent" placeholder="Contact Number"></el-input>
            </el-form-item>
            <el-form-item label="Email Address" prop="emailSecondaryParent" class="col-12">
              <el-input v-model="model.emailSecondaryParent" placeholder="Email Address"></el-input>
            </el-form-item>
            <el-form-item label="Parent/Guardian Relation" prop="parentGuardianRelationSecondaryParent" class="col-12">
              <el-select v-model="model.parentGuardianRelationSecondaryParent" placeholder="Parent/Guardian Relation">
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
              <el-input v-model="model.firstNameEmergency" placeholder="First name"></el-input>
            </el-form-item>
            <el-form-item label="Last Name" prop="lastNameEmergency" class="col-12">
              <el-input v-model="model.lastNameEmergency" placeholder="Last name"></el-input>
            </el-form-item>
            <el-form-item label="Contact Number (XXX) XXX-XXXX" prop="contactNumberEmergency" class="col-12">
              <el-input v-model="model.contactNumberEmergency" placeholder="Contact Number"></el-input>
            </el-form-item>
            <el-form-item label="Email Address" prop="emailEmergency" class="col-12">
              <el-input v-model="model.emailEmergency" placeholder="Email Address"></el-input>
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
      model: {
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
