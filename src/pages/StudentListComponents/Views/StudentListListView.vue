<template>
        <el-table
          stripe
          ref="singleTable"
          :data="posts"
          highlight-current-row
          style="width: 100%">
          <el-table-column sortable property="sn" label="SN" width="80"></el-table-column>
          <el-table-column sortable property="name" label="Name"></el-table-column>
          <el-table-column sortable property="surname" label="Surname"></el-table-column>
          <el-table-column sortable property="usi" label="USI"></el-table-column>
          <el-table-column sortable property="grade" label="Grade"></el-table-column>
          <el-table-column width="64" property="action" label="Action">
              <div class="student-list-edit" slot-scope="scope" v-if="scope.row.action.includes('edit')">
                  <el-popover
                      placement="top"
                      popper-class="student-list-options"
                      width="200"
                      trigger="hover">
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Add Feedback" placement="top">
                          <i @click="addFeedback(scope.row.sn,scope.row.name,scope.row.surname)" class="icon icon-information"></i>
                        </el-tooltip> 
                      </a>
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Add Withdrawal" placement="top">
                          <i @click="addWithdrawal(scope.row.sn,scope.row.name,scope.row.surname)" class="icon icon-exit"></i>
                        </el-tooltip>
                      </a>
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Edit Profile" placement="top">
                          <i @click="editProfile(scope.row.sn)" class="icon icon-edit"></i>
                        </el-tooltip>
                      </a>
                      <a slot="reference" class="student-list-edit">
                        <i class="icon icon-edit"></i>
                      </a>
                  </el-popover>
              </div>
          </el-table-column>
          <el-table-column width="100" property="action">
              <div class="student-list-preview" slot-scope="scope" v-if="scope.row.action.includes('preview')">
                    <el-popover
                      placement="top"
                      popper-class="student-list-options"
                      width="200"
                      trigger="hover">
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="View Profile" placement="top">
                          <i @click="viewProfile(scope.row.sn)" class="icon icon-profile"></i>
                        </el-tooltip> 
                      </a>
                      <a class="student-list-preview">
                        <el-tooltip class="item" effect="dark" content="Feedback List" placement="top">
                          <i @click="feedBackList(scope.row.sn,scope.row.name,scope.row.surname)" class="icon icon-lesson"></i>
                        </el-tooltip>
                      </a>
                      <a slot="reference" class="student-list-preview">
                        <i class="icon icon-eye"></i>
                      </a>
                    </el-popover>
              </div>
          </el-table-column>
        </el-table>
</template>

<script>
export default {
    name: "student-list-list",
    components: {

    },
    data:() => ({
        posts: [],
        pageSize: 10,
    }),
    props: {
        addFeedbackParent: Function,
        addWithdrawalParent: Function,
        editProfileParent: Function,
        viewProfileParent: Function,
        feedBackListParent: Function,
        parentData: Array,
        updatePagination: {
            type: Function,
            default(){
                return {}
            }
        }
    },
    computed: {
        listJson: function(){
            return JSON.parse(JSON.stringify(this.parentData));
        }
    },
    watch: {
        parentData: function() {

            this.posts = [];

            const append = this.parentData.slice(
                    this.posts.length,
                    this.posts.length + this.pageSize
            );

            this.posts = append;  
        }
    },
    methods: {
        addFeedback(sn,name,surname){
            this.addFeedbackParent(sn,name,surname);
        },
        addWithdrawal(sn,name,surname){
            this.addWithdrawalParent(sn,name,surname);
        },
        editProfile(sn){
            this.editProfileParent(sn);
        },
        viewProfile(sn){
            this.viewProfileParent(sn);
        },
        feedBackList(sn,name,surname){
            this.addFeedbackParent(sn,name,surname);
        },
        loadMore(){
            const studentListStorage = this.loadStudentlistStorage();
            this.posts = [];

            if(studentListStorage){
                this.totalSize = this.listJson.length;

                const append = this.listJson.slice(
                    this.posts.length,
                    this.posts.length + this.pageSize
                );

                this.posts = append;    
            }
            else{
                setTimeout(() => {
                    this.totalSize = this.listJson.length;

                    const append = this.listJson.slice(
                        this.posts.length,
                        this.posts.length + this.pageSize
                    );
 
                    this.posts = append; 
                }, 1000)
            } 
        },
      // LOCALSTORAGE
      loadStudentlistStorage() {
        return JSON.parse(localStorage.getItem("studentListStorageJSONData"));
      },
    },
    created(){
        this.loadMore();
    }
    
}
</script>