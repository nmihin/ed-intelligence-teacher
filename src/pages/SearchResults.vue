<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid search-results">
      <div class="row">
          <div class="col-12 col-sm-6 col-md-8">
            <el-select @change="updateSearchTerm()" v-model="searchTerm" placeholder="Search By">
              <el-option
                v-for="item in searchByOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span class="search-by">Search By</span>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <el-input @keyup.enter.native="searchFilter()" v-on:keyup.enter="searchFilter" placeholder="Search by keyword..." v-model="searchName">
              <el-button  @click="searchFilter()" slot="append" icon="icon icon-search"></el-button>
            </el-input>
          </div>
      </div>
      <div class="row">
        <!-- Box -->
        <div v-for="(post, idx) in posts" :key="idx" class="col-12 col-md-6 col-lg-4 ed_card-boxes">
          <div class="card-box">
            <div class="card-title">
                <h2>{{post.name}} {{post.surname}}</h2>
            </div>
            <div class="card-content">
                <figure>
                  <img v-if="!post.avatar" class="card-picture" src="../assets/images/avatar-aux.png" />
                  <img v-if="post.avatar" class="card-picture" :src="post.avatar" />
                  <div class="card-element">
                    <a href="#" class="edit-search">
                      <i class="icon icon-edit"></i>
                    </a>
                    <a href="#" class="delete-search">
                      <i class="icon icon-delete"></i>
                    </a>
                  </div>
                  <figcaption>
                    <ul>
                      <li><h3>USI</h3><span>{{post.usi}}</span></li>
                      <li><h3>Grade</h3><span>{{post.grade}}</span></li>
                      <li><h3>Guardian</h3><span>{{post.guardian}}</span></li>
                      <li><h3>Phone</h3><span>{{post.phone}}</span></li>
                    </ul>
                  </figcaption>
                </figure>
            </div>
          </div>
        </div>
        <div class="no-results" v-if="posts.length === 0"><h3>No results found...</h3></div>
      </div>
      <div v-if="busy" class="preloader">
        <span><img src="../assets/images/preloader.gif" /> Loading...</span>
      </div>
    </div>
  </div>
  <!-- main-content-END -->
</template>

<script>
export default {
    name: "search-results",
    components: {
    },
    // DATA
    data: () => ({
      searchQuery:"",
      searchName:"",
      posts:[],
      searchTerm: "name",
       searchByOptions: [ {
          value: "name",
          label: 'First Name'
        }, {
          value: "surname",
          label: 'Last Name'
        }, 
        {
          value: "usi",
          label: 'USI'
        },
        {
          value: "phoen",
          label: 'Home Phone Number'
        }, {
          value: "email",
          label: 'Email Address'
        }, {
          value: "guardian",
          label: 'Guardian Name'
        }
        ],
    }),
    // METHODS
    methods: {
      loadMore() {
        this.searchQuery = this.$route.params.searchResults;
        this.busy = true;

        this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-list.json").then((response) => {

              this.posts = response.data.filter(data => data.name.toLowerCase().includes(this.searchQuery.toLowerCase()));

              this.busy = false;
        }).catch((error) => error.response.data)

      },
      filterSearchTerm(dataSource){
         if(this.searchTerm == "name")
          this.posts = dataSource.filter(data => data.name.toLowerCase().includes(this.searchName.toLowerCase()));
         if(this.searchTerm == "surname")
          this.posts = dataSource.filter(data => data.surname.toLowerCase().includes(this.searchName.toLowerCase()));
         if(this.searchTerm == "usi")
          this.posts = dataSource.filter(data => data.usi.toString().toLowerCase().includes(this.searchName.toLowerCase()));
         if(this.searchTerm == "phone")
          this.posts = dataSource.filter(data => data.phone.toLowerCase().includes(this.searchName.toLowerCase()));
         if(this.searchTerm == "email")
          this.posts = dataSource.filter(data => data.email.toLowerCase().includes(this.searchName.toLowerCase()));
         if(this.searchTerm == "guardian")
          this.posts = dataSource.filter(data => data.guardian.toLowerCase().includes(this.searchName.toLowerCase()));
      },
      searchFilter(){
        this.busy = true;
        const studentListStorage = this.loadStudentlistStorage();

        if(studentListStorage){
            this.filterSearchTerm(studentListStorage);
        }
        else {
          this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-list.json").then((response) => {

              this.filterSearchTerm(studentListStorage);

                this.busy = false;
          }).catch((error) => error.response.data)
        }

        this.busy = false;
      },
      // LOCALSTORAGE
      loadStudentlistStorage() {
        return JSON.parse(localStorage.getItem("studentListStorageJSONData"));
      },
      updateSearchTerm() {


      },
    },
    created() {
        this.loadMore();
    }
}
</script>