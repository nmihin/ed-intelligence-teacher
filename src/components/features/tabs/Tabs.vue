<template>
      <!-- tabs START-->
        <VueSlickCarousel :arrows="true" :dots="false" :slidesToShow="6" :slidesToScroll="6" class="card-tab manage">
              <li><a href="#">Su Admin</a></li>
              <li><a href="#">Admin</a></li>
              <li><a href="#">Board</a></li>
              <li><a href="#">Teacher</a></li>
              <li class="active"><a href="#">Student</a></li>
              <li><a href="#">Parent</a></li>
              <li><a href="#">Developer</a></li>
              <li><a href="#">New Role</a></li>
              <li><a href="#">Editor</a></li>
              <li><a href="#">Superadmin</a></li>
              <li><a href="#">Contributor</a></li>
              <li><a href="#">Tab 12</a></li>
              <li><a href="#">Tab 13</a></li>
              <li><a href="#">Tab 14</a></li>
              <li><a href="#">Tab 15</a></li>
              <li><a href="#">Tab 16</a></li>
        </VueSlickCarousel>
      <!-- tabs END-->
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel';
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
    
    export default {
        name: 'tabs',
        components: {
            VueSlickCarousel
        },
        data: function () {
            return {

            }
        }
    }
</script>