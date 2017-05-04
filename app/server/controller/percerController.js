//var Service=require("../service/userService");
//var pools = require("../utils/pool"); 
module.exports=function(app, urlParser, pools){
//	var service=new Service();
//登录进入时通过用户名得到用户id
app.post("/getUserId",urlParser,function (req,res) {
	console.log(req.body.userName);
	var sql="select id from user where username=?";
	console.log(req.body.userName);
	pools(sql,[req.body.userName],function (result) {
		res.send(result);
	});
});
	//个人中心首页用户名显示
app.get("/useruser", function(req, res) {
	var sql = "select username from user where id=?";
    pools(sql,[req.query.name],function(result) {
        res.send(result);
    })
})

//个人中心优惠券
app.post("/coupon",urlParser, function(req, res) {
	var sql = "select title,price,rule,endtime from coupon where user_id=?";
    pools(sql,[req.body.conName],function(result) {
        res.send(result);
    })
})
//个人中心我的足迹
app.get("/footsteep1", function(req, res) {
	var sql="select g.title,g.price,g.pic1,b.country,b.name from user u,tracks t,goods g,brand b where u.id=t.user_id and g.id=t.goods_id and b.id=g.brand_id and t.user_id=?";
    pools(sql,[req.query.footName],function(result) {
        res.send(result);
    })
})
//个人中心我的收藏
app.post("/favoriteit",urlParser, function(req, res) {
	console.log(req.body.favorite)
	var sql="select g.title,g.price,g.pic1,b.country,b.name,f.id from user u,favorite f,goods g,brand b where u.id=f.user_id and g.id=f.goods_id and b.id=g.brand_id and f.user_id=?";
	console.log(req.body.favorite)
    pools(sql,[req.body.favorite],function(result) {
        res.send(result);
    })
})
//个人中心我的收藏删除记录
app.get("/favoriteDel", function(req, res) {
	var sql="delete from favorite where id=?";
    pools(sql,[req.query.delid],function(result) {
        res.send("success");
    })
})
//个人中心地址添加
app.post("/addresssAdd",urlParser, function(req, res) {
	var sql="INSERT into addressinfo(username,mobile,province,city,country,area,postcode,user_id,mydefault) VALUES (?,?,?,?,?,?,?,?,?)";
    pools(sql,[req.body.username,req.body.phonenum,req.body.province,req.body.city,req.body.country,req.body.street,req.body.postcode,req.body.userId,req.body.myDefault],function(result) {
        res.send("success");
    })
})
//个人中心原始地址获取
app.post("/addressget",urlParser, function(req, res) {
	var sql="select id,username,area,mobile,mydefault,province,city,country,postcode from addressinfo where user_id=?";
    pools(sql,[req.body.userId],function(result) {
        res.send(result);
    })
})

//个人中心地址删除
app.post("/addressdel",urlParser, function(req, res) {
	var sql="delete from addressinfo where id=?";
    pools(sql,[req.body.addId],function(result) {
        res.send("success");
    })
})
//个人中心更新地址获取
app.post("/addressgetagain",urlParser, function(req, res) {
	var sql="select username,area,mobile,province,city,country,postcode from addressinfo where id=?";
    pools(sql,[req.body.userId],function(result) {
        res.send(result);
    })
})
//个人中心更新地址
app.post("/addresssChage",urlParser, function(req, res) {
	var sql="UPDATE addressinfo SET username=?,mobile=?,province=?,city=?,country=?,postcode=?,area=? WHERE id=?";
    pools(sql,[req.body.username,req.body.phonenum,req.body.province,req.body.city,req.body.country,req.body.postcode,req.body.street,req.body.addId],function(result) {
        res.send("success");
    })
})
//个人中心地址默认设置(全部设置为非默认)
app.post("/addressunDefaulchange",urlParser, function(req, res) {
	var sql="UPDATE addressinfo SET mydefault=? WHERE user_id=?";
    pools(sql,[req.body.undefnum,req.body.userId],function(result) {
        res.send("success");
    })
})
//个人中心地址默认设置(指定设置为默认)
app.post("/addressDefaulchange",urlParser, function(req, res) {
	var sql="UPDATE addressinfo SET mydefault=? WHERE id=?";
    pools(sql,[req.body.defnum,req.body.changId],function(result) {
        res.send("success");
    })
})
//个人中心我的订单order获取数据
app.post("/orderget",urlParser, function(req, res) {
	var sql="SELECT o.id,o.count,o.singlePrice,o.price,g.title,g.pic1 from `order` o,goods g where o.goods_id=g.id and o.user_id=?";
    pools(sql,[req.body.userId],function(result) {
        res.send(result);
    })
})
//个人中心我的订单order删除数据
app.post("/orderDelete",urlParser, function(req, res) {
	var sql="DELETE FROM `order` WHERE id=?";
    pools(sql,[req.body.orderId],function(result) {
        res.send("success");
    })
})
}
