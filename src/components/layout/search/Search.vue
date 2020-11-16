<template>          
              <!-- Search -->
              <div class="search-box">
                <i class="icon icon-search"
                  v-bind:class="{ active: showMobileMenu }"
                  v-on:click="showMobileMenu = !showMobileMenu"
                ></i>
                <input type="text" placeholder="Search and enter...">
              </div>
              <!-- Search-END-->
              
</template>
<script>
export default {
  name: "search",
  components: {

  },
  data() {
    return {
       showMobileMenu: false
    }
  }
}
</script>