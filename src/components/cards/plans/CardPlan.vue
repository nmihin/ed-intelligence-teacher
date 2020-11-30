<template>
  <div class="row">
    <!-- Box -->
    <div v-for="(post, idx) in posts" :key="idx" class="col-lg-6 col-md-12 col-sm-6 col-xs-12">
      <div class="card-box">
        <div class="card-title">
          <h2>{{post.username}}</h2>
          <a
            href="https://educationalschool.iteg.com.np/profile/student/lessons"
            class="select"
          >
            <span>OFF PERIOD</span>
          </a>
        </div>
        <div class="card-content">
          <ul>
            <li>
              <h3>Subject</h3>
              <span>{{post.subject}}</span>
            </li>
            <li>
              <h3>Grade</h3>
              <span>{{post.grade}}</span>
            </li>
            <li>
              <h3>Period</h3>
              <span>{{post.period}}</span>
            </li>
          </ul>
          <div class="card-weeks">
            <ul>
              <div v-for="(day, idx) in daysOfWeek" :key="idx">
                <li class="selected-day" v-if="post.schedule.includes(day)">{{day.substring(0,3)}}</li>
                <li class="free-day" v-if="!post.schedule.includes(day)">{{day.substring(0,3)}}</li>
              </div>
            </ul>
          </div>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-4">
              <router-link to="/lesson-plan"
                ><i class="icon icon-box-profile"></i
              ></router-link>
              <span>Lesson Plan</span>
            </div>
            <div class="col-4">
              <router-link to="/lesson-plan"
                ><i class="icon icon-box-student"></i
              ></router-link>
              <span>Student List</span>
            </div>
            <div class="col-4">
              <router-link to="/lesson-plan"
                ><i class="icon icon-box-confirm"></i
              ></router-link>
              <span>Attendance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-plan",
  components: {},
  data() {
    return {
      username: "",
      subject: "",
      grade: "",
      period: "",
      schedule: [],
      daysOfWeek: ["Monday","Tuesday","Wednsday","Thursday","Friday"],
      posts: [],
    };
  },
  methods: {
    loadMore() {
      const schedulerPlanStorage = this.loadSchedulerPlanStorage();

      if (schedulerPlanStorage) {
        this.posts = schedulerPlanStorage;
      } else {
        this.axios
          .get("scheduler-plan.json")
          .then((response) => {
            this.posts = response.data;
            localStorage.setItem(
              "schedulerPlanJSONData",
              JSON.stringify(response.data)
            );
          })
          .catch((error) => error.response.data);
      }
    },
    loadSchedulerPlanStorage() {
      return JSON.parse(localStorage.getItem("schedulerPlanJSONData"));
    },
  },
  created() {
    this.loadMore();
  },
};
</script>
