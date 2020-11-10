<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid">
      <div class="row side-by-side">
        <div class="col-xs-6 col-md-6 side">
          <div class="card-boxes manage-menu">
            <div class="card-header"><i class="icon icon-profile"></i><h2 class="card-title">Assigned Menu Of Developer</h2></div>
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
            <div class="card-header"><i class="icon icon-profile"></i><h2 class="card-title">Manage Menu List</h2></div>
            <div class="card-box">
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
import  Tabs  from "../components/features/tabs/Tabs.vue";

export default {
  name: "manage-menu",
  components: {
    Tabs,
    VueNestable,
    VueNestableHandle,
  },
  props: ['idx'],
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    // LOAD TABS DATA
    loadMore() {
      this.axios.get("manage-menu.json").then((response) => {
        this.posts = response.data.su_admin[0];
      });
    },
    onClickChild: function(idx){
      this.axios.get("manage-menu.json").then((response) => {
        this.posts = response.data[idx][0];
      });
    }
  },
  created() {
    this.loadMore();
  }
};
</script>
