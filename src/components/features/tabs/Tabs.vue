<template>
  <!-- tabs START-->
  <VueSlickCarousel 
    v-if="roles.length !== 0"
    v-bind="settings"
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
      selected: "su_admin",
        settings: {
          "key":"refresh",
          "accessibility":true,	
          "swipe":true,
          "focusOnSelect":false,
          "arrows":true,
          "dots":false,
          "slidesToShow":6,
          "slidesToScroll":6,
          "responsive" : [
            {
              "breakpoint": 1024,
              "settings": {
                "slidesToShow": 4,
                "slidesToScroll": 4,
                "infinite": true
              }
            },
            {
              "breakpoint": 768,
              "settings": {
                "slidesToShow": 5,
                "slidesToScroll": 5,
                "infinite": true
              }
            },
            {
              "breakpoint": 480,
              "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "infinite": true
              }
            }
          ]
        }
    };
  },
  methods: {
    loadManageMenuStorage() {
      return JSON.parse(localStorage.getItem('manageMenuJSONData'))
    },
    loadMore() {
        this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/manage-menu.json").then((response) => {
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
