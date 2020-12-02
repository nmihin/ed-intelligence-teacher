<template>
  <!-- Main Content -->
  <div class="main-content">
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
                            <button @click="viewTypeList('avatar')" class="add-element button medium ed-btn__primary">
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
                        <div class="element-edit">
                            <i class="icon icon-edit"></i>
                        </div>
                        <div class="element-delete">
                            <i class="icon icon-delete"></i>
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
                            <button @click="viewTypeList('avatar')" class="add-element button medium ed-btn__primary">
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
                    <el-table-column width="140" property="action" label="Action">
                        <div class="element-edit">
                            <i class="icon icon-edit"></i>
                        </div>
                        <div class="element-delete">
                            <i class="icon icon-delete"></i>
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
                            <button @click="viewTypeList('avatar')" class="add-element button medium ed-btn__primary">
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
                        <div class="element-edit">
                            <i class="icon icon-edit"></i>
                        </div>
                        <div class="element-delete">
                            <i class="icon icon-delete"></i>
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
                            <button @click="viewTypeList('avatar')" class="add-element button medium ed-btn__primary">
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
                        <div class="element-edit">
                            <i class="icon icon-edit"></i>
                        </div>
                        <div class="element-delete">
                            <i class="icon icon-delete"></i>
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
        tabIndex: 0,
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