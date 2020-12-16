<template>
  <md-dialog :md-active.sync="showStudentScheduleDialog" class="modal-window student-details">
    <h2 class="modal-title">Student Schedule of {{post.firstName}} {{post.lastName}} (KG)</h2>
    <div class="modal-content">
      <div v-if="schedule.length > 0" class="row">
        <!-- LIST VIEW -->
        <ul class="col-1 profile-list">
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
        </ul>
        <ul class="col-2 profile-list">
          <h2>1st Period</h2>
          <li v-for="(sch, idx) in schedule[0].firstPeriod[0]" :key="idx">
            <div>Class Room:<span>{{sch[0].room}}</span></div>
            <div>Subject:<span>{{sch[0].subject}}</span></div>
            <div>Time:<span>{{sch[0].time}}</span></div>
          </li>
        </ul>
        <ul class="col-2 profile-list">
          <h2>2nd Period</h2>
          <li v-for="(sch, idx) in schedule[1].secondPeriod[0]" :key="idx">
            <div>Class Room:<span>{{sch[0].room}}</span></div>
            <div>Subject:<span>{{sch[0].subject}}</span></div>
            <div>Time:<span>{{sch[0].time}}</span></div>
          </li>
        </ul>
        <ul class="col-1 profile-list">
          <h2>Break</h2>
          <li><span class="center">--</span></li>
          <li><span class="center">--</span></li>
          <li><span class="center">--</span></li>
          <li><span class="center">--</span></li>
          <li><span class="center">--</span></li>
        </ul>
        <ul class="col-2 profile-list">
          <h2>3rd Period</h2>
          <li v-for="(sch, idx) in schedule[2].thirdPeriod[0]" :key="idx">
            <div>Class Room:<span>{{sch[0].room}}</span></div>
            <div>Subject:<span>{{sch[0].subject}}</span></div>
            <div>Time:<span>{{sch[0].time}}</span></div>
          </li>
        </ul>
        <ul class="col-2 profile-list">
          <h2>4th Period</h2>
          <li v-for="(sch, idx) in schedule[3].fourthPeriod[0]" :key="idx">
            <div>Class Room:<span>{{sch[0].room}}</span></div>
            <div>Subject:<span>{{sch[0].subject}}</span></div>
            <div>Time:<span>{{sch[0].time}}</span></div>
          </li>
        </ul>
        <ul class="col-2 profile-list">
          <h2>5th Period</h2>
          <li v-for="(sch, idx) in schedule[4].fifthPeriod[0]" :key="idx">
            <div>Class Room:<span>{{sch[0].room}}</span></div>
            <div>Subject:<span>{{sch[0].subject}}</span></div>
            <div>Time:<span>{{sch[0].time}}</span></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="modal-footer">
      <button class="button medium ed-btn__tertiary" @click="showStudentScheduleDialog = false;">
        Close
      </button>
    </div>
  </md-dialog>
</template>

<script>
  export default {
    name: "student-details-schedule-modal",
    components: {},
    // DATA
    data: () => ({
      showStudentScheduleDialog: false,
      post:[],
      schedule:[]
    }),
    props: {
      showStudentScheduleDialogParent: Boolean,
      parentData: Object,
      parentDataSchedule: Array
    },
    watch: {
      showStudentScheduleDialogParent: function() {
        this.showStudentScheduleDialog = true
      },
      parentData: function(){
        this.post = this.parentData;
      },
      parentDataSchedule: function(){
        this.schedule= this.parentDataSchedule;
      }
    },
    methods: {

    }
  }

</script>
