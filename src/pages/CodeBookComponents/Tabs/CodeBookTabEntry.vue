<template>
    <div>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4">
            <RecordsComponent :updatePaginationParent="updatePagination" />
        </div>
        <div class="col-12 col-sm-6 col-md-4">
        <button @click="addNewCode('entry')" class="add-element button medium ed-btn__primary">
            <i class="icon icon-add"></i>
            <span>Add Entry Code</span>
        </button>
        </div>
        <div class="col-12 col-sm-12 col-md-4">
            <SearchContentComponent :searchFilterParent="searchFilter" />
        </div>
    </div>
    <!-- LIST VIEW -->
    <el-table ref="singleTable" stripe :data="posts" highlight-current-row style="width: 100%">
        <el-table-column sortable property="sn" label="SN" width="80"></el-table-column>
        <el-table-column sortable property="code" width="80" label="Code"></el-table-column>
        <el-table-column sortable property="category" width="120" label="Category"></el-table-column>
        <el-table-column sortable property="codename" label="Codename"></el-table-column>
        <el-table-column sortable property="usageguidelines" label="Usage Guidelines"></el-table-column>
        <el-table-column sortable property="additionalguidelines" label="Additional Guidelines"></el-table-column>
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
import SearchContentComponent from '../../../components/search/SearchContentComponent.vue'

export default {
    name: "code-book-entry",
    components: {
        RecordsComponent,
        SearchContentComponent
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
            if(typeof this.parentData === "undefined"){
                this.posts = this.parentData[0].entry;
            }
            else {
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
           this.addNewCodeParent("entry");
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
                this.totalSize = this.parentData[0].entry.length;

                const append = this.parentData[0].entry.slice(
                    this.posts.length,
                    this.posts.length + this.pageSize
                );

                this.posts = append;      
            }
            else{
                setTimeout(() => {
                    this.totalSize = this.parentData[0].entry.length;

                    const append = this.parentData[0].entry.slice(
                        this.posts.length,
                        this.posts.length + this.pageSize
                    );
 
                    this.posts = append; 
                }, 1000)
            }     
        },
        // localStorage
        loadCodeBookStorage() {
            return JSON.parse(localStorage.getItem("codeBookStorageJSONData"));
        },
    },
    created(){
        this.loadMore();
    }
}
</script>