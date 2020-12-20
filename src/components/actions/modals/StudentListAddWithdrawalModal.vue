<template>
  <md-dialog :md-active.sync="addWithdrawalModal" class="modal-window feedback-list">
    <h2 class="modal-title">Add Withdrawal for {{feedbackName}}</h2>
    <div class="modal-content">
      <el-form :model="formAddWithdrawal" :rules="formAddWithdrawal.rules" ref="formAddWithdrawal">
        <div class="row">
          <el-form-item label="Withdrawal Type" prop="withdrawalType" class="col-12 col-md-6">
            <el-select @change="updateWithdrawalForm('withdrawalType', formAddWithdrawal.withdrawalType)" v-model="formAddWithdrawal.withdrawalType" placeholder="Withdrawal Type">
              <el-option v-for="pre in formAddWithdrawalOptions.withdrawalTypeOptions" :key="pre.value" :label="pre.label" :value="pre.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Withdrawal Date" prop="withdrawalDate" class="col-12 col-md-6">
            <i class="icon icon-box-plan"></i>
            <el-date-picker @change="updateWithdrawalForm('withdrawalDate', formAddWithdrawal.withdrawalDate)" prop="birthDate" v-model="formAddWithdrawal.withdrawalDate" type="date" format="dd-MM-yyyy" value-format="yyyy-MM-dd" placeholder="Pick a date">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="Witdrawal Code" prop="withdrawalCode" class="col-12 col-md-12">
            <el-select @change="updateWithdrawalForm('withdrawalCode', formAddWithdrawal.withdrawalCode)" v-model="formAddWithdrawal.withdrawalCode" placeholder="Withdrawal Code">
              <el-option v-for="pre in formAddWithdrawalOptions.withdrawalCodeOptions" :key="pre.value" :label="pre.label" :value="pre.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Supporting Document" class="col-12 col-md-6">
            <el-upload action="https://educationalschool.iteg.com.np/files" @change="updateWithdrawalForm('supportingDocument', formAddWithdrawal.supportingDocument)" v-model="formAddWithdrawal.supportingDocument" multiple>
              <el-button class="button medium ed-btn__primary">
                Choose A File
              </el-button>
            </el-upload>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="modal-footer">
      <button class="button medium ed-btn__primary" @click="validateAddWithdrawal()">
        Add
      </button>
      <button class="button medium ed-btn__tertiary" @click="addWithdrawalModal = false">
        Cancel
      </button>
    </div>
  </md-dialog>
</template>

<script>
  export default {
    name: "student-list-add-withdrawal-modal",
    components: {},
    props: {
        addWithdrawalModalParent: Boolean
    },
    watch: {
       addWithdrawalModalParent: function(){
            this.addWithdrawalModal = true;
       }
    },
    // DATA
    data: () => ({
      addWithdrawalModal: false,
      sn:0,
      feedbackName:"",
      formAddWithdrawal: {
        withdrawalType: "",
        withdrawalDate: "",
        withdrawalCode: "",
        supportingDocument: [],
        rules: {
          withdrawalType: [{
            required: true,
            message: "Withdrawal Type Required!",
            trigger: "blur",
          }],
          withdrawalDate: [{
            required: true,
            message: "Withdrawal Date Required!",
            trigger: "blur",
          }],
          withdrawalCode: [{
            required: true,
            message: "Withdrawal Code Required!",
            trigger: "blur",
          }]
        }
      },
      formAddWithdrawalOptions: {
        withdrawalTypeOptions: [{
            value: "Credential",
            label: "Credential"
          },
          {
            value: "Exited",
            label: "Exited"
          },
          {
            value: "Discharge",
            label: "Discharge"
          }
        ],
        withdrawalCodeOptions: [{
            value: "Code1",
            label: "Code1"
          },
          {
            value: "Code2",
            label: "Code2"
          },
          {
            value: "Code3",
            label: "Code3"
          }
        ]
      }
    }),
    methods: {
        validateAddWithdrawal() {
          return new Promise((resolve) => {
            this.$refs.formAddWithdrawal.validate((valid) => {
              this.$emit("on-validate", valid, this.model);
              resolve(valid);
              if (valid) {
                this.formAddWithdrawal.withdrawalType = "";
                this.formAddWithdrawal.withdrawalDate = "";
                this.formAddWithdrawal.withdrawalCode = "";
                this.formAddWithdrawal.supportingDocument = [];
                // TO ADD SUBMIT 
                this.addWithdrawalModal = false;
              }
            });
          });
        },
        updateWithdrawalForm(input, value) {
          this.formAddWithdrawal[input] = value;
        },
        openModal(sn,name,surname){
          this.feedbackName = name + " " + surname;
          this.addWithdrawalModal = true;
        }
    }
  }
</script>