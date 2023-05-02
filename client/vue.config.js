const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	// 设置端口号为4444，只允许来自本地和 www.e2mcc.cn 的访问
	devServer:{
		allowedHosts: ['localhost', 'www.e2mcc.cn'],
		host:'0.0.0.0',
		port:4444
	}
})
