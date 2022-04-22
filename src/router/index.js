import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/TheHome.vue'

import store from './../store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, alias: '/home'
  },
  { path: '/friends', name: 'Friends', component: (() => import('./../views/UserProfile.vue')), meta: { requiresAuth: true } },
  { path: '/add-friend', name: 'AddFriend', component: (() => import('./../views/AddFriend.vue')), meta: { requiresAuth: true } },
  { path: "/login", name: "Login", component: (() => import("./../views/LoginPage.vue")), meta: { requiresUnauth: true } },
  { path: '/friends/:id', name: "friend", component: (() => import('./../views/FriendDetails.vue')), meta: { requiresAuth: true } },
  { path: '/:notFound(.*)', component: (() => import('./../views/notFound.vue')) }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login')
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/friends')
  } else {
    next()
  }
})

export default router
