<template>
  <md-dialog :md-active.sync="editFeedbackModal" class="modal-window filter-modal feedback-list">
    <h2 class="modal-title"> Edit Feedback</h2>
    <div class="modal-content">
        Edit Feedback
    </div>
    <div class="modal-footer">
      <button class="button medium ed-btn__tertiary" @click="editFeedbackModal = false">
        Close
      </button>
    </div>
  </md-dialog>
</template>

<script>
  export default {
    name: "edit-feedback-modal",
    components: {},
    // DATA
    data: () => ({
      editFeedbackModal: false
    }),
    methods: {
      openModal(sn, data) {
          this.editFeedbackModal = true;
      }
    }
  }
</script>