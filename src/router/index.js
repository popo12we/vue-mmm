import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Moneyproduct from '../views/Moneyproduct.vue'
import Productlist from '../views/Productlist.vue'
import Baicaijia from '../views/Baicaijia.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/moneyproduct/:id',
    name: 'Moneyproduct',
    component: Moneyproduct
  },
  {
    path: '/productlist/:id',
    name: 'Productlist',
    component: Productlist
  },
  {
    path: '/baicaijia',
    name: 'Baicaijia',
    component: Baicaijia
  }
]

const router = new VueRouter({
  routes
})

export default router
