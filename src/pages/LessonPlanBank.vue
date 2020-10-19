<template>   
      <!-- Main Content -->
      <div class="main-content">
        <div class="container-fluid">
          <div class="filter-card">
            <div class="row">
              <div class="col-4">
                <md-menu md-size="medium" md-align-trigger>
                  <md-button md-menu-trigger>Align with trigger</md-button>

                  <md-menu-content>
                    <md-menu-item>My Item 1</md-menu-item>
                    <md-menu-item>My Item 2</md-menu-item>
                    <md-menu-item>My Item 3</md-menu-item>
                  </md-menu-content>
                </md-menu>
              </div>
              <div class="col-4">
                <md-menu md-size="medium" md-align-trigger>
                  <md-button md-menu-trigger>Align with trigger</md-button>

                  <md-menu-content>
                    <md-menu-item>My Item 1</md-menu-item>
                    <md-menu-item>My Item 2</md-menu-item>
                    <md-menu-item>My Item 3</md-menu-item>
                  </md-menu-content>
                </md-menu>
              </div>
              <div class="col-4">
                <md-menu md-size="medium" md-align-trigger>
                  <md-button md-menu-trigger>Align with trigger</md-button>

                  <md-menu-content>
                    <md-menu-item>My Item 1</md-menu-item>
                    <md-menu-item>My Item 2</md-menu-item>
                    <md-menu-item>My Item 3</md-menu-item>
                  </md-menu-content>
                </md-menu>
              </div>            
              
            </div>
          </div>
          <div class="row">
            <div class="side-menu__results card-boxes lessons_teacher">
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
                          <button class="button medium ed-btn__primary">CC.4.L.1</button>
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
                          <button class="button medium ed-btn__primary">CC.4.L.1</button>
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
                          <button class="button medium ed-btn__primary">CC.4.L.1</button>
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
                          <button class="button medium ed-btn__primary">CC.4.L.1</button>
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

import Vue from 'vue'
import { MdMenu, MdButton, MdList } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
 
Vue.use(MdMenu)
Vue.use(MdButton)
Vue.use(MdList)

export default {
  name: 'lesson-plan-bank',
  components: {

  }
}
</script>