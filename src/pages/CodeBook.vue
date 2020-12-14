<template>
  <!-- Main Content -->
  <div class="main-content">
    <!-- START ADD CODE MODAL -->
    <md-dialog
                :md-active.sync="addCodeModal"
                class="modal-window manage-menu"
              >
                <h2 class="modal-title">Add Code</h2>
                <div class="modal-content">
                  <el-form :model="formAddCode" :rules="formAddCode.rules" ref="formAddCode">
                  <!-- Menu Information -->
                  <div class="card-content">
                    <div class="row">
                      <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-6" prop="codeReadyForAddCode" label="Code">
                        <el-input
                          @input="updateForm('codeReadyForAddCode', formAddCode.codeReadyForAddCode)"  v-model="formAddCode.codeReadyForAddCode"
                          placeholder="Code"
                        ></el-input>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-6" prop="codeReadyForAddCategory" label="Category">
                        <el-input
                          @input="updateForm('codeReadyForAddCategory', formAddCode.codeReadyForAddCategory)"  v-model="formAddCode.codeReadyForAddCategory"
                          placeholder="Category"
                        ></el-input>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-12" prop="codeReadyForAddCodename" label="Code Name">
                        <el-input
                         type="textarea"
                          @input="updateForm('codeReadyForAddCodename', formAddCode.codeReadyForAddCodename)"  v-model="formAddCode.codeReadyForAddCodename"
                          placeholder="Code Name"
                        ></el-input>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-12" prop="codeReadyForAddUsageGuidelines" label="Usage Guidelines">
                        <el-input
                          type="textarea"
                          @input="updateForm('codeReadyForAddUsageGuidelines', formAddCode.codeReadyForAddUsageGuidelines)"  v-model="formAddCode.codeReadyForAddUsageGuidelines"
                          placeholder="Usage Guidelines"
                        ></el-input>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-12" prop="codeReadyForAddAdditionalGuidelines" label="Additional Guidelines">
                        <el-input
                          type="textarea"
                          @input="updateForm('codeReadyForAddAdditionalGuidelines', formAddCode.codeReadyForAddAdditionalGuidelines)"  v-model="formAddCode.codeReadyForAddAdditionalGuidelines"
                          placeholder="Additional Guidelines"
                        ></el-input>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'attendance'" class="col-12" prop="codeReadyForAddStatus" label="Attendance Status">
                            <el-radio-group @change="updateForm('codeReadyForAddStatus', formAddCode.codeReadyForAddStatus)" v-model="formAddCode.codeReadyForAddStatus">
                                <el-radio label="Absent">Absent</el-radio>
                                <el-radio label="Present">Present</el-radio>
                            </el-radio-group>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'attendance' || tabSelected === 'absentreason'" class="col-6" prop="codeReadyForAddADTValue" label="ADT Value">
                        <el-input
                          @input="updateForm('codeReadyForAddADTValue', formAddCode.codeReadyForAddADTValue)"  v-model="formAddCode.codeReadyForAddADTValue"
                          placeholder="ADT Value"
                        ></el-input>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'attendance' || tabSelected === 'absentreason'" class="col-6" prop="codeReadyForAddADTDecriptor" label="ADT Decriptor">
                        <el-input
                          @input="updateForm('codeReadyForAddADTDecriptor', formAddCode.codeReadyForAddADTDecriptor)"  v-model="formAddCode.codeReadyForAddADTDecriptor"
                          placeholder="ADT Value Descriptor"
                        ></el-input>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'attendance' || tabSelected === 'absentreason'" class="col-12" prop="codeReadyForAddDescription" label="Description">
                        <el-input
                          type="textarea"
                          @input="updateForm('codeReadyForAddDescription', formAddCode.codeReadyForAddDescription)"  v-model="formAddCode.codeReadyForAddDescription"
                          placeholder="Full Description"
                        ></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  </el-form>
                </div>
                <md-dialog-actions>
                        <md-button
                          class="button medium ed-btn__secondary"
                          @click="validate()"
                          >Save</md-button
                        >
                        <md-button
                          class="button medium ed-btn__tertiary"
                          @click="addCodeModal = false"
                          >Cancel</md-button
                        >
                </md-dialog-actions>
    </md-dialog>
    <!-- END ADD CODE MODAL -->
    <!-- START EDIT CODE MODAL -->
    <md-dialog
                :md-active.sync="editCodeModal"
                class="modal-window manage-menu"
              >
                <h2 class="modal-title">Edit Code</h2>
                <div class="modal-content">
                  <el-form :model="formEditCode" :rules="formEditCode.rules" ref="formEditCode">
                  <!-- Menu Information -->
                  <div class="card-content">
                    <div class="row">
                      <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-6" prop="codeReadyForEditCode" label="Code">
                        <el-input
                          v-model="formEditCode.codeReadyForEditCode"
                          placeholder="Code"
                        ></el-input>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-6" prop="codeReadyForEditCategory" label="Category">
                        <el-input
                          v-model="formEditCode.codeReadyForEditCategory"
                          placeholder="Category"
                        ></el-input>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-12" prop="codeReadyForEditCodename" label="Code Name">
                        <el-input
                         type="textarea"
                          v-model="formEditCode.codeReadyForEditCodename"
                          placeholder="Code Name"
                        ></el-input>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-12" prop="codeReadyForEditUsageGuidelines" label="Usage Guidelines">
                        <el-input
                          type="textarea"
                          v-model="formEditCode.codeReadyForEditUsageGuidelines"
                          placeholder="Usage Guidelines"
                        ></el-input>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'entry' || tabSelected === 'exit'" class="col-12" prop="codeReadyForEditAdditionalGuidelines" label="Additional Guidelines">
                        <el-input
                          type="textarea"
                          v-model="formEditCode.codeReadyForEditAdditionalGuidelines"
                          placeholder="Additional Guidelines"
                        ></el-input>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'attendance'" class="col-12" prop="codeReadyForEditStatus" label="Attendance Status">
                            <el-radio-group v-model="formEditCode.codeReadyForEditStatus">
                                <el-radio label="Absent">Absent</el-radio>
                                <el-radio label="Present">Present</el-radio>
                            </el-radio-group>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'attendance' || tabSelected === 'absentreason'" class="col-6" prop="codeReadyForEditADTValue" label="ADT Value">
                        <el-input
                          v-model="formEditCode.codeReadyForEditADTValue"
                          placeholder="ADT Value"
                        ></el-input>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'attendance' || tabSelected === 'absentreason'" class="col-6" prop="codeReadyForEditADTDecriptor" label="ADT Decriptor">
                        <el-input
                          v-model="formEditCode.codeReadyForEditADTDecriptor"
                          placeholder="ADT Value Descriptor"
                        ></el-input>
                      </el-form-item>
                      <el-form-item v-if="tabSelected === 'attendance' || tabSelected === 'absentreason'" class="col-12" prop="codeReadyForEditDescription" label="Description">
                        <el-input
                          type="textarea"
                          v-model="formEditCode.codeReadyForEditDescription"
                          placeholder="Full Description"
                        ></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  </el-form>
                </div>
                <md-dialog-actions>
                        <md-button
                          class="button medium ed-btn__secondary"
                          @click="validateEditForm()"
                          >Save</md-button
                        >
                        <md-button
                          class="button medium ed-btn__tertiary"
                          @click="editCodeModal = false"
                          >Cancel</md-button
                        >
                </md-dialog-actions>
    </md-dialog>
    <!-- END EDIT CODE MODAL -->
    <!-- DELETE CODE START -->
    <md-dialog
      :md-active.sync="deleteCodeModal"
      class="modal-window manage-menu"
    >
      <h2 class="modal-title">Delete Code</h2>
      <div class="modal-content">
        <p>
          You are about to delete code SN <span style="color:var(--primary)"
            >"{{ codeSelectedToDelete }}"</span
          >  from
          <span style="color:var(--primary)"
            >"{{ tabSelected }}"</span
          > tab. Are you sure you want to do this?
        </p>
      </div>
      <md-dialog-actions>
        <md-button
          class="button medium ed-btn__tertiary"
          @click="
            deleteCodeModal = false;
            deleteCodeConfirm();
          "
          >Delete</md-button
        >
        <md-button
          class="button medium ed-btn__primary"
          @click="deleteCodeModal = false"
          >Cancel</md-button
        >
      </md-dialog-actions>
    </md-dialog>
    <!-- DELETE CODE END -->
    <div class="container-fluid code-book">
        <div class="row">
            <el-tabs type="border-card" @tab-click="handleClick">
                <el-tab-pane label="entry">
                    <span slot="label" class="label-icon"><i class="icon icon-entry"></i> Entry</span>
                    <CodeBookTabEntry 
                    v-if="tabSelected === 'entry'"
                    :parentData="postsTab" 
                    :addNewCodeParent = "addNewCode"
                    :searchFilterParent="searchFilter"
                    :updatePagination="updatePagination"
                    :deleteSelectedCodeParent="deleteSelectedCode"
                    :editSelectedCodeParent="editSelectedCode"
                    />
                </el-tab-pane>
                <el-tab-pane label="exit">
                    <span slot="label" class="label-icon"><i class="icon icon-exit"></i> Exit</span>
                    <CodeBookTabExit 
                    v-if="tabSelected === 'exit'"
                    :parentData="postsTab" 
                    :addNewCodeParent = "addNewCode"
                    :searchFilterParent="searchFilter"
                    :updatePagination="updatePagination"
                    :deleteSelectedCodeParent="deleteSelectedCode"
                    :editSelectedCodeParent="editSelectedCode"
                    />
                </el-tab-pane>
                <el-tab-pane label="attendance">
                    <span slot="label" class="label-icon"><i class="icon icon-attendence"></i> Attendance</span>
                    <CodeBookTabAttendance
                    v-if="tabSelected === 'attendance'"
                    :parentData="postsTab" 
                    :addNewCodeParent = "addNewCode"
                    :searchFilterParent="searchFilter"
                    :updatePagination="updatePagination"
                    :deleteSelectedCodeParent="deleteSelectedCode"
                    :editSelectedCodeParent="editSelectedCode"
                    />
                </el-tab-pane>
                <el-tab-pane label="absentreason">
                    <span slot="label" class="label-icon"><i class="icon icon-absence"></i> Absent Reason</span>
                    <CodeBookTabAbsentReason
                    v-if="tabSelected === 'absentreason'"
                    :parentData="postsTab" 
                    :addNewCodeParent = "addNewCode"
                    :searchFilterParent="searchFilter"
                    :updatePagination="updatePagination"
                    :deleteSelectedCodeParent="deleteSelectedCode"
                    :editSelectedCodeParent="editSelectedCode"
                    />
                </el-tab-pane>
            </el-tabs>
        </div>
        <el-pagination
            background
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :page-size="pageSize"
            :total="totalSize">
        </el-pagination>
        <div v-if="busy" class="preloader">
            <span><img src="../assets/images/preloader.gif" /> Loading...</span>
        </div>
    </div>
  </div>
  <!-- main-content-END -->
</template>

<script>
// TABS
import CodeBookTabEntry from './CodeBookTabs/CodeBookTabEntry.vue';
import CodeBookTabExit from './CodeBookTabs/CodeBookTabExit.vue';
import CodeBookTabAttendance from './CodeBookTabs/CodeBookTabAttendance.vue';
import CodeBookTabAbsentReason from './CodeBookTabs/CodeBookTabAbsentReason.vue';

export default {
    name: "code-book",
    components: {
        CodeBookTabEntry,
        CodeBookTabExit,
        CodeBookTabAttendance,
        CodeBookTabAbsentReason
    },
    // DATA
    data: () => ({
        filtered: [],
        search: '',
        page: 1,
        pageSize: 10,
        totalSize: 0,
        posts: [],
        postsTab: [],
        postsTabExit: [],
        postsTabAttendance: [],
        postsTabAbsentReason: [],
        busy: true,
        value: 10,
        searchName:"",
        tabSelected: "entry",
        codeSelectedToDelete: 0,
        codeSelectedToEdit:0,
        tabIndex: 0,
        addCodeModal: false,
        deleteCodeModal: false,
        editCodeModal: false,
        newCode: [],
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
        recordsOptions: [{
            value: 5,
            label: '5'
            }, {
            value: 10,
            label: '10'
            }, {
            value: 25,
            label: '25'
            }, {
            value: 50,
            label: '50'
            }, {
            value: 100,
            label: '100'
        }],
    }),
    // METHODS
    methods: {
        loadMore(){
            this.busy = true;
            const codeBookStorage = this.loadCodeBookStorage();

            if(codeBookStorage){

                this.totalSize = codeBookStorage[this.tabIndex][this.tabSelected].length;

                this.posts = [];
                this.postsTab = codeBookStorage;

                const append = codeBookStorage[this.tabIndex][this.tabSelected].slice(
                    this.posts.length,
                    this.posts.length + this.pageSize
                );

                this.posts = append;
                this.busy = false;
            }
            else{
                this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/code-book.json").then((response) => {

                this.totalSize = response.data[this.tabIndex][this.tabSelected].length;

                this.posts = [];

                this.postsTab = response.data;

                const append = response.data[this.tabIndex][this.tabSelected].slice(
                    this.posts.length,
                    this.posts.length + this.pageSize
                );

                this.posts = append;

                this.current_page= response.current_page;
                this.per_page = response.per_page;
                this.total = response.total;
                this.next_page_url = response.next_page_url;

                localStorage.setItem("codeBookStorageJSONData",JSON.stringify(response.data));

                this.busy = false;
                }).catch((error) => error.response.data)
            }

        },
        // LOCALSTORAGE
        loadCodeBookStorage() {
            return JSON.parse(localStorage.getItem("codeBookStorageJSONData"));
        },
        handleClick(tab) {
            this.tabIndex = tab.index;
            this.tabSelected = tab.label; 
            this.loadMore();
        },
        deleteSelectedCode(sn){
            this.deleteCodeModal = true;
            this.codeSelectedToDelete = sn;
        },
        deleteCodeConfirm(){
            const codeBookStorage = this.loadCodeBookStorage();
            const codeSN = this.codeSelectedToDelete;
 
            // FILTER MENU LIST
            const codeDeleted = codeBookStorage[this.tabIndex][this.tabSelected].filter(function(item) {
                return item.sn !== codeSN;
            });

            codeBookStorage[this.tabIndex][this.tabSelected] = codeDeleted;

            // UPDATE STORAGE
            localStorage.setItem("codeBookStorageJSONData",JSON.stringify(codeBookStorage));
            this.loadMore();
        },
        handleCurrentChange(val) {
            this.busy = true;
            const codeBookStorage = this.loadCodeBookStorage();
            
            this.page = val;

            // CHECK IF SEARCH EMPTY
            if(this.searchName === ''){
                this.totalSize = codeBookStorage[this.tabIndex][this.tabSelected].length;

                const append = codeBookStorage[this.tabIndex][this.tabSelected].slice(
                (this.page - 1)*this.pageSize,
                ((this.page - 1)*this.pageSize)+this.pageSize
                );

                this.posts = append;
                this.postsTab = append;
            }
            else {
                this.posts = codeBookStorage[this.tabIndex][this.tabSelected].filter(data => data.usageguidelines.toLowerCase().includes(this.searchName.toLowerCase()));

                this.totalSize = this.posts.length;

                const append = this.posts.slice(
                (this.page - 1)*this.pageSize,
                ((this.page - 1)*this.pageSize)+this.pageSize
                );

                this.posts = append;
                this.postsTab = append;
            }

            this.busy = false;
        },
        validateEditForm(){
            return new Promise((resolve) => {
                this.$refs.formEditCode.validate((valid) => {
                this.$emit('on-validate', valid, this.model)
                resolve(valid);
                if(valid)
                    this.editFormSave();
                });
            })
        },
        editFormSave(){
            const codeBookStorage = this.loadCodeBookStorage();
            
            let codeEditCopy = [
                ...codeBookStorage[this.tabIndex][this.tabSelected],
            ];

            let filteredDataSource = codeEditCopy.filter((item) => {
                if (item.sn === this.codeSelectedToEdit && (this.tabSelected === 'entry' || this.tabSelected === 'exit')) {
                    item.sn = this.formEditCode.codeReadyForEditSN;
                    item.code = this.formEditCode.codeReadyForEditCode;
                    item.category = this.formEditCode.codeReadyForEditCategory;
                    item.codename = this.formEditCode.codeReadyForEditCodename;
                    item.usageguidelines = this.formEditCode.codeReadyForEditUsageGuidelines;
                    item.additionalguidelines = this.formEditCode.codeReadyForEditAdditionalGuidelines;
                }
                if (item.sn === this.codeSelectedToEdit && this.tabSelected === 'attendance') {
                    item.sn = this.formEditCode.codeReadyForEditSN;
                    item.adtvalue = this.formEditCode.codeReadyForEditADTValue;
                    item.adtvaluedecriptor = this.formEditCode.codeReadyForEditADTDecriptor;
                    item.description = this.formEditCode.codeReadyForEditDescription;
                    item.status = this.formEditCode.codeReadyForEditStatus;
                }
                if (item.sn === this.codeSelectedToEdit && this.tabSelected === 'absentreason') {
                    item.sn = this.formEditCode.codeReadyForEditSN;
                    item.adtvalue = this.formEditCode.codeReadyForEditADTValue;
                    item.adtvaluedecriptor = this.formEditCode.codeReadyForEditADTDecriptor;
                    item.description = this.formEditCode.codeReadyForEditDescription;
                }
                return item;
            });
           
            codeBookStorage[this.tabIndex][this.tabSelected] = filteredDataSource;
            this.editCodeModal = false;

            // UPDATE STORAGE
            localStorage.setItem("codeBookStorageJSONData",JSON.stringify(codeBookStorage));
            this.loadMore();
        },
        editSelectedCode(idx){
            this.editCodeModal = true;

            const codeBookStorage = this.loadCodeBookStorage();
            this.codeSelectedToEdit = idx;

            const editCode = codeBookStorage[this.tabIndex][this.tabSelected].filter(function(item) {
                return item.sn === idx;
            });

            if(this.tabSelected === 'entry' || this.tabSelected === 'exit'){
                this.formEditCode.codeReadyForEditSN = editCode[0].sn;
                this.formEditCode.codeReadyForEditCode = editCode[0].code;
                this.formEditCode.codeReadyForEditCategory = editCode[0].category;
                this.formEditCode.codeReadyForEditCodename = editCode[0].codename;
                this.formEditCode.codeReadyForEditUsageGuidelines = editCode[0].usageguidelines;
                this.formEditCode.codeReadyForEditAdditionalGuidelines = editCode[0].additionalguidelines;
            }
            if(this.tabSelected === 'attendance'){
                this.formEditCode.codeReadyForEditSN = editCode[0].sn;
                this.formEditCode.codeReadyForEditADTValue = editCode[0].adtvalue;
                this.formEditCode.codeReadyForEditADTDecriptor = editCode[0].adtvaluedecriptor;
                this.formEditCode.codeReadyForEditDescription = editCode[0].description;
                this.formEditCode.codeReadyForEditStatus = editCode[0].status;
            }
            if(this.tabSelected === 'absentreason'){
                this.formEditCode.codeReadyForEditSN = editCode[0].sn;
                this.formEditCode.codeReadyForEditADTValue = editCode[0].adtvalue;
                this.formEditCode.codeReadyForEditADTDecriptor = editCode[0].adtvaluedecriptor;
                this.formEditCode.codeReadyForEditDescription = editCode[0].description;
            }
        },
        validate() {
        return new Promise((resolve) => {
            this.$refs.formAddCode.validate((valid) => {
            this.$emit('on-validate', valid, this.model)
            resolve(valid);
            if(valid)
               this.addNewCodeFormValid();
            });
        })
        },
        formInterface(maxSN,form){
            if(this.tabSelected === 'entry' || this.tabSelected === 'exit'){
                this.newCode = {
                    "sn": maxSN+1,
                    "code": form.codeReadyForAddCode,
                    "category": form.codeReadyForAddCategory,
                    "codename": form.codeReadyForAddCodename,
                    "usageguidelines": form.codeReadyForAddUsageGuidelines,
                    "additionalguidelines": form.codeReadyForAddAdditionalGuidelines
                }
            }
            if(this.tabSelected === 'attendance'){
                this.newCode = {
                    "sn": maxSN+1,
                    "adtvalue": form.codeReadyForAddADTValue,
                    "adtvaluedecriptor": form.codeReadyForAddADTDecriptor,
                    "description": form.codeReadyForAddDescription,
                    "status": form.codeReadyForAddStatus
                }
            }
            if(this.tabSelected === 'absentreason'){
                this.newCode = {
                    "sn": maxSN+1,
                    "adtvalue": form.codeReadyForAddADTValue,
                    "adtvaluedecriptor": form.codeReadyForAddADTDecriptor,
                    "description": form.codeReadyForAddDescription
                }
            }
        },
        addNewCodeFormValid(){
            const formAddCode = JSON.parse(JSON.stringify(this.formAddCode));

            const codeBookStorage = this.loadCodeBookStorage();

            // FIND LARGEST ID
            const maxSN = codeBookStorage[this.tabIndex][this.tabSelected].reduce((acc, shot) => acc = acc > shot.sn ? acc : shot.sn, 0);

            this.newCode = [];

            this.formInterface(maxSN,formAddCode);

            codeBookStorage[this.tabIndex][this.tabSelected].push(this.newCode);

            // UPDATE STORAGE
            localStorage.setItem("codeBookStorageJSONData",JSON.stringify(codeBookStorage));
            this.loadMore();

            // CLEAR FORM
            this.formAddCode.codeReadyForAddSN = 0;
            this.formAddCode.codeReadyForAddCode = "";
            this.formAddCode.codeReadyForAddCategory = "";
            this.formAddCode.codeReadyForAddCodename = "";
            this.formAddCode.codeReadyForAddUsageGuidelines = "";
            this.formAddCode.codeReadyForAddAdditionalGuidelines = "";
            this.formAddCode.codeReadyForAddADTValue = "";
            this.formAddCode.codeReadyForAddADTDecriptor = "";   
            this.formAddCode.codeReadyForAddDescription = "";
            this.formAddCode.codeReadyForAddStatus = "";

            this.addCodeModal = false;
        },
        addNewCode(code){
            this.addCodeModal = true;
        },
        updateForm (input, value) {
            this.formAddCode[input] = value;
        },
        updateEditForm (input, value){
            this.formEditCode[input] = value;
        },
        updatePagination(v) {
            this.pageSize = v;

            const codeBookStorage = this.loadCodeBookStorage(); 

            this.posts = [];
            const append = codeBookStorage[this.tabIndex][this.tabSelected].slice(
                this.posts.length,
                this.posts.length + v
            );

            this.posts = append;
            this.postsTab = append;
        },
        searchFilter(v){
            this.busy = true;

            const codeBookStorage = this.loadCodeBookStorage();

            // SEARCH BY PROPERTY (ANY)
            if(this.tabSelected === 'entry' || this.tabSelected === 'exit'){
                this.posts = codeBookStorage[this.tabIndex][this.tabSelected].filter(data => 
                    data.code.toString().toLowerCase().includes(v.toLowerCase()) ||
                    data.category.toLowerCase().includes(v.toLowerCase()) ||
                    data.codename.toLowerCase().includes(v.toLowerCase()) ||
                    data.usageguidelines.toLowerCase().includes(v.toLowerCase()) ||
                    data.additionalguidelines.toLowerCase().includes(v.toLowerCase())
                );        
            }
            if(this.tabSelected === 'attendance'){
                this.posts = codeBookStorage[this.tabIndex][this.tabSelected].filter(data => 
                    data.adtvalue.toString().toLowerCase().includes(v.toLowerCase()) ||
                    data.adtvaluedecriptor.toLowerCase().includes(v.toLowerCase()) ||
                    data.description.toLowerCase().includes(v.toLowerCase()) ||
                    data.status.toLowerCase().includes(v.toLowerCase()) 
                );   
            }
            if(this.tabSelected === 'absentreason'){
                this.posts = codeBookStorage[this.tabIndex][this.tabSelected].filter(data => 
                    data.adtvalue.toString().toLowerCase().includes(v.toLowerCase()) ||
                    data.adtvaluedecriptor.toLowerCase().includes(v.toLowerCase()) ||
                    data.description.toLowerCase().includes(v.toLowerCase())
                );   
            }

            this.totalSize = this.posts.length;

            this.busy = false;
            //return this.posts;
            this.postsTab = this.posts;
            return this.postsTab;
        }
    },
    created() {
      this.loadMore();  
    }
}
</script>