 var Yc = document.getElementsByClassName("yc")[0];
            var ckHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var ycHeight = Yc.offsetHeight;
            var ckWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var ycWidth = Yc.offsetWidth;
              Yc.style.top = ckHeight/2 - ycHeight/2 + "px";
              Yc.style.left = ckWidth/2 - ycWidth/2 + "px";
              Yc.style.display = "none";
 //动态垂直、水平居中
          var div = document.createElement('div');
          var boDy = document.body;
          var w = ckWidth + "px";
          var h = ckHeight + "px";
             div.style.width = w;
             div.style.height = h;
             div.style.position = "fixed";
             div.style.top = "0";
             div.style.left = "0";
             div.style.background = "rgba(0,2,2,0.3)";
             div.style.zIndex = "9";
             div.style.display = "none";
          boDy.appendChild(div);
          //背景
var Ad = document.getElementById("ad");
var span = document.getElementById("sp"); 
         Ad.onclick = open;
         span.onclick = close;
           function open(){
                      Yc.style.display = "block";
                      div.style.display = "block";                  
            }
           function close(){
                     Yc.style.display = "none";
                     div.style.display = "none";                        
           }
           
//   登陆框及背景
  

var jrlogin = document.getElementsByClassName('jrlogin')[0];
var jrzhuce = document.getElementsByClassName('jrzhuce')[0];
var fhsaomiao = document.getElementsByClassName('fhsaomiao')[0];
var login = document.getElementsByClassName('login')[0];
var saomiao = document.getElementsByClassName('saomiao')[0];
var zhuce = document.getElementsByClassName('zhuce')[0];
	jrlogin.onclick = function(){
		login.style.display = "block";
		saomiao.style.display = "none";
		zhuce.style.display = "none";
	}
	fhsaomiao.onclick = function(){
		login.style.display = "none";
		saomiao.style.display = "block";
		zhuce.style.display = "none";
	}
	jrzhuce.onclick = function(){
		login.style.display = "none";
		saomiao.style.display = "none";
		zhuce.style.display = "block";
	}
//三个界面切换

var text1 = document.getElementsByName('text')[0];
var password1 = document.getElementsByName('password')[0];
var submit1 = document.getElementsByName('submit')[0];
var form1 = document.getElementsByTagName('form')[0];
var xz = document.getElementById('xz');
var mn = document.getElementById('mn');
	xz.style.display = 'none';
	mn.style.visibility = "hidden";
	function zc(x,p){
		x.style.boxShadow = p;
	}
	text1.onfocus = function(){
			zc(text1,"1px 1px #1F8BD4");
		}
	text1.onblur = dlzh;
	function dlzh(){
		var ele = text1;
			zc(ele,"");
			if(ele.value.length<6 || ele.value.length>11){
				xz.style.display = 'block';
			}else{
				xz.style.display = 'none';
			}
		}
	password1.onfocus = function(){
			zc(password1,"1px 1px #1F8BD4");
		}
	password1.onblur = dlmm;
	function dlmm(){
			zc(password1,"");
			var reg = /^\w{6,}$/i;
			if(!reg.test(password1.value)){
				mn.style.visibility = 'visible';
			}else{mn.style.visibility = "hidden";}
		}
	form1.onsubmit = function(){
		if(dlzh() && dlmm()){
			xz.style.display = 'none';
			mn.style.visibility = "hidden";
			return true;
		}else{
			return false;
		}	
	}//  改善

/*登录界面*/
var txx = document.getElementsByName('zh')[0];
var password2 = document.getElementsByName('password')[1];
var email = document.getElementsByName('email')[0];
var phone = document.getElementsByName('phone')[0];
var manid = document.getElementsByName('manid')[0];
var zh= document.getElementById('zh');
var mm = document.getElementById('mm');
var yx = document.getElementById('yx');
var ph = document.getElementById('ph');
var md = document.getElementById('md');
		zh.style.visibility = "hidden";
		mm.style.visibility = "hidden";
		yx.style.visibility = "hidden";
		ph.style.visibility = "hidden";
		md.style.visibility = "hidden";
var form2 = document.getElementsByTagName('form')[1];
		
		
	txx.onfocus = function(){
			zc(txx,"1px 1px #1F8BD4");
		}
	txx.onblur = zczh;
	function zczh(){
		zc(txx,"");
		var reg2 = /^\w{6,20}$/i;
			if(!reg2.test(txx.value)){
				zh.style.visibility = "visible";
			}else{
				zh.style.visibility = "hidden";
			}
		}
	
	
	password2.onfocus = function(){
			zc(password2,"1px 1px #1F8BD4");
		}
	password2.onblur = zcmm;
	function zcmm(){
			zc(password2,"");
			var reg3 = /^\w{6,}$/i;
			if(!reg3.test(password2.value)){
				mm.style.visibility = 'visible';
			}else{
				mm.style.visibility = "hidden";
			}
		}
	
	phone.onfocus = function(){
			zc(phone,"1px 1px #1F8BD4");
		}
	phone.onblur = zcsj;
	function zcsj(){
			zc(phone,"");
			var reg = /^13\d{9}$/;
			if(!reg.test(phone.value)){
				ph.style.visibility = 'visible';
			}else{
				ph.style.visibility = "hidden";
			}
		}
	
	email.onfocus = function(){
			zc(email,"1px 1px #1F8BD4");
		}
	email.onblur = zcyx;
	function zcyx(){
			zc(email,"");
			var reg = /^\w{6,}@\w{3,}$/;
			if(!reg.test(email.value)){
				yx.style.visibility = 'visible';
			}else{
				yx.style.visibility = "hidden";
			}
		}
	
	manid.onfocus = function(){
			zc(manid,"1px 1px #1F8BD4");
		}
	manid.onblur = zcid;
	function zcid(){
			zc(manid,"");
			var reg = /^[0-9]{10}([0-1][0-2]|0[1-9])([1-2]\d|3[0-1]|0\d)\d{3}(\d|[\x])$/i;;
			if(!reg.test(manid.value)){
				md.style.visibility = 'visible';
			}else{
				md.style.visibility = "hidden";
			}
		}
	
	form2.onsubmit = function(){
		if(zcid() && zczh() && zcmm() && zcsj() && zcyx()){
			return true;
		}else{
			return false;
		}	
	}//  改善







var page = document.getElementById('menu').getElementsByTagName('li');
var page2 = document.getElementById('menu').getElementsByTagName('a');
	for(var i = 0;i<page2.length;i++){
		page2[i].lk = i;
		page2[i].onclick = function(){
			for(var i = 0;i<page.length;i++){
				page[i].className = "";
			}
			page[this.lk].className = "active";
		}
	}
