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
      <button class="button medium ed-btn__tertiary" @click="
            deleteCodeConfirm(codeSelectedToDelete);
          ">Delete</button>
      <button class="button medium ed-btn__primary" @click="deleteCodeModal = false">Cancel</button>
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
      openModal(){
        this.deleteCodeModal = true;
      },
      deleteCodeConfirm(sn){
        this.deleteCodeConfirmParent(sn);
        this.deleteCodeModal = false;
      }
    }
  }

</script>
