<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-3 col-md-3">
          <div class="side-menu single profile">
            <div class="col-12 side-menu-header">
              <div class="side-menu-profile">
                <img src="../assets/img/users/avatar-1.jpg" alt="User" />
                <h2>Reanna Gulgowski Oberbrunerhoffman von Düsseldorf</h2>
                <md-button @click="showDialog = true" class="edit-profile">
                    <md-tooltip md-direction="top">Edit Image</md-tooltip>
                    <router-link to="/profile-settings"  @click="showDialog = true"><i class="icon icon-edit"></i></router-link>
                </md-button>
                <!-- START EDIT IMAGE MODAL -->
                  <md-dialog :md-active.sync="showDialog">
                    <md-dialog-title>Preferences</md-dialog-title>
                    <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at 
                    voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit 
                    praesentium inventore ducimus ipsa aut.</p></div>
                    <md-dialog-actions>
                      <md-button class="md-primary" @click="showDialog = false">Close</md-button>
                      <md-button class="md-primary" @click="showDialog = false">Save</md-button>
                    </md-dialog-actions>
                  </md-dialog>
                <!-- END EDIT IMAGE MODAL --> 

              </div>
            </div>
            <div class="col-12 side-menu-content">
              <!-- Box -->
              <div class="card-box">
                <div class="card-title">
                  <h2>My Test Lesson - English 1</h2>
                </div>
                <div class="card-content">
                  <p>
                    Conventions of standard English: Demostrate command of the
                    conventions of the standard English grammar and usage when
                    writing or speaking.
                  </p>
                </div>
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
                  <h2>My Test Lesson - English 1</h2>
                </div>
                <div class="card-content">
                  <div class="row">
                    <div class="col-6">
                      <md-field>
                        <i class="icon icon-home"></i>
                        <label>First Name</label>
                        <md-input v-model="date"></md-input>
                      </md-field>                    
                    </div>
                    <div class="col-6">
                      <md-field>
                        <i class="icon icon-home"></i>
                        <label>Last Name</label>
                        <md-input v-model="date"></md-input>
                      </md-field>                    
                    </div>
                    <div class="col-6">
                      <md-field>
                        <i class="icon icon-home"></i>
                        <label>Organization</label>
                        <md-input v-model="date"></md-input>
                      </md-field>                    
                    </div>
                    <div class="col-6">
                      <md-field>
                        <i class="icon icon-home"></i>
                        <label>Address</label>
                        <md-input v-model="date"></md-input>
                      </md-field>                    
                    </div>
                    <div class="col-6">
                      <md-field>
                        <i class="icon icon-home"></i>
                        <label>Contact</label>
                        <md-input v-model="date"></md-input>
                      </md-field>                    
                    </div>
                    <div class="col-6">
                      <md-field>
                        <i class="icon icon-home"></i>
                        <label>Qualification</label>
                        <md-input v-model="date"></md-input>
                      </md-field>                    
                    </div>
                    <div class="col-6">
                      <md-field>
                        <i class="icon icon-home"></i>
                        <label>Google Classroom ( LMS )</label>
                        <md-input v-model="date"></md-input>
                      </md-field>                    
                    </div>
                    <div class="col-6">
                      <md-field>
                        <i class="icon icon-home"></i>
                        <label>Two Factor Authentification</label>
                        <md-input v-model="date"></md-input>
                      </md-field>                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- main-content-END -->
</template>

<script>
export default {
  name: "profile-settings",
  components: {},
  data: () => ({
      showDialog: false
  })
};
</script>