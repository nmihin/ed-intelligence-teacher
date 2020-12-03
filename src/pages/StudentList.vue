<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid student-list">
        <div class="row">
          <div class="col-8 col-sm-6 col-md-4">
            <el-select v-if="viewType ==='list'" @change="updatePagination()" v-model="value" placeholder="Records">
              <el-option
                v-for="item in recordsOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span v-if="viewType ==='list'" class="records">Records</span>
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
            <el-input @input="searchFilter()" placeholder="Search name..." v-model="searchName"></el-input>
          </div>
        </div>
        <!-- LIST VIEW -->
        <el-table
          v-if="viewType ==='list'"
          stripe
          ref="singleTable"
          :data="posts"
          highlight-current-row
          style="width: 100%">
          <el-table-column sortable property="sn" label="SN" width="80"></el-table-column>
          <el-table-column sortable property="name" label="Name"></el-table-column>
          <el-table-column sortable property="surname" label="Surname"></el-table-column>
          <el-table-column sortable property="usi" label="USI"></el-table-column>
          <el-table-column sortable property="grade" label="Grade"></el-table-column>
          <el-table-column width="64" property="action" label="Action">
              <div class="student-list-edit" slot-scope="scope" v-if="scope.row.action.includes('edit')">
                  <el-popover
                      placement="top"
                      popper-class="student-list-options"
                      width="200"
                      trigger="hover">
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Add Feedback" placement="top">
                          <i @click="addFeedback(scope.row.sn)" class="icon icon-follow"></i>
                        </el-tooltip> 
                      </a>
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Add Withdrawal" placement="top">
                          <i @click="addWithdrawal(scope.row.sn)" class="icon icon-exit"></i>
                        </el-tooltip>
                      </a>
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Edit Profile" placement="top">
                          <i @click="editProfile(scope.row.sn)" class="icon icon-edit"></i>
                        </el-tooltip>
                      </a>
                      <a slot="reference" class="student-list-edit">
                        <i class="icon icon-edit"></i>
                      </a>
                  </el-popover>
              </div>
          </el-table-column>
          <el-table-column width="100" property="action">
              <div class="student-list-preview" slot-scope="scope" v-if="scope.row.action.includes('preview')">
                    <el-popover
                      placement="top"
                      popper-class="student-list-options"
                      width="200"
                      trigger="hover">
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="View Profile" placement="top">
                          <i @click="viewProfile(scope.row.sn)" class="icon icon-profile"></i>
                        </el-tooltip> 
                      </a>
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Feedback List" placement="top">
                          <i @click="feedBackList(scope.row.sn)" class="icon icon-lesson"></i>
                        </el-tooltip>
                      </a>
                      <a slot="reference" class="student-list-preview">
                        <i class="icon icon-eye"></i>
                      </a>
                    </el-popover>
              </div>
          </el-table-column>
        </el-table>
        <!-- AVATAR VIEW -->
        <div v-if="viewType ==='avatar'" class="row search-results">
          <div v-for="(post, idx) in posts" :key="idx" class="col-12 col-md-6 col-lg-4 ed_card-boxes">
          <div class="card-box">
            <div class="card-title">
                <h2>{{post.name}} {{post.surname}}</h2>
            </div>
            <div class="card-content">
                <figure>
                  <img v-if="!post.avatar" class="card-picture" src="../assets/images/avatar-aux.png" />
                  <img v-if="post.avatar" class="card-picture" :src="post.avatar" />
                  <div class="card-element">
                    <el-popover
                      placement="top"
                      popper-class="student-list-options"
                      width="200"
                      trigger="hover">
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Add Feedback" placement="top">
                          <i @click="addFeedback(post.id)" class="icon icon-follow"></i>
                        </el-tooltip> 
                      </a>
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Add Withdrawal" placement="top">
                          <i @click="addWithdrawal(post.id)" class="icon icon-exit"></i>
                        </el-tooltip>
                      </a>
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Edit Profile" placement="top">
                          <i @click="editProfile(post.id)" class="icon icon-edit"></i>
                        </el-tooltip>
                      </a>
                      <a slot="reference" class="student-list-edit">
                        <i class="icon icon-edit"></i>
                      </a>
                    </el-popover>
                    <el-popover
                      placement="top"
                      popper-class="student-list-options"
                      width="200"
                      trigger="hover">
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="View Profile" placement="top">
                          <i @click="viewProfile(post.id)" class="icon icon-profile"></i>
                        </el-tooltip> 
                      </a>
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Feedback List" placement="top">
                          <i @click="feedBackList(post.id)" class="icon icon-lesson"></i>
                        </el-tooltip>
                      </a>
                      <a slot="reference" class="student-list-preview edit-student-list">
                        <i class="icon icon-eye"></i>
                      </a>
                    </el-popover>
                  </div>
                  <figcaption>
                    <ul>
                      <li><h3>USI</h3><span>{{post.usi}}</span></li>
                      <li><h3>Grade</h3><span>{{post.grade}}</span></li>
                      <li><h3>Home Room</h3><span>{{post.room}}</span></li>
                      <li><h3>Class Days</h3>
                        <ul>
                          <li class="card-content-days" v-for="(p, idx) in post.classdays" :key="idx">{{p}}</li>
                        </ul>
                      </li>
                      <li><h3>Guardian</h3><span>{{post.guardian}}</span></li>
                      <li><h3>Phone</h3><span>{{post.phone}}</span></li>
                    </ul>
                  </figcaption>
                </figure>
            </div>
          </div>
          </div>
        </div>
      <el-pagination
          v-if="viewType ==='list'"
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :page-size="pageSize"
          :total="totalSize">
      </el-pagination>
      <div v-if="busy" class="preloader">
        <span><img src="../assets/images/preloader.gif" /> Loading...</span>
      </div>
    </div>
  </div>
  <!-- main-content-END -->
</template>

<script>
export default {
    name: "student-list",
    components: {
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
       value: 10,
       viewType:"list",
       searchName:"",
       recordsOptions: [{
          value: 5,
          label: '5'
        }, {
          value: 10,
          label: '10'
        }, {
          value: 25,
          label: '25'
        }, {
          value: 50,
          label: '50'
        }, {
          value: 100,
          label: '100'
        }],
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
      updatePagination() {

        this.pageSize = this.value;

        const studentListStorage = this.loadStudentlistStorage();

        this.posts = [];
        const append = studentListStorage.slice(
            this.posts.length,
            this.posts.length + this.pageSize
        );

        this.posts = append;
      },
      viewTypeList(type){
        if(type === "list")
          this.viewType = "list"
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
      searchFilter(){
        this.busy = true;

        const studentListStorage = this.loadStudentlistStorage();
        this.posts = studentListStorage.filter(data => data.name.toLowerCase().includes(this.searchName.toLowerCase()));
        this.totalSize = this.posts.length;

        this.busy = false;
        return this.posts;
      },
      editProfile(id){
        this.$router.push({path:'/add-student/'+id})
      },
      viewProfile(id){
        this.$router.push({path:'/student-details/'+id})
      }
    },
    created() {
        this.loadMore();
    }
}
</script>