<template>
  <div class="row search-results avatar-view">
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
                      <ActionsListEdit 
                        :indexParent="idx"
                        :postsParent="posts"
                      />
                      <ActionsListView 
                        :indexParent="idx"
                        :postsParent="posts"
                      />
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
import ActionsListEdit from '../../../components/actions/views/ActionsListEdit.vue';
import ActionsListView from '../../../components/actions/views/ActionsListView.vue';

export default {
    name: "student-list-avatar",
    components: {
      ActionsListEdit,
      ActionsListView
    },
    props: {
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