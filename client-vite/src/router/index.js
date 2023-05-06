import { createRouter, createWebHistory } from 'vue-router'

const routes = [

	{
		path: '/',
		component: ()=>import("@/views/HomeView.vue"),
	},
	
	{
		path: '/login',
		component: ()=>import("@/views/users/LoginView.vue"),
	},


	{
		path: '/register',
		component: ()=>import("@/views/users/RegisterView.vue"),
	},

	{
		path: '/chat',
		component: ()=>import("@/ExternalSource4Chat/views/ChatGPT.vue"),
	},

	{
		path: '/test',
		component: ()=>import("@/views/test/TestConnectionView.vue"),
	},

	{
		path: '/test2',
		component: ()=>import("@/views/test/TestFigureView.vue"),
	},

]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router