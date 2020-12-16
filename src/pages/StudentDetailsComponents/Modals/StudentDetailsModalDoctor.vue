<template>
  <md-dialog :md-active.sync="showDoctorConsultantDialog" class="modal-window student-details">
    <h2 class="modal-title">Doctor/Regular Consultant</h2>
    <div class="modal-content">
      <div class="row">
        <!-- LIST VIEW -->
        <ul class="col-4 profile-list">
          <li>Doctor Name</li>
        </ul>
        <ul class="col-4 profile-list">
          <li>Hospital</li>
        </ul>
        <ul class="col-4 profile-list">
          <li>Phone</li>
        </ul>
      </div>
    </div>
    <div class="modal-footer">
      <button class="button medium ed-btn__tertiary" @click="showDoctorConsultantDialog = false;">
        Close
      </button>
    </div>
  </md-dialog>
</template>

<script>
  export default {
    name: "student-details-doctor-modal",
    components: {},
    props: {
      showDoctorConsultantDialogParent: Boolean
    },
    watch: {
        showDoctorConsultantDialogParent: function(){
            this.showDoctorConsultantDialog = true
        }
    },
    // DATA
    data: () => ({
     showDoctorConsultantDialog: false
    }),
    methods: {

    }
  }

</script>