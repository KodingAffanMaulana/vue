import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
    },
    {
      path: "/auto",
      name: "auto",
      component: () => import("@/views/Auto.vue")
    },
    {
      path: "/avatar",
      name: "Avatar",
      component: () => import("@/views/Avatar.vue")
    },
    {
      path: "/allpages",
      name: "All Pages",
      component: () => import("@/views/Allpages.vue")
    }
  ],
});

export default router;
