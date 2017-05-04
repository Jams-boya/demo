var Service=require("../service/userService");
var pools=require("../utils/pool");
//var tools = require("../utils/tools");
module.exports=function(app, urlParser, tools){
	var service=new Service();
   //将注册信息传入数据库
	app.post("/register",urlParser,function(req,res){
	    var sql="insert into user(username,password) values(?,?)";
	    var arr=[req.body.user,tools.md5(req.body.pass)];
	    pools(sql,arr,function(vals){
            if(vals.affectedRows==1){
                res.send("success");
            }else{
                res.send("failure");
            }
    	});	
	});
    //验证用户登录信息
	app.post("/login",urlParser,function(req,res){
	    var user=req.body.user;
	    var pass=req.body.pass;
	    var sql="select id from user where username=? and password=?";
	    pools(sql,[user,tools.md5(pass)],function(vals){    
	        if(vals && vals.length>0){
	            res.send(vals);
	        }else{
	            res.send("failure");
	        }
	    })
	});
};
