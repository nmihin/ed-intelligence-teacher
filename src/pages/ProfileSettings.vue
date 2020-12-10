<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid">
      <!-- START EDIT IMAGE MODAL -->
      <md-dialog :md-active.sync="showDialog" class="modal-window teacher-modal">
        <h2 class="modal-title">Add/Edit Image for {{formTeacherData.name}} {{formTeacherData.surname}}</h2>
        <div class="modal-content">
            <img v-if="!formTeacherData.avatar" class="card-picture" src="../assets/images/avatar-aux.png" />
            <img v-if="formTeacherData.avatar" class="card-picture" :src="formTeacherData.avatar" />
        </div>
        <div class="modal-footer">
            <button class="button medium ed-btn__primary" @click="updateTeacherImage()">
              Save
            </button>
            <button class="button medium ed-btn__tertiary" @click="showDialog = false">
              Cancel
            </button>
        </div>
      </md-dialog>
      <!-- END EDIT IMAGE MODAL -->                    
      <el-form class="teacher-profile" :model="formTeacherData" :rules="formTeacherData.rules" ref="formTeacherData">
        <div class="row">
            <div class="col-xs-3 col-md-3">
              <div class="side-menu single profile">
                <div class="col-12 side-menu-header">
                  <div class="side-menu-profile">
                    <img v-if="!formTeacherData.avatar" class="card-picture" src="../assets/images/avatar-aux.png" />
                    <img v-if="formTeacherData.avatar" class="card-picture" :src="formTeacherData.avatar" />
                    <h2>{{formTeacherData.name}} {{formTeacherData.surname}}</h2>
                      <el-button @click="showDialog = true" class="edit-profile">
                        <el-tooltip class="item" effect="dark" content="Edit Image" placement="top">
                          <i @click="showDialog = true" class="icon icon-edit"></i>
                          </el-tooltip>
                      </el-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-9 col-md-9">
              <div class="row">
                <div class="side-menu__results card-boxes lessons_teacher">
                  <!-- Box -->
                  <div class="card-box">
                    <div class="card-title">
                      <h2>Edit information</h2>
                    </div>
                    <div class="card-content">
                      <div class="row">
                        <el-form-item label="First Name" prop="name"  class="col-6">
                          <el-input @input="updateForm('name', formTeacherData.name)"  v-model="formTeacherData.name"  placeholder="First Name">
                          </el-input>                    
                        </el-form-item>
                        <el-form-item label="Last Name" prop="surname"  class="col-6">
                          <el-input @input="updateForm('surname', formTeacherData.surname)"  v-model="formTeacherData.surname"  placeholder="Last Name">
                          </el-input>                    
                        </el-form-item>
                        <el-form-item label="Organization" prop="organization"  class="col-6">
                          <el-input @input="updateForm('organization', formTeacherData.organization)"  v-model="formTeacherData.organization"  placeholder="Organization">
                          </el-input>                    
                        </el-form-item>
                       <el-form-item label="Address" prop="address"  class="col-6">
                          <el-input @input="updateForm('address', formTeacherData.address)"  v-model="formTeacherData.address"  placeholder="Address">
                          </el-input>                    
                        </el-form-item>
                       <el-form-item label="Contact Number" prop="phone"  class="col-6">
                          <el-input @input="updateForm('phone', formTeacherData.phone)"  v-model="formTeacherData.phone"  placeholder="Contact Number">
                          </el-input>                    
                        </el-form-item>
                       <el-form-item label="Qualification" prop="qualification"  class="col-6">
                          <el-input @input="updateForm('qualification', formTeacherData.qualification)"  v-model="formTeacherData.qualification"  placeholder="Qualification">
                          </el-input>                    
                        </el-form-item>
                       <el-form-item label="Google Classroom (LMS)" prop="googleClassroomLMS"  class="col-6">
                          <el-input @input="updateForm('googleClassroomLMS', formTeacherData.googleClassroomLMS)"  v-model="formTeacherData.googleClassroomLMS"  placeholder="Google Classroom (LMS)">
                          </el-input>                    
                        </el-form-item>
                        <el-form-item label="Two Factor Authentification" prop="twoFactoryAuthentification" class="col-6">
                          <el-radio-group @change="updateForm('twoFactoryAuthentification', formTeacherData.twoFactoryAuthentification)" v-model="formTeacherData.twoFactoryAuthentification">
                            <el-radio label="Enabled">Enabled</el-radio>
                            <el-radio label="Disabled">Disabled</el-radio>
                          </el-radio-group>
                        </el-form-item>
                      </div>
                      <el-button @click="validateTeacherProfile()" class="button medium ed-btn__primary right">Save changes</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </el-form>
      <div v-if="busy" class="preloader">
        <span><img src="../assets/images/preloader.gif" /> Loading...</span>
      </div>
    </div>
  </div>
  <!-- main-content-END -->
</template>

<script>
import VImageInput from 'vuetify-image-input';

export default {
  name: "profile-settings",
  components: {
    VImageInput
  },
  data: () => ({
      showDialog: false,
      formTeacherData: {
        avatar:"",
        name:"",
        surname:"",
        organization:"",
        address:"",
        phone:"",
        qualification:"",
        googleClassroomLMS:"",
        twoFactoryAuthentification:"",
        rules: {
          name: [
            {
              required: true,
              message: "First Name Required!",
              trigger: "blur",
            }
          ],
          surname: [
            {
              required: true,
              message: "Last Name Required!",
              trigger: "blur",
            }
          ],
          organization: [
            {
              required: true,
              message: "Organization Required!",
              trigger: "blur",
            }
          ],
          address: [
            {
              required: true,
              message: "Address Required!",
              trigger: "blur",
            }
          ],
          phone: [
            {
              required: true,
              message: "Phone Number Required!",
              trigger: "blur",
            },
            {
              pattern: /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/,
              max: 20,
              message: "Invalid phone",
              trigger: "change",
            }
          ],
          qualification: [
            {
              required: true,
              message: "First Name Required!",
              trigger: "blur",
            }
          ],
          googleClassroomLMS: [
            {
              required: true,
              message: "First Name Required!",
              trigger: "blur",
            }
          ],
          twoFactoryAuthentification: [
            {
              required: true,
              message: "First Name Required!",
              trigger: "blur",
            }
          ]
        }
      }
  }),
  // METHODS
  methods: {
      loadMore() {
          this.busy = true;
          
          const teacherDetailStorage = this.loadTeacherDetailStorage();

          if(teacherDetailStorage){
            this.formTeacherData = teacherDetailStorage[0];

            this.busy = false;
          }
          else {
        this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/teacher-details.json").then((response) => {

              this.formTeacherData =  response.data[0];

              localStorage.setItem("teacherDetailStorageJSONData",JSON.stringify(response.data));
              this.busy = false;
            }).catch((error) => error.response.data)
          }
      },
      updateForm (input, value) {
        this.formTeacherData[input] = value;
      },
      saveTeacherData(){
        console.log("save data")
      },
      validateTeacherProfile(){
        return new Promise((resolve) => {
          this.$refs.formTeacherData.validate((valid) => {
            this.$emit("on-validate", valid, this.model);
            resolve(valid);
            if(valid)
              this.saveTeacherData();
          });
        });
      },
      // LOCALSTORAGE
      loadTeacherDetailStorage(){
        return JSON.parse(localStorage.getItem("teacherDetailStorageJSONData"));
      }
  },
  created() {
      this.loadMore();
  }
};
</script>