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
						<li class = "nav-link">
							<!-- 这是一个路由链接（router-link），用来跳转到/register -->
							<router-link to="/chat" class="nav-link">聊天</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="container">
			<main>
				<h1>{{ title }}</h1>
				<p>Welcome to my website!</p>
			</main>
			<footer class="bg-light py-3">
				<div class="container text-center">
					<p>&copy; 2023 My Website. All Rights Reserved.</p>
				</div>
			</footer>
		</div>
	</div>
</template>
  
<script>
export default {
	data() {
		return {
			title: 'My Website',
		};
	},
};
</script>
  
<style>
/* 通过引入 Bootstrap CSS 文件或使用 SCSS 自定义生成 */
</style>
  