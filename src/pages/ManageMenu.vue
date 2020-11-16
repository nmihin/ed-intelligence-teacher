<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid">
      <div class="row side-by-side">
        <div class="col-xs-6 col-md-6 side">
          <div class="card-boxes manage-menu">
            <div class="card-header">
              <i class="icon icon-menu-assigned"></i>
              <h2 class="card-title">
                Assigned Menu of {{ assignedMenuTitle }}
              </h2>
            </div>
            <div class="card-box">
              <!--TABS-->
              <Tabs @loadData="onClickChild($event)" />
              <!--NESTABLE-->
              <VueNestable
                v-model="posts.menuAssigned"
                @change="changedMenuAssigned"
                cross-list
                group="cross"
                class="assigned-menu"
              >
                <VueNestableHandle slot-scope="{item,index,isChild}" :item="item">
                  <i class="icon" v-bind:class="item.icon"></i> {{ item.label }}
                  <a
                    @click="
                      deleteMenuModal = true;
                      deleteSelectedMenu(item,index,isChild);
                    "
                    class="card-option"
                    href="#"
                  >
                    <md-tooltip md-direction="top">Remove from menu</md-tooltip>
                    <i class="icon icon-delete"></i>
                  </a>
                </VueNestableHandle>
              </VueNestable>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-md-6 side">
          <div class="card-boxes manage-menu">
            <div class="card-header">
              <i class="icon icon-menu-list"></i>
              <h2 class="card-title">Manage Menu List</h2>
              <md-button @click="addMenuModal = true" class="add-menu">
                <md-tooltip md-direction="top">Add New Menu</md-tooltip>
                <i class="icon icon-add"></i>
              </md-button>
            </div>
            <div class="card-box">
              <!-- START ADD MENU MODAL -->
              <md-dialog
                :md-active.sync="addMenuModal"
                class="modal-window manage-menu"
              >
                <h2 class="modal-title">Add Menu</h2>
                <div class="modal-content">
                  <el-form :model="formAddMenu" :rules="formAddMenu.rules" ref="formAddMenu">
                  <!-- Menu Information -->
                  <div class="card-content">
                    <div class="row">
                      <el-form-item prop="menuReadyForAddLabel" label="Menu Title">
                        <el-input
                          @input="updateForm('menuReadyForAddLabel', formAddMenu.menuReadyForAddLabel)"  v-model="formAddMenu.menuReadyForAddLabel"
                          placeholder="Menu Title"
                        ></el-input>
                      </el-form-item>
                    </div>
                    <div class="row">
                      <el-form-item prop="menuReadyForAddLink" label="Menu Link">
                        <el-input
                          @input="updateForm('menuReadyForAddLink', formAddMenu.menuReadyForAddLink)"  v-model="formAddMenu.menuReadyForAddLink"
                          placeholder="Menu Link"
                        ></el-input>
                      </el-form-item>
                    </div>
                    <div class="row">
                      <el-form-item prop="menuReadyForAddIcon" label="Icon for link">
                        <el-select
                          @change="updateForm('menuReadyForAddIcon', formAddMenu.menuReadyForAddIcon)" v-model="formAddMenu.menuReadyForAddIcon"
                          placeholder="Icon for link"
                        >
                          <el-option
                            v-for="pre in options.iconForLinkOptions"
                            :key="pre.value"
                            :label="pre.label"
                            :value="pre.value"
                          >
                            <span
                              ><i
                                class="manage-menu-icons icon"
                                v-bind:class="pre.value"
                              ></i>
                              {{ pre.label }}</span
                            >
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                    <div class="row">
                        <el-form-item label="API Access" prop="menuReadyForAddAPI">
                          <el-checkbox-group v-model="formAddMenu.menuReadyForAddAPI">
                            <el-checkbox v-for="api in options.menuAPIAccessOptions" :label="api" :key="api"><span class="text-capitalize">{{api}}</span></el-checkbox>
                          </el-checkbox-group>
                        </el-form-item>
                    </div>
                  </div>
                  </el-form>
                </div>
                <md-dialog-actions>
                        <md-button
                          class="button medium ed-btn__secondary"
                          @click="validate()"
                          >Add</md-button
                        >
                        <md-button
                          class="button medium ed-btn__tertiary"
                          @click="addMenuModal = false"
                          >Cancel</md-button
                        >
                </md-dialog-actions>
              </md-dialog>
              <!-- END ADD MENU MODAL -->
              <!-- START EDIT MENU MODAL -->
              <md-dialog
                :md-active.sync="editMenuModal"
                class="modal-window manage-menu"
              >
                <h2 class="modal-title">Edit Menu</h2>
                <div class="modal-content">
                  <el-form :model="formManageMenu" ref="formManageMenu">
                    <!-- Menu Information -->
                    <div class="card-content">
                      <div class="row">
                        <el-form-item
                          label="Edit Menu Title"
                          prop="editMenuTitle"
                        >
                          <el-input
                            prop=""
                            v-model="menuReadyForEditLabel"
                            placeholder="Edit Menu Title"
                          ></el-input>
                        </el-form-item>
                      </div>
                      <div class="row">
                        <el-form-item label="Edit Menu Link" prop="editMenuLink">
                          <el-input
                            prop=""
                            v-model="menuReadyForEditLink"
                            placeholder="Edit Menu Link"
                          ></el-input>
                        </el-form-item>
                      </div>
                      <div class="row">
                        <el-form-item
                          label="Edit Icon for link"
                          prop="editMenuIcon"
                        >
                          <el-select
                            v-model="menuReadyForEditIcon"
                            placeholder="Edit Icon for link"
                          >
                            <el-option
                              v-for="pre in options.iconForLinkOptions"
                              :key="pre.value"
                              :label="pre.label"
                              :value="pre.value"
                            >
                              <span
                                ><i
                                  class="manage-menu-icons icon"
                                  v-bind:class="pre.value"
                                ></i>
                                {{ pre.label }}</span
                              >
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                      <div class="row">
                        <el-form-item label="API Access" prop="menuReadyForEditAPI">
                          <el-checkbox-group v-model="menuReadyForEditAPI">
                            <el-checkbox v-for="api in options.menuAPIAccessOptions" :label="api" :key="api"><span class="text-capitalize">{{api}}</span></el-checkbox>
                          </el-checkbox-group>
                        </el-form-item>
                      </div>
                    </div>
                  </el-form>
                </div>
                <md-dialog-actions>
                          <md-button
                            class="button medium ed-btn__secondary"
                            @click="
                              editMenuModal = false;
                              editMenuConfirm();
                            "
                            >Save</md-button
                          >
                          <md-button
                            class="button medium ed-btn__tertiary"
                            @click="editMenuModal = false"
                            >Cancel</md-button
                          >
                </md-dialog-actions>
              </md-dialog>
              <!-- END EDIT MENU MODAL -->
              <!-- DELETE FROM ROLE MENU START -->
              <md-dialog
                :md-active.sync="deleteMenuModal"
                class="modal-window manage-menu"
              >
                <h2 class="modal-title">Delete Menu</h2>
                <div class="modal-content">
                <p>
                  You are about to delete menu
                  <span style="color:var(--primary)"
                    >"{{ menuReadyForDeleteLabel }}"</span
                  >. Are you sure you want to do this?
                </p>
                </div>
                <md-dialog-actions>
                  <md-button
                    class="button medium ed-btn__tertiary"
                    @click="
                      deleteMenuModal = false;
                      deleteMenuConfirm();
                    "
                    >Delete</md-button
                  >
                  <md-button
                    class="button medium ed-btn__primary"
                    @click="deleteMenuModal = false"
                    >Cancel</md-button
                  >
                </md-dialog-actions>
              </md-dialog>
              <!-- DELETE FROM ROLE MENU END -->
              <!--NESTABLE-->
              <VueNestable
                v-model="posts.menuList"
                cross-list
                group="cross"
                @change="changedMenuList"
                class="list-menu"
              >
                <VueNestableHandle slot-scope="{item}" :item="item">
                  <i class="icon" v-bind:class="item.icon"></i>{{ item.label }}
                  <a
                    @click="
                      editMenuModal = true;
                      editSelectedMenu(item);
                    "
                    class="card-option"
                    href="#"
                  >
                    <md-tooltip md-direction="top">Edit menu</md-tooltip>
                    <i class="icon icon-edit"></i>
                  </a>
                </VueNestableHandle>
              </VueNestable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueNestable, VueNestableHandle } from "vue-nestable";
import Tabs from "../components/features/tabs/Tabs.vue";

export default {
  name: "manage-menu",
  components: {
    Tabs,
    VueNestable,
    VueNestableHandle,
  },
  props: ["idx"],
  data() {
    return {
      dummyData: [
        {
          "su_admin": [{
            "menuAssigned": [
              {
                "id": 0,
                "icon": "icon-add-account",
                "label": "Add Account",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 1,
                "label": "General",
                "icon": "icon-general",
                "link": "#",
                "apiAccess": [],
                "children": [
                  {
                    "id": 3,
                    "icon": "icon-assessment-weight",
                    "label": "Assessment Weight",
                    "link": "#",
                    "apiAccess": []
                  }
                ]
              },
              {
                "id": 5,
                "icon": "icon-attendance-status-code",
                "label": "Attendance Status Code",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 13,
                "icon": "icon-lesson-plan-overview",
                "label": "Lesson Plan Overview",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 15,
                "icon": "icon-site-map",
                "label": "Site Map",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 16,
                "icon": "icon-tests",
                "label": "Tests",
                "link": "#",
                "apiAccess": []
              }
            ],
            "menuList": [
              {
                "id": 21,
                "icon": "icon-assessment-weight",
                "label": "Assessment Weight",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 22,
                "icon": "icon-calendar-event",
                "label": "Calendar Event",
                "link": "#",
                "apiAccess": [],
                "children": [
                  {
                    "id": 23,
                    "icon":"icon-teacher-feedback",
                    "label": "Teacher Feedback",
                    "link": "#",
                    "apiAccess": []
                  }
                ]
              }
            ]
          }],
          "admin": [{
            "menuAssigned": [
              {
                "id": 12,
                "icon": "icon-lms",
                "label": "LMS",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 15,
                "icon": "icon-site-map",
                "label": "Site Map",
                "link": "#",
                "apiAccess": []
              }
            ],
            "menuList": [
              {
                "id": 3,
                "icon": "icon-assessment-weight",
                "label": "Assessment Weight",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 5,
                "icon": "icon-attendance-status-code",
                "label": "Attendance Status Code",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 6,
                "icon": "icon-bulk-photo-upload",
                "label": "Bulk Photo Upload",
                "link": "#",
                "apiAccess": []
              }
            ]
          }],
          "board": [{
            "menuAssigned": [
              {
                "id": 0,
                "icon": "icon-add-account",
                "label": "Add Account",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 1,
                "label": "General",
                "icon": "icon-general",
                "link": "#",
                "apiAccess": [],
                "children": [
                  {
                    "id": 2,
                    "icon": "icon-assesment-group",
                    "label": "Assessment Group",
                    "link": "#",
                    "apiAccess": []
                  }
                ]
              },
              {
                "id": 3,
                "icon": "icon-assessment-weight",
                "label": "Assessment Weight",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 16,
                "icon": "icon-tests",
                "label": "Tests",
                "link": "#",
                "apiAccess": []
              }   
            ],
            "menuList": [
              {
                "id": 5,
                "icon": "icon-attendance-status-code",
                "label": "Attendance Status Code",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 10,
                "icon": "icon-lesson-plan-bank",
                "label": "Lesson Plan Bank",
                "link": "#",
                "apiAccess": []
              }
            ]
          }],
          "teacher": [{
            "menuAssigned": [
              {
                "id": 0,
                "icon": "icon-add-account",
                "label": "Add Account",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 1,
                "label": "General",
                "icon": "icon-general",
                "link": "#",
                "apiAccess": [],
                "children": [
                  {
                    "id": 2,
                    "icon": "icon-assesment-group",
                    "label": "Assessment Group",
                    "link": "#",
                    "apiAccess": []
                  }
                ]
              },
              {
                "id": 3,
                "icon": "icon-assessment-weight",
                "label": "Assessment Weight",
                "link": "#",
                "apiAccess": []
              }
            ],
            "menuList": [
              {
                "id": 5,
                "icon": "icon-attendance-status-code",
                "label": "Attendance Status Code",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 10,
                "icon": "icon-lesson-plan-bank",
                "label": "Lesson Plan Bank",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 11,
                "icon": "icon-add-student",
                "label": "Add Student",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 12,
                "icon": "icon-lms",
                "label": "LMS",
                "link": "#",
                "apiAccess": []
              }    
            ]
          }],
          "student": [{
            "menuAssigned": [
              {
                "id": 0,
                "icon": "icon-add-account",
                "label": "Add Account",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 1,
                "label": "General",
                "icon": "icon-general",
                "link": "#",
                "apiAccess": [],
                "children": [
                  {
                    "id": 2,
                    "icon": "icon-assesment-group",
                    "label": "Assessment Group",
                    "link": "#",
                    "apiAccess": []
                  }
                ]
              },
              {
                "id": 3,
                "icon": "icon-assessment-weight",
                "label": "Assessment Weight",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 8,
                "icon": "icon-department-manager",
                "label": "Department Manager",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 9,
                "icon": "icon-google-classroom",
                "label": "Google Classroom",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 16,
                "icon": "icon-tests",
                "label": "Tests",
                "link": "#",
                "apiAccess": []
              }
            ],
            "menuList": [
              {
                "id": 11,
                "icon": "icon-add-student",
                "label": "Add Student",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 13,
                "icon": "icon-lesson-plan-overview",
                "label": "Lesson Plan Overview",
                "link": "#",
                "apiAccess": []
              }
            ]
          }],
          "parent": [{
            "menuAssigned": [
              {
                "id": 0,
                "icon": "icon-add-account",
                "label": "Add Account",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 1,
                "label": "General",
                "icon": "icon-general",
                "link": "#",
                "apiAccess": [],
                "children": [
                  {
                    "id": 2,
                    "icon": "icon-assesment-group",
                    "label": "Assessment Group",
                    "link": "#",
                    "apiAccess": []
                  }
                ]
              },
              {
                "id": 7,
                "icon": "icon-club-manager",
                "label": "Club Manager",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 13,
                "icon": "icon-lesson-plan-overview",
                "label": "Lesson Plan Overview",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 16,
                "icon": "icon-tests",
                "label": "Tests",
                "link": "#",
                "apiAccess": []
              } 
            ],
            "menuList": [
              {
                "id": 14,
                "icon": "icon-general",
                "label": "NWEA Student Report",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 15,
                "icon": "icon-site-map",
                "label": "Site Map",
                "link": "#",
                "apiAccess": []
              }
            ]
          }],
          "developer": [{
            "menuAssigned": [
              {
                "id": 0,
                "icon": "icon-add-account",
                "label": "Add Account",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 1,
                "label": "General",
                "icon": "icon-general",
                "link": "#",
                "apiAccess": [],
                "children": [
                  {
                    "id": 2,
                    "icon": "icon-assesment-group",
                    "label": "Assessment Group",
                    "link": "#",
                    "apiAccess": []
                  }
                ]
              },
              {
                "id": 7,
                "icon": "icon-club-manager",
                "label": "Club Manager",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 8,
                "icon": "icon-department-manager",
                "label": "Department Manager",
                "link": "#",
                "apiAccess": []
              }
            ],
            "menuList": [
              {
                "id": 11,
                "icon": "icon-add-student",
                "label": "Add Student",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 12,
                "icon": "icon-lms",
                "label": "LMS",
                "link": "#",
                "apiAccess": []
              }
            ]
          }],
          "editor": [{
            "menuAssigned": [
              {
                "id": 11,
                "icon": "icon-add-student",
                "label": "Add Student",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 12,
                "icon": "icon-lms",
                "label": "LMS",
                "link": "#",
                "apiAccess": []
              }
            ],
            "menuList": [
              {
                "id": 0,
                "icon": "icon-add-account",
                "label": "Add Account",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 1,
                "label": "General",
                "icon": "icon-general",
                "link": "#",
                "apiAccess": [],
                "children": [
                  {
                    "id": 2,
                    "icon": "icon-assesment-group",
                    "label": "Assessment Group",
                    "link": "#",
                    "apiAccess": []
                  }
                ]
              },
              {
                "id": 3,
                "icon": "icon-assessment-weight",
                "label": "Assessment Weight",
                "link": "#",
                "apiAccess": []
              }  
            ]
          }],
          "superadmin": [{
            "menuAssigned": [
              {
                "id": 0,
                "icon": "icon-add-account",
                "label": "Add Account",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 1,
                "label": "General",
                "icon": "icon-general",
                "link": "#",
                "apiAccess": [],
                "children": [
                  {
                    "id": 2,
                    "icon": "icon-assesment-group",
                    "label": "Assessment Group",
                    "link": "#",
                    "apiAccess": []
                  }
                ]
              },
              {
                "id": 3,
                "icon": "icon-assessment-weight",
                "label": "Assessment Weight",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 8,
                "icon": "icon-department-manager",
                "label": "Department Manager",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 11,
                "icon": "icon-add-student",
                "label": "Add Student",
                "link": "#",
                "apiAccess": []
              }
            ],
            "menuList": [
              {
                "id": 14,
                "icon": "icon-general",
                "label": "NWEA Student Report",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 15,
                "icon": "icon-site-map",
                "label": "Site Map",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 16,
                "icon": "icon-tests",
                "label": "Tests",
                "link": "#",
                "apiAccess": []
              }
            ]
          }],
          "contributor": [{
            "menuAssigned": [
              {
                "id": 14,
                "icon": "icon-general",
                "label": "NWEA Student Report",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 15,
                "icon": "icon-site-map",
                "label": "Site Map",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 16,
                "icon": "icon-tests",
                "label": "Tests",
                "link": "#",
                "apiAccess": []
              }
            ],
            "menuList": [
              {
                "id": 6,
                "icon": "icon-bulk-photo-upload",
                "label": "Bulk Photo Upload",
                "link": "#",
                "apiAccess": []
              },
              {
                "id": 8,
                "icon": "icon-department-manager",
                "label": "Department Manager",
                "link": "#",
                "apiAccess": []
              }
            ]
          }]
        }
      ],
      loading: false,
      posts: [],
      menuOnChange: {},
      // MODALS
      addMenuModal: false,
      editMenuModal: false,
      deleteMenuModal: false,
      // DEFAULT ROLE
      assignedMenuTitle: "su_admin",
      // DELETE MENU
      menuReadyForDeleteID: 0,
      menuReadyForDeleteLabel: "",
      menuReadyForDeleteIcon: "",
      menuReadyForDeleteLink: "",
      menuReadyForDeleteAPI: "",
      menuReadyForDeleteChildren: [],
      menuReadyForDeleteIsChild: false,
      // EDIT MENU
      menuReadyForEditID: 0,
      menuReadyForEditLabel: "",
      menuReadyForEditLink: "",
      menuReadyForEditIcon: "",
      menuReadyForEditAPI: [],
      apiAccess: [],
      checkedAPIAccess: [],
      // ADD MENU
      formAddMenu: {
        menuReadyForAddLabel: "",
        menuReadyForAddIcon: "",
        menuReadyForAddLink: "",
        menuReadyForAddAPI: [],
        menuReadyForAddID: 0,
        rules: {
          menuReadyForAddLabel: [
            {
              required: true,
              message: "Menu Title is Required!",
              trigger: "blur"
            }
          ],
          menuReadyForAddIcon: [
            {
              required: true,
              message: "Menu Icon is Required!",
              trigger: "blur"
            }
          ],
          menuReadyForAddLink: [
            {
              required: true,
              message: "Menu Link is Required!",
              trigger: "blur"
            }
          ]
        }
      },
      formManageMenu: {
        //DEFINITIONS
        addMenuLink: "",
        addMenuTitle: "",
        addMenuIcon: "",
        editMenuLink: "",
        editMenuTitle: "",
        editMenuIcon: "",
      },
      options: {
        menuAPIAccessOptions: ['get','post','patch','delete'],
        iconForLinkOptions: [
          { value: "icon-add-account", label: "Add Account" },
          { value: "icon-add-student", label: "Add Student" },
          { value: "icon-assesment-group", label: "Assesment Group" },
          { value: "icon-assessment-weight", label: "Assesment Weight" },
          { value: "icon-bulk-photo-upload", label: "Bulk Photo Upload" },
          { value: "icon-calendar-event", label: "Calendar Event" },
          { value: "icon-club-manager", label: "Club Manager" },
          { value: "icon-department-manager", label: "Department Manager" },
          { value: "icon-general", label: "General" },
          { value: "icon-google-classroom", label: "Google Classroom" },
          { value: "icon-lesson-plan-bank", label: "Lesson Plan Bank" },
          { value: "icon-lesson-plan-overview", label: "Lesson Plan Overview" },
          { value: "icon-lms", label: "LMS" },
          { value: "icon-site-map", label: "Site Map" },
          { value: "icon-teacher-feedback", label: "Teacher Feedback" },
          { value: "icon-tests", label: "Tests" },
        ],
      },
    };
  },
  methods: {
    // LOAD TABS DATA
    loadMore() {

      this.posts = this.dummyData[0].su_admin[0];
      localStorage.setItem("manageMenuJSONData",JSON.stringify(this.dummyData[0]));
      /*
      this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/manage-menu.json").then((response) => {
        localStorage.setItem("manageMenuJSONData",JSON.stringify(response.data));
        this.posts = response.data.su_admin[0];
      });
      */
    },
    onClickChild: function(idx) {
      const getDataStorage = this.loadManageMenuStorage();

      if (getDataStorage === null) {
        this.loadMore();
      } else {
        this.posts = getDataStorage[idx][0];
        this.assignedMenuTitle = idx;
      }
    },
    loadManageMenuStorage() {
      return JSON.parse(localStorage.getItem("manageMenuJSONData"));
    },
    // LEFT SIDE
    changedMenuAssigned(value, options) {
      const role = this.assignedMenuTitle;
      const manageMenuStorage = this.loadManageMenuStorage();

      this.menuOnChange.menuAssigned = JSON.parse(
        JSON.stringify(options.items)
      );
      manageMenuStorage[role][0].menuAssigned = [];
      manageMenuStorage[role][0].menuAssigned = this.menuOnChange.menuAssigned;

      // UPDATE STORAGE
      localStorage.setItem(
        "manageMenuJSONData",
        JSON.stringify(manageMenuStorage)
      );
    },
    // RIGHT SIDE
    changedMenuList(value, options) {
      const role = this.assignedMenuTitle;
      const manageMenuStorage = this.loadManageMenuStorage();

      this.menuOnChange.menuList = JSON.parse(JSON.stringify(options.items));
      manageMenuStorage[role][0].menuList = [];
      manageMenuStorage[role][0].menuList = this.menuOnChange.menuList;

      // UPDATE STORAGE
      localStorage.setItem(
        "manageMenuJSONData",
        JSON.stringify(manageMenuStorage)
      );
    },
    updateForm (input, value) {
      
      this.formAddMenu[input] = value;

    },
    validate() {
      return new Promise((resolve) => {
        this.$refs.formAddMenu.validate((valid) => {
          this.$emit('on-validate', valid, this.model)
          resolve(valid);
          if(valid)
            this.addNewMenu();
        });
      })
    },
    addNewMenu(){
      const formAddData = JSON.parse(JSON.stringify(this.formAddMenu));

      const manageMenuStorage = this.loadManageMenuStorage();
      const role = this.assignedMenuTitle;

      // FIND LARGEST ID
      const maxId = manageMenuStorage[role][0].menuList.reduce(
        (max, character) => (character.id > max ? character.id : max),
        manageMenuStorage[role][0].menuList[0].id
      );

      const newMenu = {
        "id": maxId+1,
        "label": formAddData.menuReadyForAddLabel,
        "link": formAddData.menuReadyForAddLink,
        "icon": formAddData.menuReadyForAddIcon,
        "apiAccess": formAddData.menuReadyForAddAPI
      }

      manageMenuStorage[role][0].menuList.push(newMenu)
      // UPDATE STORAGE
      localStorage.setItem("manageMenuJSONData",JSON.stringify(manageMenuStorage));
      this.posts = manageMenuStorage[this.assignedMenuTitle][0];
      this.addMenuModal = false;
    },
    editSelectedMenu(item) {
      this.menuReadyForEditID = item.id;
      this.menuReadyForEditLabel = item.label;
      this.menuReadyForEditLink = item.link;
      this.menuReadyForEditIcon = item.icon;
      this.menuReadyForEditAPI = item.apiAccess;
    },
    editMenuConfirm() {
      const manageMenuStorage = this.loadManageMenuStorage();

      let listMenuCopy = [
        ...manageMenuStorage[this.assignedMenuTitle][0].menuList,
      ];

      let filteredDataSource = listMenuCopy.filter((item) => {
        if (item.id === this.menuReadyForEditID) {
          item.id = this.menuReadyForEditID;
          item.label = this.menuReadyForEditLabel;
          item.link = this.menuReadyForEditLink;
          item.icon = this.menuReadyForEditIcon;
          item.apiAccess = this.menuReadyForEditAPI;
        }
        return item;
      });

      manageMenuStorage[
        this.assignedMenuTitle
      ][0].menuList = filteredDataSource;

      localStorage.setItem(
        "manageMenuJSONData",
        JSON.stringify(manageMenuStorage)
      );
      this.posts = manageMenuStorage[this.assignedMenuTitle][0];
    },
    deleteSelectedMenu(item,index,isChild) {
      this.menuReadyForDeleteID = item.id;
      this.menuReadyForDeleteLabel = item.label;
      this.menuReadyForDeleteLink = item.link;
      this.menuReadyForDeleteIcon = item.icon;
      this.menuReadyForDeleteAPI = item.apiAccess;
      this.menuReadyForDeleteChildren = item.children;

      this.menuReadyForDeleteIsChild = isChild;
    },
    flatFilter(nestedProp, compareKey, compareId, arr) {
            return arr.filter(o => {
              const keep = o[compareKey] != compareId;
              if (keep && o[nestedProp]) {
                o[nestedProp] = this.flatFilter(nestedProp, compareKey, compareId, o[nestedProp]);
              }
              return keep;
            });
    },
    deleteMenuConfirm() {
      const manageMenuStorage = this.loadManageMenuStorage();
      const menuID = this.menuReadyForDeleteID;
      const role = this.assignedMenuTitle;

      if(!this.menuReadyForDeleteIsChild){
          // FILTER MENU LIST
          const menuDeleted = manageMenuStorage[this.assignedMenuTitle][0].menuAssigned.filter(function(item) {
            return item.id === menuID;
          });
          // FILTER MENU ASSIGNED
          manageMenuStorage[this.assignedMenuTitle][0].menuAssigned = manageMenuStorage[this.assignedMenuTitle][0].menuAssigned.filter(function(item) {
            return item.id !== menuID;
          });
          manageMenuStorage[role][0].menuList.push(menuDeleted[0]);
      }
      else {
          this.flatFilter('children','id', menuID, manageMenuStorage[this.assignedMenuTitle][0].menuAssigned)

          const newMenu = {
              "id": this.menuReadyForDeleteID,
              "label": this.menuReadyForDeleteLabel,
              "link": this.menuReadyForDeleteLink,
              "icon": this.menuReadyForDeleteIcon,
              "apiAccess": this.menuReadyForDeleteAPI,
              "children": this.menuReadyForDeleteChildren
            }

            manageMenuStorage[role][0].menuList.push(newMenu)
      }

      
      // UPDATE STORAGE
      localStorage.setItem("manageMenuJSONData",JSON.stringify(manageMenuStorage));
      this.posts = manageMenuStorage[this.assignedMenuTitle][0];
    }
  },
  created() {
    const manageMenuStorage = this.loadManageMenuStorage();

    if (manageMenuStorage === null) {
      this.loadMore();
    } else {
      this.posts = manageMenuStorage[this.assignedMenuTitle][0];
    }
  },
};
</script>
