<template>
	<div class="hello">
		<button @click="getBackendNumber">Get Backend Number</button>
		<p v-if="FrontendNumber">Backend Number: {{ FrontendNumber }}</p>
	</div>
</template>
  
<script>
import axios from 'axios';
export default {
	data() {
		return {
			FrontendNumber: null
		}
	},
	methods: {
		async getBackendNumber() {
			console.log("已调用 getBackendNumber 方法");
			
			const api = axios.create({
				baseURL: 'http://43.159.53.99:3000',
				//withCredentials属性指定是否将凭据（例如 cookies）包括在跨域请求中。
				withCredentials: false,
			});
			
			try {
				const response = await api.get('/f2b/testconnection');
				console.log(response.data);
				this.FrontendNumber = response.data.BackendNum;
			} catch (error) {
				console.error(error);
			}
		}
	}
}
</script>