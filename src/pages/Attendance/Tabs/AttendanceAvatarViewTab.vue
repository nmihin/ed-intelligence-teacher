<template>
<div class="row search-results">
    <div v-for="(item, index) in studentAttendances.formData" :key="index" class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 ed_card-boxes">
      <div class="card-box">
        <div class="card-title">
          <h2>{{ item.name }} {{ item.surname }}</h2>
        </div>
        <div class="card-content">
          <figure>
            <img v-if="!item.avatar" class="card-picture" src="../../../assets/images/avatar-aux.png" />
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
                <li class="attendance-list-avatar selection">
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
</template>

<script>
  export default {
    name: "attendance-avatar",
    components: {

    },
    props: {
      parentData: Array
    },
    watch: {
      parentData: function() {
        this.studentAttendances.formData = this.parentData;
      }
    },
    data() {
      return {
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
        ]
      };
    },
    methods: {
       loadMore() {
        this.studentAttendances.formData = JSON.parse(JSON.stringify(this.parentData));
      },
      updateAttendanceList(id, value, prop) {
          this.axios
            .get(
              "https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-attendance.json"
            )
            .then((response) => {
              this.responseData = response.data;

              // status,present,absent,absentreason
              // FIND STUDENT INDEX
              const idxPosts = this.studentAttendances.formData
                .map((el) => el.sn)
                .indexOf(id);
              const idxStorage = this.responseData
                .map((el) => el.sn)
                .indexOf(id);

              if (prop === "status") {
                this.responseData[idxStorage].status = value;
                //this.posts[idxPosts].reason = "";
                this.studentAttendances.formData[idxPosts].reason = "";
                this.responseData[idxStorage].reason = "";
              }
              if (prop === "present") {
                this.responseData[idxStorage].reason = value;
                this.responseData[idxStorage].absentReason = "";
              }
              if (prop === "absent") {
                this.responseData[idxStorage].reason = value;
              }
              if (prop === "absentReason") {
                this.responseData[idxStorage].absentReason = value;
              }

              this.parentDataUpdate(this.responseData)
            })
            .catch((error) => error.response);

      }
    },
    created() {
      this.loadMore();
    }
  };

</script>
