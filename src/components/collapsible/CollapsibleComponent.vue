<template>
    <div :class="{ active: isActiveModifications }" class="card-box collapsible">
        <slot></slot>
        <div @click="toggleCollapsible()" class="expand-panel collapsed">
            <span v-if="!isActiveModifications">Expand</span>
            <span v-if="isActiveModifications">Collapse</span>
            <i class="icon icon-arrow-gray"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: "collapsible-component",
  components: {

  },
  data() {
    return {
        isActiveModifications: false
    };
  },
  props: {
      toggleCollapsibleParent: Function
  },
  methods: {
      toggleCollapsible(){
          if(this.isActiveModifications)
            this.isActiveModifications=false
          else
            this.isActiveModifications=true

         this.toggleCollapsibleParent(this.isActiveModifications)
      }

  }
}
</script>