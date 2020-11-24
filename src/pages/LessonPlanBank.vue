<template>
  <!-- Main Content -->
  <div class="main-content">
  <!-- START ADD NEW LESSON MODAL -->
    <md-dialog
                :md-active.sync="addNewLessonModal"
                class="modal-window filter-modal standard"
              >
                <h2 class="modal-title">Add Lesson Plan</h2>
                <div class="modal-content">

                  <el-form
                    :model="formAddLesson"
                    :rules="formAddLesson.rules"
                    ref="formAddLesson"
                  >
                    <!-- Menu Information -->
                    <div class="card-content">
                      <div class="row">
                        <h2 class="col-12 card-content-title">Conventions of Standard English</h2>
                        <div class="card-content-info">
                          <h3>Fill in the fields below to complete your lesson plan. Content is required for each field.<span class="info">*</span></h3>
                          <h3 class="info">For the protection and privacy of our students, please do not use any unique identifiers when generating any part of your lesson plan.</h3>
                        </div>
                        <el-form-item class="col-12 col-md-6" prop="lessonReadyForAddTitle" label="Lesson Plan Title">
                          <el-input type="textarea" @input="updateForm('lessonReadyForAddTitle',formAddLesson.lessonReadyForAddTitle)"
                            v-model="formAddLesson.lessonReadyForAddTitle"
                            placeholder="Lesson Plan Title"
                          ></el-input>
                        </el-form-item>
                        <el-form-item class="col-12 col-md-6" prop="lessonReadyForAddActivities" label="Lesson Plan Activities">
                          <el-input type="textarea" @input="updateForm('lessonReadyForAddActivities',formAddLesson.lessonReadyForAddActivities)"
                            v-model="formAddLesson.lessonReadyForAddActivities"
                            placeholder="Lesson Plan Activities"
                          ></el-input>
                        </el-form-item>
                        <el-form-item class="col-12 col-md-6" prop="lessonReadyForAddMaterials" label="Lesson Plan Materials">
                          <el-input type="textarea" @input="updateForm('lessonReadyForAddMaterials',formAddLesson.lessonReadyForAddMaterials)"
                            v-model="formAddLesson.lessonReadyForAddMaterials"
                            placeholder="Lesson Plan Materials"
                          ></el-input>
                        </el-form-item>
                        <el-form-item class="col-12 col-md-6" prop="lessonReadyForAddGuidedPractice" label="Lesson Plan Guided Practice">
                          <el-input type="textarea" @input="updateForm('lessonReadyForAddGuidedPractice',formAddLesson.lessonReadyForAddGuidedPractice)"
                            v-model="formAddLesson.lessonReadyForAddGuidedPractice"
                            placeholder="Lesson Plan Guided Practice"
                          ></el-input>
                        </el-form-item>
                        <el-form-item class="col-12 col-md-6" prop="lessonReadyForAddIndependentPractice" label="Lesson Plan Independent Practice">
                          <el-input type="textarea" @input="updateForm('lessonReadyForAddIndependentPractice',formAddLesson.lessonReadyForAddIndependentPractice)"
                            v-model="formAddLesson.lessonReadyForAddIndependentPractice"
                            placeholder="Lesson Plan Independent Practice"
                          ></el-input>
                        </el-form-item>
                        <el-form-item class="col-12 col-md-6" prop="lessonReadyForAddAssessment" label="Lesson Plan Assessment">
                          <el-input type="textarea" @input="updateForm('lessonReadyForAddAssessment',formAddLesson.lessonReadyForAddAssessment)"
                            v-model="formAddLesson.lessonReadyForAddAssessment"
                            placeholder="Lesson Plan Assessment"
                          ></el-input>
                        </el-form-item>
                        <el-form-item class="col-12 col-md-6" prop="lessonReadyForAddNotes" label="Lesson Plan Notes">
                          <el-input type="textarea" @input="updateForm('lessonReadyForAddNotes',formAddLesson.lessonReadyForAddNotes)"
                            v-model="formAddLesson.lessonReadyForAddNotes"
                            placeholder="Lesson Plan Notes"
                          ></el-input>
                        </el-form-item>
                        <el-form-item class="col-12 col-md-6" prop="lessonReadyForAddModifications" label="Lesson Plan Modifications and Accommodations">
                          <el-input type="textarea" @input="updateForm('lessonReadyForAddModifications',formAddLesson.lessonReadyForAddModifications)"
                            v-model="formAddLesson.lessonReadyForAddModifications"
                            placeholder="Lesson Plan Modifications and Accommodations"
                          ></el-input>
                        </el-form-item>
                        <el-form-item class="col-12 col-md-6" prop="lessonReadyForAddClosing" label="Lesson Plan Closing">
                          <el-input type="textarea" @input="updateForm('lessonReadyForAddClosing',formAddLesson.lessonReadyForAddClosing)"
                            v-model="formAddLesson.lessonReadyForAddClosing"
                            placeholder="Lesson Plan Closing"
                          ></el-input>
                        </el-form-item>
                        <el-form-item class="col-12 col-md-6" label="Share Lesson Plan" prop="lessonReadyForAddShare">
                            <el-radio-group
                              @change="updateForm('lessonReadyForAddShare',formAddLesson.lessonReadyForAddShare)" v-model="formAddLesson.lessonReadyForAddShare">
                              <el-radio label="Yes">Yes</el-radio>
                              <el-radio checked label="No">No</el-radio>
                            </el-radio-group>
                            <div class="card-content-info">check this box to have your lesson plan listed on the Archives page for other teacher to use.</div>
                        </el-form-item>
                      </div>
                    </div>
                  </el-form>
                </div>
                <div class="modal-footer">
                  <button
                    class="button medium ed-btn__secondary"
                    @click="validate()"
                  >
                    Submit
                  </button>
                  <button
                    class="button medium ed-btn__tertiary"
                    @click="addNewLessonModal = false"
                  >
                    Cancel
                  </button>
                </div>
    </md-dialog>
  <!-- END ADD NEW LESSON MODAL -->
  <!-- START ADD CUSTOM STANDARD MODAL -->
    <md-dialog
            :md-active.sync="addCustomStandardModal"
            class="modal-window filter-modal"
          >
            <h2 class="modal-title">Add Custom Lesson Standard</h2>
            <div class="modal-content">
              <el-form
                :model="formAddStandard"
                :rules="formAddStandard.rules"
                ref="formAddStandard"
              >
                <!-- Menu Information -->
                <div class="card-content">
                  <div class="row">
                    <el-form-item
                      class="col-6"
                      prop="standardReadyForAddIdentifierCode"
                      label="Identifier Code"
                    >
                      <el-input
                        disabled
                        @input="
                          updateForm(
                            'standardReadyForAddIdentifierCode',
                            formAddStandard.standardReadyForAddIdentifierCode
                          )
                        "
                        v-model="
                          formAddStandard.standardReadyForAddIdentifierCode
                        "
                        placeholder="Menu Title"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      class="col-6"
                      label="Privacy"
                      prop="standardReadyForAddPrivacy"
                    >
                      <el-radio-group
                        @change="
                          updateForm(
                            'standardReadyForAddPrivacy',
                            formAddStandard.standardReadyForAddPrivacy
                          )
                        "
                        v-model="formAddStandard.standardReadyForAddPrivacy"
                      >
                        <el-radio checked label="Public">Public</el-radio>
                        <el-radio label="Private">Private</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </div>
                  <div class="row">
                    <el-form-item
                      class="col-12"
                      prop="standardReadyForAddText"
                      label="Custom Standard"
                    >
                      <el-input
                        type="textarea"
                        @input="
                          updateForm(
                            'standardReadyForAddText',
                            formAddStandard.standardReadyForAddText
                          )
                        "
                        v-model="formAddStandard.standardReadyForAddText"
                        placeholder="Custom Standard"
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
              </el-form>
            </div>
            <div class="modal-footer">
              <button
                class="button medium ed-btn__secondary"
                @click="validateAddStandard()"
              >
                Submit
              </button>
              <button
                class="button medium ed-btn__tertiary"
                @click="addCustomStandardModal = false"
              >
                Cancel
              </button>
            </div>
    </md-dialog>
  <!-- END ADD CUSTOM STANDARD MODAL -->
  <!-- START VIEW ALL LESSONS OF SELECTED STANDARD -->
    <md-dialog :md-active.sync="viewLessonsModal" class="modal-window filter-modal">
        <h2 class="modal-title">Lesson Standard Detail</h2>
        <div class="modal-content">
          <div v-if="viewLessonsModal" class="side-menu__results card-boxes lessons_teacher standard">
            <div class="card-box" v-for="(post, idx) in standards[0].lessons" :key="idx">
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
                <li class="card-subject">{{ standards[0].subject }}</li>
                <li class="card-grade">{{ standards[0].grade }}</li>
                <li class="card-strand">{{ standards[0].strand }}</li>
              </ul>
              <div class="card-content">
                <p>{{ post.body }}</p>
                <router-link to="/lesson-plan/"
                  ><button class="button medium ed-btn__primary">
                    {{ standards[0].type }}
                  </button></router-link
                >
              </div>
              <div class="card-footer">
                <i class="icon icon-lesson"></i
                ><span>{{ post.resources }} Resources</span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="button medium ed-btn__tertiary" @click="viewLessonsModal = false">Close</button>
        </div>
    </md-dialog>
  <!-- END VIEW ALL LESSONS OF SELECTED STANDARD -->
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
                  :disabled="isDisabledGrade"
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
                  :disabled="isDisabledStrand"
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
          <button
            v-if="allFiltersSet"
            @click="createIdentifierCode()"
            class="button medium ed-btn__primary add-custom-standard"
            href="#"
          >
            <i class="icon icon-add"></i>
            <span>Add Custom Standard</span>
          </button>
        </div>
      </div>
      <div class="row">
        <!-- All Posts -->
        <div class="infinite-scroll" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
          <!-- Lesson LOAD IF NOT ALL FILTERS SET-->
          <div v-if="!allFiltersSet" class="side-menu__results card-boxes lessons_teacher">
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
                <li class="card-subject">{{ post.subject }}</li>
                <li class="card-grade">{{ post.grade }}</li>
                <li class="card-strand">{{ post.strand }}</li>
              </ul>
              <div class="card-content">
                <p>{{ post.body }}</p>
                <router-link to="/lesson-plan/"
                  ><button class="button medium ed-btn__primary">
                    {{ post.type }}
                  </button></router-link
                >
              </div>
              <div class="card-footer">
                <i class="icon icon-lesson"></i
                ><span>{{ post.resources }} Resources</span>
              </div>
            </div>
          </div>
          <!-- Standard LOAD IF ALL FILTERS SET-->
          <div v-if="allFiltersSet" class="side-menu__results card-boxes lessons_teacher standard">
            <div class="card-box" v-for="(standard, idx) in standards" :key="idx">
              <div class="card-content">
                <p>{{ standard.customStandard }}</p>
                  <button  @click="viewLessonsModal = true" class="button medium ed-btn__primary left">
                    <i class="icon icon-eye"></i>
                    {{ standard.type }}
                  </button>
                  <span class="card-content-number">{{standards[0].lessons.length}} Lesson(s)</span>
                <button
                  @click="addNewLessonModal = true"
                  class="button medium ed-btn__secondary add-lesson-plan"
                  href="#"
                >
                  <md-tooltip md-direction="top">Add Lesson Plan</md-tooltip>
                  <i class="icon icon-add"></i>
                </button>
              </div>
            </div>
          </div>
          <div v-if="busy" class="preloader">
            <span><img src="../assets/images/preloader.gif" /> Loading...</span>
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
    Element,
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
      isDisabledGrade: true,
      isDisabledStrand: true,
      filterBySubject: [],
      filterByGrade: [],
      // MODALS
      addCustomStandardModal: false,
      addNewLessonModal: false,
      viewLessonsModal: false,
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
              trigger: "blur",
            },
          ],
        },
      },
      // ADD LESSON
      formAddLesson: {
        lessonReadyForAddTitle:"",
        lessonReadyForAddActivities:"",
        lessonReadyForAddMaterials:"",
        lessonReadyForAddGuidedPractice:"",
        lessonReadyForAddIndependentPractice:"",
        lessonReadyForAddAssessment:"",
        lessonReadyForAddNotes:"",
        lessonReadyForAddModifications:"",
        lessonReadyForAddClosing:"",
        lessonReadyForAddShare: "No",
        rules: {
          lessonReadyForAddTitle: [
            {
              required: true,
              message: "Lesson Title is Required!",
              trigger: "blur",
            },
          ], 
          lessonReadyForAddActivities: [
            {
              required: true,
              message: "Lesson Activities is Required!",
              trigger: "blur",
            },
          ],    
          lessonReadyForAddMaterials: [
            {
              required: true,
              message: "Lesson Materials is Required!",
              trigger: "blur",
            },
          ],
          lessonReadyForAddGuidedPractice: [
            {
              required: true,
              message: "Lesson Guided Practice is Required!",
              trigger: "blur",
            },
          ], 
          lessonReadyForAddIndependentPractice: [
            {
              required: true,
              message: "Lesson Independent Practice is Required!",
              trigger: "blur",
            },
          ],    
          lessonReadyForAddAssessment: [
            {
              required: true,
              message: "Lesson Assessment is Required!",
              trigger: "blur",
            },
          ],
          lessonReadyForAddNotes: [
            {
              required: true,
              message: "Lesson Notes is Required!",
              trigger: "blur",
            },
          ], 
          lessonReadyForAddModifications: [
            {
              required: true,
              message: "Lesson Modifications is Required!",
              trigger: "blur",
            },
          ],    
          lessonReadyForAddClosing: [
            {
              required: true,
              message: "Lesson Closing is Required!",
              trigger: "blur",
            },
          ],

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
    // INFINITE HANDLER - LESSON
    loadMore() {
      //IF ALL FILTERS NOT SET
      if (typeof this.filterData.length === "undefined" ||this.filterData.length === 0) {
        this.busy = true;
        //this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/lesson-plan.json").then((response) => {
        this.axios.get("lesson-plan.json").then((response) => {
            const append = response.data.slice(
              this.posts.length,
              this.posts.length + this.limit
            );
            this.posts = this.posts.concat(append);

            this.options.lessonPlanBankSubjectOptions = [
              ...new Set(response.data.map((item) => item.subject)),
            ];

            localStorage.setItem("lessonPlanJSONData",JSON.stringify(response.data));
            this.busy = false;
          })
          .catch((error) => error.response.data);
      } else {
        //IF ALL FILTERS SET
        this.busy = false;
        const subject = this.model.lessonPlanBankSubject;
        const grade = this.model.lessonPlanBankGrade;
        const strand = this.model.lessonPlanBankStrand;
        const lessonPlanBankStorage = this.loadLessonPlanBankStorage();

          if(lessonPlanBankStorage){
            const filterSelect = lessonPlanBankStorage.filter(function(item) {
                if (item.subject == subject && item.grade == grade && item.strand == strand) return item;
            });

            this.standards = filterSelect;
          }
          else{
            //this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/lesson-plan-bank.json").then((response) => {
            this.axios.get("lesson-plan-bank.json").then((response) => {

                const filterSelect = response.data.filter(function(item) {
                  if (item.subject == subject && item.grade == grade && item.strand == strand) return item;
                });

                this.standards = filterSelect;
                localStorage.setItem("lessonPlanBankJSONData",JSON.stringify(response.data));
              }).catch((error) => error.response.data)
          }  
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
      if (!subject && !grade && !strand) {
        this.filterData.length = 0;
        this.loadMore();
      }

      //FILTER SET
      this.filterData = lessonPlanStorage.filter(function(item) {
        if (subject && !grade && !strand) return item.subject === subject;
        if (!subject && grade && !strand) return item.grade === grade;
        if (!subject && !grade && strand) return item.strand === strand;
        if (subject && grade && !strand)
          return item.subject === subject && item.grade === grade;
        if (subject && !grade && strand)
          return item.subject === subject && item.strand === strand;
        if (!subject && grade && strand)
          return item.grade === grade && item.strand === strand;
        if (subject && grade && strand)
          return (
            item.subject === subject &&
            item.grade === grade &&
            item.strand === strand
          );
      });

      // SELECTED SUBJECT
      if (subject) {
        this.filterBySubject = lessonPlanStorage.filter(function(item) {
          return item.subject === subject;
        });
        this.options.lessonPlanBankGradeOptions = [
          ...new Set(this.filterBySubject.map((item) => item.grade)),
        ];
        this.isDisabledGrade = false;
      } else {
        this.isDisabledGrade = true;
      }

      // SELECTED GRADE
      if (subject && grade) {
        this.filterByGrade = this.filterBySubject.filter(function(item) {
          return item.grade === grade;
        });
        this.options.lessonPlanBankStrandOptions = [
          ...new Set(this.filterByGrade.map((item) => item.strand)),
        ];
        this.isDisabledStrand = false;
      } else {
        this.isDisabledStrand = true;
      }

      // ALL FILTERS SET CHECK
      if (subject && grade && strand) {
        this.allFiltersSet = true;

        this.loadMore();
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
    createIdentifierCode() {
      this.addCustomStandardModal = true

      const grade = this.model.lessonPlanBankGrade;
      const strand = this.model.lessonPlanBankStrand;

      // MAP STRAND
      this.strandID = strand.replace(/[^A-Z]/g, "");

      this.gradeID = 0;
      // MAP GRADE
      switch (grade) {
        case "One":
          this.gradeID = 1;
          break;
        case "Two":
          this.gradeID = 2;
          break;
        case "Three":
          this.gradeID = 3;
          break;
        case "Four":
          this.gradeID = 4;
          break;
        case "Five":
          this.gradeID = 5;
          break;
        case "Six":
          this.gradeID = 6;
          break;
        case "Seven":
          this.gradeID = 7;
          break;
        case "Eight":
          this.gradeID = 8;
          break;
        case "Nine":
          this.gradeID = 9;
          break;
        case "Ten":
          this.gradeID = 10;
          break;
        default:
          this.gradeID = 1;
      }

      this.formAddStandard.standardReadyForAddIdentifierCode = "CS" + "." + this.gradeID + "." + this.strandID + "." + (this.standards.length + 1);
   },
    // UPDATE ON CHANGE
    updateForm(input, value) {
      this.formAddStandard[input] = value;
    },
    // VALIDATE FORM ADD STANDARD
    validateAddStandard() {
      return new Promise((resolve) => {
        this.$refs.formAddStandard.validate((valid) => {
          this.$emit("on-validate", valid, this.model);
          resolve(valid);
          if (valid) this.addCustomLessonStandard();
        });
      });
    },
    // ADD CUSTOM LESSON STANDARD
    addCustomLessonStandard() {
      const lessonPlanBankStorage = this.loadLessonPlanBankStorage();

      const newCustomStandard = [{
        type: this.formAddStandard.standardReadyForAddIdentifierCode,
        privacy: this.formAddStandard.standardReadyForAddPrivacy,
        subject: this.model.lessonPlanBankSubject,
        grade: this.model.lessonPlanBankGrade,
        strand: this.model.lessonPlanBankStrand,
        customStandard: this.formAddStandard.standardReadyForAddText,
        lessons: []
      }];

      lessonPlanBankStorage.push(newCustomStandard[0])

      localStorage.setItem("lessonPlanBankJSONData",JSON.stringify(lessonPlanBankStorage));
      this.addCustomStandardModal = false;
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
