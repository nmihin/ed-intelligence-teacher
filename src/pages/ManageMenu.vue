<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid">
      <div class="row side-by-side">
        <div class="col-xs-6 col-md-6 side">
          <div class="card-boxes manage-menu">
            <div class="card-header"><i class="icon icon-profile"></i><h2 class="card-title">Assigned Menu Of Developer</h2></div>
            <!--NESTABLE-->
            <VueNestable
              v-model="nestableItems1"
              cross-list
              group="cross"
              class="card-box"
            >
              <VueNestableHandle slot-scope="{ item }" :item="item">
                <i class="icon icon-profile"></i> {{item.text}} <a class="card-option" href="#"><i class="icon icon-delete"></i></a>
              </VueNestableHandle>
            </VueNestable>
          </div>
        </div>
        <div class="col-xs-6 col-md-6 side">
          <div class="card-boxes manage-menu">
            <div class="card-header"><i class="icon icon-profile"></i><h2 class="card-title">Manage Menu List</h2></div>
            <!--NESTABLE-->
            <VueNestable
              v-model="nestableItems2"
              cross-list
              group="cross"
              class="card-box"
            >
              <VueNestableHandle slot-scope="{ item }" :item="item">
                <i class="icon icon-profile"></i>{{ item.text }}<a class="card-option" href="#"><i class="icon icon-edit"></i></a>
              </VueNestableHandle>
            </VueNestable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueNestable, VueNestableHandle } from "vue-nestable";

export default {
  name: "manage-menu",
  components: {
    VueNestable,
    VueNestableHandle,
  },
  data() {
    return {
      nestableItems1: [
        {
          id: 0,
          text: "Andy",
        },
        {
          id: 1,
          text: "Harry",
          children: [
            {
              id: 2,
              text: "David",
            },
          ],
        },
        {
          id: 3,
          text: "Lisa",
        },
        {
          id: 5,
          text: "Ricky",
        },
        {
          id: 6,
          text: "Nicky",
        },
        {
          id: 7,
          text: "Marky",
        },
        {
          id: 8,
          text: "Steve",
        },
        {
          id: 9,
          text: "Anne",
        },
        {
          id: 10,
          text: "John",
        },
        {
          id: 11,
          text: "Sam",
        },
        {
          id: 12,
          text: "Danny",
        },
        {
          id: 13,
          text: "Mary",
        },
        {
          id: 14,
          text: "Jane",
        },
        {
          id: 15,
          text: "Skylar",
        },
        {
          id: 16,
          text: "Nancy",
        },
        {
          id: 17,
          text: "Remy",
        },
        {
          id: 18,
          text: "Daphne",
        },
        {
          id: 19,
          text: "Livy",
        },
        {
          id: 20,
          text: "Sammy",
        },
      ],
      nestableItems2: [
        {
          id: 4,
          text: "Mike",
        },
        {
          id: 5,
          text: "Edgar",
        },
      ],
    };
  },
};
</script>
