<template>
  <!-- START ADD FEEDBACK MODAL -->
  <div>
    <StudentListAddFeedbackModal ref="StudentListAddFeedbackModal" />
    <!-- END ADD FEEDBACK MODAL -->
    <!-- START ADD WITHDRAWAL MODAL -->
    <StudentListAddWithdrawalModal ref="StudentListAddWithdrawalModal" />
    <!-- END ADD WITHDRAWAL MODAL -->
    <el-popover placement="top" popper-class="student-list-options" width="200" trigger="hover">
      <a class="student-list-preview">
        <el-tooltip class="item" effect="dark" content="Add Feedback" placement="top">
          <i @click="openAddFeedbackModal()" class="icon icon-information"></i>
        </el-tooltip>
      </a>
      <a class="student-list-preview">
        <el-tooltip class="item" effect="dark" content="Add Withdrawal" placement="top">
          <i @click="openAddWithdrawalModal()" class="icon icon-exit"></i>
        </el-tooltip>
      </a>
      <a class="student-list-preview">
        <el-tooltip class="item" effect="dark" content="Edit Profile" placement="top">
          <i @click="editProfile()" class="icon icon-edit"></i>
        </el-tooltip>
      </a>
      <a slot="reference" class="student-list-edit">
        <i class="icon icon-edit"></i>
      </a>
    </el-popover>
  </div>
</template>

<script>
  import StudentListAddFeedbackModal from '../modals/StudentListAddFeedbackModal.vue';
  import StudentListAddWithdrawalModal from '../modals/StudentListAddWithdrawalModal.vue';

  export default {
    name: "action-list-edit",
    components: {
      StudentListAddFeedbackModal,
      StudentListAddWithdrawalModal
    },
    props: {
      postsParent: Array,
      indexParent: Number
    },
    // DATA
    data: () => ({
      sn: 0,
      name: "",
      surname: "",
    }),
    methods: {
      openAddFeedbackModal(){
          this.$refs.StudentListAddFeedbackModal.openModal(
            this.sn = this.postsParent[this.indexParent].sn,
            this.name = this.postsParent[this.indexParent].name,
            this.surname = this.postsParent[this.indexParent].surname
          );
      },
      openAddWithdrawalModal(){
          this.$refs.StudentListAddWithdrawalModal.openModal(
            this.sn = this.postsParent[this.indexParent].sn,
            this.name = this.postsParent[this.indexParent].name,
            this.surname = this.postsParent[this.indexParent].surname
          );
      },
      editProfile() {
        this.$router.push({
          path: '/add-student/' + this.postsParent[this.indexParent].sn
        })
      }
    }
  }

</script>
