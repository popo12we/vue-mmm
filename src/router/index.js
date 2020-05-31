import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Moneyproduct from '../views/Moneyproduct.vue'
import Productlist from '../views/Productlist.vue'
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
  }
]

const router = new VueRouter({
  routes
})

export default router
