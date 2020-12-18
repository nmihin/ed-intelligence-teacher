<template>
  <md-dialog :md-active.sync="deleteFeedbackModal" class="modal-window filter-modal feedback-list">
    <h2 class="modal-title">Delete Feedback</h2>
    <div class="modal-content">
        DELETE FEEDBACK
    </div>
    <div class="modal-footer">
      <button class="button medium ed-btn__tertiary" @click="deleteFeedbackModal = false">
        Close
      </button>
    </div>
  </md-dialog>
</template>

<script>
  export default {
    name: "delete-feedback-modal",
    components: {},
    // DATA
    data: () => ({
      deleteFeedbackModal: false
    }),
    methods: {
      openModal(sn, data) {
          this.deleteFeedbackModal = true;
      }
    }
  }
</script>