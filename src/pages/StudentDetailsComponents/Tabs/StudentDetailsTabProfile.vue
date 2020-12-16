<template>
  <div class="row">
    <ul class="col-12 col-md-6 profile-list">
      <li>USI:<span>{{post.usi}}</span></li>
      <li>Local ID:<span>{{post.sn}}</span></li>
      <li>Date od Birth:<span>{{post.birthDate}}</span></li>
      <li>Primary Parent/Guardian Name:<span>{{post.firstNamePrimaryParent}} {{post.lastNamePrimaryParent}}</span></li>
      <li>Emergency Parent/Guardian Name:<span>{{post.firstNameEmergency}} {{post.lastNameEmergency}}</span></li>
      <li>City:<span>{{post.city}}</span></li>
      <li>Risk Status:<span>{{post.atRiskIndicator}}</span></li>
      <li>Special Need Indicator:<span>{{post.specialNeedIndicator}}</span></li>
      <li>Slot Accepted:<span>{{post.slotAcceptedDate}}</span></li>
      <li>Dual Enrollment:<span>{{post.dualEnrollment}}</span></li>
    </ul>
    <ul class="col-12 col-md-6 profile-list">
      <li>Gender:<span>{{post.gender}}</span></li>
      <li>Grade:<span>{{post.grade}}</span></li>
      <li>Registered Date:<span>{{post.studentRegistrationDate}}</span></li>
      <li>Primary Parent/Guardian Contact Number:<span>{{post.contactNumberPrimaryParent}}</span></li>
      <li>Emergency Parent/Guardian Contact Number:<span>{{post.contactNumberEmergency}}</span></li>
      <li>Street:<span>{{post.streetAddress}}</span></li>
      <li>District Verified:<span>{{post.stateVerifiedResidencyStatus}}</span></li>
      <li>Homeless Status:<span>{{post.homelesnessStatus}}</span></li>
      <li>Tuition Indicator:<span>{{post.tuitionIndicator}}</span></li>
      <li>Residency Indicator:<span>{{post.residencyIndicator}}</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "student-details-profile",
    components: {},
    props: {
      parentData: Object
    },
    watch: {
      parentData: function() {
        this.post = this.parentData;
      }
    },
    // DATA
    data: () => ({
      post: [],
    }),
    methods: {
      loadMore() {
        this.post = [];

        this.post = this.parentData;
      }
    },
    created() {
      this.loadMore();
    }
  }

</script>
