<template>   
      <!-- Main Content -->
        <div class="main-content">
          <div class="container-fluid">
            <el-form :model="model" :rules="rules" ref="form">
              <div class="filter-card">
                <div class="row">
                  <div class="col-4">
                    <el-form-item prop="lessonPlanBankSubject">
                      <select class="card-select" v-model="model.lessonPlanBankSubject" placeholder="Select Subject">
                        <option v-for="pre in options.lessonPlanBankSubjectOptions"
                                  :key="pre.value"
                                  :label="pre.label"
                                  :value="pre.value">
                        </option>
                      </select>
                      <i class="icon icon-arrow"></i>
                    </el-form-item>
                  </div>
                  <div class="col-4">
                    <el-form-item prop="lessonPlanBankGrade">
                      <select class="card-select" v-model="model.lessonPlanBankGrade" placeholder="Select Grade">
                        <option v-for="pre in options.lessonPlanBankGradeOptions"
                                  :key="pre.value"
                                  :label="pre.label"
                                  :value="pre.value">
                        </option>
                      </select>
                      <i class="icon icon-arrow"></i>
                    </el-form-item>
                  </div>
                  <div class="col-4">
                    <el-form-item prop="lessonPlanBankStrand">
                      <select class="card-select" v-model="model.lessonPlanBankStrand" placeholder="Select Strand">
                        <option v-for="pre in options.lessonPlanBankStrandOptions"
                                  :key="pre.value"
                                  :label="pre.label"
                                  :value="pre.value">
                        </option>
                      </select>
                      <i class="icon icon-arrow"></i>
                    </el-form-item>
                  </div>            
                  
                </div>
              </div>
            </el-form>
            <div class="row">
              <div v-lazy-container="{ selector: '.card-box' }" class="side-menu__results card-boxes lessons_teacher">
                        <!-- Box -->
                        <div class="card-box">
                          <div class="card-title">
                            <h2>My Test Lesson - English 1</h2>
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
                            <li>
                              Four
                            </li>
                            <li>
                              English
                            </li>
                            <li>
                              <a title="Language" href="#">Language</a>
                            </li>
                          </ul>
                          <div class="card-content">
                            <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
                            <router-link to="/lesson-plan"><button class="button medium ed-btn__primary">CC.4.L.1</button></router-link>
                          </div>
                          <div class="card-footer">
                            <i class="icon icon-lesson"></i><span>0 Resources</span>
                          </div>
                        </div>             
                        <!-- Box -->
                        <div class="card-box">
                          <div class="card-title">
                            <h2>My Test Lesson - English 2</h2>
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
                            <li>
                              Four
                            </li>
                            <li>
                              English
                            </li>
                            <li>
                              <a title="Language" href="#">Language</a>
                            </li>
                          </ul>
                          <div class="card-content">
                            <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
                            <router-link to="/lesson-plan"><button class="button medium ed-btn__primary">CC.4.L.1</button></router-link>
                          </div>
                          <div class="card-footer">
                            <i class="icon icon-lesson"></i><span>0 Resources</span>
                          </div>
                        </div>             
                        <!-- Box -->
                        <div class="card-box">
                          <div class="card-title">
                            <h2>My Test Lesson - English 3</h2>
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
                            <li>
                              Four
                            </li>
                            <li>
                              English
                            </li>
                            <li>
                              <a title="Language" href="#">Language</a>
                            </li>
                          </ul>
                          <div class="card-content">
                            <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
                            <router-link to="/lesson-plan"><button class="button medium ed-btn__primary">CC.4.L.1</button></router-link>
                          </div>
                          <div class="card-footer">
                            <i class="icon icon-lesson"></i><span>0 Resources</span>
                          </div>
                        </div>             
                        <!-- Box -->
                        <div class="card-box">
                          <div class="card-title">
                            <h2>My Test Lesson - English 4</h2>
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
                            <li>
                              Four
                            </li>
                            <li>
                              English
                            </li>
                            <li>
                              <a title="Language" href="#">Language</a>
                            </li>
                          </ul>
                          <div class="card-content">
                            <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
                            <router-link to="/lesson-plan"><button class="button medium ed-btn__primary">CC.4.L.1</button></router-link>
                          </div>
                          <div class="card-footer">
                            <i class="icon icon-lesson"></i><span>0 Resources</span>
                          </div>
                        </div>  
                        <!-- Box -->
                        <div class="card-box">
                          <div class="card-title">
                            <h2>My Test Lesson - English 5</h2>
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
                            <li>
                              Four
                            </li>
                            <li>
                              English
                            </li>
                            <li>
                              <a title="Language" href="#">Language</a>
                            </li>
                          </ul>
                          <div class="card-content">
                            <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
                            <router-link to="/lesson-plan"><button class="button medium ed-btn__primary">CC.4.L.1</button></router-link>
                          </div>
                          <div class="card-footer">
                            <i class="icon icon-lesson"></i><span>0 Resources</span>
                          </div>
                        </div>  
                        <!-- Box -->
                        <div class="card-box">
                          <div class="card-title">
                            <h2>My Test Lesson - English 6</h2>
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
                            <li>
                              Four
                            </li>
                            <li>
                              English
                            </li>
                            <li>
                              <a title="Language" href="#">Language</a>
                            </li>
                          </ul>
                          <div class="card-content">
                            <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
                            <router-link to="/lesson-plan"><button class="button medium ed-btn__primary">CC.4.L.1</button></router-link>
                          </div>
                          <div class="card-footer">
                            <i class="icon icon-lesson"></i><span>0 Resources</span>
                          </div>
                        </div>  
                        <!-- Box -->
                        <div class="card-box">
                          <div class="card-title">
                            <h2>My Test Lesson - English 7</h2>
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
                            <li>
                              Four
                            </li>
                            <li>
                              English
                            </li>
                            <li>
                              <a title="Language" href="#">Language</a>
                            </li>
                          </ul>
                          <div class="card-content">
                            <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
                            <router-link to="/lesson-plan"><button class="button medium ed-btn__primary">CC.4.L.1</button></router-link>
                          </div>
                          <div class="card-footer">
                            <i class="icon icon-lesson"></i><span>0 Resources</span>
                          </div>
                        </div>  
              </div>
            </div>
          </div>
        </div>
      <!-- main-content-END -->
</template>

<script>
import 'vue-material/dist/theme/default.css'
import { MdMenu, MdButton, MdList } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import { validationMixin } from "vuelidate";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import Element from 'element-ui'
 
export default {
  name: 'lesson-plan-bank',
  mixins: [validationMixin],
  components: {
    MdMenu,
    MdButton,
    MdList,
    Element
  },
  data(){
		return {
      model: {
        //DEFINITIONS
        lessonPlanBankSubject: "",
        lessonPlanBankGrade: "",
        lessonPlanBankStrand: ""
      },
      options: {
        //OPTIONS
        lessonPlanBankSubjectOptions: [
            {value: "", label: 'Select Subject'},
            {value: "english", label: 'English'},
            {value: "mathematics", label: 'Mathematics'},
        ],
        lessonPlanBankGradeOptions: [
            {value: "", label: 'Select Grade'},
            {value: "grade1", label: 'Grade 1'},
            {value: "grade2", label: 'Grade 2'},
        ],
        lessonPlanBankStrandOptions: [
            {value: "", label: 'Select Strand'},
            {value: "strand1", label: 'Strand 1'},
            {value: "strand2", label: 'Strand 2'},
        ],
      },
      rules: {},
      methods: {
        validate() {
          return new Promise((resolve) => {
            this.$refs.form.validate((valid) => {
              this.$emit('on-validate', valid, this.model)
              resolve(valid);
            });
          })

        }
      }      
    }
  }
}
</script>