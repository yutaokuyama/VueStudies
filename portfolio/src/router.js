import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import Works from "./components/Works";
import About from "./components/About";
import Rzmyep2019 from "./components/Articles/Rzmyep2019";
import Justicia from "./components/Articles/Justicia";
import Mad from "./components/Articles/Mad";
import Inofes2019 from "./components/Articles/Inofes2019";
import Kbc2018 from "./components/Articles/Kbc2018";
import Tukiatari from "./components/Articles/Tukiatari";
import Sohosai2019 from "./components/Articles/Sohosai2019";
import Hanayashiki from "./components/Articles/Hanayashiki";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/works",
      name: "works",
      component: Works
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/Rzmyep2019",
      name: "Rzmyep2019",
      component: Rzmyep2019
    },
    {
      path: "/Justicia",
      name: "Justicia",
      component: Justicia
    },
    {
      path: "/Mad",
      name: "Mad",
      component: Mad
    },
    {
      path: "/Inofes2019",
      name: "Inofes2019",
      component: Inofes2019
    },
    {
      path: "/Mad",
      name: "Mad",
      component: Mad
    },
    {
      path: "/Kbc2018",
      name: "Kbc2018",
      component: Kbc2018
    },
    {
      path: "/tukiatari",
      name: "Tukiatari",
      component: Tukiatari
    },
    {
      path: "/Sohosai2019",
      name: "Sohosai2019",
      component: Sohosai2019
    },
    {
      path: "/Hanayashiki",
      name: "Hanayashiki",
      component: Hanayashiki
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
       return savedPosition
    } else {
       return { x: 0, y: 0 }
    }
  },
});
