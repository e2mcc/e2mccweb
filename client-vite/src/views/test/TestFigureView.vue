<template>
	<div class="app">
		<h1>奈斯图</h1>
		<div class="figure-view">
			<img :src="imageUrls[currentIndex]" :alt="altText">
		</div>
		<div class="controls">
			<button @click="previous">Previous</button>
			<button @click="next">Next</button>
		</div>
	</div>
</template>
  
<script>
export default {
	name: 'App',
	data() {
		return {
			currentIndex: 0,
			imageUrls: [
				require('@/public/figures/fig1.png'),
				require('@/public/figures/fig2.jpg'),
				require('@/public/figures/fig3.png'),
			],
			altText: 'My Gallery'
		}
	},
	methods: {
		previous() {
			this.currentIndex = (this.currentIndex + this.imageUrls.length - 1) % this.imageUrls.length;
		},
		next() {
			this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
		}
	}
}
</script>
  
<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
}

.figure-view {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.figure-view img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.controls {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
</style>

  