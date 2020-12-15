<template>
    <div>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4">
            <RecordsComponent :updatePaginationParent="updatePagination" />
        </div>
        <div class="col-12 col-sm-6 col-md-4">
        <button @click="addNewCode('absentreason')" class="add-element button medium ed-btn__primary">
            <i class="icon icon-add"></i>
            <span>Add Absent Reason Code</span>
        </button>
        </div>
        <div class="col-12 col-sm-12 col-md-4">
        <el-input @input="searchFilter(searchName)" placeholder="Search..." v-model="searchName"></el-input>
        </div>
    </div>
    <!-- LIST VIEW -->
    <el-table ref="singleTable" stripe :data="posts" highlight-current-row style="width: 100%">
        <el-table-column sortable property="sn" label="SN" width="80"></el-table-column>
        <el-table-column sortable property="adtvalue" width="120" label="ADT Value"></el-table-column>
        <el-table-column sortable property="adtvaluedecriptor" width="200" label="ADT Value Decriptor"></el-table-column>
        <el-table-column sortable property="description" label="Description"></el-table-column>
        <el-table-column width="140" property="action" label="Action">
        <div slot-scope="scope">
            <div @click="editSelectedCode(scope.row.sn);" class="element-edit">
            <i class="icon icon-edit"></i>
            </div>
            <div @click="deleteSelectedCode(scope.row.sn);" class="element-delete">
            <i class="icon icon-delete"></i>
            </div>
        </div>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
import RecordsComponent from '../../../components/records/RecordsComponent.vue';

export default {
    name: "code-book-absentreason",
    components: {
        RecordsComponent
    },
    props: {
        parentData: Array,
        updatePagination: {
            type: Function,
            default(){
                return {}
            }
        },
        addNewCodeParent:Function,
        searchFilterParent:Function,
        deleteSelectedCodeParent:Function,
        editSelectedCodeParent:Function
    },
    watch: {     	
        parentData: function() {
            if(typeof this.parentData[0].sn === "undefined"){
                this.posts = this.parentData[3].absentreason;
            }
            else{
                this.posts = this.parentData;
            }
        }
    },
    // DATA
    data: () => ({
        searchName:"",
        posts: [],
        page: 1,
        pageSize: 10,
        totalSize: 0
    }),
    methods: {
        searchFilter(searchName){
            this.searchFilterParent(searchName);
        },
        addNewCode(){
           this.addNewCodeParent("absentreason");
        },
        deleteSelectedCode(sn){
            this.deleteSelectedCodeParent(sn)
        },
        editSelectedCode(sn){
            this.editSelectedCodeParent(sn)
        },
        loadMore(){
            const codeBookStorage = localStorage.getItem("codeBookStorageJSONData")
            this.posts = [];

            if(codeBookStorage){
                this.totalSize = this.parentData[3].absentreason.length;

                const append = this.parentData[3].absentreason.slice(
                    this.posts.length,
                    this.posts.length + this.pageSize
                );

                this.posts = append;      
            }
            else{
                setTimeout(() => {
                    this.totalSize = this.parentData[3].absentreason.length;

                    const append = this.parentData[3].absentreason.slice(
                        this.posts.length,
                        this.posts.length + this.pageSize
                    );
 
                    this.posts = append; 
                }, 1000)
            }     
        },
        // LOCALSTORAGE
        loadCodeBookStorage() {
            return JSON.parse(localStorage.getItem("codeBookStorageJSONData"));
        },
    },
    created(){
        this.loadMore();
    }
}
</script>