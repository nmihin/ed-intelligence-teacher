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
          <el-select class="records-input" @change="updatePagination()" v-model="value" placeholder="Records">
            <el-option v-for="item in recordsOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <span v-if="viewType === 'list'" class="records">Records</span>
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
          <el-input @input="searchFilter()" placeholder="Search name..." v-model="searchName"></el-input>
        </div>
      </div>
      <el-form :model="studentAttendances" :rules="rules" ref="studentAttendances">
        <!-- LIST VIEW -->
        <el-table v-if="viewType === 'list'" stripe ref="singleTable" :data="studentAttendances.formData" highlight-current-row style="width: 100%">
          <el-table-column sortable property="sn" label="SN" width="80"></el-table-column>
          <el-table-column sortable property="name" label="Name"></el-table-column>
          <el-table-column sortable property="surname" label="Surname"></el-table-column>
          <el-table-column sortable property="status" label="Status">
            <div slot-scope="scope">
              <el-form-item>
                <el-radio-group @change="updateAttendanceList(scope.row.sn,scope.row.status,'status')" v-model="scope.row.status">
                  <el-radio label="Present">Present</el-radio>
                  <el-radio label="Absent">Absent</el-radio>
                </el-radio-group>
              </el-form-item>
            </div>
          </el-table-column>
          <el-table-column  sortable property="reason" label="Reason">
            <div slot-scope="scope">
              <el-form-item :prop="'formData.' + scope.$index + '.reason'" :rules="rules.reason" v-if="scope.row.status === 'Present'">
                <el-select @change="updateAttendanceList(scope.row.sn,scope.row.reason,'present')" v-model="scope.row.reason" placeholder="Present">
                  <el-option v-for="pre in reasonPresentOptionsSelect" :key="pre.value" :label="pre.label" :value="pre.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item :prop="'formData.' + scope.$index + '.reason'" :rules="rules.reason" v-if="scope.row.status === 'Absent'">
                <el-select @change="updateAttendanceList(scope.row.sn,scope.row.reason,'absent')" v-model="scope.row.reason" placeholder="Absent">
                  <el-option v-for="pre in reasonAbsentOptionsSelect" :key="pre.value" :label="pre.label" :value="pre.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item :prop="'formData.' + scope.$index + '.absentReason'" :rules="rules.absentReason" v-if="scope.row.status === 'Absent'">
                <el-select @change="updateAttendanceList(scope.row.sn,scope.row.absentReason,'absentReason')" v-model="scope.row.absentReason" placeholder="Absent Reason">
                  <el-option v-for="pre in reasonAbsentReasonOptionsSelect" :key="pre.value" :label="pre.label" :value="pre.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-table-column>
        </el-table>
        <!-- AVATAR VIEW -->
        <div v-if="viewType === 'avatar'" class="row search-results">
          <div v-for="(item, index) in studentAttendances.formData" :key="index" class="col-12 col-md-6 col-lg-6 col-xl-4 ed_card-boxes">
            <div class="card-box">
              <div class="card-title">
                <h2>{{ item.name }} {{ item.surname }}</h2>
              </div>
              <div class="card-content">
                <figure>
                  <img v-if="!item.avatar" class="card-picture" src="../assets/images/avatar-aux.png" />
                  <img v-if="item.avatar" class="card-picture" :src="item.avatar" />

                  <figcaption>
                    <ul>
                      <li class="attendance-list-avatar">
                        <h3>Status</h3>
                        <el-form-item :prop="'formData.' + index + '.status'" :rules="rules.status">
                          <el-radio-group @change="updateAttendanceList(item.sn,item.status,'status')" v-model="item.status">
                            <el-radio label="Present">Present</el-radio>
                            <el-radio label="Absent">Absent</el-radio>
                          </el-radio-group>
                        </el-form-item>
                      </li>
                      <li class="attendance-list-avatar">
                        <h3>Reason</h3>
                        <el-form-item v-if="item.status === 'Present'" :prop="'formData.' + index + '.reason'" :rules="rules.reason">
                          <el-select @change="updateAttendanceList(item.sn,item.reason,'present')" v-model="item.reason" placeholder="Reason">
                            <el-option v-for="pre in reasonPresentOptionsSelect" :key="pre.value" :label="pre.label" :value="pre.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item v-if="item.status === 'Absent'" :prop="'formData.' + index + '.reason'" :rules="rules.reason">
                          <el-select @change="updateAttendanceList(item.sn,item.reason,'absent')" v-model="item.reason" placeholder="Reason">
                            <el-option v-for="pre in reasonAbsentOptionsSelect" :key="pre.value" :label="pre.label" :value="pre.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item v-if="item.status === 'Absent'" :prop="'formData.' + index + '.absentReason'" :rules="rules.absentReason">
                          <el-select @change="updateAttendanceList(item.sn,item.reason,'absentReason')" v-model="item.absentReason" placeholder="Reason">
                            <el-option v-for="pre in reasonAbsentReasonOptionsSelect" :key="pre.value" :label="pre.label" :value="pre.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <!-- DOWNLOAD VIEW -->
        <div v-if="viewType === 'download'">
          <div class="side-menu__results card-boxes upload-document">
            <div class="card-box">
              <div class="card-content">
                <el-upload class="upload" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :auto-upload="false">
                  <el-button slot="trigger" class="button medium ed-btn__primary">Select File</el-button>
                  <span>and</span>
                  <el-button class="button medium ed-btn__secondary" @click="submitUploadedDocument()"><i class="icon icon-upload"></i>Upload to server</el-button>
                  <div class="el-upload__tip" slot="tip">
                    jpg/png files with a size less than 500kb
                  </div>
                </el-upload>
              </div>
            </div>
          </div>
        </div>
      </el-form>
      <div class="attendance-bottom">
        <button v-if="viewType === 'list' || viewType === 'avatar'" class="attendence-save-changes button medium ed-btn__primary" @click="validatestudentAttendances()">
          Save Changes
        </button>
        <el-pagination v-if="viewType === 'list'" background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="pageSize" :total="totalSize">
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
    components: {},
    data() {
      return {
        search: "",
        page: 1,
        pageSize: 10,
        totalSize: 0,
        posts: [],
        busy: true,
        value: 10,
        viewType: "list",
        searchName: "",
        feedback: [],
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
        ],
        reasonPresentOptionsSelect: [{
            value: "[PF] Present Full",
            label: "[PF] Present Full"
          },
          {
            value: "[PPE] Present Partial Excused",
            label: "[PPE] Present Partial Excused",
          },
          {
            value: "[PPU] Present Partial Unexcused",
            label: "[PPU] Present Partial Unexcused",
          },
          {
            value: "[NE] Not Explained",
            label: "[NE] Not Explained"
          },
        ],
        reasonAbsentOptionsSelect: [{
            value: "[AOS] Absent - Out of School Suspension",
            label: "[AOS] Absent - Out of School Suspension",
          },
          {
            value: "[ANS] Absent - Adult Ed Bo Session",
            label: "[ANS] Absent - Adult Ed Bo Session",
          },
          {
            value: "[APE] Absent Partial Excused",
            label: "[APE] Absent Partial Excused",
          },
          {
            value: "[APU] Absent Partial Unexcused",
            label: "[APU] Absent Partial Unexcused",
          },
          {
            value: "[AFE] Absent - Full Excused",
            label: "[AFE] Absent - Full Excused",
          },
          {
            value: "[AFU] Absent - Full Unexcused",
            label: "[AFU] Absent - Full Unexcused",
          },
          {
            value: "[NE] Absent - Not Explained",
            label: "[NE] Absent - Not Explained",
          },
        ],
        reasonAbsentReasonOptionsSelect: [{
            value: "[11] Illness",
            label: "[11] Illness"
          },
          {
            value: "[12] Student Illness",
            label: "[12] Student Illness"
          },
          {
            value: "[13] Death Student Family",
            label: "[13] Death Student Family",
          },
          {
            value: "[14] Attending judiciary or administrative proceedings",
            label: "[14] Attending judiciary or administrative proceedings",
          },
          {
            value: "[15] Observance od a religious holiday",
            label: "[15] Observance od a religious holiday",
          },
          {
            value: "[16] Lawfull suspension or exclusion from school",
            label: "[16] Lawfull suspension or exclusion from school",
          },
          {
            value: "[17] Temporary relocation due to closing of facilities or suspension of classes",
            label: "[17] Temporary relocation due to closing of facilities or suspension of classes",
          },
        ],
        recordsOptions: [{
            value: 5,
            label: "5",
          },
          {
            value: 10,
            label: "10",
          },
          {
            value: 25,
            label: "25",
          },
          {
            value: 50,
            label: "50",
          },
          {
            value: 100,
            label: "100",
          },
        ],
      };
    },
    methods: {
      loadMore() {
        this.busy = true;
        const studentAttendanceStorage = this.loadStudentAttendanceStorage();

        if (studentAttendanceStorage) {
          this.totalSize = studentAttendanceStorage.length;

          const append = studentAttendanceStorage.slice(
            this.posts.length,
            this.posts.length + this.pageSize
          );

          this.posts = append;
          this.studentAttendances.formData = this.posts;

          this.busy = false;
        } else {
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

              //this.posts = response.data;

              this.current_page = response.current_page;
              this.per_page = response.per_page;
              this.total = response.total;
              this.next_page_url = response.next_page_url;

              localStorage.setItem(
                "studentAttendanceStorageJSONData",
                JSON.stringify(response.data)
              );
              this.busy = false;
            })
            .catch((error) => error.response.data);
        }
      },
      handleCurrentChange(val) {
        this.busy = true;
        const studentAttendanceStorage = this.loadStudentAttendanceStorage();

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
        const studentAttendanceStorage = this.loadStudentAttendanceStorage();

        // status,present,absent,absentreason
        // FIND STUDENT INDEX
        const idxPosts = this.studentAttendances.formData
          .map((el) => el.sn)
          .indexOf(id);
        const idxStorage = studentAttendanceStorage
          .map((el) => el.sn)
          .indexOf(id);

        console.log(prop)

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

        localStorage.setItem(
          "studentAttendanceStorageJSONData",
          JSON.stringify(studentAttendanceStorage)
        );
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
            if (valid) console.log("valid studentAttendances");
          });
        });
      },
      updateDateSelect(date) {
        console.log(date);
        // GET data based on date via axios
      },
      searchFilter() {
        this.busy = true;

        const studentAttendanceStorage = this.loadStudentAttendanceStorage();

        this.posts = studentAttendanceStorage.filter((data) =>
          data.name.toLowerCase().includes(this.searchName.toLowerCase())
        );
        this.studentAttendances.formData = this.posts;

        this.totalSize = this.studentAttendances.formData.length;

        this.busy = false;
        return this.studentAttendances.formData;
      },
      // LOCALSTORAGE
      loadStudentAttendanceStorage() {
        return JSON.parse(
          localStorage.getItem("studentAttendanceStorageJSONData")
        );
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
        this.studentAttendances.formData = this.post;
      },
      viewTypeSelect(type) {
        if (type === "list") this.viewType = "list";
        if (type === "avatar") {
          this.viewType = "avatar";

          this.busy = true;
          const studentAttendanceStorage = this.loadStudentAttendanceStorage();

          // LOAD ALL STUDENTS
          if (studentAttendanceStorage) {
            this.posts = studentAttendanceStorage;
            this.studentAttendances.formData = this.posts;
            this.busy = false;
          } else {
            this.axios
              .get(
                "https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-attendance.json"
              )
              .then((response) => {
                this.posts = response.data;
                this.studentAttendances.formData = this.posts;

                localStorage.setItem(
                  "studentAttendanceStorageJSONData",
                  JSON.stringify(response.data)
                );
                this.busy = false;
              })
              .catch((error) => error.response.data);
          }
        }
        if (type === "download") {
          this.viewType = "download";
        }
      },
    },
    created() {
      this.loadMore();
    },
  };

</script>
