<template>
  <!-- Main Content -->
  <div class="main-content">   
    <div class="container-fluid student-list">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <RecordsComponent v-if="viewType ==='list'" :updatePaginationParent="updatePagination" />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <button @click="viewTypeList('avatar')" class="change-view button medium ed-btn__primary">
              <i class="icon icon-manage"></i>
            </button>
            <button @click="viewTypeList('list')" class="change-view menu-list button medium ed-btn__primary">
              <i class="icon icon-menu-list"></i>
            </button>
          </div>
          <div class="col-12 col-sm-12 col-md-4">
            <SearchContentComponent :searchFilterParent="searchFilter" />
          </div>
        </div>
        <!-- LIST VIEW -->
        <StudentListListView 
          v-if="viewType ==='list'"
          :parentData.sync="posts"
        />
        <!-- AVATAR VIEW -->
        <StudentListAvatarView 
          v-if="viewType ==='avatar'"
          :parentData.sync="posts" 
        />
        <el-pagination
            v-if="viewType ==='list'"
            background
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :page-size="pageSize"
            :total="totalSize">
        </el-pagination>
      <div v-if="busy" class="preloader">
        <span><img src="../../assets/images/preloader.gif" /> Loading...</span>
      </div>
    </div>
  </div>
  <!-- main-content-END -->
</template>

<script>
import StudentListAvatarView from './Views/StudentListAvatarView.vue';
import StudentListListView from './Views/StudentListListView.vue';
import RecordsComponent from '../../components/records/RecordsComponent.vue';
import SearchContentComponent from '../../components/search/SearchContentComponent.vue';

export default {
    name: "student-list",
    components: {
      StudentListAvatarView,
      StudentListListView,
      RecordsComponent,
      SearchContentComponent
    },
    props: {
      searchFilterParent:Function
    },
    // DATA
    data: () => ({
       filtered: [],
       search: '',
       page: 1,
       pageSize: 10,
       totalSize: 0,
       posts: [],
       busy: true,
       viewType:"list",
       searchName:""
    }),
    // METHODS
    methods: {
      loadMore() {
        this.busy = true;
        const studentListStorage = this.loadStudentlistStorage();

        if(studentListStorage){
          
          this.totalSize = studentListStorage.length;

          const append = studentListStorage.slice(
            this.posts.length,
            this.posts.length + this.pageSize
          );

          this.posts = append;
          this.busy = false;
        }
        else {
          //this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/google-classroom.json").then((response) => {
            this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-list.json").then((response) => {

              this.totalSize = response.data.length;

              const append = response.data.slice(
                this.posts.length,
                this.posts.length + this.pageSize
              );

              this.posts = append;

              //this.posts = response.data;
              
              this.current_page= response.current_page;
              this.per_page = response.per_page;
              this.total = response.total;
              this.next_page_url = response.next_page_url;

              localStorage.setItem("studentListStorageJSONData",JSON.stringify(response.data));
              this.busy = false;
            }).catch((error) => error.response.data)
        }  
      },
      // LOCALSTORAGE
      loadStudentlistStorage() {
        return JSON.parse(localStorage.getItem("studentListStorageJSONData"));
      },
      handleCurrentChange(val) {
          this.busy = true;
          const studentListStorage = this.loadStudentlistStorage();
        
          this.page = val;

          // CHECK IF SEARCH EMPTY
          if(this.searchName === ''){
            this.totalSize = studentListStorage.length;

            const append = studentListStorage.slice(
              (this.page - 1)*this.pageSize,
              ((this.page - 1)*this.pageSize)+this.pageSize
            );

            this.posts = append;
          }
          else {
            this.posts = studentListStorage.filter(data => data.name.toLowerCase().includes(this.searchName.toLowerCase()));

            this.totalSize = this.posts.length;

            const append = this.posts.slice(
              (this.page - 1)*this.pageSize,
              ((this.page - 1)*this.pageSize)+this.pageSize
            );

            this.posts = append;
          }

          this.busy = false;
      },
      updatePagination(value) {

        this.pageSize = value;

        const studentListStorage = this.loadStudentlistStorage();

        this.posts = [];
        const append = studentListStorage.slice(
            this.posts.length,
            this.posts.length + this.pageSize
        );

        this.posts = append;
      },
      viewTypeList(type){
        if(type === "list"){
          this.viewType = "list"
        }
        if(type === "avatar"){
          this.viewType = "avatar"
          
          this.busy = true;
          const studentListStorage = this.loadStudentlistStorage();

          // LOAD ALL STUDENTS 
          if(studentListStorage){
            this.posts = studentListStorage;
            this.busy = false;
          }
          else {
            //this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/google-classroom.json").then((response) => {
              this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-list.json").then((response) => {

                this.posts = response.data;

                localStorage.setItem("studentListStorageJSONData",JSON.stringify(response.data));
                this.busy = false;
              }).catch((error) => error.response.data)
          }  
        }
      },
      searchFilter(value){
        this.busy = true;

        const studentListStorage = this.loadStudentlistStorage();
        this.posts = studentListStorage.filter(data => data.name.toLowerCase().includes(value.toLowerCase()));
        this.totalSize = this.posts.length;

        this.busy = false;
        return this.posts;
      }
    },
    created() {
        this.loadMore();
    }
}
</script>