<template>
    <md-dialog :md-active.sync="showDocumentPreview" class="modal-window filter-modal document">
      <h2 class="modal-title">Document Preview</h2>
      <div class="modal-content">     
        <img v-if="showType=='image'" src="https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher/main/public/Styleguide-Ed-Intelligence_home.png" />
        <VueDocPreview v-if="showType=='document'" value="newteach.pbworks.com%2Ff%2Fele%2Bnewsletter.docx" type="office" />
      </div>
      <div class="modal-footer">
        <button class="button medium ed-btn__tertiary" @click="showDocumentPreview = false; showImage=false">
          Close
        </button>
      </div>
    </md-dialog>
</template>

<script>
import VueDocPreview from 'vue-doc-preview';

  export default {
    name: "lesson-plan-single-preview-modal",
    components: {
        VueDocPreview
    },
    props: {
        showDocumentPreviewParent: Boolean
    },
    watch: {
       showDocumentPreviewParent: function(){
            this.showDocumentPreview = true;
       }
    },
    // DATA
    data: () => ({
      showDocumentPreview: false,
      showType: "",
    }),
    methods: {
        openModal(type){
          this.showType = type;
          this.showDocumentPreview = true;
        }
    }
  }

</script>