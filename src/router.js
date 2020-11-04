import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./pages/Home.vue")
    },
    {
      path: "/about",
      component: () => import("./pages/About.vue")
    },
    {
      path: "/schedule",
      component: () => import("./pages/Schedule.vue")
    },
    {
      path: "/mechanics",
      component: () => import("./pages/Mechanics.vue")
    },
    {
      path: "/partners",
      component: () => import("./pages/Partners.vue")
    },
    {
    path: "/faqs",
    component: () => import("./pages/FAQs.vue")
    },
    {
    path: "/contact",
    component: () => import("./pages/Contact.vue")
    },
    {
      path: "*",
      component: () => import("./pages/NotFound.vue")
    }
  ],
  scrollBehavior: function(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 60 }
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
});


export default router;