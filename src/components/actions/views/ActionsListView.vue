<template>
<div>
  <!-- START FEEDBACK LIST MODAL -->
  <StudentListFeedbackListModal 
  ref="StudentListFeedbackListModal"
  />
   <!-- START FEEDBACK LIST MODAL -->   
  <el-popover placement="top" popper-class="student-list-options" width="200" trigger="hover">
    <a class="student-list-preview">
      <el-tooltip class="item" effect="dark" content="View Profile" placement="top">
        <i @click="viewProfile(sn)" class="icon icon-profile"></i>
      </el-tooltip>
    </a>
    <a class="student-list-preview">
      <el-tooltip class="item" effect="dark" content="Feedback List" placement="top">
        <i @click="openStudentListFeedbackListModal()" class="icon icon-lesson feedback"></i>
      </el-tooltip>
    </a>
    <a slot="reference" class="student-list-preview">
      <i class="icon icon-eye"></i>
    </a>
  </el-popover>
  </div>
</template>

<script>
  import StudentListFeedbackListModal from '../modals/StudentListFeedbackListModal.vue';

  export default {
    name: "action-list-view",
    components: {
      StudentListFeedbackListModal
    },
    props: {
      postsParent: Array,
      indexParent: Number
    },
    // DATA
    data: () => ({
      sn:0,
      name:"",
      surname:"",
      period:""
    }),
    methods: {
      openStudentListFeedbackListModal(){
          this.$refs.StudentListFeedbackListModal.openModal(
            this.sn = this.postsParent[this.indexParent].sn,
            this.name = this.postsParent[this.indexParent].name,
            this.surname = this.postsParent[this.indexParent].surname,
            this.grade = this.postsParent[this.indexParent].grade,
            this.room = this.postsParent[this.indexParent].room
          );
      },
      viewProfile(){
        this.$router.push({path:'/student-details/'+this.postsParent[this.indexParent].sn})
      }
    }
  }
</script>