<template>
  <div class="row search-results">
    <div v-for="(post, idx) in posts" :key="idx" class="col-12 col-md-6 col-lg-4 ed_card-boxes">
      <div class="card-box">
              <div class="card-title">
                  <h2>{{post.name}} {{post.surname}}</h2>
              </div>
              <div class="card-content">
                  <figure>
                    <img v-if="!post.avatar" class="card-picture" src="../../../assets/images/avatar-aux.png" />
                    <img v-if="post.avatar" class="card-picture" :src="post.avatar" />
                    <div class="card-element">
                      <el-popover
                        placement="top"
                        popper-class="student-list-options"
                        width="200"
                        trigger="hover">
                        <a class="student-list-preview">
                          <el-tooltip class="item" effect="dark" content="Add Feedback" placement="top">
                            <i @click="addFeedback(post.sn,post.name,post.surname)" class="icon icon-information"></i>
                          </el-tooltip> 
                        </a>
                        <a class="student-list-preview">
                          <el-tooltip class="item" effect="dark" content="Add Withdrawal" placement="top">
                            <i @click="addWithdrawal(post.sn,post.name,post.surname)" class="icon icon-exit"></i>
                          </el-tooltip>
                        </a>
                        <a class="student-list-preview">
                          <el-tooltip class="item" effect="dark" content="Edit Profile" placement="top">
                            <i @click="editProfile(post.sn)" class="icon icon-edit"></i>
                          </el-tooltip>
                        </a>
                        <a slot="reference" class="student-list-edit">
                          <i class="icon icon-edit"></i>
                        </a>
                      </el-popover>
                      <el-popover
                        placement="top"
                        popper-class="student-list-options"
                        width="200"
                        trigger="hover">
                        <a class="student-list-preview">
                          <el-tooltip class="item" effect="dark" content="View Profile" placement="top">
                            <i @click="viewProfile(post.sn)" class="icon icon-profile"></i>
                          </el-tooltip> 
                        </a>
                        <a class="student-list-preview">
                          <el-tooltip class="item" effect="dark" content="Feedback List" placement="top">
                            <i @click="feedBackList(post.sn,post.name,post.surname)" class="icon icon-lesson"></i>
                          </el-tooltip>
                        </a>
                        <a slot="reference" class="student-list-preview edit-student-list">
                          <i class="icon icon-eye"></i>
                        </a>
                      </el-popover>
                    </div>
                    <figcaption>
                      <ul>
                        <li><h3>USI</h3><span>{{post.usi}}</span></li>
                        <li><h3>Grade</h3><span>{{post.grade}}</span></li>
                        <li><h3>Home Room</h3><span>{{post.room}}</span></li>
                        <li><h3>Class Days</h3>
                          <ul>
                            <li class="card-content-days" v-for="(p, idx) in post.classdays" :key="idx">{{p}}</li>
                          </ul>
                        </li>
                        <li><h3>Guardian</h3><span>{{post.guardian}}</span></li>
                        <li><h3>Phone</h3><span>{{post.phone}}</span></li>
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
    name: "student-list-avatar",
    components: {

    },
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
    data:() => ({
        posts: [],
        pageSize:100
    }),
    computed: {
        listJson: function(){
            return JSON.parse(JSON.stringify(this.parentData));
        }
    },
    watch: {
        parentData: function() {
           this.posts = this.parentData;
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