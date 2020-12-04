 <template> 
      <!-- Main Content -->
      <div class="main-content">
        <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <div class="row">
            <div class="side-menu__results card-boxes change-password">
              <!-- Box -->
              <div class="card-box">
                <div class="card-content">
                      <el-form :model="formChangePassword" :rules="formChangePassword.rules" ref="formChangePassword">
                        <div class="row">
                          <h2 class="title">Change Password</h2>
                          <el-form-item label="Old Password" prop="oldpassword"  class="col-12">
                            <el-input @input="updateForm('oldpassword', formChangePassword.oldpassword)"  v-model="formChangePassword.oldpassword"  placeholder="Old Password">
                            </el-input>                    
                          </el-form-item>
                          <el-form-item label="New Password" prop="newpassword"  class="col-12">
                            <el-input @input="updateForm('newpassword', formChangePassword.newpassword)"  v-model="formChangePassword.newpassword"  placeholder="New Password">
                            </el-input>                    
                          </el-form-item>
                          <el-form-item label="Confirm Password" prop="confirmpassword"  class="col-12">
                            <el-input @input="updateForm('confirmpassword', formChangePassword.confirmpassword)"  v-model="formChangePassword.confirmpassword"  placeholder="Confirm Password">
                            </el-input>                    
                          </el-form-item>
                        </div>
                        <el-button @click="validateChangePassword()" class="button medium ed-btn__primary right">Update password</el-button>
                      </el-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
       </div>
</template>

<script>

export default {
  name: 'change-password',
  components: {
  },
  data: () => ({
    formChangePassword: {
      oldpassword:"",
      newpassword:"",
      confirmpassword:"",
      rules: {
        oldpassword: [
            {
              required: true,
              message: "Old Password Required!",
              trigger: "blur",
            }
        ],
        newpassword: [
            {
              required: true,
              message: "New Password Required!",
              trigger: "blur",
            }
        ],
        confirmpassword: [
            {
              required: true,
              message: "Confirm Password Required!",
              trigger: "blur",
            }
        ]
      }
    }
  }),
  methods: {
      savePassword(){
        // API PUT request
        console.log("New Password Saved")
      },
      validateChangePassword(){
        return new Promise((resolve) => {
          this.$refs.formChangePassword.validate((valid) => {
            this.$emit("on-validate", valid, this.model);
            resolve(valid);
            if(valid)
              this.savePassword();
          });
        });
      }
  }
}
</script>