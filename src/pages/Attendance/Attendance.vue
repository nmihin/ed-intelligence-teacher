<template>
  <!-- Main Content START -->
  <div class="main-content">
    <div class="container-fluid student-list attendance">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12">
          <div class="date-select">
            <i class="icon icon-box-plan"></i>
            <el-date-picker @change="updateDateSelect(actionDate)" prop="birthDate" v-model="actionDate" type="date" format="dd-MM-yyyy" value-format="yyyy-MM-dd" placeholder="Pick a date">
            </el-date-picker>
            <span class="records">Date</span>
          </div>
        </div>
        <div v-if="viewType === 'list'" class="col-8 col-sm-6 col-md-4">
            <RecordsComponent 
              v-if="viewType ==='list'"
              :updatePaginationParent="updatePagination"
            />
        </div>
        <div v-if="viewType === 'avatar'" class="col-12 col-sm-6 col-md-4"></div>
        <div v-if="viewType === 'download'" class="col-12 col-sm-6 col-md-8">
          <button v-if="viewType === 'download'" class="download-button button medium ed-btn__primary" @click="downloadExcelTemplate()">
            <span class="icon icon-download-excel"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span></span>
            <span>Download Excel Template</span>
          </button>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <button @click="viewTypeSelect('download')" class="change-view upload button medium ed-btn__secondary">
            <i class="icon icon-upload"></i>
          </button>
          <button @click="viewTypeSelect('avatar')" class="change-view button medium ed-btn__primary">
            <i class="icon icon-manage"></i>
          </button>
          <button @click="viewTypeSelect('list')" class="change-view menu-list button medium ed-btn__primary">
            <i class="icon icon-menu-list"></i>
          </button>
        </div>
        <div v-if="viewType === 'list' || viewType === 'avatar'" class="col-12 col-sm-12 col-md-4">
          <SearchContentComponent :searchFilterParent="searchFilter" />
        </div>
      </div>
      <el-form :model="studentAttendances" :rules="rules" ref="studentAttendances">
        <!-- LIST VIEW -->
        <section  v-show="viewType === 'list'">
         <AttendanceListViewTab 
         :parentData="studentAttendances.formData"
         :parentDataUpdate="updateData"
         />
        </section>
        <!-- AVATAR VIEW -->
        <section  v-show="viewType === 'avatar'">
         <AttendanceAvatarViewTab 
         :parentData="studentAttendances.formData"
         :parentDataUpdate="updateData"
         />
        </section>
        <!-- DOWNLOAD VIEW -->
        <section v-show="viewType === 'download'">
        <AttendanceDownloadViewTab 
        :parentData="studentAttendances.formData"
        :parentDataUpdate="updateUploadedDocument"
        />
        </section>
      </el-form>
      <div class="attendance-bottom">
        <button v-if="viewType === 'list' || viewType === 'avatar'" class="attendence-save-changes button medium ed-btn__primary" @click="validatestudentAttendances()">
          Save Changes
        </button>
        <el-pagination 
          v-if="viewType === 'list'" 
          background layout="prev, pager, next" 
          @current-change="handleCurrentChange" 
          :current-page.sync="currentPage"
          :page-size="pageSize" 
          :total="totalSize"
          >
        </el-pagination>
      </div>
      <div v-if="busy" class="preloader">
        <span><img src="../../assets/images/preloader.gif" /> Loading...</span>
      </div>
    </div>
  </div>
  <!-- Main Content END -->
</template>

<script>
  import RecordsComponent from '../../components/records/RecordsComponent.vue';
  import SearchContentComponent from '../../components/search/SearchContentComponent.vue';

  import AttendanceAvatarViewTab from './Tabs/AttendanceAvatarViewTab.vue';
  import AttendanceDownloadViewTab from './Tabs/AttendanceDownloadViewTab.vue';
  import AttendanceListViewTab from './Tabs/AttendanceListViewTab.vue';

  export default {
    name: "attendance",
    components: {
      RecordsComponent,
      SearchContentComponent,
      AttendanceAvatarViewTab,
      AttendanceDownloadViewTab,
      AttendanceListViewTab
    },
    data() {
      return {
        search: "",
        page: 1,
        pageSize: 10,
        totalSize: 0,
        currentPage:1,
        posts: [],
        busy: true,
        viewType: "list",
        searchName: "",
        feedback: [],
        loadedData: [],
        actionDate: "",
        post: {
          reason: "",
          absentReason: "",
        },
        studentAttendances: {
          formData: [],
        },
        rules: {
          // Add check
          status: [{
            required: true,
            message: "Status is Required!",
            trigger: "blur",
          }, ],
          reason: [{
            required: true,
            message: "Reason is Required!",
            trigger: "blur",
          }, ],
          absentReason: [{
            required: true,
            message: "Absent Reason is Required!",
            trigger: "blur",
          }, ],
        },
        formAttendance: {},
        statusOptionsSelect: [{
            value: "Present",
            label: "Present"
          },
          {
            value: "Absent",
            label: "Absent"
          },
        ]
      };
    },
    methods: {
      updateUploadedDocument(data){
        // TO ADD UPDATE DOCUMENT UPLOADE
      },
      updateData(data){
        this.studentAttendances.formData = data;
      },
      loadMore() {
        this.busy = true;
          this.axios
            .get(
              "https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-attendance.json"
            )
            .then((response) => {
              this.totalSize = response.data.length;

              const append = response.data.slice(
                this.posts.length,
                this.posts.length + this.pageSize
              );

              this.posts = append;
              this.studentAttendances.formData = this.posts;

              this.current_page = response.current_page;
              this.per_page = response.per_page;
              this.total = response.total;
              this.next_page_url = response.next_page_url;

              this.loadedData = response.data;
              this.busy = false;
            })
            .catch((error) => error.response.data);
      },
      handleCurrentChange(val) {
        this.busy = true;
        const studentAttendanceStorage = this.loadedData;

        this.page = val;

        // CHECK IF SEARCH EMPTY
        if (this.searchName === "") {
          this.totalSize = studentAttendanceStorage.length;

          const append = studentAttendanceStorage.slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );

          this.posts = append;
          this.studentAttendances.formData = this.posts;
        } else {

          this.posts = studentAttendanceStorage.filter((data) =>
            data.name.toLowerCase().includes(this.searchName.toLowerCase())
          );

          this.totalSize = this.posts.length;

          const append = this.posts.slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );

          this.posts = append;
          this.studentAttendances.formData = this.posts;
        }

        this.busy = false;
      },
      updateAttendanceList(id, value, prop) {
        const studentAttendanceStorage = this.loadedData;

        // status,present,absent,absentreason
        // FIND STUDENT INDEX
        const idxPosts = this.studentAttendances.formData
          .map((el) => el.sn)
          .indexOf(id);
        const idxStorage = studentAttendanceStorage
          .map((el) => el.sn)
          .indexOf(id);

        if (prop === "status") {
          studentAttendanceStorage[idxStorage].status = value;
          //this.posts[idxPosts].reason = "";
          this.studentAttendances.formData[idxPosts].reason = "";
          studentAttendanceStorage[idxStorage].reason = "";
        }
        if (prop === "present") {
          studentAttendanceStorage[idxStorage].reason = value;
          studentAttendanceStorage[idxStorage].absentReason = "";
        }
        if (prop === "absent") {
          studentAttendanceStorage[idxStorage].reason = value;
        }
        if (prop === "absentReason") {
          studentAttendanceStorage[idxStorage].absentReason = value;
        }

        /*
        localStorage.setItem(
          "studentAttendanceStorageJSONData",
          JSON.stringify(studentAttendanceStorage)
        );
        */
      },
      submitUploadedDocument() {
        // POST to backend via axios
      },
      downloadExcelTemplate() {
        // GET data based on date via axios
      },
      updateForm(input, value) {
        this.formAttendance[input] = value;
      },
      validatestudentAttendances() {
        return new Promise((resolve) => {
          this.$refs.studentAttendances.validate((valid) => {
            this.$emit("on-validate", valid, this.model);
            resolve(valid);
            if (valid) 
              console.log("valid studentAttendances");
          });
        });
      },
      updateDateSelect(date) {
        console.log(date);
        // GET data based on date via axios
      },
      searchFilter(value) {
        this.busy = true;

        const studentAttendanceStorage = this.loadedData;

        this.posts = studentAttendanceStorage.filter((data) =>
          data.name.toLowerCase().includes(value.toLowerCase()) ||
          data.surname.toLowerCase().includes(value.toLowerCase())
        );
        this.studentAttendances.formData = this.posts;

        this.totalSize = this.studentAttendances.formData.length;

        this.busy = false;
        return this.studentAttendances.formData;
      },
      updatePagination(value) {
        this.pageSize = value;
        this.currentPage = 1;

        const studentAttendanceStorage = this.loadedData;

        this.posts = [];
        const append = studentAttendanceStorage.slice(
          this.posts.length,
          this.posts.length + this.pageSize
        );

        this.posts = append;
        this.studentAttendances.formData = this.posts;
      },
      viewTypeSelect(type) {
        switch(type) {
          case "list":
              this.viewType = "list";
            break;
          case "avatar":
              this.viewType = "avatar";
            break;
          case "download":
              this.viewType = "download";
            break;
          default:
            break;
        }
      }
    },
    created() {
      this.loadMore();
    },
  };

</script>
