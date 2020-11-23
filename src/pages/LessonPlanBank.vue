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
                    :key="pre"
                    :label="pre"
                    :value="pre"
                  >
                  </el-option>
                </el-select>
                <i class="icon icon-arrow"></i>
              </el-form-item>
            </div>
            <div class="col-4">
              <el-form-item prop="lessonPlanBankGrade">
                <el-select
                  :disabled=isDisabledGrade
                  v-model="model.lessonPlanBankGrade"
                  placeholder="Select Grade"
                  @change="filterList()"
                >
                  <el-option
                    v-for="pre in options.lessonPlanBankGradeOptions"
                    :key="pre"
                    :label="pre"
                    :value="pre"
                  >
                  </el-option>
                </el-select>
                <i class="icon icon-arrow"></i>
              </el-form-item>
            </div>
            <div class="col-4">
              <el-form-item prop="lessonPlanBankStrand">
                <el-select
                  :disabled=isDisabledStrand
                  v-model="model.lessonPlanBankStrand"
                  placeholder="Select Strand"
                  @change="filterList()"
                >
                  <el-option
                    v-for="pre in options.lessonPlanBankStrandOptions"
                    :key="pre"
                    :label="pre"
                    :value="pre"
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
                  <el-form :model="formAddStandard" :rules="formAddStandard.rules" ref="formAddStandard">
                  <!-- Menu Information -->
                  <div class="card-content">
                    <div class="row">
                      <el-form-item class="col-6" prop="standardReadyForAddIdentifierCode" label="Identifier Code">
                        <el-input
                          disabled
                          @input="updateForm('standardReadyForAddIdentifierCode', formAddStandard.standardReadyForAddIdentifierCode)"  v-model="formAddStandard.standardReadyForAddIdentifierCode"
                          placeholder="Menu Title"
                        ></el-input>
                      </el-form-item>
                      <el-form-item class="col-6" label="Privacy" prop="standardReadyForAddPrivacy">
                        <el-radio-group  @change="updateForm('standardReadyForAddPrivacy', formAddStandard.standardReadyForAddPrivacy)" v-model="formAddStandard.standardReadyForAddPrivacy">
                          <el-radio checked label="Public">Public</el-radio>
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
                  <button class="button medium ed-btn__secondary" @click="validate()">Submit</button>
                  <button class="button medium ed-btn__tertiary" @click="addCustomStandardModal = false">Cancel</button>
                </div>
              </md-dialog>
          <!-- END ADD CUSTOM STANDARD MODAL -->

          <button v-if="allFiltersSet" @click="addCustomStandardModal = true" class="button medium ed-btn__primary add-custom-standard" href="#">
            <i class="icon icon-add"></i>
            <span>Add Custom Standard</span>
          </button>
        </div>
      </div>
      <div class="row">
        <!-- All Posts -->
        <div v-if="!allFiltersSet" class="side-menu__results card-boxes lessons_teacher">
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
                <li class="card-subject">{{post.subject}}</li>
                <li class="card-grade">{{ post.grade }}</li>
                <li class="card-strand">{{ post.strand }}</li>
              </ul>
              <div class="card-content">
                <p>{{ post.body }}</p>
                <router-link to="/lesson-plan/"
                  ><button class="button medium ed-btn__primary">
                    {{post.type}}
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
        <!-- Filtered Standards -->
        <div v-if="allFiltersSet" class="side-menu__results card-boxes lessons_teacher standard">
           <div class="card-box" v-for="(standard, idx) in standards" :key="idx">
              <div class="card-content">
                <p>{{ standard.customStandard }}</p>
                <router-link to="/lesson-plan/"
                  ><button class="button medium ed-btn__primary">
                    {{standard.type}}
                  </button></router-link
                >
                <button @click="addCustomStandardModal = true" class="button medium ed-btn__secondary add-lesson-plan" href="#">
                  <md-tooltip md-direction="top">Add Lesson Plan</md-tooltip>
                  <i class="icon icon-add"></i>
                </button>
              </div>
            </div>
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
      standards: [],
      limit: 5,
      busy: false,
      page: 1,
      list: [],
      filterData: {},
      allFiltersSet: false,
      strandID: 0,
      maxCustomId: 0,
      gradeID: "",
      isDisabledGrade:true,
      isDisabledStrand:true,
      filterBySubject: [],
      filterByGrade: [],
      // MODALS
      addCustomStandardModal: false,
      // ADD CUSTOM STANDARD
      formAddStandard: {
        standardReadyForAddIdentifierCode: "",
        standardReadyForAddPrivacy: "Public",
        standardReadyForAddText: "",
        standardReadyForAddID: 0,
        rules: {
          standardReadyForAddText: [
            {
              required: true,
              message: "Custom Standard is Required!",
              trigger: "blur"
            }
          ]
        }
      },
      model: {
        //DEFINITIONS
        lessonPlanBankSubject: "",
        lessonPlanBankGrade: "",
        lessonPlanBankStrand: "",
      },
      options: {
        //OPTIONS
        lessonPlanBankSubjectOptions: [],
        lessonPlanBankGradeOptions: [],
        lessonPlanBankStrandOptions: [],
      },
      rules: {},
    };
  },
  methods: {
    // INFINITE HANDLER
    loadMore() {
      this.busy = true;
      if(typeof this.filterData.length === 'undefined' || this.filterData.length === 0){
        //FILTER NOT SET
        //this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/lesson-plan.json").then((response) => {
        this.axios.get("lesson-plan.json").then((response) => {
          const append = response.data.slice(
            this.posts.length,
            this.posts.length + this.limit
          );
          this.posts = this.posts.concat(append);

          this.options.lessonPlanBankSubjectOptions = [...new Set(response.data.map(item => item.subject))];

          localStorage.setItem("lessonPlanJSONData",JSON.stringify(response.data));
          this.busy = false;
        }).catch(error => error.response.data);
      } 
      else {
          //FILTER SET
          const append = this.filterData.slice(
            this.posts.length,
            this.posts.length + this.limit
          );

          this.posts = this.posts.concat(append);
          this.busy = false;
      }
    },
    // LOCALSTORAGE
    loadLessonPlanStorage() {
      return JSON.parse(localStorage.getItem("lessonPlanJSONData"));
    },
    // LOCALSTORAGE
    loadLessonPlanBankStorage() {
      return JSON.parse(localStorage.getItem("lessonPlanBankJSONData"));
    },
    // FILTER DROP-DOWNS
    filterList() {
      const lessonPlanStorage = this.loadLessonPlanStorage();

      const subject = this.model.lessonPlanBankSubject;
      const grade = this.model.lessonPlanBankGrade;
      const strand = this.model.lessonPlanBankStrand;
      
      //FILTER NOT SET
      if(!subject && !grade && !strand){
        this.filterData.length = 0;
        this.loadMore();
      }
        
      //FILTER SET
      this.filterData = lessonPlanStorage.filter(function(item) {
        if(subject && !grade && !strand)
          return item.subject === subject;
        if(!subject && grade && !strand)
          return item.grade === grade;
        if(!subject && !grade && strand)
          return item.strand === strand;
        if(subject && grade && !strand)
          return (item.subject === subject && item.grade === grade);
        if(subject && !grade && strand)
          return (item.subject === subject && item.strand === strand);
        if(!subject && grade && strand)
          return (item.grade === grade && item.strand === strand);
        if(subject && grade && strand)
          return (item.subject === subject && item.grade === grade && item.strand === strand);  
      }); 

      // SELECTED SUBJECT
      if(subject){
        this.filterBySubject = lessonPlanStorage.filter(function(item) {
          return item.subject === subject;
        });
        this.options.lessonPlanBankGradeOptions = [...new Set(this.filterBySubject.map(item => item.grade))];
        this.isDisabledGrade = false;
      }
      else{
        this.isDisabledGrade = true;
      }
      
      // SELECTED GRADE
      if(subject && grade){
        this.filterByGrade =  this.filterBySubject.filter(function(item) {
          return item.grade === grade;
        });
        this.options.lessonPlanBankStrandOptions = [...new Set(this.filterByGrade.map(item => item.strand))];
        this.isDisabledStrand = false;
      } else {
        this.isDisabledStrand = true;
      }

      // ALL FILTERS SET CHECK
      if(subject && grade && strand){
        this.allFiltersSet = true;

        const countNumberOfFilteredSelection = lessonPlanStorage.filter(function(item){
          return (item.subject === subject && item.grade === grade && item.strand === strand);
        })
        this.createIdentifierCode(subject,grade,strand);
        this.formAddStandard.standardReadyForAddIdentifierCode = this.formAddStandard.standardReadyForAddIdentifierCode +"."+ (countNumberOfFilteredSelection.length+1);

        this.axios.get("lesson-plan-bank.json").then((response) => {
 
          this.standards = response.data;

          localStorage.setItem("lessonPlanBankJSONData",JSON.stringify(response.data));
          this.busy = false;
        }).catch(error => error.response.data);

      } else {
        this.allFiltersSet = false;
      }

      this.posts = [];
      const append = this.filterData.slice(
          this.posts.length,
          this.posts.length + this.limit
      );
      this.posts = this.posts.concat(append);
    },
    // IDENTIFIER CODE CREATOR 
    createIdentifierCode(subject,grade,strand){
      // MAP STRAND
      this.strandID = strand.replace(/[^A-Z]/g, '');

      this.gradeID = 0;
      // MAP GRADE
      switch (grade) {
          case "One": this.gradeID = 1;
              break;
          case "Two": this.gradeID = 2;
              break;
          case "Three": this.gradeID = 3;
              break;
          case "Four": this.gradeID = 4;
              break;
          case "Five": this.gradeID = 5;
              break;
          case "Six": this.gradeID = 6;
              break;
            case "Seven": this.gradeID = 7;
              break;
          case "Eight": this.gradeID = 8;
              break;
          case "Nine": this.gradeID = 9;
              break;
          case "Ten": this.gradeID = 10;
              break;
          default:
              this.gradeID = 1;
      }

      this.formAddStandard.standardReadyForAddIdentifierCode = "CS"+"."+this.gradeID+"."+this.strandID;
    },
    // UPDATE ON CHANGE
    updateForm (input, value) {
      this.formAddStandard[input] = value;
    },
    // VALIDATE FORM ADD STANDARD
    validate() {
      return new Promise((resolve) => {
        this.$refs.formAddStandard.validate((valid) => {
          this.$emit('on-validate', valid, this.model)
          resolve(valid);
          if(valid)
            this.addCustomLessonStandard();
        });
    })
    },
    // ADD CUSTOM LESSON STANDARD
    addCustomLessonStandard(){
      const lessonPlanStorage = this.loadLessonPlanStorage();

      // FIND LARGEST ID
      this.maxCustomId = lessonPlanStorage.reduce(
        (max, character) => (character.id > max ? character.id : max),
        lessonPlanStorage[0].id
      );

      const newCustomStandard = {
        "id": this.maxCustomId+1,
        "title": this.formAddStandard.standardReadyForAddIdentifierCode,
        "subject": this.model.lessonPlanBankSubject,
        "grade": this.model.lessonPlanBankGrade,
        "strand": this.model.lessonPlanBankStrand,
        "type":"",
        "resources":"",
        "privacy": this.formAddStandard.standardReadyForAddPrivacy,
        "body": this.formAddStandard.standardReadyForAddText
      }

      this.addCustomStandardModal = false;
    }
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
  }
}
</script>