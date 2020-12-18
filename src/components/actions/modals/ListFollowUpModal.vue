<template>
  <md-dialog :md-active.sync="listFollowUpModal" class="modal-window filter-modal feedback-list">
    <h2 class="modal-title">List Follow Up</h2>
    <div class="modal-content">
        List Follow Up
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
      listFollowUpModal: false
    }),
    methods: {
      openModal(sn, data) {
          this.listFollowUpModal = true;
      }
    }
  }
</script>