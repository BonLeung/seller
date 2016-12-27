// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings.vue'
import seller from 'components/seller/seller.vue'

import './common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
  ]
})

const app = new Vue({
  router: router,
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
})

app.$mount('#app')

