import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import LessonPlan from "../pages/LessonPlan";
import LessonPlanBank from "../pages/LessonPlanBank";
import LessonPlanSingle from "../pages/LessonPlanSingle";
import GoogleClassrom from "../pages/GoogleClassrom";
import ProfileSettings from "../pages/ProfileSettings";
import ChangePassword from "../pages/ChangePassword";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/home",
        name: "Home",
        component: Home
      },
      {
        path: "/lesson-plan",
        name: "Lesson Plan",
        component: LessonPlan
      },
      {
        path: "/lesson-plan-bank",
        name: "Lesson Plan Bank",
        component: LessonPlanBank
      },
      {
        path: "/lesson-plan-single",
        name: "Lesson Plan Single",
        component: LessonPlanSingle
      },
      {
        path: "/google-classrom",
        name: "Google Classrom",
        component: GoogleClassrom
      },
      {
        path: "/profile-settings",
        name: "Profile Settings",
        component: ProfileSettings
      },
      {
        path: "/change-password",
        name: "Change Password",
        component: ChangePassword
      }
    ]
  });
  