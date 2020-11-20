<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid">
      <el-form :model="model" :rules="rules" ref="form">
        <div class="filter-card">
          <div class="row">
            <div class="col-4">
              <el-form-item prop="lessonPlanBankSubject">
                <el-select
                  v-model="model.lessonPlanBankSubject"
                  placeholder="Select Subject"
                  @change="filterList()"
                >
                  <el-option
                    v-for="pre in options.lessonPlanBankSubjectOptions"
                    :key="pre.value"
                    :label="pre.label"
                    :value="pre.value"
                  >
                  </el-option>
                </el-select>
                <i class="icon icon-arrow"></i>
              </el-form-item>
            </div>
            <div class="col-4">
              <el-form-item prop="lessonPlanBankGrade">
                <el-select
                  v-model="model.lessonPlanBankGrade"
                  placeholder="Select Grade"
                  @change="filterList()"
                >
                  <el-option
                    v-for="pre in options.lessonPlanBankGradeOptions"
                    :key="pre.value"
                    :label="pre.label"
                    :value="pre.value"
                  >
                  </el-option>
                </el-select>
                <i class="icon icon-arrow"></i>
              </el-form-item>
            </div>
            <div class="col-4">
              <el-form-item prop="lessonPlanBankStrand">
                <el-select
                  v-model="model.lessonPlanBankStrand"
                  placeholder="Select Strand"
                  @change="filterList()"
                >
                  <el-option
                    v-for="pre in options.lessonPlanBankStrandOptions"
                    :key="pre.value"
                    :label="pre.label"
                    :value="pre.value"
                  >
                  </el-option>
                </el-select>
                <i class="icon icon-arrow"></i>
              </el-form-item>
            </div>
          </div>
        </div>
      </el-form>
      <div class="row">
        <div class="container-fluid">
              <!-- START ADD CUSTOM STANDARD MODAL -->
              <md-dialog :md-active.sync="addCustomStandardModal" class="modal-window filter-modal">
                <h2 class="modal-title">Add Custom Lesson Standard</h2>
                <div class="modal-content">
                  <el-form :model="formAddStandard" ref="formAddStandard">
                  <!-- Menu Information -->
                  <div class="card-content">
                    <div class="row">
                      <el-form-item class="col-6" prop="standardReadyForAddIdentifierCode" label="Identifier Code">
                        <el-input
                          @input="updateForm('standardReadyForAddIdentifierCode', formAddStandard.standardReadyForAddIdentifierCode)"  v-model="formAddStandard.standardReadyForAddIdentifierCode"
                          placeholder="Menu Title"
                        ></el-input>
                      </el-form-item>
                      <el-form-item class="col-6" label="Privacy" prop="standardReadyForAddPrivacy">
                        <el-radio-group  @change="updateForm('standardReadyForAddPrivacy', formAddStandard.standardReadyForAddPrivacy)" v-model="formAddStandard.standardReadyForAddPrivacy">
                          <el-radio label="Public">Public</el-radio>
                          <el-radio label="Private">Private</el-radio>
                        </el-radio-group>
                      </el-form-item>
                    </div>
                    <div class="row">
                      <el-form-item class="col-12" prop="standardReadyForAddText" label="Custom Standard">
                        <el-input
                          type="textarea"
                          @input="updateForm('standardReadyForAddText', formAddStandard.standardReadyForAddText)"  v-model="formAddStandard.standardReadyForAddText"
                          placeholder="Custom Standard"
                        ></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  </el-form>
                </div>
                <div class="modal-footer">
                  <button class="button medium ed-btn__secondary" @click="addCustomStandardModal = false">Submit</button>
                  <button class="button medium ed-btn__tertiary" @click="addCustomStandardModal = false">Cancel</button>
                </div>
              </md-dialog>
          <!-- END ADD CUSTOM STANDARD MODAL -->

          <button @click="addCustomStandardModal = true" class="button medium ed-btn__primary add-custom-standard" href="#">
            <i class="icon icon-add"></i>
            <span>Add Custom Standard</span>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="side-menu__results card-boxes lessons_teacher">
          <!-- Box -->
          <div
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="limit"
          >
            <div class="card-box" v-for="(post, idx) in posts" :key="idx">
              <div class="card-title">
                <h2>{{ post.title }}</h2>
              </div>
              <div class="card-element">
                <a href="#" class="edit">
                  <i class="icon icon-edit"></i>
                </a>
                <a href="#" class="delete">
                  <i class="icon icon-delete"></i>
                </a>
              </div>
              <ul class="card-breadcrumb">
                <li>Four</li>
                <li class="card-language">
                  {{ post.language }}
                </li>
                <li>
                  <a title="language" href="#">Language</a>
                </li>
              </ul>
              <div class="card-content">
                <p>{{ post.body }}</p>
                <router-link to="/lesson-plan/"
                  ><button class="button medium ed-btn__primary">
                    CC.4.L.1
                  </button></router-link
                >
              </div>
              <div class="card-footer">
                <i class="icon icon-lesson"></i
                ><span>{{ post.resources }} Resources</span>
              </div>
            </div>
          </div>
          <div v-if="busy" class="preloader"><span><img src="../assets/images/preloader.gif" /> Loading...</span></div>
        </div>
      </div>
    </div>
  </div>
  <!-- main-content-END -->
</template>

<script>
import "vue-material/dist/theme/default.css";
import { MdMenu, MdButton, MdList } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import { validationMixin } from "vuelidate";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import Element from "element-ui";

export default {
  name: "lesson-plan-bank",
  mixins: [validationMixin],
  components: {
    MdMenu,
    MdButton,
    MdList,
    Element
  },
  data() {
    return {
      posts: [],
      limit: 5,
      busy: false,
      page: 1,
      list: [],
      filterData: {},
      // MODALS
      addCustomStandardModal: false,
      // ADD MENU
      formAddStandard: {
        standardReadyForAddIdentifierCode: "",
        standardReadyForAddPrivacy: "public",
        standardReadyForAddText: "",
        standardReadyForAddID: 0
      },
      model: {
        //DEFINITIONS
        lessonPlanBankSubject: "",
        lessonPlanBankGrade: "",
        lessonPlanBankStrand: "",
      },
      options: {
        //OPTIONS
        lessonPlanBankSubjectOptions: [
          { value: "", label: "Select Subject" },
          { value: "English", label: "English" },
          { value: "Mathematics", label: "Mathematics" },
        ],
        lessonPlanBankGradeOptions: [
          { value: "", label: "Select Grade" },
          { value: "First", label: "First" },
          { value: "Second", label: "Second" },
          { value: "Third", label: "Third" }
        ],
        lessonPlanBankStrandOptions: [
          { value: "", label: "Select Strand" },
          { value: "Business", label: "Business" },
          { value: "Accountancy", label: "Accountancy" },
          { value: "Management (BAM)", label: "Management (BAM)" }
        ],
      },
      rules: {},
    };
  },
  methods: {
    // VALIDATE
    validate() {
      return new Promise((resolve) => {
        this.$refs.form.validate((valid) => {
          this.$emit("on-validate", valid, this.model);
          resolve(valid);
        });
      });
    },
    // INFINITE HANDLER
    loadMore() {
      this.busy = true;
      if(typeof this.filterData.length === 'undefined' || this.filterData.length === 0){
        //FILTER NOT SET
        this.axios.get("lesson-plan.json").then((response) => {
          const append = response.data.slice(
            this.posts.length,
            this.posts.length + this.limit
          );
          this.posts = this.posts.concat(append);
          localStorage.setItem("lessonPlanBankJSONData",JSON.stringify(response.data));
          this.busy = false;
        }).catch(error => error.response.data);
      } 
      else {
          //FILTER SET
          // eslint-disable-next-line no-console
          const append = this.filterData.slice(
            this.posts.length,
            this.posts.length + this.limit
          );

          // eslint-disable-next-line no-console
          console.log(append)
          // eslint-disable-next-line no-console
          console.log(this.posts)

          this.posts = this.posts.concat(append);
          this.busy = false;
      }
    },
    loadLessonPlanStorage() {
      return JSON.parse(localStorage.getItem("lessonPlanBankJSONData"));
    },
    filterList() {
      const lessonPlanStorage = this.loadLessonPlanStorage();

      const language = this.model.lessonPlanBankSubject;
      const grade = this.model.lessonPlanBankGrade;
      const strand = this.model.lessonPlanBankStrand;
      
      //FILTER NOT SET
      if(!language && !grade && !strand){
        this.filterData.length = 0;
        this.loadMore();
      }  
        
      //FILTER SET
      this.filterData = lessonPlanStorage.filter(function(item) {
        if(language && !grade && !strand)
          return item.language === language;
        if(!language && grade && !strand)
          return item.grade === grade;
        if(!language && !grade && strand)
          return item.strand === strand;
        if(language && grade && !strand)
          return (item.language === language && item.grade === grade);
        if(language && !grade && strand)
          return (item.language === language && item.strand === strand);
        if(!language && grade && strand)
          return (item.grade === grade && item.strand === strand);
        if(language && grade && strand)
          return (item.language === language && item.grade === grade && item.strand === strand);  
      }); 

      this.posts = [];
      const append = this.filterData.slice(
          this.posts.length,
          this.posts.length + this.limit
      );
      this.posts = this.posts.concat(append);
    },
    infiniteScroll(){
    
    },
    updateForm (input, value) {
      this.formAddStandard[input] = value;
    },
  }, 
  mounted() {
    // MUST USE CLASS ON INFINITE SCROLL
    document.body.classList.add("full-height");
  },
  destroyed() {
    document.body.classList.remove("full-height");
  },
  created() {
    this.loadMore();
  },
};
</script>