import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import LessonPlan from "../pages/LessonPlan";
import LessonPlanBank from "../pages/LessonPlanBank";
import LessonPlanSingle from "../pages/LessonPlanSingle";
import GoogleClassrom from "../pages/GoogleClassrom";
import ProfileSettings from "../pages/ProfileSettings";
import ChangePassword from "../pages/ChangePassword";
import NotificationsTable from "../pages/NotificationsTable";
import AddStudent from "../pages/AddStudent";

import Element from 'element-ui'
import FormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import locale from 'element-ui/lib/locale/lang/en';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import VueBodyClass from 'vue-body-class';

Vue.use(Router);
Vue.use(Element, { locale });
Vue.use(FormWizard);
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

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
        component: LessonPlanBank,
        meta: { bodyClass: 'full-height' }
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
      },
      {
        path: "/notifications-table",
        name: "NotificationsTable",
        component: NotificationsTable
      },
      {
        path: "/add-student",
        name: "Add Student",
        component: AddStudent
      }
    ]
  });
  