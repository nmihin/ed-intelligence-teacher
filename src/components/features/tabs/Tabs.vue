<template>
  <!-- tabs START-->
  <VueSlickCarousel 
    v-if="roles.length !== 0"
    :key="refresh"
    :accessibility="true"	
    :swipe="true"
    :focusOnSelect="false"
    :arrows="true"
    :dots="false"
    :slidesToShow="6"
    :slidesToScroll="6"
    class="card-tab manage"
  >
    <li v-for="(role, idx) in roles" v-bind:key="idx" v-bind:class="[{ active: selected === idx }]" v-on:click="selected = idx; updateData(idx)"><a href="#">{{idx}}</a></li>
  </VueSlickCarousel>
  <!-- tabs END-->
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "tabs",
  components: {
    VueSlickCarousel,
  },
  props: ['idx'],
  data: function() {
    return {
      refresh: 0,
      roles: [],
      selected: "su_admin"
    };
  },
  methods: {
    loadManageMenuStorage() {
      return JSON.parse(localStorage.getItem('manageMenuJSONData'))
    },
    loadMore() {
        this.axios.get("https://github.com/nmihin/ed-intelligence-teacher__deploy/blob/master/manage-menu.json").then((response) => {
        this.roles = response.data;
        this.refresh++;
      });
    },
    updateData(idx){
        // eslint-disable-next-line no-console
        this.$emit('loadData',idx);
    }
  },
  created() {
    const getDataStorage = this.loadManageMenuStorage();

    if (getDataStorage === null){
      this.loadMore();
    }
    else {
      this.roles = getDataStorage;
    }
  }
};
</script>
