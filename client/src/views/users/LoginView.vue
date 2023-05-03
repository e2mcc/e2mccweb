<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<!--这是一个容器（container），用来包裹导航栏和内容。-->
			<div class="container">
				<router-link class="navbar-brand" href="#" to="/">并行计算实验室</router-link>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto">
						<!-- v-if="!$store.getters.isAuthenticated"> -->
						<!-- 这里应该有一些菜单项 -->
						<li class = "nav-link">
							<!-- 这是一个路由链接（router-link），用来跳转到/login -->
							<router-link to="/login" class="nav-link">登录</router-link>
						</li>
						<li class = "nav-link">
							<!-- 这是一个路由链接（router-link），用来跳转到/register -->
							<router-link to="/register" class="nav-link">注册</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="col-4 offset-4 mt-3">
			<form @submit.prevent="onSubmit">
				<div class="mb-3">
					<label for="email" class="form-label">登录邮箱地址</label>
					<input type="email" class="form-control" id="email" placeholder="name@hnu.edu.cn" v-model="user.email">
				</div>
				<div class="mb-3">
					<label for="password" class="form-label">登录密码</label>
					<input type="password" class="form-control" id="password" v-model="user.password">
				</div>
				<div class="mb-3">
					<button class="btn btn-primary" type="submit">登录</button>
				</div>
				<div class="text-center">
					我没有账户： <router-link to="/register">马上注册</router-link>
				</div>
			</form>
		</div>
	</div>
</template>


<script>
import axios from 'axios';
export default {
	name: 'LoginView',

	data() {
		return {
			user: {
				email: '',
				password: '',
			},
		};
	},

	methods: {
		async onSubmit() {
			console.log('已调用 onSubmit 方法');

			const BackendURL='http://43.159.53.99';
			const BackendPort = 3000;
			const BackendAPI = 'f2b';
			const BackendResponser = 'testconnection';
			const Backend = `${BackendURL}:${BackendPort}/${BackendAPI}/${BackendResponser}`;

			try {
				const response = await axios.post(Backend, {
					email:this.user.email,
					password:this.user.password
				});

				// 判断axios.post返回的 json 的内容
				// if ('message' in response.data){
				// 	console.log(response.data.message);
				// }else if('token' in response.data) {
				// 	// 获得 token
				// 	const token = response.data.token;
				// 	// 将令牌保存到本地存储以备日后使用。
				// 	localStorage.setItem('token', token);
				// 	// 重定向至 "/chat" 页面
				// 	this.$router.push('/chat');
				// }
				console.log(response.data);
			} catch (error) {
				console.error(error);
			}
		},
	}
}
</script>