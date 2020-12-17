<template>
  <md-dialog :md-active.sync="showPreviewDialog" class="modal-window filter-modal standard">
    <h2 class="modal-title">Allocate to Home Room</h2>
    <div class="modal-content">
      <el-form :model="formHomeRoom" :rules="formHomeRoom.rules" ref="formHomeRoom">
        <el-form-item prop="homeRoom" label="Home Room">
          <el-select v-model="formHomeRoom.homeRoom" placeholder="Home Room">
            <el-option v-for="pre in formHomeRoom.options" :key="pre.value" :label="pre.label" :value="pre.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="modal-footer">
      <button class="button medium ed-btn__secondary" v-on:click="
            saveData();
            showPreviewDialog = false;
            showToast();
          ">
        Save Data
      </button>
      <button class="button medium ed-btn__tertiary" @click="showPreviewDialog = false">
        Cancel
      </button>
    </div>
  </md-dialog>
</template>

<script>
  export default {
    name: "lesson-plan-single-allocate-modal",
    components: {},
    props: {
        showPreviewDialogParent: Boolean
    },
    watch: {
       showPreviewDialogParent: function(){
            this.showPreviewDialog = true;
       }
    },
    // DATA
    data: () => ({
      showPreviewDialog: false,
      formHomeRoom: {
          homeRoom:"",
            rules: {
                homeRoom: [
                    {
                        required: true,
                        message: "Home Room is Required!",
                        trigger: "blur"
                    }                  
                ],
          },
          options: [{
            value: "Home Room 1",
            label: "Home Room 1"
          },
          {
            value: "Home Room 2",
            label: "Home Room 2",
          },
          {
            value: "Home Room 3",
            label: "Home Room 3",
          }
        ],
      }
    }),
    methods: {
        openModal(){
          this.showPreviewDialog = true;
        },
        saveData(){

        },
        showToast() {
        this.$notify({
            group: "notificationAlerts",
            title: "Lesson Plan Followed",
            text:
            "lesson plan for the selected home room XXX have been successfully allocated.",
        });
        }
    }
  }

</script>