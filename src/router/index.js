import Vue from 'vue'
import Router from 'vue-router'
import filmYard from '@/components/filmYard/filmYard'
import film from '@/components/film/film'
import my from '@/components/my/my'
import movie from '@/components/movie/movie'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'film',
      component: film
    },
    {
      path: '/filmYard',
      name: 'filmYard',
      component: filmYard
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/movie/:hid',
      name: 'movie',
      component: movie
    }
  ]
})
