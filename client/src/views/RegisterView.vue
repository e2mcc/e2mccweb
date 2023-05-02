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
				<label for="email" class="form-label">注册邮箱地址</label>
				<input type="email" class="form-control" id="email" placeholder="name@hnu.edu.cn" v-model="user.email">
			</div>
			<div class="mb-3">
				<label for="password" class="form-label">注册密码</label>
				<input type="password" class="form-control" id="password" v-model="user.password" required>
			</div>
			<div class="mb-3">
				<button class="btn btn-primary" type="submit">注册</button>
			</div>
			<div class="text-center">
				我已有账户: <router-link to="/login">马上登录</router-link>
			</div>
			</form>
		</div>
	</div>
</template>


<script>
// // ref 函数用于创建一个响应式数据对象
// import {ref} from 'vue'
// // useStore 函数用于访问 Vuex store
// import {useStore} from 'vuex'


export default {
	name: 'RegisterView',
	// setup()
	// {
	// 	let email = ref('');
	// 	let password = ref('');
	// 	let store = useStore();

	// 	function onSubmit() {
	// 		store.dispatch('registerUser',{
	// 			email:email.value,
	// 			password:password.value
	// 		});
	// 	}

	// 	return {
	// 		email,
	// 		password,
	// 		onSubmit
	// 	};
	// }
	
  }
</script>