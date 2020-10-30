<template>
  <div id="app" class="theme-layout">
    <Header />
    <Subheader />
    <Mobilemenu />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/layout/header/Header.vue'
import Subheader from './components/layout/subheader/Subheader.vue'
import Mobilemenu from './components/navigation/mobilemenu/Mobilemenu.vue'
import Home from './pages/Home.vue'
import Admin from './pages/GoogleClassrom.vue'
import LessonPlanBank from './pages/LessonPlanBank.vue'
import LessonPlanSingle from './pages/LessonPlanSingle.vue'
import ChangePassword from './pages/ChangePassword.vue'
import ProfileSettings from './pages/ProfileSettings.vue'
import Notifications from './pages/Notifications.vue'
import LessonPlan from './pages/LessonPlan.vue'
import Footer from './components/layout/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Subheader,
    Mobilemenu,
    Home,
    Admin,
    LessonPlanBank,
    LessonPlanSingle,
    LessonPlan,
    Notifications,
    ChangePassword,
    ProfileSettings,
    Footer
  },
  data() {
    return {
      showWhich: "Home"
    }
  }
}
</script>