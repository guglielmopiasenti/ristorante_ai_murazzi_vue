import { createRouter, createWebHistory } from "vue-router";

// import pages here
import HomePage from "../pages/HomePage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import RestaurantPage from "../pages/RestaurantPage.vue";
import AboutUsPage from "../pages/AboutUsPage.vue";
import MenuPage from "../pages/MenuPage.vue";
// router
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",

  // array of objects, every object is a route
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/not-found", name: "not-found", component: NotFoundPage },
    { path: "/restaurant", name: "restaurant", component: RestaurantPage },
    { path: "/about-us", name: "about-us", component: AboutUsPage },
    { path: "/menu", name: "menu", component: MenuPage },
    { path: "/:pathMatch(.*)*", redirect: "/not-found" },
  ],
});

export { router };
