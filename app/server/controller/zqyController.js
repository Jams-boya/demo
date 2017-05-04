var Service=require("../service/userService");
var pools = require("../utils/pool");
module.exports=function(app, urlParser, tools){
	
	
	//数据库获取顶部名称       //数据库获取展示图
app.get("/querygoods",function(req,res){
	var shoptitle="select g.id,g.title,g.pic1,g.pic2,g.pic3,g.pic5,g.pic6,g.price,g.power,p.picture from goods g,goodspicture p where p.goods_id=g.id and g.id=?";
	pools(shoptitle,[req.query.goodId],function(result){
//		console.log(result);
		res.send(result);
	})
})
//数据库获取品牌名称 
app.get("/querybrand",function(req,res){
	var brandname="select name from brand";
	pools(brandname,[],function(result){
		res.send(result);
		//console.log(result)
	})
})
//数据库获取详情图片 
//app.get("/querygoods",function(req,res){
//	var goodsal="select id,pic1,pic2 from goods";
//	pool(goodsal,function(result){
//		res.send(result);
//		//console.log(result)
//	})
//})


//获取user信息                修改稿
app.get("/queryuser",function(req,res){
	var uspl="select id ,username from user";   // u , addressinfo a where a.user_id=u.id and u.id=
	pools(uspl,[],function(result){
		res.send(result);
		console.log(result);
		
	});
});




//心愿卡数据传输
	app.post("/favorite",urlParser, function(req,res){
		var spl= "INSERt into favorite(goods_id,user_id)VALUES(?,?)";
		pools(spl,[req.body.goodsId,req.body.userId],function(result){
			res.send("success");
		});
		
	})
	
	
	
//购物车传输
	app.post("/shopcarts",urlParser, function(req,res){
		var sql= "INSERt into shopcart(goods_id,user_id,count,singlePrice,price) VALUES(?,?,?,?,?)";
		pools(sql,[req.body.goodsId,req.body.userId,req.body.count,req.body.singlePrice,req.body.price],function(result){
			
		});
		
	})
//立即结算数据传输
	app.post("/order",urlParser, function(req,res){
		var ssql= "INSERt into `order`(goods_id,user_id,count,singlePrice,price,state) VALUES(?,?,?,?,?,?)";
		pools(ssql,[req.body.goodsId,req.body.userId,req.body.count,req.body.singlePrice,req.body.price,req.body.state],function(result){
			res.send("result");
		});
		
	})	
	
	
}