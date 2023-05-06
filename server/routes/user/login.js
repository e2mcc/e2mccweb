const express = require('express');
const login_router = express.Router();
const jwt = require('jsonwebtoken');


const users = [
	{
		email: 'hnutsai@hnu.edu.cn',
		password:'123456',
		authcode:1,
	},

	{
		email: 'admin@admin.cn',
		password:'xhb',
		authcode:2,
	},

	{
		email:'qrx@qrx.cn',
		password:'xhb',
		authcode:7,
	}
];

function findUserByEmailAndPassword(email, password)
{
	for (let i = 0; i < users.length; i++) 
	{
		if (users[i].email === email && users[i].password === password) {
			return users[i].authcode;
		}
	}
	return 0;
}


login_router.post('/',  (req, res) => {

	// 从请求中获取用户名和密码
	const email = req.body.email;
	const password = req.body.password;

	// 检查用户名和密码是否存在
	if (!email || !password) {
		return res.json({errmsg: '用户名和密码不能为空' });
	}

	try {
		// 如果用户名和密码匹配
		if ( findUserByEmailAndPassword(email, password) ){	
			// 则创建JWT令牌并将其发送回客户端
			const token = jwt.sign({ email }, 'secret', { expiresIn: '1h' });
			res.json({ token ,authcode:findUserByEmailAndPassword(email, password)});
		} else {
			res.json({ errmsg: '用户名或密码错误' });
		}
	} catch (error) {
		console.error(error);
		res.json({ errmsg: '发生了服务器错误' });
	}
});



module.exports = login_router;