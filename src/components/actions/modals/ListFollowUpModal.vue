<template>
  <md-dialog :md-active.sync="listFollowUpModal" class="modal-window filter-modal feedback-list">
    <h2 class="modal-title">List Follow Up</h2>
    <div class="modal-content">
        <div class="row">
          <el-table stripe ref="singleTable" :data="followup" highlight-current-row style="width: 100%">
            <el-table-column sortable property="followUpTitle" label="Followup Title"></el-table-column>
            <el-table-column sortable property="followUpDate" label="Followup Date"></el-table-column>
            <el-table-column sortable property="supportingDocument" label="Supporting Document"></el-table-column>
            <el-table-column sortable property="guardianInformed" label="Guardian Informed"></el-table-column>
            <el-table-column sortable property="followUpDescription" label="Description"></el-table-column>
            <el-table-column sortable property="incidentStatus" label="Incident Status"></el-table-column>
          </el-table>
        </div>
    </div>
    <div class="modal-footer">
      <button class="button medium ed-btn__tertiary" @click="listFollowUpModal = false">
        Close
      </button>
    </div>
  </md-dialog>
</template>

<script>
  export default {
    name: "list-follow-up-modal",
    components: {},
    // DATA
    data: () => ({
      listFollowUpModal: false,
      followup:[],
      studentId:0
    }),
    methods: {
      openModal(sn, data, studentId) {
          this.studentId = studentId;

          const feedbackListStorage = this.loadFeedbackListStorage();

          // FIND STUDENT INDEX
          const idx = feedbackListStorage.map(el => el.sn).indexOf(studentId)

          this.followup = feedbackListStorage[0].followup;

          this.listFollowUpModal = true;
      },
      // LOCALSTORAGE
      loadFeedbackListStorage() {
        return JSON.parse(localStorage.getItem("feedbackListJSONData"));
      },
    }
  }
</script>