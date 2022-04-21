import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/TheHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/friends', name: 'Friends', component: (() => import('./../views/UserProfile.vue')) },
  { path: '/add-friend', name: 'AddFriend', component: (() => import('./../views/AddFriend.vue')) },
  { path: "/login", name: "Login", component: (() => import("./../views/LoginPage.vue")) },
  { path: '/friends/:id', name: "friend", component: (() => import('./../views/FriendDetails.vue')) },
  { path: '/:notFound(.*)', component: (() => import('./../views/notFound.vue')) }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
