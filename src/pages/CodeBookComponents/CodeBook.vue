<template>
  <!-- Main Content -->
  <div class="main-content">
    <!-- START ADD CODE MODAL -->
    <CodeBookModalAddCode 
        ref="CodeBookModalAddCode"
        :addCodeModalParent="addCodeModal"
        :tabSelectedParent="tabSelected"
        :addFormSaveParent="addFormSave"
    />
    <!-- END ADD CODE MODAL -->
    <!-- START EDIT CODE MODAL -->
    <CodeBookModalEditCode 
        ref="CodeBookModalEditCode"
        :editCodeModalParent="editCodeModal"
        :tabSelectedParent="tabSelected"
        :parentFormData="newFormEditCode"
        :editFormSaveParent="editFormSave"
    />
    <!-- END EDIT CODE MODAL -->
    <!-- DELETE CODE START -->
    <CodeBookModalDeleteCode 
        ref="CodeBookModalDeleteCode"
        :deleteCodeModalParent="deleteCodeModal"
        :tabSelectedParent="tabSelected"
        :codeSelectedToDeleteParent="codeSelectedToDelete"
        :deleteCodeConfirmParent="deleteCodeConfirm"
    />
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
            <span><img src="../../assets/images/preloader.gif" /> Loading...</span>
        </div>
    </div>
  </div>
  <!-- main-content-END -->
</template>

<script>
// TABS
import CodeBookTabEntry from './Tabs/CodeBookTabEntry.vue';
import CodeBookTabExit from './Tabs/CodeBookTabExit.vue';
import CodeBookTabAttendance from './Tabs/CodeBookTabAttendance.vue';
import CodeBookTabAbsentReason from './Tabs/CodeBookTabAbsentReason.vue';

// MODALS
import CodeBookModalDeleteCode from './Modals/CodeBookModalDeleteCode.vue'
import CodeBookModalAddCode from './Modals/CodeBookModalAddCode.vue'
import CodeBookModalEditCode from './Modals/CodeBookModalEditCode.vue'

export default {
    name: "code-book",
    components: {
        CodeBookTabEntry,
        CodeBookTabExit,
        CodeBookTabAttendance,
        CodeBookTabAbsentReason,
        CodeBookModalDeleteCode,
        CodeBookModalAddCode,
        CodeBookModalEditCode
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
        codeReadyForEditSN:0,
        tabIndex: 0,
        addCodeModal: false,
        deleteCodeModal: false,
        editCodeModal: false,
        newCode: [],
        newFormEditCode: {},
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
            this.$refs.CodeBookModalDeleteCode.openModal();
            this.codeSelectedToDelete = sn;
        },
        deleteCodeConfirm(code){
            const codeBookStorage = this.loadCodeBookStorage();
            const codeSN = code;
 
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
        editFormSave(form){
            const codeBookStorage = this.loadCodeBookStorage();

            let codeEditCopy = [
                ...codeBookStorage[this.tabIndex][this.tabSelected],
            ];

            let filteredDataSource = codeEditCopy.filter((item) => {
                if (item.sn === this.codeSelectedToEdit && (this.tabSelected === 'entry' || this.tabSelected === 'exit')) {
                    item.sn = form.codeReadyForEditSN;
                    item.code = form.codeReadyForEditCode;
                    item.category = form.codeReadyForEditCategory;
                    item.codename = form.codeReadyForEditCodename;
                    item.usageguidelines = form.codeReadyForEditUsageGuidelines;
                    item.additionalguidelines = form.codeReadyForEditAdditionalGuidelines;
                }
                if (item.sn === this.codeSelectedToEdit && this.tabSelected === 'attendance') {
                    item.sn = form.codeReadyForEditSN;
                    item.adtvalue = form.codeReadyForEditADTValue;
                    item.adtvaluedecriptor = form.codeReadyForEditADTDecriptor;
                    item.description = form.codeReadyForEditDescription;
                    item.status = form.codeReadyForEditStatus;
                }
                if (item.sn === this.codeSelectedToEdit && this.tabSelected === 'absentreason') {
                    item.sn = form.codeReadyForEditSN;
                    item.adtvalue = form.codeReadyForEditADTValue;
                    item.adtvaluedecriptor = form.codeReadyForEditADTDecriptor;
                    item.description = form.codeReadyForEditDescription;
                }

                this.editCodeModal = false;
                return item;
            });
           
            codeBookStorage[this.tabIndex][this.tabSelected] = filteredDataSource;
            this.editCodeModal = false;

            // UPDATE STORAGE
            localStorage.setItem("codeBookStorageJSONData",JSON.stringify(codeBookStorage));
            this.loadMore();
        },
        editSelectedCode(idx){
            this.$refs.CodeBookModalEditCode.openModal();

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

            this.newFormEditCode = this.formEditCode;
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
        addFormSave(form){
            const formAddCode = JSON.parse(JSON.stringify(form));

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
            form.codeReadyForAddSN = 0;
            form.codeReadyForAddCode = "";
            form.codeReadyForAddCategory = "";
            form.codeReadyForAddCodename = "";
            form.codeReadyForAddUsageGuidelines = "";
            form.codeReadyForAddAdditionalGuidelines = "";
            form.codeReadyForAddADTValue = "";
            form.codeReadyForAddADTDecriptor = "";   
            form.codeReadyForAddDescription = "";
            form.codeReadyForAddStatus = "";

            this.addCodeModal = false;
        },
        addNewCode(){
            this.$refs.CodeBookModalAddCode.openModal();
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