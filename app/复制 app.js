var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require("body-parser"); //URL解析库
var tools = require("./server/utils/tools"); //工具类
var userRoutes = require("./server/controller/userController");
var urlParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
})

//用户路由
userRoutes(app, urlParser, tools);


app.listen(9000);
console.log("server start in 9000")