var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');// 引入index.js路由配置文件
var usersRouter = require('./routes/users');// 引入user.js路由配置文件

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//指定视图文件夹views
app.set('view engine', 'ejs');//指定视图引擎ejs

//使用刚刚加载的资源
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));// 指定公共资源文件夹为public

app.use('/', indexRouter);//当路径为'/'，即http://localhost:3000时，匹配index.js
app.use('/users', usersRouter);

// catch 404 and forward to error handler
//匹配404，即路径匹配时
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  //当路径匹配错误时 给前端输出500
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
