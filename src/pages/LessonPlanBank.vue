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
                <li>
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

//const api = '//hn.algolia.com/api/v1/search_by_date?tags=story';

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
          { value: "english", label: "English" },
          { value: "mathematics", label: "Mathematics" },
        ],
        lessonPlanBankGradeOptions: [
          { value: "", label: "Select Grade" },
          { value: "grade1", label: "Grade 1" },
          { value: "grade2", label: "Grade 2" },
        ],
        lessonPlanBankStrandOptions: [
          { value: "", label: "Select Strand" },
          { value: "strand1", label: "Strand 1" },
          { value: "strand2", label: "Strand 2" },
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
      this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/lesson-plan.json").then((response) => {
        const append = response.data.slice(
          this.posts.length,
          this.posts.length + this.limit
        );
        this.posts = this.posts.concat(append);
        this.busy = false;
      });
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