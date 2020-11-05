 <template> 
      <!-- Main Content -->
      <div class="main-content">
        <div class="container-fluid">
          <div class="row">
              <div class="col-xs-12 col-md-12">
                    <div class="side-menu single">
                        <div class="col-12 side-menu-header">
                            <div class="side-menu-profile">
                                <img src="../assets/img/users/avatar-1.jpg" alt="User">
                                <h2>Reanna Gulgowski Oberbrunerhoffman von Düsseldorf</h2>
                            </div>
                        </div>
                        <div class="col-12 side-menu-options">
                                <div class="card-element">
                                  <a href="#"  @click="showDialog = true">
                                    <i class="icon icon-add"></i>
                                    <span>Allocate lesson plan</span>
                                  </a>
                                  <!-- START EDIT IMAGE MODAL -->
                                    <md-dialog :md-active.sync="showDialog" class="modal-window home-room">
                                      <h2>Allocate to Home Room</h2>
                                      <el-form :model="model" ref="model">
                                        <el-form-item prop="homeRoom" label="Home Room">
                                          <select class="card-select" v-model="model.homeRoom" placeholder="Home Room">
                                            <option v-for="pre in options.homeRoomOptions"
                                                      :key="pre.value"
                                                      :label="pre.label"
                                                      :value="pre.value">
                                            </option>
                                          </select>
                                          <i class="icon icon-arrow"></i>
                                        </el-form-item>
                                      </el-form>
                                      <md-dialog-actions>
                                          <md-button class="button medium ed-btn__primary" @click="showDialog = false">Cancel</md-button>
                                          <md-button class="button medium ed-btn__primary" v-on:click="saveData(); showDialog = false; showToast()">Save Data</md-button>
                                      </md-dialog-actions>
                                    </md-dialog>
                                  <!-- END EDIT IMAGE MODAL --> 
                                  <a href="#">
                                    <i class="icon icon-lesson"></i>
                                    <span>1 Allocated</span>
                                  </a>
                                </div>
                        </div>
                        <div class="col-12 side-menu-content">
                            <!-- Box -->
                            <div class="card-box">
                              <div class="card-element">
                                <a href="#" class="edit">
                                  <i class="icon icon-edit"></i>
                                </a>
                              </div>
                              <div class="card-title">
                                <h2>My Test Lesson - English 1</h2>
                              </div>
                              <div class="card-content">
                                <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
                              </div>
                            </div>  
                            <!-- Box -->
                            <div class="card-box">
                              <div class="card-element">
                                <a href="#" class="edit">
                                  <i class="icon icon-edit"></i>
                                </a>
                              </div>
                              <div class="card-title">
                                <h2>My Test Lesson - English 2</h2>
                              </div>
                              <div class="card-content">
                                <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
                              </div>
                            </div>  
                            <!-- Box -->
                            <div class="card-box">
                              <div class="card-title">
                                <h2>My Test Lesson - English 3</h2>
                              </div>
                              <div class="card-content">
                                <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
                              </div>
                            </div>  
                            <!-- Box -->
                            <div class="card-box">
                              <div class="card-title">
                                <h2>My Test Lesson - English 4</h2>
                              </div>
                              <div class="card-content">
                                <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
                              </div>
                            </div>  
                            <!-- Box -->
                            <div class="card-box">
                              <div class="card-title">
                                <h2>My Test Lesson - English 5</h2>
                              </div>
                              <div class="card-content">
                                <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
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
import { validationMixin } from "vuelidate";
import Element from 'element-ui'
export default {
  name: 'lesson-plan-single',
  mixins: [validationMixin],
  components: {
    Element
  }, 
  methods: {
    showToast() {
      this.$notify({
        group: "notificationAlerts",
        title: "Lesson Plan Followed",
        text: "lesson plan for the selected home room XXX have been successfully allocated."
      });
    },
    saveData(){

    }
  },
  data(){
    return {
      showDialog: false,
      model: {
        //DEFINITIONS
        homeRoom: ""
      },
      options: {
        homeRoomOptions: [
          {value:"homeroom1", label: "Home Room 1"},
          {value:"homeroom2", label: "Home Room 2"},
          {value:"homeroom3", label: "Home Room 3"}
        ]
      }
    }
  }
}
</script>