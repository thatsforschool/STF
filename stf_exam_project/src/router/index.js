import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact/:id",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
  },
  {
    path: "/events",
    name: "events",
    component: () =>
      import(/* webpackChunkName: "events" */ "../views/EventsView.vue"),
  },
  {
    path: "/membership/:id",
    name: "membership",
    // route level code-splitting
    component: () =>
      import(
        /* webpackChunkName: "membership" */ "../views/MembershipView.vue"
      ),
  },
  {
    path: "/magazine/:id",
    name: "magazine",
    component: () =>
      import(
        /* webpackChunkName: "magazine" */ "../views/MembersMagazineView.vue"
      ),
  },
  {
    path: "/network",
    name: "network",
    component: () =>
      import(/* webpackChunkName: "network" */ "../views/NetworkView.vue"),
  },
  {
    path: "/news&press",
    name: "news&press",
    component: () =>
      import(
        /* webpackChunkName: "news&press" */ "../views/News&PressView.vue"
      ),
  },
  {
    path: "/privacy_policy",
    name: "privacyPolicy",
    component: () =>
      import(
        /* webpackChunkName: "privacyPolicy" */ "../views/PrivacyView.vue"
      ),
  },
  {
    path: "/siteMap",
    name: "siteMap",
    component: () =>
      import(/* webpackChunkName: "siteMap" */ "../views/SiteMapView.vue"),
  },
  {
    path: "/funds",
    name: "funds",
    component: () =>
      import(/* webpackChunkName: "siteMap" */ "../views/FundsView.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
