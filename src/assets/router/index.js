import { createRouter, createWebHistory } from "vue-router";

// import pages here
import HomePage from "../pages/HomePage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
// router
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",

  // array of objects, every object is a route
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/not-found", name: "not-found", component: NotFoundPage },
    { path: "/:pathMatch(.*)*", redirect: "/not-found" },
  ],
});

export { router };
