var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require("body-parser"); //URL解析库
var pools = require("./server/utils/pool"); //工具类
var tools = require("./server/utils/tools");
var userRoutes = require("./server/controller/userController");
var MessageXSend = require('./server/sms/messageXSend.js');
var lbyRoutes = require("./server/controller/lbyController");
var wyjRoutes = require("./server/controller/wyjController");
var zqyRoutes = require("./server/controller/zqyController");
var persnalRoutes = require("./server/controller/percerController");

var urlParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/views/index.html");
})

//用户路由
userRoutes(app, urlParser, tools);
lbyRoutes(app, urlParser, pools);
wyjRoutes(app, urlParser, pools);
zqyRoutes(app, urlParser, pools);
persnalRoutes(app, urlParser, pools);

app.listen(9000);
console.log("server start in 9000");


//短信验证码
app.post("/sms",urlParser,function(req,res){
//	console.log("sms...."+req.body.account);
    var random=Math.floor(Math.random()*899999)+100000;
    var messageXSend = new MessageXSend();
    messageXSend.add_to(req.body.account);
    phone=req.body.account;
    messageXSend.set_project('OyIeK4');
    messageXSend.add_var('code',random);
    messageXSend.add_var("time","5分钟");
    messageXSend.xsend();
    res.send(random+"");
});
//重置密码
app.post("/pwd",urlParser,function(req,res){
	var sql="update user set password=? where username=?";
//  var arr=[tools.md5(req.body.word),phone];
	pools(sql,[tools.md5(req.body.word),req.body.phone],function(vals){
        if(vals.affectedRows==1){
            res.send("success");
        }else{
            res.send("failure");
        }
	});
	console.log(phone)
})

	app.get("/shopcart",function(req,res){
	var sql="select s.SinglePrice,s.price,s.goods_id,s.count,g.title,g.pic1 from shopcart s,goods g where g.id=s.goods_id";
	pools(sql,[],function(result){
		res.send(result);
	});
});
//获取购物车商品数量
app.post('/count',urlParser,function(req,res){
	var sql="select count from shopcart where SinglePrice=?";
	pools(sql,[req.body.sp],function(result){
		res.send(result);
	});
});
//将修改后的数量和总价上传到数据库
app.post('/sum',urlParser,function(req,res){
	var sql="update shopcart set count=?,price=? where SinglePrice=?";
	pools(sql,[req.body.sum,req.body.zpr,req.body.sps],function(result){
		if(result.affectedRows==1){
            res.send("success");
        }else{
            res.send("failure");
        }
	});
});
//从购物车里获取商品单价和数量
app.post('/price',urlParser,function(req,res){
	var sql="select count,SinglePrice from shopcart";
	pools(sql,[],function(result){
		res.send(result);
	});
});
//获取购物车商品的id
app.post('/clear',urlParser,function(req,res){
	var sql="select id from goods where title=?";
	pools(sql,[req.body.tle],function(result){
		res.send(result);
	});
});
//删除购物车商品
app.post('/cla',urlParser,function(req,res){
	var sql="delete from shopcart where goods_id=?";
	pools(sql,[req.body.id],function(result){
		res.send('success');
	});
});
