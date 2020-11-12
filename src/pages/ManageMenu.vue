<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid">
      <div class="row side-by-side">
        <div class="col-xs-6 col-md-6 side">
          <div class="card-boxes manage-menu">
            <div class="card-header">
              <i class="icon icon-profile"></i>
              <h2 class="card-title">
                Assigned Menu Of {{ assignedMenuTitle }}
              </h2>
            </div>
            <div class="card-box">
              <!--TABS-->
              <Tabs @loadData="onClickChild($event)" />
              <!--NESTABLE-->
              <VueNestable
                v-model="posts.menuAssigned"
                cross-list
                group="cross"
                @change="changedMenuAssigned"
                class="assigned-menu"
              >
                <VueNestableHandle slot-scope="{ item }" :item="item">
                  <i class="icon" v-bind:class="item.icon"></i> {{ item.label }}
                  <a
                    @click="deleteMenuModal = true; deleteSelectedMenu(item)"
                    
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
              <i class="icon icon-profile"></i>
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
                <h2>Add Menu</h2>
                <el-form :model="formManageMenu" ref="formManageMenu">
                  <!-- Menu Information -->
                  <div class="card-content">
                    <div class="row">
                      <el-form-item label="Menu Title" prop="addMenuTitle">
                        <el-input
                          @input="
                            updateForm(
                              'addMenuTitle',
                              formManageMenu.addMenuTitle
                            )
                          "
                          v-model="formManageMenu.addMenuTitle"
                          placeholder="Menu Title"
                        ></el-input>
                      </el-form-item>
                    </div>
                    <div class="row">
                      <el-form-item label="Menu Link" prop="addMenuLink">
                        <el-input
                          @input="
                            updateForm(
                              'addMenuLink',
                              formManageMenu.addMenuLink
                            )
                          "
                          v-model="formManageMenu.addMenuLink"
                          placeholder="Menu Link"
                        ></el-input>
                      </el-form-item>
                    </div>
                    <div class="row">
                      <el-form-item label="Icon for link" prop="addMenuIcon">
                        <el-select
                          @change="
                            updateForm(
                              'addMenuIcon',
                              formManageMenu.addMenuIcon
                            )
                          "
                          v-model="formManageMenu.addMenuIcon"
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
                      <md-dialog-actions>
                        <md-button
                          class="button medium ed-btn__secondary"
                          @click="addMenuModal = false"
                          >Add</md-button
                        >
                        <md-button
                          class="button medium ed-btn__tertiary"
                          @click="addMenuModal = false"
                          >Cancel</md-button
                        >
                      </md-dialog-actions>
                    </div>
                  </div>
                </el-form>
              </md-dialog>
              <!-- END ADD MENU MODAL -->
              <!-- START EDIT MENU MODAL -->
              <md-dialog
                :md-active.sync="editMenuModal"
                class="modal-window manage-menu"
              >
                <h2>Edit Menu</h2>
                <el-form :model="formManageMenu" ref="formManageMenu">
                  <!-- Menu Information -->
                  <div class="card-content">
                    <div class="row">
                      <el-form-item
                        label="Edit Menu Title"
                        prop="editMenuTitle"
                      >
                        <el-input prop="" v-model="menuReadyForEditLabel" placeholder="Edit Menu Title"></el-input>
                      </el-form-item>
                    </div>
                    <div class="row">
                      <el-form-item label="Edit Menu Link" prop="editMenuLink">
                        <el-input prop="" v-model="menuReadyForEditLink" placeholder="Edit Menu Link"></el-input>
                      </el-form-item>
                    </div>
                    <div class="row">
                      <el-form-item
                        label="Edit Icon for link"
                        prop="editMenuIcon"
                      >
                        <el-select v-model="menuReadyForEditIcon" placeholder="Edit Icon for link">
                          <el-option
                            v-for="pre in options.iconForLinkOptions"
                            :key="pre.value"
                            :label="pre.label"
                            :value="pre.value"
                          >
                            <span><i
                                class="manage-menu-icons icon"
                                v-bind:class="pre.value"
                              ></i>
                              {{pre.label}}</span>
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                    <div class="row">
                      <md-dialog-actions>
                        <md-button
                          class="button medium ed-btn__secondary"
                          @click="editMenuModal = false; editMenuConfirm()"
                          >Save</md-button
                        >
                        <md-button
                          class="button medium ed-btn__tertiary"
                          @click="editMenuModal = false"
                          >Cancel</md-button
                        >
                      </md-dialog-actions>
                    </div>
                  </div>
                </el-form>
              </md-dialog>
              <!-- END EDIT MENU MODAL -->
              <!-- DELETE FROM ROLE MENU START -->
              <md-dialog
                :md-active.sync="deleteMenuModal"
                class="modal-window manage-menu"
              >
                <h2>Delete Menu</h2>
                <p>
                  You are about to delete menu <span style="color:var(--primary)">"{{menuReadyForDeleteLabel}}"</span>. Are you sure you want to do
                  this?
                </p>
                <md-dialog-actions>
                  <md-button
                    class="button medium ed-btn__tertiary"
                    @click="deleteMenuModal = false; deleteMenuConfirm()"
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
                <VueNestableHandle slot-scope="{ item }" :item="item">
                  <i class="icon" v-bind:class="item.icon"></i>{{ item.label }}
                  <a @click="editMenuModal = true; editSelectedMenu(item)" class="card-option" href="#">
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
      addMenuModal: false,
      editMenuModal: false,
      deleteMenuModal: false,
      loading: false,
      posts: [],
      menuOnChange: {},
      menuReadyForDeleteID: 0,
      menuReadyForDeleteLabel: "",
      menuReadyForEditID: 0,
      menuReadyForEditLabel: "",
      menuReadyForEditLink: "",
      menuReadyForEditIcon: "",
      assignedMenuTitle: "su_admin",
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
        iconForLinkOptions: [
          {value: 'icon-add-account', label: 'Add Account'},
          {value: 'icon-add-student', label: 'Add Student'},
          {value: 'icon-assesment-group', label: 'Assesment Group'},
          {value: 'icon-assesment-weight', label: 'Assesment Weight'},
          {value: 'icon-bulk-photo-upload', label: 'Bulk Photo Upload'},
          {value: 'icon-calendar-event', label: 'Calendar Event'},
          {value: 'icon-club-manager', label: 'Club Manager'},
          {value: 'icon-department-manager', label: 'Department Manager'},
          {value: 'icon-general', label: 'General'},
          {value: 'icon-google-classroom', label: 'Google Classroom'},
          {value: 'icon-lesson-plan-bank', label: 'Lesson Plan Bank'},
          {value: 'icon-lesson-plan-overview', label: 'Lesson Plan Overview'},
          {value: 'icon-lms', label: 'LMS'},
          {value: 'icon-site-map', label: 'Site Map'},
          {value: 'icon-teacher-feedback', label: 'Teacher Feedback'},
          {value: 'icon-tests', label: 'Tests'}
        ]
      }
    };
  },
  methods: {
    // LOAD TABS DATA
    loadMore() {
      this.axios.get("manage-menu.json").then((response) => {
        localStorage.setItem('manageMenuJSONData', JSON.stringify(response.data));
        this.posts = response.data.su_admin[0];
      });
    },
    onClickChild: function (idx) {
      const getDataStorage = this.loadManageMenuStorage();
      
      if (getDataStorage === null){
        this.loadMore();
      }
      else {
        this.posts = getDataStorage[idx][0];
        this.assignedMenuTitle = idx;
      }
    },
    updateForm (input, value) {
      this.formManageMenu[input] = value
      let storedForm = this.openStorage()
      if (!storedForm) storedForm = {}
      storedForm[input] = value
      this.saveStorage(storedForm)
    },
    loadManageMenuStorage() {
      return JSON.parse(localStorage.getItem('manageMenuJSONData'))
    },
    // LEFT SIDE
    changedMenuAssigned(value, options) {
          const role = this.assignedMenuTitle;
          const manageMenuStorage = this.loadManageMenuStorage();

          this.menuOnChange.menuAssigned = JSON.parse(JSON.stringify(options.items));
          manageMenuStorage[role][0].menuAssigned = [];
          manageMenuStorage[role][0].menuAssigned = this.menuOnChange.menuAssigned;
          
          // UPDATE STORAGE
          localStorage.setItem('manageMenuJSONData', JSON.stringify(manageMenuStorage))
    },
    // RIGHT SIDE
    changedMenuList(value, options) {
          const role = this.assignedMenuTitle;
          const manageMenuStorage = this.loadManageMenuStorage();

          this.menuOnChange.menuList = JSON.parse(JSON.stringify(options.items));
          manageMenuStorage[role][0].menuList = [];
          manageMenuStorage[role][0].menuList = this.menuOnChange.menuList;
          
          // UPDATE STORAGE
          localStorage.setItem('manageMenuJSONData', JSON.stringify(manageMenuStorage))
    },
    editSelectedMenu(item){
      this.menuReadyForEditID = item.id;
      this.menuReadyForEditLabel = item.label;
      this.menuReadyForEditLink = item.link;
      this.menuReadyForEditIcon = item.icon;

      // eslint-disable-next-line no-console
      console.log(item)
    },
    editMenuConfirm(){
      const manageMenuStorage = this.loadManageMenuStorage();
      const menuID = this.menuReadyForEditID;

  /*
      manageMenuStorage[this.assignedMenuTitle][0].menuList = manageMenuStorage[this.assignedMenuTitle][0].menuList.filter(function(item){
          return item.id !== menuID;
      });
*/

      let listMenuCopy = [...manageMenuStorage[this.assignedMenuTitle][0].menuList];
      let filteredDataSource = listMenuCopy.filter((item) => {
            if (item.id === this.menuReadyForEditID ) {
                item.id = this.menuReadyForEditID;
                item.label = this.menuReadyForEditLabel;
                item.link = this.menuReadyForEditLink;
                item.icon = this.menuReadyForEditIcon;
              }
              return item;
      });
          
      // eslint-disable-next-line no-console
      manageMenuStorage[this.assignedMenuTitle][0].menuList = filteredDataSource;

      // UPDATE STORAGE
      localStorage.setItem('manageMenuJSONData', JSON.stringify(manageMenuStorage));
      this.posts = manageMenuStorage[this.assignedMenuTitle][0];
    },
    deleteSelectedMenu(item){
      this.menuReadyForDeleteID = item.id;
      this.menuReadyForDeleteLabel = item.label;
    },
    deleteMenuConfirm(){
      const manageMenuStorage = this.loadManageMenuStorage();
      const menuID = this.menuReadyForDeleteID;

      manageMenuStorage[this.assignedMenuTitle][0].menuAssigned = manageMenuStorage[this.assignedMenuTitle][0].menuAssigned.filter(function(item){
          return item.id !== menuID;
      });

      // UPDATE STORAGE
      localStorage.setItem('manageMenuJSONData', JSON.stringify(manageMenuStorage));
      this.posts = manageMenuStorage[this.assignedMenuTitle][0];
    }
  },
  created() {
    const manageMenuStorage = this.loadManageMenuStorage();

    if (manageMenuStorage === null){
      this.loadMore();
    }
    else {
      this.posts = manageMenuStorage[this.assignedMenuTitle][0]
    }
  }
};
</script>
