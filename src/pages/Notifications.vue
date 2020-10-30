<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid">
        <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
          <md-table-toolbar>
            <div class="md-toolbar-section-start">
              <h1 class="md-title">Notifications</h1>
            </div>

            <md-field md-clearable class="md-toolbar-section-end">
              <md-input placeholder="Search by type..." v-model="search" @input="searchOnTable" />
            </md-field>
          </md-table-toolbar>

          sn: 2,
          date: "10 May 2017 11:21",
          name: "Allen Hanson",
          type: "Type 2"

          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="SN" md-sort-by="sn" md-numeric>{{ item.sn }}</md-table-cell>
            <md-table-cell md-label="Date" md-sort-by="date">{{ item.date }}</md-table-cell>
            <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
            <md-table-cell md-label="Type" md-sort-by="type"><i class="icon notification" :class='item.type'></i>{{ item.type }}</md-table-cell>
          </md-table-row>
        </md-table>
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
      return items.filter(item => toLower(item.type).includes(toLower(term)))
    }

    return items
  }

  export default {
    name: 'notifications',
    data: () => ({
      search: null,
      searched: [],
      users: [
        {
          sn: 1,
          date: "10 May 2017 11:21",
          name: "Leah Todd",
          type: "user"
        },
        {
          sn: 2,
          date: "11 May 2017 11:21",
          name: "Allen Hanson",
          type: "attendance"
        },
        {
          sn: 3,
          date: "12 May 2017 11:21",
          name: "Oscar Sullivan",
          type: "attendance"
        },
        {
          sn: 4,
          date: "13 May 2017 11:21",
          name: "Minerva Duncan",
          type: "user"
        }
      ]
    }),
    methods: {
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

