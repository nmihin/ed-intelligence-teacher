<template>
  <!-- Main Content -->
  <div class="main-content">
    <!-- START ALLOCATE TO HOME ROOM MODAL -->
    <md-dialog
      :md-active.sync="showDialog"
      class="modal-window filter-modal standard"
    >
      <h2 class="modal-title">Allocate to Home Room</h2>
      <div class="modal-content">
        <el-form :model="model" ref="model">
          <el-form-item prop="homeRoom" label="Home Room">
            <el-select
              v-model="model.homeRoom"
              placeholder="Home Room"
            >
              <el-option
                v-for="pre in options.homeRoomOptions"
                :key="pre.value"
                :label="pre.label"
                :value="pre.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="modal-footer">
        <button
          class="button medium ed-btn__secondary"
          v-on:click="
            saveData();
            showDialog = false;
            showToast();
          "
        >
          Save Data
        </button>
        <button
          class="button medium ed-btn__tertiary"
          @click="showDialog = false"
        >
          Cancel
        </button>
      </div>
    </md-dialog>
    <!-- END ALLOCATE TO HOME ROOM MODAL -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <div class="side-menu single">
            <div class="col-12 side-menu-header">
              <div class="side-menu-profile">
                <img src="../assets/img/users/avatar-1.jpg" alt="User" />
                <h2>Reanna Gulgowski Oberbrunerhoffman von Düsseldorf</h2>
              </div>
            </div>
            <div class="col-12 side-menu-options">
              <div class="card-element">
                <a href="#" @click="showDialog = true">
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
                  <li class="type-image">
                    <a href="styleguide.pdf">
                      <span class="document-name">lesson-plan-bank.jpg</span>
                      <span class="icon icon-download-word"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span></span>
                    </a>
                  </li>
                  <li class="type-xls">
                    <span class="document-name">lesson-plan-bank.xls</span>
                    <span class="icon icon-download-excel"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span></span>
                  </li>
                  <li class="type-ppt">
                    <span class="document-name">lesson-plan-bank.ppt</span>
                    <span class="icon icon-download-powerpoint"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span></span>
                  </li>
                  <li class="type-img">
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
              <div :class="{ active: isActiveModifications }" class="card-box collapsible">
                <div class="card-title">
                  <h2>Modifications</h2>
                </div>
                <div class="card-content">
                  <p>{{ post[0].modificationsAccommodations }}</p>
                  <div @click="isActiveModifications = !isActiveModifications" class="expand-panel collapsed">
                    <span v-if="!isActiveModifications">Expand</span>
                    <span v-if="isActiveModifications">Collapse</span>
                    <i class="icon icon-arrow-gray"></i></div>
                </div>
              </div>
              <!-- Box -->
              <div :class="{ active: isActiveClosing }" class="card-box collapsible">
                <div class="card-title">
                  <h2>closing</h2>
                </div>
                <div class="card-content">
                  <p>{{ post[0].closing }}</p>
                  <div @click="isActiveClosing = !isActiveClosing" class="expand-panel collapsed">
                    <span v-if="!isActiveClosing">Expand</span>
                    <span v-if="isActiveClosing">Collapse</span>
                    <i class="icon icon-arrow-gray"></i></div>
                </div>
              </div>
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

export default {
  name: "lesson-plan-single",
  mixins: [validationMixin],
  components: {
    Element
  },
  data() {
    return {
      lessonId: 0,
      post: [],
      showDialog: false,
      isActiveModifications: false,
      isActiveClosing: false,
      model: {
        //DEFINITIONS
        homeRoom: "",
      },
      options: {
        homeRoomOptions: [
          { value: "homeroom1", label: "Home Room 1" },
          { value: "homeroom2", label: "Home Room 2" },
          { value: "homeroom3", label: "Home Room 3" },
        ],
      },
    };
  },
  methods: {
    loadMore() {
      const lessonPlanStorage = this.loadLessonPlanStorage();
      const Lid = parseInt(this.$route.params.id);

      /*
      this.post = lessonPlanStorage.filter(function(item) {
        return item.id === this.lessonId;
      });
*/

      this.post = lessonPlanStorage.filter(function (lesson) {
        return lesson.id === Lid;
      });

      //this.posts =

      /*
        this.busy = true;
        this.axios.get("single-lesson-plan/"+this.lessonId).then((response) => {
            response.data
            this.busy = false;
        }).catch((error) => error.response.data);
        */
    },
    showToast() {
      this.$notify({
        group: "notificationAlerts",
        title: "Lesson Plan Followed",
        text:
          "lesson plan for the selected home room XXX have been successfully allocated.",
      });
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
