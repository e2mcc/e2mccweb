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
			const BackendURL='http://43.159.53.99';
			const BackendPort = 3000;
			const BackendAPI = 'f2b';
			const BackendResponser = 'testconnection';
			const Backend = `${BackendURL}:${BackendPort}/${BackendAPI}/${BackendResponser}`;
			try {
				const response = await axios.get(Backend);
				console.log(response.data);
				this.FrontendNumber = response.data.BackendNum;
			} catch (error) {
				console.error(error);
			}
		}
	}
}
</script>