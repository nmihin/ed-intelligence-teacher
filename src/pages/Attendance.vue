<template>
  <!-- Main Content START -->
  <div class="main-content">
    <div class="container-fluid student-list attendance">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12">
            <div class="date-select">
              <i class="icon icon-box-plan"></i>
              <el-date-picker 
                  @change="updateDateSelect(actionDate)"
                  prop="birthDate" 
                  v-model="actionDate" 
                  type="date" 
                  format="dd-MM-yyyy" 
                  value-format="yyyy-MM-dd"  
                  placeholder="Pick a date">
              </el-date-picker>
               <span class="records">Date</span>
            </div>
          </div>
          <div v-if="viewType ==='list'" class="col-8 col-sm-6 col-md-4">
              <el-select class="records-input" @change="updatePagination()" v-model="value" placeholder="Records">
                <el-option
                  v-for="item in recordsOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            <span v-if="viewType ==='list'" class="records">Records</span>
          </div>
           <div v-if="viewType ==='avatar'" class="col-12 col-sm-6 col-md-4"></div>
          <div v-if="viewType ==='download'" class="col-12 col-sm-6 col-md-8">
            <button v-if="viewType ==='download'" class="download-button button medium ed-btn__primary" @click="downloadExcelTemplate()">
                <span class="icon icon-download-excel"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span></span>
                <span>Download Excel Template</span>
            </button>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <button @click="viewTypeList('download')" class="change-view upload button medium ed-btn__secondary">
              <i class="icon icon-upload"></i>
            </button>
            <button @click="viewTypeList('avatar')" class="change-view button medium ed-btn__primary">
              <i class="icon icon-manage"></i>
            </button>
            <button @click="viewTypeList('list')" class="change-view menu-list button medium ed-btn__primary">
              <i class="icon icon-menu-list"></i>
            </button>
          </div>
          <div v-if="viewType ==='list' || viewType ==='avatar'" class="col-12 col-sm-12 col-md-4">
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
                        <li class="attendance-list-avatar">
                          <h3>Status</h3>
                          <el-radio-group @change="updateAttendanceList(post.sn,post.status,'status')" v-model="post.status" >
                              <el-radio label="Present">Present</el-radio>
                              <el-radio label="Absent">Absent</el-radio>
                          </el-radio-group>  
                        </li>
                        <li class="attendance-list-avatar">
                          <h3>Reason</h3>
                            <el-select @change="updateAttendanceList(post.sn,post.reason,'reason')" v-model="post.reason" placeholder="Reason">
                                <el-option v-for="pre in reasonOptionsSelect"
                                          :key="pre.value"
                                          :label="pre.label"
                                          :value="pre.value">
                                </el-option>
                            </el-select>
                        </li>
                      </ul>
                    </figcaption>
                  </figure>
              </div>
            </div>
            </div>
          </div>
          <!-- DOWNLOAD VIEW -->
          <div v-if="viewType ==='download'">
            <div class="side-menu__results card-boxes upload-document">
              <div class="card-box">
                <div class="card-content">
                  <el-upload
                    class="upload"
                    ref="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :auto-upload="false">
                    <el-button slot="trigger" class="button medium ed-btn__primary">Select File</el-button>
                    <span>and</span>
                    <el-button  class="button medium ed-btn__secondary" @click="submitUploadedDocument()"><i class="icon icon-upload"></i>Upload to server</el-button>
                    <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
                  </el-upload>
                </div>
              </div>
            </div>
          </div>
          <div class="attendance-bottom">
            <button v-if="viewType ==='list' || viewType ==='avatar'" class="attendence-save-changes button medium ed-btn__primary" @click="saveAttendanceChanges()">
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
          actionDate: "",
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
      updateAttendanceList(id,value,prop) {
        const studentAttendanceStorage = this.loadStudentAttendanceStorage();

        // FIND STUDENT INDEX
        const idx = studentAttendanceStorage.map( el => el.sn).indexOf(id)

        if(prop==="status"){
          studentAttendanceStorage[idx].status = value;
        }
        if(prop==="reason"){
          studentAttendanceStorage[idx].reason = value;
        }

        
        localStorage.setItem("studentAttendanceStorageJSONData",JSON.stringify(studentAttendanceStorage));
      },
      saveAttendanceChanges(){
        const studentAttendanceStorage = this.loadStudentAttendanceStorage();
        // POST data from localstorage via axios
      },
      submitUploadedDocument(){
        // POST to backend via axios
      },
      downloadExcelTemplate(){
        // GET data based on date via axios
      },
      updateDateSelect(date){
        console.log(date)
        // GET data based on date via axios
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
        if(type === "download"){
          this.viewType = "download"
        }
      }
    },
    created() {
         this.loadMore();
    }
}
</script>