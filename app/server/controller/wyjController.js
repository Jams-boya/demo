var Service = require("../service/userService");
var pools = require("../utils/pool");
module.exports = function(app, urlParser, tools) {

	app.get("/list", function(req, res) {
		var sql = "select id,name,country,logo_img,sample_img from brand";
		pools(sql, [], function(result) {
			res.send(result);
		})
	})

	//品牌详情
	app.get("/num", function(req, res) {
		console.log("details..");
		console.log(req.query.num);
		var sql = "select id,name,country,content,html,url,logo_img,sample_img,cover_img from brand where id=?";
		pools(sql, [req.query.num], function(result) {
			res.send(result);
		})
	})
	//品牌 商品详情
	app.get("/deta", function(req, res) {
		console.log("details..");
		console.log(req.query.deta);
		var sql = "select id,title,price,pic1 from goods where brand_id=?";
		pools(sql, [req.query.deta], function(result) {
			res.send(result);
		})
	})
	//获取按需查询商品列表
	app.get("/goods_type_id", function(req, res) {
		var tpid = "select id,title,time,price,brand_id,type_id,pic1 from goods";
		pools(tpid, [], function(result) {
			res.send(result);
		})
	});

	//购物车
	app.post("/shopcart", urlParser, function(req, res) {
		var sqls = "insert into shopcart(goods_id,user_id,count,SinglePrice,price) values(?,?,?,?,?)";
		var arr = [req.body.gsid, req.body.usid, req.body.cnt, req.body.sprice, req.body.price];
		pools(sqls, arr, function(vals) {
			if(vals.affectedRows == 1) {
				res.send(true);
			} else {
				res.send(false);
			}
		})
	});

}