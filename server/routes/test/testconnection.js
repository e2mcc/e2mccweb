const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// router.post('/api/login', async (req, res) => {
// 	// 从请求中获取用户名和密码
// 	const { email, password } = req.body;

	// // 检查用户名和密码是否存在
	// if (!email || !password) {
	// 	return res.status(400).json({ message: '用户名和密码不能为空。' });
	// }

	// try {
	// 	// TODO：从数据库中检索用户名和密码，并比较它们与请求的值

	// 	// 如果用户名和密码匹配，则创建JWT令牌并将其发送回客户端
	// 	const token = jwt.sign({ email }, 'secret', { expiresIn: '1h' });
	// 	res.json({ token });
	// } catch (error) {
	// 	console.error(error);
	// 	res.status(500).json({ message: '发生了服务器错误。' });
	// }
// 	return res.status(400).json({ message: '用户名和密码不能为空。' });
// });


router.get('/', (req, res) => {
	console.log("hahah");
	const BackendNum = 3322;
	res.send({ BackendNum });
})

module.exports = router;
