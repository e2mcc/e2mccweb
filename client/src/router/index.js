import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ChatView from '../views/ChatView.vue'

const routes = [

	{
		path: '/',
		name: 'HomeView',
		component: HomeView
	},
	
	{
		path: '/login',
		name: 'LoginView',
		component: LoginView
	},


	{
		path: '/register',
		name: 'RegisterView',
		component: RegisterView
	},

	{
		path: '/chat',
		name: 'ChatView',
		component: ChatView
	},

]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router