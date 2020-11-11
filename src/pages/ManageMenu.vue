<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid">
      <div class="row side-by-side">
        <div class="col-xs-6 col-md-6 side">
          <div class="card-boxes manage-menu">
            <div class="card-header"><i class="icon icon-profile"></i><h2 class="card-title">Assigned Menu Of {{assignedMenuTitle}}</h2></div>
            <div class="card-box">
              <!--TABS-->
              <Tabs @loadData="onClickChild($event)" />
              <!--NESTABLE-->
              <VueNestable
                v-model= posts.menuAssigned
                cross-list
                group="cross"
              >
                <VueNestableHandle slot-scope="{item}" :item="item">
                  <i class="icon icon-profile"></i> {{item.text}} <a class="card-option" href="#"><i class="icon icon-delete"></i></a>
                </VueNestableHandle>
              </VueNestable>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-md-6 side">
          <div class="card-boxes manage-menu">
            <div class="card-header">
              <i class="icon icon-profile"></i><h2 class="card-title">Manage Menu List</h2>
              <md-button @click="showDialog = true" class="add-menu">
                    <md-tooltip md-direction="top">Add New Menu</md-tooltip>
                    <i class="icon icon-add"></i>
              </md-button>
            </div>
            <div class="card-box">
                <!-- START EDIT IMAGE MODAL -->
                  <md-dialog :md-active.sync="showDialog" class="modal-window manage-menu">
                    <h2>Add Menu</h2>
                    <el-form :model="formManageMenu" ref="formManageMenu">
                        <!-- Menu Information -->
                          <div class="card-content">
                            <div class="row">
                              <el-form-item label="Menu Title" prop="addMenuTitle">
                                <el-input @input="updateForm('addMenuTitle', formManageMenu.addMenuTitle)"  v-model="formManageMenu.addMenuTitle" placeholder="Menu Title"></el-input>
                              </el-form-item>
                            </div>
                            <div class="row">
                              <el-form-item label="Menu Link" prop="addMenuLink">
                                <el-input @input="updateForm('addMenuLink', formManageMenu.addMenuLink)"  v-model="formManageMenu.addMenuLink" placeholder="Menu Link"></el-input>
                              </el-form-item>                          
                            </div>
                            <div class="row">
                            <el-form-item label="Icon for link" prop="addMenuIcon">
                              <el-select @change="updateForm('addMenuIcon', formManageMenu.addMenuIcon)"  v-model="formManageMenu.addMenuIcon" placeholder="Icon for link">
                                <el-option v-for="pre in options.iconForLinkOptions"
                                          :key="pre.value"
                                          :label="pre.label"
                                          :value="pre.value">
                                          <span><i class="manage-menu-icons icon" v-bind:class="pre.value"></i> {{pre.label}}</span>
                                </el-option>
                              </el-select>
                            </el-form-item>
                            </div>
                            <div class="row">
                              <md-dialog-actions>
                                <md-button class="button medium ed-btn__secondary" @click="showDialog = false">Add</md-button>
                                <md-button class="button medium ed-btn__tertiary" @click="showDialog = false">Cancel</md-button>
                              </md-dialog-actions>
                            </div>
                          </div>
                    </el-form>
                  </md-dialog>
                <!-- END EDIT IMAGE MODAL --> 
            <!--NESTABLE-->
            <VueNestable
              v-model = posts.menuList
              cross-list
              group="cross"
            >
              <VueNestableHandle slot-scope="{ item }" :item="item">
                <i class="icon icon-profile"></i>{{ item.text }}<a class="card-option" href="#"><i class="icon icon-edit"></i></a>
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
      showDialog: false,
      posts: [],
      assignedMenuTitle: "su_admin",
      formManageMenu: {
        //DEFINITIONS
        addMenuLink: "",
        addMenuTitle: "",
        addMenuIcon: ""
      },
      options: {
        iconForLinkOptions: [
          {value: 'icon-add', label: 'Add'},
          {value: 'icon-logout', label: 'Logout'},
          {value: 'icon-follow', label: 'Follow'},
          {value: 'icon-add-lesson', label: 'Add Lesson'},
          {value: 'icon-lesson', label: 'Lesson'},
          {value: 'icon-students', label: 'Students'},
          {value: 'icon-arrow', label: 'Arrow'},
          {value: 'icon-attendence', label: 'Attendance'}
        ]
      }
    };
  },
  methods: {
    // LOAD TABS DATA
    loadMore() {
      this.axios.get("manage-menu.json").then((response) => {
        this.posts = response.data.su_admin[0];
      });
    },
    onClickChild: function (idx) {
      this.axios.get("manage-menu.json").then((response) => {
        this.posts = response.data[idx][0];
        this.assignedMenuTitle = idx;
      });
    },
    updateForm (input, value) {
      this.formManageMenu[input] = value
      let storedForm = this.openStorage()
      if (!storedForm) storedForm = {}
      storedForm[input] = value
      this.saveStorage(storedForm)
    },
    openStorage () {
      return JSON.parse(localStorage.getItem('formManageMenu'))
    },
    saveStorage (formManageMenu) {
      localStorage.setItem('formManageMenu', JSON.stringify(formManageMenu))
    },
  },
  created() {
    this.loadMore();
    const storedForm = this.openStorage()
    if (storedForm) {
      this.formManageMenu = {
        ...this.formManageMenu,
        ...storedForm
      }
    }
  }
};
</script>
