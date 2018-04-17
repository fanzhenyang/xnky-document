import Vue from 'vue';
import Router from 'vue-router';
import CardList from '@/document/CardList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: CardList,
    }, {
      path: '/CardList',
      name: 'CardList',
      component: CardList,
    },
  ],
});
