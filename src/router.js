import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("./components/TutorialsList")
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("./components/Tutorial")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddTutorial")
    },
    {
      path: "/form",
      name: "Form",
      component: () => import("./components/Form")
    },
    {
      path: "/spreadsheet1",
      name: "Spreadsheet1",
      component: () => import("./components/spreadsheet1")
    },
    {
      path: "/spreadsheet2",
      name: "Spreadsheet2",
      component: () => import("./components/spreadsheet2")
    }
  ]
});