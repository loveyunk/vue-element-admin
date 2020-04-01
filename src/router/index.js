import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard/index.vue';
import User from '../views/User/index.vue';
import Login from '../views/Login/index.vue';
import ECharts from '../views/Chart/ECharts/index.vue';
import NotFound from '../views/NotFound/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/chart/ECharts',
    name: 'echarts',
    component: ECharts
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '*',
    redirect: { name: '404' }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
