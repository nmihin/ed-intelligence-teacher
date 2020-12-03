<template>
  <!-- Main Content -->
  <div class="main-content">
    <div class="container-fluid student-list">
        <div class="row">
            <div>{{post.name}} {{post.surname}}</div>
            <div>{{post.usi}}</div>
            <div>{{post.grade}}</div>
            <div>{{post.phone}}</div>
            <div>{{post.avatar}}</div>
            <div>{{post.guardian}}</div>
            <div>{{post.email}}</div>
            <div>{{post.room}}</div>
            <div>{{post.classdays}}</div>
        </div>
        <div v-if="busy" class="preloader">
            <span><img src="../assets/images/preloader.gif" /> Loading...</span>
        </div>
    </div>
  </div>
  <!-- main-content-END -->
</template>

<script>
export default {
    name: "student-details",
    components: {
    },
    // DATA
    data: () => ({
        post: [],
        busy: true
        }),
    // METHODS
    methods: {
        loadMore(){
            this.busy = true;
            const studentListStorage = this.loadStudentListStorage();

            const studentID = parseInt(this.$route.params.id);

            if(studentListStorage){
                this.post = studentListStorage.filter(function (student) {
                    return student.sn === studentID;
                });

                this.post = this.post[0]; 
                this.busy = false;
            }
            else {
                this.axios.get("https://raw.githubusercontent.com/nmihin/ed-intelligence-teacher__deploy/master/student-list.json").then((response) => {
                    this.post = response.data.filter(function (student) {
                        return student.sn === studentID;
                    });

                    this.post = this.post[0];
                    this.busy = false;
                });
            }
        },
        // LOCALSTORAGE
        loadStudentListStorage(){
            return JSON.parse(localStorage.getItem("studentListStorageJSONData"));
        }
    },
    created() {
        this.loadMore();
    }
}
</script>