<template>
  <div class="row">
    <el-table stripe class="student-details-behaviour" ref="singleTable" :data="posts" highlight-current-row style="width: 100%">
      <el-table-column sortable property="id" label="SN" width="60"></el-table-column>
      <el-table-column sortable property="homeroom" label="Home Room"></el-table-column>
      <el-table-column sortable property="period" label="Period"></el-table-column>
      <el-table-column sortable property="schoolResponse" label="Feedback Type"></el-table-column>
      <el-table-column sortable property="occureddate" label="Occured Date"></el-table-column>
      <el-table-column sortable property="incidentStatus" label="Status"></el-table-column>
      <el-table-column sortable label="Action">
            <a class="student-list-preview">
                <i class="icon icon-eye"></i>
            </a>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

  export default {
    name: "student-details-behaviour",
    components: {
    },
    props: {
      parentData: Array
    },
    watch: {
      parentData: function() {
        this.posts = this.parentData;
      }
    },
    // DATA
    data: () => ({
      posts: [],
    }),
    methods: {
      loadMore() {
        this.posts = [];

        this.posts = this.parentData;
      }
    },
    created() {
      this.loadMore();
    }
  }

</script>
