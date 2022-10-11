import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../pages/Main.vue';
import Login from '../pages/Login.vue';
import Search from '../pages/Search.vue';
import Store from '../pages/Store.vue';
import Products from '../pages/Products.vue';
import NotFound from '../pages/NotFound.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/store',
      name: 'Store',
      component: Store,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
