<template>
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
</template>

<script>
  export default {
    name: "attendance-download",
    components: {

    },
    props: {
        parentData: Array,
        parentDataUpdate: Function
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
        }
      };
    },
    methods: {
      submitUploadedDocument(){
        this.parentDataUpdate("document submited")
      },
      loadMore() {
            this.studentAttendances.formData = JSON.parse(JSON.stringify(this.parentData));
      }
    },
    created() {
      this.loadMore();
    },
  };

</script>
