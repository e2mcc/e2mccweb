<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<!--这是一个容器（container），用来包裹导航栏和内容。-->
			<div class="container">
				<router-link class="navbar-brand" href="#" to="/">并行计算实验室</router-link>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto">
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
				<!-- 当errorcount > 0时,显示这条错误信息语句 -->
				<div v-if="errorcount > 0" class="text-danger">错误+{{errorcount}}:{{errormsg}}</div>
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
			errormsg:'',//添加一个错误提示信息
			errorcount:0,
		};
	},

	methods: {
		async onSubmit() {
			console.log('已调用 onSubmit 方法');

			const BackendURL='http://43.159.53.99';
			const BackendPort = 3000;
			const BackendAPI = 'f2b';
			const BackendResponser = 'login';
			const Backend = `${BackendURL}:${BackendPort}/${BackendAPI}/${BackendResponser}`;

			try {
				// 把信息传给后端，等待后端返回 response
				const response = await axios.post(Backend, {
					email:this.user.email,
					password:this.user.password
				});

				if('token'in response.data){
					// 获得 token
					const token = response.data.token;
					const authcode = response.data.authcode;
					console.log(token);
					console.log(authcode);
					// 将令牌保存到本地存储以备日后使用。
					localStorage.setItem('token', token);
					if(authcode===7){
						// 重定向至 "/test2" 页面
						this.$router.push('/test2');
					}else{
						// 重定向至 "/chat" 页面
						this.$router.push('/chat');
					}
					
				}else{
					//获取后端发送的errmsg,并且错误数+1
					this.errormsg = response.data.errmsg;
					this.errorcount++;
				}

			} catch (error) {
				console.error(error);
			}
		},
	}
}
</script>