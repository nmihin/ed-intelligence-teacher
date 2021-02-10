<template>
  <md-dialog :md-active.sync="editCodeModal" class="modal-window manage-menu">
    <h2 class="modal-title">Edit Code</h2>
    <div class="modal-content">
      <el-form :model="formEditCode" :rules="formEditCode.rules" ref="formEditCode">
        <!-- Menu Information -->
        <div class="card-content">
          <div class="row">
            <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-6" prop="codeReadyForEditCode" label="Code">
              <el-input v-model="formEditCode.codeReadyForEditCode" placeholder="Code"></el-input>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-6" prop="codeReadyForEditCategory" label="Category">
              <el-input v-model="formEditCode.codeReadyForEditCategory" placeholder="Category"></el-input>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-12" prop="codeReadyForEditCodename" label="Code Name">
              <el-input type="textarea" v-model="formEditCode.codeReadyForEditCodename" placeholder="Code Name"></el-input>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-12" prop="codeReadyForEditUsageGuidelines" label="Usage Guidelines">
              <el-input type="textarea" v-model="formEditCode.codeReadyForEditUsageGuidelines" placeholder="Usage Guidelines"></el-input>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-12" prop="codeReadyForEditAdditionalGuidelines" label="Additional Guidelines">
              <el-input type="textarea" v-model="formEditCode.codeReadyForEditAdditionalGuidelines" placeholder="Additional Guidelines"></el-input>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'attendance'" class="col-12" prop="codeReadyForEditStatus" label="Attendance Status">
              <el-radio-group v-model="formEditCode.codeReadyForEditStatus">
                <el-radio label="Absent">Absent</el-radio>
                <el-radio label="Present">Present</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'attendance' || tabSelected === 'absentreason'" class="col-6" prop="codeReadyForEditADTValue" label="ADT Value">
              <el-input v-model="formEditCode.codeReadyForEditADTValue" placeholder="ADT Value"></el-input>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'attendance' || tabSelected === 'absentreason'" class="col-6" prop="codeReadyForEditADTDecriptor" label="ADT Decriptor">
              <el-input v-model="formEditCode.codeReadyForEditADTDecriptor" placeholder="ADT Value Descriptor"></el-input>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'attendance' || tabSelected === 'absentreason'" class="col-12" prop="codeReadyForEditDescription" label="Description">
              <el-input type="textarea" v-model="formEditCode.codeReadyForEditDescription" placeholder="Full Description"></el-input>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
    <md-dialog-actions>
      <button class="button medium ed-btn__secondary" @click="validateEditForm()">Save</button>
      <button class="button medium ed-btn__tertiary" @click="editCodeModal = false">Cancel</button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
  export default {
    name: "code-book-edit-code-modal",
    components: {},
    // DATA
    data: () => ({
        editCodeModal : false,
        tabSelected: "entry", 
        formEditCode: {
            // EDIT CODE
            codeReadyForEditSN: 0,
            codeReadyForEditCode: "",
            codeReadyForEditCategory: "",
            codeReadyForEditCodename: "",
            codeReadyForEditUsageGuidelines: "",
            codeReadyForEditAdditionalGuidelines: "",
            codeReadyForEditADTValue: "",
            codeReadyForEditADTDecriptor: "",   
            codeReadyForEditDescription: "",
            codeReadyForEditStatus: "",
            rules: {
                codeReadyForEditCode: [
                    {
                        required: true,
                        message: "Code Label is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForEditCategory: [
                    {
                        required: true,
                        message: "Code Category is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForEditCodename: [
                    {
                        required: true,
                        message: "Code Codename is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForEditUsageGuidelines: [
                    {
                        required: true,
                        message: "Usage Guidelines is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForEditAdditionalGuidelines: [
                    {
                        required: true,
                        message: "Additional Guidelines is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForEditADTValue: [
                    {
                        required: true,
                        message: "ADT Value is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForEditADTDecriptor: [
                    {
                        required: true,
                        message: "ADT Decriptor is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForEditDescription: [
                    {
                        required: true,
                        message: "Description is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForEditStatus: [
                    {
                        required: true,
                        message: "Status is Required!",
                        trigger: "blur"
                    }                  
                ],
            }
        },
    }),
    props: {
        editCodeModalParent: Boolean,
        tabSelectedParent: String,
        editFormSaveParent: Function,
        parentFormData: Object
    },
    watch: {
       editCodeModalParent: function(){
            this.editCodeModal = true;
       },      
       tabSelectedParent: function(){
            this.tabSelected = this.tabSelectedParent;
       },
       parentFormData: function(){
            this.formEditCode = this.parentFormData;
       }
    },
    methods: {
        validateEditForm(){
            return new Promise((resolve) => {
                this.$refs.formEditCode.validate((valid) => {
                this.$emit('on-validate', valid, this.model)
                resolve(valid);
                if(valid)
                    this.editFormSave(this.formEditCode);
                });
            })
        },
        editFormSave(formEditCode){
          this.editFormSaveParent(formEditCode)
          this.editCodeModal = false;
        },
        openModal(){
          this.editCodeModal = true;
        }
    }
  }

</script>
