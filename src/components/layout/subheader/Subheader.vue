<template>      
      <!-- Sub Header START-->
      <div class="sub-header">
        <div class="container">
          <div class="row">
            <ul>
              <li><a href="#">Dashboard</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Sub Header END-->
</template>
<script>


export default {
  name: "subheader",
  components: {
 
  },
  data() {
    return {
      breadcrumb: ""
    }
  },
  watch: {
      '$route':{
        handler: (to, from) => {
         //this.breadcrumb = to.name;
        },
          immediate: true
      }
  },
  created() {

  }
}
</script>