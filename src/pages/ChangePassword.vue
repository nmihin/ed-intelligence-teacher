 <template> 
      <!-- Main Content -->
      <div class="main-content">
        <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <div class="row">
            <div class="side-menu__results card-boxes lessons_teacher">
              <!-- Box -->
              <div class="card-box">
                <div class="card-title">
                  <h2>Change Password</h2>
                </div>
                <div class="card-content">
                  <div class="row">
                    <div class="col-12">
                      <md-field>
                        <i class="icon icon-home"></i>
                        <label>Old Password</label>
                        <md-input v-model="date"></md-input>
                      </md-field>                    
                    </div>
                    <div class="col-12">
                      <md-field>
                        <i class="icon icon-home"></i>
                        <label>New Password</label>
                        <md-input v-model="date"></md-input>
                      </md-field>                    
                    </div>
                    <div class="col-12">
                      <md-field>
                        <i class="icon icon-home"></i>
                        <label>Confirm Password</label>
                        <md-input v-model="date"></md-input>
                      </md-field>                    
                    </div>
                  </div>
                  <button class="button medium ed-btn__primary right">Update Password</button>
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
  }
}
</script>