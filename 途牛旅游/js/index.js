var $actImg = $('.act-img>li'),$title = $('.act-title>li'),$prev = $('.bn-center>.prev'),$next = $('.bn-center>.next'),$banner = $('.banner');
var now = 0,d;
$banner.hover(function(){
	$prev.animate({'opacity':0.7},600).show();
	$next.animate({'opacity':0.7},600).show();
},function(){
	$prev.animate({'opacity':0},600);
	$next.animate({'opacity':0},600);
})
$title.click(function(){
	now = $(this).index();
	$actImg.eq(now).animate({'opacity':1},600).siblings().animate({'opacity':0},600);
	$(this).addClass('current').siblings().removeClass('current');
});
$title.eq(0).trigger('click');
function move(){
			if(now == 0) d = 1;
			if(now == $title.size() - 1) d = -1;
			now += d;
			$title.eq(now).trigger('click');
		}
		var st = setInterval(move,2000);
		$banner.hover(function(){
			clearInterval(st);
		},function(){
			st = setInterval(move,2000);
	});
		$prev.on('click',function(){
			if(now == 0) {
				$prev.hide();
			}else{
				now --;
				$prev.show();
				$next.show();
				$actImg.eq(now).animate({'opacity':1},600).siblings().animate({'opacity':0},600);
				$title.eq(now).addClass('current').siblings().removeClass('current');
			}
		});
		$next.on('click',function(){
			if(now == $title.size() - 1) {
				$next.hide();
			}else{
				now ++;
				$prev.show();
				$next.show();
				$actImg.eq(now).animate({'opacity':1},600).siblings().animate({'opacity':0},600);
				$title.eq(now).addClass('current').siblings().removeClass('current');
			}
		});
		
//轮播图

var $fixsub = $('.fixsub'),$lis = $fixsub.children('li'),$imgs = $('.fixsub>li>a>img');
$lis.click(function(){
	$imgs.each(function(i){
		$imgs.eq(i).animate({'left':'0px'},800);
	});
	$(this).animate({'width':'122px'},800).siblings().animate({'width':'97px'},800);
	$imgs.eq($(this).index()).animate({'left':'-100px'},600);
});
$lis.eq(0).trigger('click');

//手风琴


var $catNav = $('.cata-log-nav'),$cat2 = $('.cat2'),$cat3 = $('.cat3'),$close = $('.close');
var $diys = $('.diys');


$catNav.click(function(){ 
	if($(this).index() == 0 ){
		$cat2.show();$cat3.hide();
		$(this).addClass('cut').siblings().removeClass('cut');
	}else{
		$cat3.show();$cat2.hide();
		$(this).addClass('cut').siblings().removeClass('cut');
		$diys.eq($(this).index()-1).show().siblings().hide();
	}
});
$close.click(function(){
	$catNav.eq(0).trigger('click');
})
$catNav.eq(0).trigger('click');



//选项卡1

var $tabs = $('.tabs>li'),$Ass = $tabs.children('a'),$layer = $('.layer-list>li'),now = 0;
$tabs.click(function(){
	now = $(this).index();
	$layer.eq(now).fadeIn().show().siblings().fadeOut().hide();
	$tabs.eq(now).addClass('currt').siblings().removeClass('currt');
});
$tabs.eq(0).trigger('click');

//选项卡2(类轮播)

var $layerNav1 = $('.layer1 .layer-nav>li'),$layerAs = $layerNav1.children('a'),$rightLi1 = $('.layer1>.layer-body>.rigpic');

$layerNav1.click(function(){
	$(this).addClass('out').siblings().removeClass('out');
	var sh = parseInt($rightLi1.css('top'))
	$rightLi1.stop(true).animate({
		'top':20-390*$(this).index() + 'px'
	},800,'easeOutStrong');
	//console.log(sh-390*$(this).index());
});
$layerNav1.eq(0).addClass('out');

//选项卡3
var $layerNav2 = $('.layer2 .layer-nav>li'),$layerAs = $layerNav2.children('a'),$rightLi2 = $('.layer2>.layer-body>.rigpics>.rigpic');

$layerNav2.mouseover(function(){
	$(this).addClass('out').siblings().removeClass('out');
	var sh = parseInt($rightLi2.css('left'))
	$rightLi2.stop(true).animate({
		'left':-720*$(this).index() + 'px'
	},800,'easeOutStrong');
	//console.log(sh-390*$(this).index());
});
$layerNav2.eq(0).addClass('out');

//选项卡4
var $layerNav3 = $('.layer3 .layer-nav>li'),$layerAs = $layerNav3.children('a'),$rightLi3 = $('.layer3>.layer-body>.rigpics>.rigpic');

$layerNav3.mouseover(function(){
	$(this).addClass('out1').siblings().removeClass('out1');
	var sh = parseInt($rightLi3.css('left'))
	$rightLi3.stop(true).animate({
		'left':-720*$(this).index() + 'px'
	},800,'easeOutStrong');
	//console.log(sh-390*$(this).index());
});
$layerNav3.eq(0).addClass('out1');

//选项卡5
var $layerNav4 = $('.layer4 .layer-nav>li'),$layerAs = $layerNav4.children('a'),$rightLi4 = $('.layer4>.layer-body>.rigpics>.rigpic');

$layerNav4.mouseover(function(){
	$(this).addClass('out2').siblings().removeClass('out2');
	var sh = parseInt($rightLi4.css('left'))
	$rightLi4.stop(true).animate({
		'left':-720*$(this).index() + 'px'
	},800,'easeOutStrong');
	//console.log(sh-390*$(this).index());
});
$layerNav4.eq(0).addClass('out2');

//选项卡6
var $layerNav5 = $('.layer5 .layer-nav>li'),$layerAs = $layerNav5.children('a'),$rightLi5 = $('.layer5>.layer-body>.rigpics>.rigpic');

$layerNav5.mouseover(function(){
	$(this).addClass('out3').siblings().removeClass('out3');
	var sh = parseInt($rightLi5.css('left'))
	$rightLi5.stop(true).animate({
		'left':-720*$(this).index() + 'px'
	},800,'easeOutStrong');
	//console.log(sh-390*$(this).index());
});
$layerNav5.eq(0).addClass('out3');

//浮动图片变大
var $Oas1 = $('.right-top1>div'),$Oimgs1 = $('.right-top1>div img');
	$Oas1.mouseover(function(){
	$Oimgs1.eq($(this).index()).stop(true).animate({'width':235},600).siblings().css('width',225);
});
$Oas1.mouseout(function(){
	$Oimgs1.eq($(this).index()).stop(true).animate({'width':225},600);
});

var $Oas2 = $('.right-top2>div'),$Oimgs2 = $('.right-top2>div img');
	$Oas2.mouseover(function(){
	$Oimgs2.eq($(this).index()).stop(true).animate({'width':235},600).siblings().css('width',225);
});
$Oas2.mouseout(function(){
	$Oimgs2.eq($(this).index()).stop(true).animate({'width':225},600);
});

//选项卡7
var $ctn1 = $('.rig-ml-ctn>.ctn1'),$rigTabs = $('.rig-tabs>li');

$rigTabs.click(function(){
	$ctn1.stop(true).animate({'left':-205 * $(this).index() + 'px'},500);
	$(this).addClass('cba').siblings().removeClass('cba');
});
$rigTabs.eq(0).trigger('click');












//右边固定定位高度

var $fixnav = $('.fixnav'),h = $(window).height(),$firPos = $('.fir-pos'),$pos1 = $('.pos1'),$secPos = $('.sec-pos'),$zjl2 = $('.zjl2');
$fixnav.css('height',h);

$firPos.hover(function(){
	$pos1.stop(true).animate({'left':-250,'opacity':1},600,function(){
		$(this).animate({'left':-215},400);
	})
},function(){
	$pos1.stop(true).animate({'left':0,'opacity':0},600);
});

var $hovApp = $secPos.children('.app');
$secPos.hover(function(){
	$hovApp.addClass('hov-app');
	$zjl2.stop(true).animate({'left':-294,'opacity':1},600,function(){
		$(this).animate({'left':-274},400);
	})
},function(){
	$zjl2.stop(true).animate({'left':250,'opacity':0},600);
	$hovApp.removeClass('hov-app');
});


var $thrNav = $('.thr-nav>li'),$act = $('.thr-nav .act');
$thrNav.hover(function(){
	$act.eq($(this).index()).stop(true).animate({'left':-96,'opacity':1},600,function(){
		$(this).animate({'left':-84},400);
	});
},function(){
	$act.eq($(this).index()).stop(true).animate({'left':0,'opacity':0},600);
});

var $navBtm = $('.nav-btm>li'),$act1 = $('.nav-btm .act');
$navBtm.hover(function(){
	$act1.eq($(this).index()).stop(true).animate({'left':-96,'opacity':1},600,function(){
		$(this).animate({'left':-84},400);
	});
},function(){
	$act1.eq($(this).index()).stop(true).animate({'left':0,'opacity':0},600);
});
//登陆框

var $logins = $('.logins'),$loginBox = $('.login-box');
$logins.hover(function(){
	$loginBox.stop(true).animate({'left':-417,'opacity':1},600,function(){
		$(this).animate({'left':-402},400);
	});
},function(){
	$loginBox.stop(true).animate({'left':45,'opacity':0},600);
});





var $scTop = $('.sc-top');
$scTop.click(function() {
			$('body,html').stop(true).animate({
				scrollTop:0,
			},800,'easeOutStrong');
		});

//登陆框
var $Oabc = $('.ctn-nav>a'),$inp1 = $('.inp1');
$Oabc.click(function(){
	$inp1.eq($(this).index()).show().siblings().hide();
	$(this).addClass('active').siblings().removeClass('active');
});
$Oabc.eq(0).trigger('click');









//楼层
var $layers = $('.layers'),$slide = $('.nav-slide'), $Oul = $slide.children('ul'),arr = [];
		$layers.each(function(i,e){
			arr.push($(e).offset().top);
			if(i == $layers.size()-1){
				arr.push($(e).offset().top + $(e).height());
			}
		});
		//窗口滚动事件
		var $body = $(document),$li = $Oul.children('li');
		$(window).scroll(function(){
			var top = $body.scrollTop() + 200;
			if(top >=arr[0]){
					$slide.animate({'top':250 + 'px'},500,'bounceOut',function(){
						$slide.animate({'top':150+ 'px'},800,'easeOut');
					});
				}
//			if(top <=arr[0]){
//				$slide.animate({'top':-532 + 'px'},500,'bounceOut');
//			}
			for(var i = 0;i< arr.length - 1;i++){
				if(top >=arr[i] && top < arr[i+1]){
//					var s = $('arr').index();
//					if(s == 0){
//						li.eq(s).addClass('nv-yc').siblings().removeClass('');
//					}else if(s == 1){
//						li.eq(s).addClass('nv-gn').siblings().removeClass('');
//					}else if(s == 2){
//						li.eq(s).addClass('nv-cj').siblings().removeClass('');
//					}else if(s == 3){
//						li.eq(s).addClass('nv-zb').siblings().removeClass('');
//					}else if(s == 4){
//						li.eq(s).addClass('nv-zz').siblings().removeClass('');
//					}
					$li.eq(i).addClass('nv-yc').siblings().removeClass('nv-yc');
				}
			}
		})
		
		//点击到指定地方
		$li.click(function(){
			$('body,html').animate({
				scrollTop:arr[$(this).index()]
			},800,'easeOutStrong')
		})



//cook

var $text1 = $('.inp1>p>input:text'),$text2 = $('.inp1>div>b>input:text'),$password1 = $('.inp1>p>input:password').eq(0),$password2 = $('.inp1>p>input:password').eq(1);
var reg = /^[a-zA-Z]\w{6,}$/, reg2 = /^1[34578]\d{9}$/, reg3 = /^\d{7}$/;
console.log($password1);
$text1.focus(function(){
	$text1.parent('p').css('border','1px solid #22C233').addClass('focus');
	$text1.parent('p').removeClass('false');
	this.select();
});

	function tex1(){	
		if(!reg2.test($text1.val())){
			$text1.parent('p').css('border','1px solid #ff0000').addClass('false');
			return false;
		}else{
			$text1.parent('p').css('border','1px solid #d8d8d8').removeClass();
			return true;
		}
	};
	$text1.blur(tex1);


$text2.focus(function(){
	$text2.parent('b').css('border','1px solid #22C233').siblings().css('border','1px solid #22C233');
	this.select();
});

	function tex2(){
		//console.log(!reg2.test($(this).value));
		if(!reg2.test($text2.val())){
			$text2.parent('b').css('border','1px solid #ff0000').siblings().css('border','1px solid #ff0000');
			return false;
		}else{
			$text2.parent('b').css('border','1px solid #d8d8d8').siblings().css('border','1px solid #d8d8d8');
			return true;
		}
	};
	$text2.blur(tex2);
	
$password1.focus(function(){
	$password1.parent('p').css('border','1px solid #22C233').addClass('focus');
	$password1.parent('p').removeClass('false');
	this.select();
});

	function pass(){
		if(!reg.test($password1.val())){
			$password1.parent('p').css('border','1px solid #ff0000').addClass('false');
			return false;
		}else{
			$password1.parent('p').css('border','1px solid #d8d8d8').removeClass();
			return true;
		}
		console.log(!reg.test($password1.val()));
	};
	$password1.blur(pass);
	

$password2.focus(function(){
	$password2.parent('p').css('border','1px solid #22C233').addClass('focus');
	$password2.parent('p').removeClass('false');
	this.select();
});
//console.log(!reg3.test($password2.val()));
	function pas2(){
	if(!reg3.test($password2.val())){
		$password2.parent('p').css('border','1px solid #ff0000').addClass('false');
		return false;
	}else{
		$password2.parent('p').css('border','1px solid #d8d8d8').removeClass();
		return true;
	}
};
$password2.blur(pas2);
				function bnv(){
					$loginBox.stop(true).animate({'left':45,'opacity':0},600);
				};
//提交
   var $Sub = $(':submit');
		$(':submit').click(function(){
			if(pass() && tex1()){
				bnv();
				//验证成功后保存用户名
				$.cookie('users',$text1.val(), {expires:3,path:'/'})
				//显示用户名	
				
				$('#log').html('欢迎，'+$.cookie('users')+'！<a href="javascript:;" id="logout">退出</a>');
			//给退出绑定点击事件
			$('#logout').click(function() {
				$('#log').html('<a href="javascript:;">登录</a>');
				$.cookie('users', null, {expires:-1, path:'/'});
			});
			//showUser();
			} 
			
			return false;
		});
	//console.log((pass() && tex1()));	
//网页加载完毕后就判断当前是否存有用户名
//		if($.cookie('user')) {
//			showUser();
//		}
		//console.log(showUsers());
//用户名显示函数
		function showUsers(){
			//网页中显示用户名
			//$('#log').html('欢迎，'+$.cookie('users')+'！<a href="javascript:;" id="logout">退出</a>');
			//给退出绑定点击事件
			$('#logout').click(function() {
				$('#log').html('<a href="javascript:;">登录</a>');
				$.cookie('users', null, {expires:-1, path:'/'});
			});
		}
		
