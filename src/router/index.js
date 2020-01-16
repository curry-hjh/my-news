/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Focus from "../views/Focus.vue"
Vue.use(VueRouter);

const router = new VueRouter({
  // 配置路由规则
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login, name: "login" },
    { path: "/register", component: Register, name: "register" },
    { path: "/home", component: Home, name: "home" },
    { path: "/focus", component: Focus, name: "focus" }
  ]
});

export default router;
