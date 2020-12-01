<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid search-results">
        SEARCH RESULTS
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

    }),
    // METHODS
    methods: {
      loadMore() {
        console.log("Loaded!")
      }
    },
    created() {
        this.loadMore();
    }
}
</script>