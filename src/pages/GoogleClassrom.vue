<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid">
         <el-table
    :data="displayData"
    style="width: 100%">
    <el-table-column
        prop="name"
        label="Nombre">
    </el-table-column>
</el-table>

<el-divider></el-divider>

<div style="text-align: center">
    <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        :total="total">
    </el-pagination>
</div>
        <!--
        <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
          <md-table-toolbar>
            <div class="md-toolbar-section-start">
              <h1 class="md-title">10 records</h1>
            </div>

            <md-field md-clearable class="md-toolbar-section-end">
              <md-input placeholder="Search by class..." v-model="search" @input="searchOnTable" />
            </md-field>
          </md-table-toolbar>

          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="SN" md-sort-by="sn" md-numeric>{{ item.sn }}</md-table-cell>
            <md-table-cell md-label="Class" md-sort-by="class">{{ item.class }}</md-table-cell>
            <md-table-cell md-label="Homeroom" md-sort-by="homeroom">{{ item.homeroom }}</md-table-cell>
            <md-table-cell md-label="Room" md-sort-by="room">{{ item.room }}</md-table-cell>
            <md-table-cell md-label="Code" md-sort-by="code">{{ item.code }}</md-table-cell>
            <md-table-cell md-label="State" md-sort-by="state">{{ item.state }}</md-table-cell>
            <md-table-cell md-label="Action" md-sort-by="action">{{ item.action }}</md-table-cell>
          </md-table-row>
        </md-table>
        -->
    </div>
  </div>
</template>


<script>
  import Vue from 'vue'
  
  import VueMaterial from 'vue-material'
  import 'vue-material/dist/vue-material.min.css'
  import 'vue-material/dist/theme/default.css'

  Vue.use(VueMaterial)

  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.class).includes(toLower(term)))
    }

    return items
  }

  export default {
    name: 'google-classroom',
    data: () => ({
       filtered: [],
       search: '',
       page: 1,
       pageSize: 4,
       total: 0,
      //search: null,
      searched: [],
      users: [
        {
          sn: 1,
          class: "Grade 1",
          homeroom: "Grade 1",
          room: "Newton 1",
          code: "fz7iw2s",
          state: "ACTIVE",
          action: "view"
        },
        {
          sn: 2,
          class: "Grade 2",
          homeroom: "Grade 2",
          room: "Newton 2",
          code: "fz7iw2s",
          state: "ACTIVE",
          action: "view"
        },
        {
          sn: 3,
          class: "Grade 3",
          homeroom: "Grade 3",
          room: "Newton 3",
          code: "fz7iw2s",
          state: "ACTIVE",
          action: "view"
        },
        {
          sn: 4,
          class: "Grade 4",
          homeroom: "Grade 4",
          room: "Newton 4",
          code: "fz7iw2s",
          state: "INACTIVE",
          action: "view"
        }
      ]
    }),
computed: {
    displayData() {
        if(this.search == null) return this.categories;
      
        this.filtered = this.categories.filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()));
        
        this.total = this.filtered.length;

        return this.filtered.slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page);
    }
},
    methods: {
      handleCurrentChange(val) {
        this.page = val;
    },
      searchOnTable () {
        this.searched = searchByName(this.users, this.search)
      }
    },
    created () {
      this.searched = this.users
    }
  }
</script>

<style lang="scss" scoped>
  .md-field {
    max-width: 300px;
  }
</style>

