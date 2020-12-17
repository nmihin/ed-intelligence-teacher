<template>
  <md-dialog :md-active.sync="addCodeModal" class="modal-window manage-menu">
    <h2 class="modal-title">Add Code</h2>
    <div class="modal-content">
      <el-form :model="formAddCode" :rules="formAddCode.rules" ref="formAddCode">
        <!-- Menu Information -->
        <div class="card-content">
          <div class="row">
            <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-6" prop="codeReadyForAddCode" label="Code">
              <el-input @input="updateForm('codeReadyForAddCode', formAddCode.codeReadyForAddCode)" v-model="formAddCode.codeReadyForAddCode" placeholder="Code"></el-input>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-6" prop="codeReadyForAddCategory" label="Category">
              <el-input @input="updateForm('codeReadyForAddCategory', formAddCode.codeReadyForAddCategory)" v-model="formAddCode.codeReadyForAddCategory" placeholder="Category"></el-input>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-12" prop="codeReadyForAddCodename" label="Code Name">
              <el-input type="textarea" @input="updateForm('codeReadyForAddCodename', formAddCode.codeReadyForAddCodename)" v-model="formAddCode.codeReadyForAddCodename" placeholder="Code Name"></el-input>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-12" prop="codeReadyForAddUsageGuidelines" label="Usage Guidelines">
              <el-input type="textarea" @input="updateForm('codeReadyForAddUsageGuidelines', formAddCode.codeReadyForAddUsageGuidelines)" v-model="formAddCode.codeReadyForAddUsageGuidelines" placeholder="Usage Guidelines"></el-input>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-12" prop="codeReadyForAddAdditionalGuidelines" label="Additional Guidelines">
              <el-input type="textarea" @input="updateForm('codeReadyForAddAdditionalGuidelines', formAddCode.codeReadyForAddAdditionalGuidelines)" v-model="formAddCode.codeReadyForAddAdditionalGuidelines" placeholder="Additional Guidelines"></el-input>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'attendance'" class="col-12" prop="codeReadyForAddStatus" label="Attendance Status">
              <el-radio-group @change="updateForm('codeReadyForAddStatus', formAddCode.codeReadyForAddStatus)" v-model="formAddCode.codeReadyForAddStatus">
                <el-radio label="Absent">Absent</el-radio>
                <el-radio label="Present">Present</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'attendance' || tabSelected === 'absentreason'" class="col-6" prop="codeReadyForAddADTValue" label="ADT Value">
              <el-input @input="updateForm('codeReadyForAddADTValue', formAddCode.codeReadyForAddADTValue)" v-model="formAddCode.codeReadyForAddADTValue" placeholder="ADT Value"></el-input>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'attendance' || tabSelected === 'absentreason'" class="col-6" prop="codeReadyForAddADTDecriptor" label="ADT Decriptor">
              <el-input @input="updateForm('codeReadyForAddADTDecriptor', formAddCode.codeReadyForAddADTDecriptor)" v-model="formAddCode.codeReadyForAddADTDecriptor" placeholder="ADT Value Descriptor"></el-input>
            </el-form-item>
            <el-form-item v-if="tabSelected === 'attendance' || tabSelected === 'absentreason'" class="col-12" prop="codeReadyForAddDescription" label="Description">
              <el-input type="textarea" @input="updateForm('codeReadyForAddDescription', formAddCode.codeReadyForAddDescription)" v-model="formAddCode.codeReadyForAddDescription" placeholder="Full Description"></el-input>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
    <md-dialog-actions>
      <md-button class="button medium ed-btn__secondary" @click="validateAddForm()">Save</md-button>
      <md-button class="button medium ed-btn__tertiary" @click="addCodeModal = false">Cancel</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
  export default {
    name: "code-book-add-code-modal",
    components: {},
    // DATA
    data: () => ({
      addCodeModal: false,
      tabSelected: "entry",
        formAddCode: {
            //ADD CODE
            codeReadyForAddSN: 0,
            codeReadyForAddCode: "",
            codeReadyForAddCategory: "",
            codeReadyForAddCodename: "",
            codeReadyForAddUsageGuidelines: "",
            codeReadyForAddAdditionalGuidelines: "",
            codeReadyForAddADTValue: "",
            codeReadyForAddADTDecriptor: "",   
            codeReadyForAddDescription: "",
            codeReadyForAddStatus: "",
            rules: {
                codeReadyForAddCode: [
                    {
                        required: true,
                        message: "Code Label is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForAddCategory: [
                    {
                        required: true,
                        message: "Code Category is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForAddCodename: [
                    {
                        required: true,
                        message: "Code Codename is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForAddUsageGuidelines: [
                    {
                        required: true,
                        message: "Usage Guidelines is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForAddAdditionalGuidelines: [
                    {
                        required: true,
                        message: "Additional Guidelines is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForAddADTValue: [
                    {
                        required: true,
                        message: "ADT Value is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForAddADTDecriptor: [
                    {
                        required: true,
                        message: "ADT Decriptor is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForAddDescription: [
                    {
                        required: true,
                        message: "Description is Required!",
                        trigger: "blur"
                    }                  
                ],
                codeReadyForAddStatus: [
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
        addCodeModalParent: Boolean,
        tabSelectedParent: String,
        addFormSaveParent: Function,
    },
    watch: {
       addCodeModalParent: function(){
            this.addCodeModal = this.addCodeModalParent;
       },
       tabSelectedParent: function(){
            this.tabSelected = this.tabSelectedParent;
       }
    },
    methods: {
        validateAddForm(){
            return new Promise((resolve) => {
                this.$refs.formAddCode.validate((valid) => {
                this.$emit('on-validate', valid, this.model)
                resolve(valid);
                if(valid)
                    this.addFormSave(this.formAddCode);
                });
            })
        },
        updateForm(input,value){
             this.formAddCode[input] = value;
        },
        addFormSave(formAddCode){
          this.addFormSaveParent(formAddCode)
          this.addCodeModal = false;
        }
    }
  }

</script>
