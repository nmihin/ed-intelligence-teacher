<template>
  <md-dialog :md-active.sync="addFollowUpModal" class="modal-window filter-modal feedback-list">
    <h2 class="modal-title">Add Follow Up</h2>
    <div class="modal-content">
        Add Follow Up
    </div>
    <div class="modal-footer">
      <button class="button medium ed-btn__tertiary" @click="addFollowUpModal = false">
        Close
      </button>
    </div>
  </md-dialog>
</template>

<script>
  export default {
    name: "add-follow-up-modal",
    components: {},
    // DATA
    data: () => ({
      addFollowUpModal: false
    }),
    methods: {
      openModal(sn, data) {
          this.addFollowUpModal = true;
      }
    }
  }
</script>