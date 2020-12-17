<template>
  <md-dialog :md-active.sync="deleteCodeModal" class="modal-window manage-menu">
    <h2 class="modal-title">Delete Code</h2>
    <div class="modal-content">
      <p>
        You are about to delete code SN <span style="color:var(--primary)">"{{ codeSelectedToDelete }}"</span> from
        <span style="color:var(--primary)">"{{ tabSelected }}"</span> tab. Are you sure you want to do this?
      </p>
    </div>
    <md-dialog-actions>
      <md-button class="button medium ed-btn__tertiary" @click="
            deleteCodeModal = false;
            deleteCodeConfirm(codeSelectedToDelete);
          ">Delete</md-button>
      <md-button class="button medium ed-btn__primary" @click="deleteCodeModal = false">Cancel</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
  export default {
    name: "code-book-delete-code-modal",
    components: {},
    // DATA
    data: () => ({
        deleteCodeModal : false,
        codeSelectedToDelete: 0,
        tabSelected: "entry" 
    }),
    props: {
        deleteCodeModalParent: Boolean,
        codeSelectedToDeleteParent: Number,
        tabSelectedParent: String,
        deleteCodeConfirmParent: Function
    },
    watch: {
       deleteCodeModalParent: function(){
            this.deleteCodeModal = true;
        },
        codeSelectedToDeleteParent: function(){
          this.codeSelectedToDelete = this.codeSelectedToDeleteParent;
        },
       tabSelectedParent: function(){
            this.tabSelected = this.tabSelectedParent;
       }
    },
    methods: {
      deleteCodeConfirm(sn){
        this.deleteCodeConfirmParent(sn);
      }
    }
  }

</script>
