import Vue from 'vue';
import Router from 'vue-router';
import CardList from '@/document/CardList';
import Header from '@/document/Header';
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: CardList,
    }, 
    {
      path: '/CardList',
      name: 'CardList',
      component: CardList,
    },
    {
      path: '/header',
      name:'Header',
      component: Header
    }
  ],
});
