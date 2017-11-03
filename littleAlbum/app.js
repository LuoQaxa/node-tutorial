var express = require("express");
var app = express();
//控制器
//由于controller文件夹中有package.json，所以当找不到index.js时就会去读package.json文件 main字段的值route,js
var router = require("./controller");

//设置模板引擎
app.set("view engine", "ejs");

//路由中间件，静态页面
// app.use(path, function(req, res, next){})
// 所以express.static('')的返回值一定是一个参数为req res next的函数
// express.static的路径是相对于node执行的路径，所以为了适配所有最好加上
// __dirname + './public'
// 如果有多个express.static,那么会按照定义的顺序查找静态文件
app.use(express.static("./public"));
app.use(express.static("./uploads"));
//首页
app.get("/", router.showIndex);
app.get("/:albumName", router.showAlbum);
app.get("/up", router.showUp);
app.post("/up", router.doPost);

//404
app.use(function (req, res) {
    res.render("err");
});

app.listen(3000);