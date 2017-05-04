var verlist = document.getElementById('verlist');



verlist.onmousemove=function(ev) {
//			var ev = ev || window.event,
//		  	mPosi = mousePosition(ev),
//		 	d = -(mPosi / wrapRange * listRange - mPosi);
//			vlistDom.style.left = d + 'px'


	var e = ev || window.event;
	this.style.left = -4.98* e.clientX + 3000 + 'px';
}





//function $(idName){
//				return document.getElementById(idName);
//			}
//
//
//		var verDom = document.getElementById('verbox'),
//			vlistDom = document.getElementById('verlist'),
//			wrapRange = parseInt(verDom.width()),
//			listRange = parseInt(vlistDom.width()),
//			clientW = document.documentElement.clientWidth || document.body.clientWidth;    //可视区域的宽
//
//		var mousePosition = function(e){
//			var ev = e || window.event,ex = 0;
//			if (ev.pageX) {
//				ex = ev.pageX;           //相对整个页面的横坐标
//			} else{
//				ex = ev.clientX + document.body.scrollLeft - document.body.clientLeft;            // ev.clientX  相对可视区域的坐标
//			}
//			//console.log(clientW)
//			if(clientW >= 1660){
//				return (ex - 620);
//			} else if(clientW < 1660 && clientW > 1270){
//				return (ex - 380);
//			} else if(clientW < 1270 && clientW > 1030){
//				return (ex - 208);
//			} else{
//				return (ex - 198);
//			}                                      // 判断窗口大小返回  ex		
//		};
//
//		$('#verbox').onmouseover = function(ev){
//		 var ev = ev || window.event,
//				mPosi = mousePosition(ev),
//				d = -(mPosi/wrapRange*listRange - mPosi);
//				vlistDom.style.left = d + 'px';
//		}
