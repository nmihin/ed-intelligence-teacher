<template>
  <md-dialog :md-active.sync="deleteFeedbackModal" class="modal-window filter-modal feedback-list">
    <h2 class="modal-title">Delete Feedback</h2>
    <div class="modal-content">
        You are about to delete feedback SN <span style="color:var(--primary)">"{{ data.id }}"</span>
        from user <span style="color:var(--primary)">"{{ data.id }}"</span>
        Are you sure you want to do this?
    </div>
    <div class="modal-footer">
      <button class="button medium ed-btn__primary" @click="deleteFeedback(data.id)">
        Delete
      </button>
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
      deleteFeedbackModal: false,
      sn:0,
      data:[],
      studentId:0,
      feedback:[]
    }),
    props: {
      deleteFeedbackParent: Function
    },
    methods: {
      deleteFeedback(id){
        const feedbackListStorage = this.loadFeedbackListStorage();
        const studentId = this.studentId;
        const feedbackId = this.sn;

        // FIND STUDENT INDEX
        const studentIdx = feedbackListStorage.map(el => el.sn).indexOf(studentId)

        feedbackListStorage[studentIdx].feedback.splice(feedbackId,1);

        this.feedback = feedbackListStorage[studentIdx].feedback;

        this.deleteFeedbackParent(this.feedback);

        // UPDATE STORAGE
        localStorage.setItem("feedbackListJSONData", JSON.stringify(feedbackListStorage));

        this.deleteFeedbackModal = false;

      },
      openModal(sn, data, studentId) {
          this.sn = sn;
          this.data = data;
          this.studentId = studentId;
          this.deleteFeedbackModal = true;
      },
      // LOCALSTORAGE
      loadFeedbackListStorage() {
        return JSON.parse(localStorage.getItem("feedbackListJSONData"));
      }
    }
  }
</script>