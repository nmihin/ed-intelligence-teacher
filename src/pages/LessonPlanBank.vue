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
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "lesson-plan-bank",
  mixins: [validationMixin],
  components: {
    MdMenu,
    MdButton,
    MdList,
    Element,
    InfiniteLoading,
  },
  data() {
    return {
      posts: [],
      limit: 5,
      busy: false,
      page: 1,
      list: [],
      filterData: {},
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
        this.axios.get("lesson-plan.json").then((response) => {
          const append = response.data.slice(
            this.posts.length,
            this.posts.length + this.limit
          );
          this.posts = this.posts.concat(append);
          localStorage.setItem("lessonPlanBankJSONData",JSON.stringify(response.data));
          this.busy = false;
        });
      } 
      else {
          const append = this.filterData.slice(
            this.posts.length,
            this.posts.length + this.limit
          );
          this.posts = this.posts.concat(append);
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
      
      // NO-FILTER
      if(!language && !grade && !strand){
        this.filterData.length = 0;
        this.loadMore();
      }  
        
      // FILTER
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

      //this.posts = this.filterData;
    },
    infiniteScroll(){
    
    },
  }, 
  mounted() {
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