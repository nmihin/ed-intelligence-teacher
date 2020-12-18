<template>
  <!-- Main Content -->
  <div class="main-content">
    <!-- START ALLOCATE TO HOME ROOM MODAL -->
    <LessonPlanSingleAllocatePlan 
    ref="LessonPlanSingleAllocatePlan"
    />
    <!-- END ALLOCATE TO HOME ROOM MODAL -->
    <!-- START ALLOCATE TO HOME ROOM MODAL -->
    <LessonPlanSingleDocumentPreview
    ref="LessonPlanSingleDocumentPreview"
    />
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <div class="side-menu single">
            <div class="col-12 side-menu-header">
              <div class="side-menu-profile">
                <img src="../../assets/img/users/avatar-1.jpg" alt="User" />
                <h2>Reanna Gulgowski Oberbrunerhoffman von Düsseldorf</h2>
              </div>
            </div>
            <div class="col-12 side-menu-options">
              <div class="card-element">
                <a href="#" @click="showAllocateLessonPlanModal()">
                  <i class="icon icon-add"></i>
                  <span>Allocate lesson plan</span>
                </a>
                <a href="#">
                  <i class="icon icon-lesson"></i>
                  <span>1 Allocated</span>
                </a>
              </div>
            </div>
            <div class="col-12 side-menu-content single-lesson">
              <!-- Box -->
              <div class="card-box">
                <div class="card-title">
                  <h2>{{ post[0].title }}</h2>
                </div>
                <div class="card-content">
                  <p>{{ post[0].body }}</p>
                </div>
              </div>
              <!-- Box -->
              <div class="card-box">
                <div class="card-title">
                  <h2>Activities</h2>
                </div>
                <div class="card-content">
                  <p>{{ post[0].activities }}</p>
                </div>
                <h6>Attached documents:</h6>
                <ul class="document-uploaded">
                  <li @click="showDocumentPreviewModal('document')" class="type-image">           
                      <span class="document-name">lesson-plan-bank.docx</span>
                      <span class="icon icon-download-word"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span></span>
                  </li>
                  <li @click="showDocumentPreviewModal('document')" class="type-xls">
                      <span class="document-name">lesson-plan-bank.xls</span>
                      <span class="icon icon-download-excel"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span></span>
                  </li>
                  <li @click="showDocumentPreviewModal('document')" class="type-ppt">
                      <span class="document-name">lesson-plan-bank.ppt</span>
                      <span class="icon icon-download-powerpoint"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span></span>
                  </li>
                  <li @click="showDocumentPreviewModal('image')" class="type-img"> 
                      <span class="document-name">lesson-plan-bank.img</span>
                      <span class="icon icon-download-image"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>
                  </li>
                </ul>
              </div>
              <!-- Box -->
              <div class="card-box">
                <div class="card-title">
                  <h2>Guided Practice</h2>
                </div>
                <div class="card-content">
                  <p>{{ post[0].guidedPractices }}</p>
                </div>
              </div>
              <!-- Box -->
              <div class="card-box">
                <div class="card-title">
                  <h2>Independent Practice</h2>
                </div>
                <div class="card-content">
                  <p>{{ post[0].independentPractices }}</p>
                </div>
              </div>
              <!-- Box -->
              <div class="card-box">
                <div class="card-title">
                  <h2>Assessment</h2>
                </div>
                <div class="card-content">
                  <p>{{ post[0].assessment }}</p>
                </div>
              </div>
              <!-- Box -->
              <div class="card-box">
                <div class="card-title">
                  <h2>Notes</h2>
                </div>
                <div class="card-content">
                  <p>{{ post[0].notes }}</p>
                </div>
              </div>
              <!-- Box -->
              <CollapsibleComponent :toggleCollapsibleParent="toggleCollapsible">
                  <div class="card-title">
                    <h2>Modifications</h2>
                  </div>
                  <div class="card-content">
                    <p>{{ post[0].modificationsAccommodations }}</p>
                  </div>
              </CollapsibleComponent>
              <!-- Box -->
              <CollapsibleComponent :toggleCollapsibleParent="toggleCollapsible">
                  <div class="card-title">
                    <h2>closing</h2>
                  </div>
                  <div class="card-content">
                    <p>{{ post[0].closing }}</p>
                  </div>
              </CollapsibleComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import Element from "element-ui";
import CollapsibleComponent from "../../components/collapsible/CollapsibleComponent.vue";
import LessonPlanSingleAllocatePlan from "./Modals/LessonPlanSingleAllocatePlan.vue";
import LessonPlanSingleDocumentPreview from "./Modals/LessonPlanSingleDocumentPreview.vue";

export default {
  name: "lesson-plan-single",
  mixins: [validationMixin],
  components: {
    Element,
    CollapsibleComponent,
    LessonPlanSingleAllocatePlan,
    LessonPlanSingleDocumentPreview
  },
  data() {
    return {
      lessonId: 0,
      post: [],
      showDialog: false,
      showDocumentPreview: false,
      isActiveModifications: false,
      isActiveClosing: false
    };
  },
  methods: {
    showAllocateLessonPlanModal(){
      this.$refs.LessonPlanSingleAllocatePlan.openModal();
    },
    showDocumentPreviewModal(type){
      this.$refs.LessonPlanSingleDocumentPreview.openModal(type);
    },
    toggleCollapsible(value){
      this.isActiveClosing = value;
    },
    loadMore() {
      const lessonPlanStorage = this.loadLessonPlanStorage();
      const Lid = parseInt(this.$route.params.id);

      this.post = lessonPlanStorage.filter(function (lesson) {
        return lesson.id === Lid;
      });

    },
    displayModalDocument(type){
        this.showDocumentPreview = true;

        if(type=="image") {
          this.showImage = true;
        }else {
          this.showImage = false;
        }
    },
    showDoctorConsultantDialogModal(){
        this.$refs.showPreviewDialogParent.openModal();
    },
    // LOCALSTORAGE
    loadLessonPlanStorage() {
      return JSON.parse(localStorage.getItem("lessonPlanJSONData"));
    },
  },
  created() {
    this.loadMore();
  },
};
</script>
