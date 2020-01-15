/* eslint-disable */
import Vue from "vue"
import VueRouter from "vue-router"
import Login from "../views/Login.vue"
import register from '../views/Register.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  // 配置路由规则
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/register", component: register }
  ]
});

export default router
