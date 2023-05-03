<template>
	<div>
		<form @submit.prevent="login">
			<label for="email">Email:</label>
			<input type="email" id="email" v-model="email" />

			<label for="password">Password:</label>
			<input type="password" id="password" v-model="password" />

			<button type="submit">Login</button>
		</form>
	</div>
</template>
  
<script>
export default {
	data() {
		return {
			email: "",
			password: "",
		};
	},
	
	methods: {
		async login() {
			console.log("hahaha");
		},
	},
};
</script>
  
