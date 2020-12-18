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
                  <ActionsListEdit 
                    :indexParent="scope.$index"
                    :postsParent="posts"
                  />
              </div>
          </el-table-column>
          <el-table-column width="100" property="action">
              <div class="student-list-preview" slot-scope="scope" v-if="scope.row.action.includes('preview')">
                    <ActionsListView 
                    :indexParent="scope.$index"
                    :postsParent="posts"
                    />
              </div>
          </el-table-column>
        </el-table>
</template>

<script>
import ActionsListEdit from '../../../components/actions/views/ActionsListEdit.vue';
import ActionsListView from '../../../components/actions/views/ActionsListView.vue';

export default {
    name: "student-list-list",
    components: {
      ActionsListEdit,
      ActionsListView
    },
    data:() => ({
        posts: [],
        pageSize: 10
    }),
    props: {
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