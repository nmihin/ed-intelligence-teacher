<template>
  <!-- Main Content START -->
  <div class="main-content">
    <div class="container-fluid student-list attendance">
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
            <el-table-column sortable property="status" label="Status">
              <div slot-scope="scope">
                <el-radio-group @change="updateAttendanceList(scope.row.sn,scope.row.status,'status')" v-model="scope.row.status" >
                  <el-radio label="Present">Present</el-radio>
                  <el-radio label="Absent">Absent</el-radio>
                </el-radio-group>
              </div>
            </el-table-column>
            <el-table-column sortable property="reason" label="Reason">
              <div slot-scope="scope">
                  <el-select @change="updateAttendanceList(scope.row.sn,scope.row.reason,'reason')" v-model="scope.row.reason" placeholder="Reason">
                    <el-option v-for="pre in reasonOptionsSelect"
                              :key="pre.value"
                              :label="pre.label"
                              :value="pre.value">
                    </el-option>
                  </el-select>
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
                    <figcaption>
                      <ul>
                        <li><h3>Status</h3><span>{{post.status}}</span></li>
                        <li><h3>Reason</h3><span>{{post.reason}}</span></li>
                      </ul>
                    </figcaption>
                  </figure>
              </div>
            </div>
            </div>
          </div>
          <div class="attendance-bottom">
            <button class="attendence-save-changes button medium ed-btn__primary" @click="saveAttendanceChanges()">
                Save Changes
            </button>
            <el-pagination
                v-if="viewType ==='list'"
                background
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :page-size="pageSize"
                :total="totalSize">
            </el-pagination>
          </div>
      <div v-if="busy" class="preloader">
        <span><img src="../assets/images/preloader.gif" /> Loading...</span>
      </div>
    </div>
  </div>
  <!-- Main Content END -->
</template>

<script>
export default {
    name: "attendance",
    components: {

    },
    data() {
        return {
          search: '',
          page: 1,
          pageSize: 10,
          totalSize: 0,
          posts: [],
          busy: true,
          value: 10,
          viewType:"list",
          searchName:"",
          feedback: [],
          statusOptionsSelect: [
            { value: "Present", label: "Present" },
            { value: "Absent", label: "Absent" }
          ],
          reasonOptionsSelect: [
            { value: "[PF] Present Full", label: "[PF] Present Full" },
            { value: "[PPE] Present Partial Excused", label: "[PPE] Present Partial Excused" },
            { value: "[PPU] Present Partial Unexcused", label: "[PPU] Present Partial Unexcused" },
            { value: "[NE] Not Explained", label: "[NE] Not Explained" }
          ],
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
          }]
        }
    },
    methods: {
      loadMore() {
        this.busy = true;
        const studentAttendanceStorage = this.loadStudentAttendanceStorage();

        if(studentAttendanceStorage){
          
          this.totalSize = studentAttendanceStorage.length;

          const append = studentAttendanceStorage.slice(
            this.posts.length,
            this.posts.length + this.pageSize
          );

          this.posts = append;
          this.busy = false;
        }
        else {
            this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-attendance.json").then((response) => {

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

              localStorage.setItem("studentAttendanceStorageJSONData",JSON.stringify(response.data));
              this.busy = false;
            }).catch((error) => error.response.data)
        }  
      },
      handleCurrentChange(val) {
          this.busy = true;
          const studentAttendanceStorage = this.loadStudentAttendanceStorage();

          this.page = val;

          // CHECK IF SEARCH EMPTY
          if(this.searchName === ''){
            this.totalSize = studentAttendanceStorage.length;

            const append = studentAttendanceStorage.slice(
              (this.page - 1)*this.pageSize,
              ((this.page - 1)*this.pageSize)+this.pageSize
            );

            this.posts = append;
          }
          else {
            this.posts = studentAttendanceStorage.filter(data => data.name.toLowerCase().includes(this.searchName.toLowerCase()));

            this.totalSize = this.posts.length;

            const append = this.posts.slice(
              (this.page - 1)*this.pageSize,
              ((this.page - 1)*this.pageSize)+this.pageSize
            );

            this.posts = append;
          }

          this.busy = false;
      },
      updateAttendanceList (id,value,prop) {
        console.log(id);
        console.log(value);
        console.log(prop)
      },
      saveAttendanceChanges(){

      },
      searchFilter(){
        this.busy = true;

        const studentAttendanceStorage = this.loadStudentAttendanceStorage();

        this.posts = studentAttendanceStorage.filter(data => data.name.toLowerCase().includes(this.searchName.toLowerCase()));
        this.totalSize = this.posts.length;

        this.busy = false;
        return this.posts;
      },
      // LOCALSTORAGE
      loadStudentAttendanceStorage() {
        return JSON.parse(localStorage.getItem("studentAttendanceStorageJSONData"));
      },
      updatePagination() {

        this.pageSize = this.value;

        const studentAttendanceStorage = this.loadStudentAttendanceStorage();

        this.posts = [];
        const append = studentAttendanceStorage.slice(
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
          const studentAttendanceStorage = this.loadStudentAttendanceStorage();

          // LOAD ALL STUDENTS 
          if(studentAttendanceStorage){
            this.posts = studentAttendanceStorage;
            this.busy = false;
          }
          else {
              this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-attendance.json").then((response) => {

                this.posts = response.data;

                localStorage.setItem("studentAttendanceStorageJSONData",JSON.stringify(response.data));
                this.busy = false;
              }).catch((error) => error.response.data)
          }  
        }
      }
    },
    created() {
         this.loadMore();
    }
}
</script>