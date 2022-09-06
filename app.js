var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 引入测试路由
const testRouter = require('./routes/test')
// 引入菜单路由
const menuRouter = require('./routes/menu')
// 引入设备路由
const deviceRouter = require('./routes/device')
// 引入软件版本路由
const softwareVersion = require('./routes/softwareVersion')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 实现跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// 挂载测试路由
app.use('/test', testRouter)
// 挂载菜单路由
app.use('/menu', menuRouter)
// 挂载设备路由
app.use('/device', deviceRouter)
// 挂载
app.use('/software', softwareVersion)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});






module.exports = app;
