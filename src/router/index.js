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
import ManageMenu from "../pages/ManageMenu";
import StudentList from "../pages/StudentList";
import Attendance from "../pages/Attendance";
import SearchResults from "../pages/SearchResults";
import CodeBook from "../pages/CodeBook";

import Element from 'element-ui'
import FormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import locale from 'element-ui/lib/locale/lang/en';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueNestable from 'vue-nestable';

Vue.use(Router);
Vue.use(Element, { locale });
Vue.use(FormWizard);
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueNestable);

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
        path: "/lesson-plan-single/:id",
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
      },
      {
        path: "/manage-menu",
        name: "Manage Menu",
        component: ManageMenu
      },
      {
        path: "/search-results",
        name: "Search Results",
        component: SearchResults   
      },
      {
        path: "/search-results/:searchResults",
        name: "Search Results",
        component: SearchResults
      },
      {
        path: "/student-list/:id",
        name: "Student list",
        component: StudentList
      },
      {
        path: "/attendance/:id",
        name: "Student list",
        component: Attendance
      },
      {
        path: "/code-book",
        name: "Code Book",
        component: CodeBook
      }
    ]
  });
  