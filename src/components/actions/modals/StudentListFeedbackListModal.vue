<template>
  <md-dialog :md-active.sync="feedbackModal" class="modal-window filter-modal feedback-list">
    <h2 class="modal-title">Feedback List of {{feedbackName}}</h2>
    <div class="modal-content">
      <div class="row">
        <el-input class="col-6 offset-6 search-feedback" @input="searchFeedbackFilter()" placeholder="Search feedback..." v-model="searchFeedback"></el-input>
      </div>
      <el-table stripe ref="singleTable" :data="feedback" highlight-current-row style="width: 100%">
        <el-table-column sortable property="id" label="SN" width="60"></el-table-column>
        <el-table-column sortable property="homeroom" label="Home Room"></el-table-column>
        <el-table-column sortable property="period" label="Period"></el-table-column>
        <el-table-column sortable property="schoolResponse" label="Feedback Type"></el-table-column>
        <el-table-column sortable property="occureddate" label="Occured Date"></el-table-column>
        <el-table-column sortable property="incidentStatus" label="Status"></el-table-column>
        <el-table-column sortable property="action" label="Action"></el-table-column>
      </el-table>
    </div>
    <div class="modal-footer">
      <button class="button medium ed-btn__tertiary" @click="feedbackModal = false">
        Close
      </button>
    </div>
  </md-dialog>
</template>

<script>
  export default {
    name: "student-list-add-withdrawal-modal",
    components: {},
    props: {
        feedbackModalParent: Boolean
    },
    watch: {
       feedbackModalParent: function(){
            this.feedbackModal = true;
       }
    },
    // DATA
    data: () => ({
      feedbackModal: false,
      feedbackName: "",
      feedback: [],
      viewFeedbackModalId: 0,
      searchFeedback:"",
    }),
    methods: {
        openModal(sn,name,surname){
          this.feedbackModal = true;
          this.feedbackName = name + ' ' + surname;
          this.feedBackList(sn,name,surname);
        },
        searchFeedbackFilter(){
          const feedbackListStorage = this.loadFeedbackListStorage();

          // FIND STUDENT INDEX
          const idx = feedbackListStorage.map( el => el.sn).indexOf(this.viewFeedbackModalId)

          this.feedback = feedbackListStorage[idx].feedback.filter(data => 
                    data.homeroom.toLowerCase().includes(this.searchFeedback.toLowerCase()) ||
                    data.period.toLowerCase().includes(this.searchFeedback.toLowerCase()) ||
                    data.schoolResponse.toLowerCase().includes(this.searchFeedback.toLowerCase()) ||
                    data.incidentStatus.toLowerCase().includes(this.searchFeedback.toLowerCase())
          );    
      },
      feedBackList(id,name,surname){
        this.feedbackName = name+" "+surname;

        this.viewFeedbackModalId = id;

        const feedbackListStorage = this.loadFeedbackListStorage();

        if(feedbackListStorage){
            const fdb = feedbackListStorage.filter(function(feedback) {
              return feedback.sn === id;
            });

            this.feedback = fdb[0].feedback;
        }
        else{
          this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/feedback-list.json").then((response) => {

                  const fdb = response.data.filter(function(feedback) {
                    return feedback.sn === id;
                  });

                  this.feedback = fdb[0].feedback;

                  // UPDATE STORAGE
                  localStorage.setItem("feedbackListJSONData",JSON.stringify(response.data));
            }).catch((error) => error.response.data)
        }

        this.feedbackModal = true;
      },
      // LOCALSTORAGE
      loadFeedbackListStorage() {
        return JSON.parse(localStorage.getItem("feedbackListJSONData"));
      }
    }
  }
</script>