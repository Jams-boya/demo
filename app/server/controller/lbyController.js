var Service=require("../service/userService");
var pools = require("../utils/pool");
module.exports=function(app, urlParser, tools){
	//获取按需查询类名
app.get("/goodstype", function(req, res) {
    var sql = "select id,name,parent_id from goodstype";
    pools(sql, [], function(result) {
        res.send(result);
    })
});
//获取按需查询商品列表
app.get("/goods_type_id", function(req, res) {
    var tpid = "select id,title,time,price,brand_id,type_id,pic1 from goods";
    pools(tpid, [], function(result) {
        res.send(result);
    })
});

//品牌
app.get("/brand", function(req, res) {
    var sql = "select id,name,country from brand";
    pools(sql,[], function(result) {
        res.send(result);
    })
});

//八大类展示
app.get("/classify", function(req, res) {
    var sql = "select g.id,g.title,g.price,g.pic1,g.brand_id,g.type_id,b.name from brand b,goods g where b.id=g.brand_id";
    pools(sql, [], function(result) {
        res.send(result);
    })
});


//搜索专区
app.get("/goodstitle", function(req, res) {
    var tle = req.query.title;
    var sqls = "select id,title,price,pic1 from goods where title like ? ";
    pools(sqls, ['%' + tle + '%'], function(result) {
        res.send(result);
    })
});

//购物车专区

app.post("/shopcart", urlParser, function(req, res) {
    var sqls = "insert into shopcart(goods_id,user_id,count,SinglePrice,price) values(?,?,?,?,?)";
    var arr = [req.body.gsid, req.body.usid, req.body.cnt, req.body.sprice, req.body.price];
    pools(sqls, arr, function(vals) {
        if (vals.affectedRows == 1) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
});

}