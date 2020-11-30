<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid">
      <el-table
        ref="singleTable"
        :data="posts"
        highlight-current-row
        style="width: 100%">
        <el-table-column property="sn" label="SN" width="120"></el-table-column>
        <el-table-column property="class" label="Class" width="120"></el-table-column>
        <el-table-column property="homeroom" label="Homeroom"></el-table-column>
        <el-table-column property="room" label="Room"></el-table-column>
        <el-table-column property="code" label="Code"></el-table-column>
        <el-table-column property="state" label="State"></el-table-column>
        <el-table-column property="action" label="Action"></el-table-column>
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
</template>


<script>
  import Vue from 'vue'

  export default {
    name: 'google-classroom',
    // DATA
    data: () => ({
       filtered: [],
       search: '',
       page: 1,
       pageSize: 5,
       totalSize: 0,
       posts: [],
       busy: true
    }),
    // METHODS
    methods: {
      loadMore() {
        this.busy = true;
        const googleClassroomStorage = this.loadGoogleClassroomStorage();

        if(googleClassroomStorage){
          
          this.totalSize = googleClassroomStorage.length;

          console.log(this.posts.length)
          console.log(this.posts.length + this.pageSize)
          /*
          const append = googleClassroomStorage.slice(
            this.posts.length,
            this.posts.length + this.pageSize
          );
          */
          const append = googleClassroomStorage.slice(
            this.posts.length,
            this.posts.length + this.pageSize
          );

          console.log(JSON.parse(JSON.stringify(googleClassroomStorage)))

          this.posts = append;
          this.busy = false;
        }
        else {
          this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/google-classroom.json").then((response) => {

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

              localStorage.setItem("googleClassroomStorageJSONData",JSON.stringify(response.data));
              this.busy = false;
            }).catch((error) => error.response.data)
        }  
      },
      // LOCALSTORAGE
      loadGoogleClassroomStorage() {
        return JSON.parse(localStorage.getItem("googleClassroomStorageJSONData"));
      },
      handleCurrentChange(val) {
          this.busy = true;
          const googleClassroomStorage = this.loadGoogleClassroomStorage();
        
          this.page = val;

          this.totalSize = googleClassroomStorage.length;

          const append = googleClassroomStorage.slice(
            (this.page - 1)*this.pageSize,
            ((this.page - 1)*this.pageSize)+this.pageSize
          );

          //console.log(JSON.parse(JSON.stringify(googleClassroomStorage)))

          this.posts = append;
          this.busy = false;
      }
  },
  created() {
    this.loadMore();
  }
  }
</script>
