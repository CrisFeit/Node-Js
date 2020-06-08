import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Signup from "@/views/Signup";
import { auth } from '@/database';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cadastro",
    name: "Signup",
    component: Signup
  },
  {
    path: "/usuario",
    name: "User",
    meta: {
      requiresAuth : true
    },
    component: () =>
      import("../views/User.vue")
  },
  {
    path: "/perfil",
    name: "Profile",
    meta: {
      requiresAuth : true
    },
    component: () =>
      import("../views/Profile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from , next) => {
  // verifica a view requer autenticação
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    auth.currentUser ? next() : next( { name : 'Home'})
  }else{
    next()
  }
})

export default router;