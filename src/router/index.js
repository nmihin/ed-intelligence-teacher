import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import LessonPlanBank from "../pages/LessonPlanBank";
import GoogleClassrom from "../pages/GoogleClassrom";

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
        path: "/lesson-plan-bank",
        name: "Lesson Plan Bank",
        component: LessonPlanBank
      },
      {
        path: "/google-classrom",
        name: "Google Classrom",
        component: GoogleClassrom
      }
    ]
  });
  