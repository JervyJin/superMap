import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import map1 from '@/components/map1'
import map2 from '@/components/map2'
import slideMenu from '../view/slideMenu.vue'
import page1 from '../view/page1.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/map1',
      name: 'map1',
      component: map1
    },
    {
      path: '/map2',
      name: 'map2',
      component: map2
    },
    {
      path: '/slideMenu',
      name: 'slideMenu',
      component: slideMenu
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
  ]
})
