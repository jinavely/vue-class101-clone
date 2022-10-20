import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../pages/Main.vue';
import Login from '../pages/Login.vue';
import Search from '../pages/Search.vue';
import Products from '../pages/Products.vue';
import NotFound from '../pages/NotFound.vue';
import ReviewPage from '../pages/products/ReviewPage.vue';
import ReviewCreatePage from '../pages/products/ReviewCreatePage.vue';
import ReviewEditPage from '../pages/products/ReviewEditPage.vue';

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
      path: '/reviewCreatePage',
      name: 'ReviewCreatePage',
      component: ReviewCreatePage,
    },
    {
      path: '/reviewEditPage/:id',
      name: 'ReviewEditPage',
      component: ReviewEditPage,
    },
    {
      path: '/reviewPage',
      name: 'ReviewPage',
      component: ReviewPage,
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
