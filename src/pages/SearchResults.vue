<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid search-results">
      <div class="row">
        <!-- Box -->
        <div v-for="(post, idx) in posts" :key="idx" class="col-lg-6 col-md-12 col-sm-6 col-xs-12">
          <div class="card-box">
            <div class="card-title">
                <h2>{{post.name}}</h2>
                <div class="card-element">
                  <a href="#" class="edit">
                    <i class="icon icon-edit"></i>
                  </a>
                  <a href="#" class="delete">
                    <i class="icon icon-delete"></i>
                  </a>
                </div>
            </div>
            <div class="card-content">
                <figure>
                  <img :src="post.avatar" />
                  <figcaption>
                    <ul>
                      <li>USI:{{post.usi}}</li>
                      <li>Grade:{{post.grade}}</li>
                      <li>Guardian:{{post.guardian}}</li>
                      <li>Phone {{post.phone}}</li>
                    </ul>
                  </figcaption>
                </figure>
            </div>
          </div>
        </div>
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
      posts:[]
    }),
    // METHODS
    methods: {
      loadMore() {
        this.searchQuery = this.$route.params.searchResults;
        this.busy = true;

        this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-list.json").then((response) => {

              this.posts = response.data;
              
              this.busy = false;
        }).catch((error) => error.response.data)

      }
    },
    created() {
        this.loadMore();
    }
}
</script>