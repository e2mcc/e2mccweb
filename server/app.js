const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//后端配置：允许浏览器跨域访问后端
const cors = require('cors');
app.use(cors());


app.all('*', (_, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	res.header('Access-Control-Allow-Methods', '*')
	next()
})

//注册test路由
const TestConnectionRouter = require('./routes/test/testconnection.js');
app.use('/f2b/testconnection',TestConnectionRouter);


//注册user路由
const LoginRouter = require('./routes/user/login.js');
app.use('/f2b/login',LoginRouter);
// const RegisterRouter = require('./routes/user/register.js');
// app.use('/f2b/register', RegisterRouter);

//注册user路由
const ChatRouter = require('./routes/chat/chat.js');
app.use('/f2b/chat',ChatRouter);





module.exports = app;
