<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid student-list">
        <div class="row">
          <div class="col-6 col-md-8">
            <el-select @change="updatePagination()" v-model="value" placeholder="Records">
              <el-option
                v-for="item in recordsOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span class="records">Records</span>
          </div>
          <div class="col-6 col-md-4">
            <el-input @input="searchFilter()" placeholder="Search name..." v-model="searchName"></el-input>
          </div>
        </div>
      <el-table
        ref="singleTable"
        :data="posts"
        highlight-current-row
        style="width: 100%">
        <el-table-column sortable property="sn" label="SN" width="80"></el-table-column>
        <el-table-column sortable property="name" label="Name"></el-table-column>
        <el-table-column sortable property="usi" label="USI"></el-table-column>
        <el-table-column sortable property="grade" label="Grade"></el-table-column>
        <el-table-column width="64" property="action" label="Action">
            <div class="student-list-edit" slot-scope="scope" v-if="scope.row.action.includes('edit')">
              <i class="icon icon-edit"></i>
            </div>
        </el-table-column>
        <el-table-column width="100" property="action">
            <div class="student-list-preview" slot-scope="scope" v-if="scope.row.action.includes('preview')">
              <i class="icon icon-eye"></i>
            </div>
        </el-table-column>
      </el-table>
      <el-pagination
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
      searchFilter(){
        this.busy = true;

        const studentListStorage = this.loadStudentlistStorage();
        this.posts = studentListStorage.filter(data => data.name.toLowerCase().includes(this.searchName.toLowerCase()));
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