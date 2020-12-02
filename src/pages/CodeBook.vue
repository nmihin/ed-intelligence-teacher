<template>
  <!-- Main Content -->
  <div class="main-content">
    <!-- START ADD MENU MODAL -->
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
    <!-- END ADD MENU MODAL -->
    <!-- DELETE FROM ROLE MENU START -->
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
    <!-- DELETE FROM ROLE MENU END -->
    <div class="container-fluid code-book">
        <div class="row">
            <el-tabs type="border-card" @tab-click="handleClick">
                <el-tab-pane label="entry">
                    <span slot="label" class="label-icon"><i class="icon icon-entry"></i> Entry</span>
                    <div class="row">
                        <div class="col-8 col-sm-6 col-md-4">
                            <el-select @change="updatePagination()" v-model="value" placeholder="Records">
                            <el-option
                                v-for="item in recordsOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                            </el-select>
                            <span class="records">Records</span>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <button @click="addNewCode('entry')" class="add-element button medium ed-btn__primary">
                                <i class="icon icon-add"></i>
                                <span>Add Entry Code</span>
                            </button>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4">
                            <el-input @input="searchFilter()" placeholder="Search..." v-model="searchName"></el-input>
                        </div>
                    </div>
                    <!-- LIST VIEW -->
                    <el-table
                    ref="singleTable"
                    stripe
                    :data="posts"
                    highlight-current-row
                    style="width: 100%">
                    <el-table-column sortable property="sn" label="SN" width="80"></el-table-column>
                    <el-table-column sortable property="code" width="80" label="Code"></el-table-column>
                    <el-table-column sortable property="category" width="120" label="Category"></el-table-column>
                    <el-table-column sortable property="codename" label="Codename"></el-table-column>
                    <el-table-column sortable property="usageguidelines" label="Usage Guidelines"></el-table-column>
                    <el-table-column sortable property="additionalguidelines" label="Additional Guidelines"></el-table-column>
                    <el-table-column width="140" property="action" label="Action">
                        <div slot-scope="scope">
                        <div class="element-edit">
                            <i class="icon icon-edit"></i>
                        </div>
                        <div  @click="deleteCodeModal = true; deleteSelectedCode(scope.row.sn);" class="element-delete">
                            <i class="icon icon-delete"></i>
                        </div>
                        </div>
                    </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="exit">
                    <span slot="label" class="label-icon"><i class="icon icon-exit"></i> Exit</span>
                    <div class="row">
                        <div class="col-8 col-sm-6 col-md-4">
                            <el-select @change="updatePagination()" v-model="value" placeholder="Records">
                            <el-option
                                v-for="item in recordsOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                            </el-select>
                            <span class="records">Records</span>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <button @click="addNewCode('exit')" class="add-element button medium ed-btn__primary">
                                <i class="icon icon-add"></i>
                                <span>Add Exit Code</span>
                            </button>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4">
                            <el-input @input="searchFilter()" placeholder="Search..." v-model="searchName"></el-input>
                        </div>
                    </div>
                    <!-- LIST VIEW -->
                    <el-table
                    ref="singleTable"
                    stripe
                    :data="posts"
                    highlight-current-row
                    style="width: 100%">
                    <el-table-column sortable property="sn" label="SN" width="80"></el-table-column>
                    <el-table-column sortable property="code" width="80" label="Code"></el-table-column>
                    <el-table-column sortable property="category" width="120" label="Category"></el-table-column>
                    <el-table-column sortable property="codename" label="Codename"></el-table-column>
                    <el-table-column sortable property="usageguidelines" label="Usage Guidelines"></el-table-column>
                    <el-table-column sortable property="additionalguidelines" label="Additional Guidelines"></el-table-column>
                    <el-table-column  width="140" property="action" label="Action">
                        <div slot-scope="scope">
                        <div class="element-edit">
                            <i class="icon icon-edit"></i>
                        </div>
                        <div @click="deleteCodeModal = true; deleteSelectedCode(scope.row.sn);" class="element-delete">
                            <i class="icon icon-delete"></i>
                        </div>
                        </div>
                    </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="attendance">
                    <span slot="label" class="label-icon"><i class="icon icon-attendence"></i> Attendance</span>
                    <div class="row">
                        <div class="col-8 col-sm-6 col-md-4">
                            <el-select @change="updatePagination()" v-model="value" placeholder="Records">
                            <el-option
                                v-for="item in recordsOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                            </el-select>
                            <span class="records">Records</span>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <button @click="addNewCode('attendance')" class="add-element button medium ed-btn__primary">
                                <i class="icon icon-add"></i>
                                <span>Add Attendance Code</span>
                            </button>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4">
                            <el-input @input="searchFilter()" placeholder="Search..." v-model="searchName"></el-input>
                        </div>
                    </div>
                    <!-- LIST VIEW -->
                    <el-table
                    ref="singleTable"
                    stripe
                    :data="posts"
                    highlight-current-row
                    style="width: 100%">
                    <el-table-column sortable property="sn" label="SN" width="80"></el-table-column>
                    <el-table-column sortable property="adtvalue" width="120" label="ADT Value"></el-table-column>
                    <el-table-column sortable property="adtvaluedecriptor" width="200" label="ADT Value Decriptor"></el-table-column>
                    <el-table-column sortable property="description" label="Description"></el-table-column>
                    <el-table-column sortable property="status" width="120"  label="Status"></el-table-column>
                    <el-table-column width="140" property="action" label="Action">
                        <div slot-scope="scope">
                        <div class="element-edit">
                            <i class="icon icon-edit"></i>
                        </div>
                        <div @click="deleteCodeModal = true; deleteSelectedCode(scope.row.sn);" class="element-delete">
                            <i class="icon icon-delete"></i>
                        </div>
                        </div>
                    </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="absentreason">
                    <span slot="label" class="label-icon"><i class="icon icon-absence"></i> Absent Reason</span>
                    <div class="row">
                        <div class="col-8 col-sm-6 col-md-4">
                            <el-select @change="updatePagination()" v-model="value" placeholder="Records">
                            <el-option
                                v-for="item in recordsOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                            </el-select>
                            <span class="records">Records</span>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <button @click="addNewCode('absentreason')" class="add-element button medium ed-btn__primary">
                                <i class="icon icon-add"></i>
                                <span>Add Absent Reason Code</span>
                            </button>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4">
                            <el-input @input="searchFilter()" placeholder="Search..." v-model="searchName"></el-input>
                        </div>
                    </div>
                    <!-- LIST VIEW -->
                    <el-table
                    ref="singleTable"
                    stripe
                    :data="posts"
                    highlight-current-row
                    style="width: 100%">
                    <el-table-column sortable property="sn" label="SN" width="80"></el-table-column>
                    <el-table-column sortable property="adtvalue" width="120" label="ADT Value"></el-table-column>
                    <el-table-column sortable property="adtvaluedecriptor" width="200" label="ADT Value Decriptor"></el-table-column>
                    <el-table-column sortable property="description" label="Description"></el-table-column>
                    <el-table-column width="140" property="action" label="Action">
                        <div slot-scope="scope">
                        <div class="element-edit">
                            <i class="icon icon-edit"></i>
                        </div>
                        <div @click="deleteCodeModal = true; deleteSelectedCode(scope.row.sn);" class="element-delete">
                            <i class="icon icon-delete"></i>
                        </div>
                        </div>
                    </el-table-column>
                    </el-table>
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
export default {
    name: "code-book",
    components: {
    },
    // DATA
    data: () => ({
        filtered: [],
        search: '',
        page: 1,
        pageSize: 10,
        totalSize: 0,
        posts: [],
        busy: true,
        value: 10,
        searchName:"",
        tabSelected: "entry",
        codeSelectedToDelete: 0,
        tabIndex: 0,
        addCodeModal: false,
        deleteCodeModal: false,
        newCode: [],
        // ADD MENU
        formAddCode: {
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
            }
            else {
                this.posts = codeBookStorage[this.tabIndex][this.tabSelected].filter(data => data.usageguidelines.toLowerCase().includes(this.searchName.toLowerCase()));

                this.totalSize = this.posts.length;

                const append = this.posts.slice(
                (this.page - 1)*this.pageSize,
                ((this.page - 1)*this.pageSize)+this.pageSize
                );

                this.posts = append;
            }

            this.busy = false;
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
        addNewCodeFormValid(){
            const formAddCode = JSON.parse(JSON.stringify(this.formAddCode));

            const codeBookStorage = this.loadCodeBookStorage();

            // FIND LARGEST ID
            const maxSN = codeBookStorage[this.tabIndex][this.tabSelected].reduce((acc, shot) => acc = acc > shot.sn ? acc : shot.sn, 0);

            this.newCode = [];

            if(this.tabSelected === 'entry' || this.tabSelected === 'exit'){
                this.newCode = {
                    "sn": maxSN+1,
                    "code": formAddCode.codeReadyForAddCode,
                    "category": formAddCode.codeReadyForAddCategory,
                    "codename": formAddCode.codeReadyForAddCodename,
                    "usageguidelines": formAddCode.codeReadyForAddUsageGuidelines,
                    "additionalguidelines": formAddCode.codeReadyForAddAdditionalGuidelines
                }
            }
            if(this.tabSelected === 'attendance'){
                this.newCode = {
                    "sn": maxSN+1,
                    "adtvalue": formAddCode.codeReadyForAddADTValue,
                    "adtvaluedecriptor": formAddCode.codeReadyForAddADTDecriptor,
                    "description": formAddCode.codeReadyForAddDescription,
                    "status": formAddCode.codeReadyForAddStatus
                }
            }
            if(this.tabSelected === 'absentreason'){
                this.newCode = {
                    "sn": maxSN+1,
                    "adtvalue": formAddCode.codeReadyForAddADTValue,
                    "adtvaluedecriptor": formAddCode.codeReadyForAddADTDecriptor,
                    "description": formAddCode.codeReadyForAddDescription
                }
            }

            codeBookStorage[this.tabIndex][this.tabSelected].push(this.newCode);
            // UPDATE STORAGE
            localStorage.setItem("codeBookStorageJSONData",JSON.stringify(codeBookStorage));
            this.loadMore();
            this.addCodeModal = false;
        },
        addNewCode(code){
            this.addCodeModal = true;
        },
        updateForm (input, value) {
        
        this.formAddCode[input] = value;

        },
        updatePagination() {

            this.pageSize = this.value;

            const codeBookStorage = this.loadCodeBookStorage();

            this.posts = [];
            const append = codeBookStorage[this.tabIndex][this.tabSelected].slice(
                this.posts.length,
                this.posts.length + this.pageSize
            );

            this.posts = append;
        },
        searchFilter(){
            this.busy = true;

            const codeBookStorage = this.loadCodeBookStorage();
            this.posts = codeBookStorage[this.tabIndex][this.tabSelected].filter(data => data.usageguidelines.toLowerCase().includes(this.searchName.toLowerCase()));
            this.totalSize = this.posts.length;

            this.busy = false;
            return this.posts;
        }
    },
    created() {
      this.loadMore();  
    }
}
</script>