function $(idname){
	return document.getElementById("idname");
}

var lis = document.getElementsByClassName("hd")[0].getElementsByTagName('li');
    lis[0].className = 'on';
    for(var i=0;i < lis.length; i++){
    	lis[i].num = i;
    	lis[i].onclick = vsb;
    }
var rotate1 = document.getElementById('rotate1');
var rotate2 = document.getElementById('rotate2');
    rotate1.className="rotate1 area bis";
    function vsb(){
    	if(this.num == 0){
    		rotate1.className="rotate1 area bis";
    		rotate2.className="rotate2 area";
    		lis[0].className = 'on';
    		lis[1].className = '';
    	}else if(this.num == 1){
    		rotate2.className="rotate2 area bis";
    		rotate1.className="rotate1 area";
    		lis[1].className = 'on';
    		lis[0].className = '';
    	}
    }
var rttpic = document.getElementById('rttpic1') ;
var rttpic3 = document.getElementById('rttpic2') ;
var rttPic1 = rttpic.getElementsByTagName('img');
var rttPic2 = rttpic3.getElementsByTagName('img');
var liS1 = rotate1.getElementsByTagName('li');
    liS1[0].className = "active";
var liS2 = rotate2.getElementsByTagName('li');
    liS2[0].className = "active";  
    
    for(var i = 0;i < liS1.length; i++){
    	liS1[i].min = i;
    	liS1[i].onclick = lb;
    }
   function lb(){
        for(var i=0; i<liS1.length;i++){
    	    liS1[i].className = "";
        }
        rttpic.style.left = -600 * this.min + 'px';
        rttPic1[this.min].style.visibility= "visible";
        liS1[this.min].className = "active";
   }
// 官方onclick事件
var r = 0;
var f = 0;
function stm1(){
	if(r<liS1.length-1){             
            r++;
        }else{
        	r=0;
        } 
      ar(liS1,rttpic,r,rttPic1);  
}       
function ar(p,s,x,t){
	for(var i=0; i<p.length;i++){
    	    p[i].className = "";
        }
        s.style.left = -600 * x + 'px';
        t[x].style.visibility= "visible";
        p[x].className = "active";
        }
var st = window.setInterval(stm1,3000);
rotate1.onmouseover = function (){
                      window.clearInterval(st);
               }; 
rotate1.onmouseout = function (){
                      st = window.setInterval(stm1,3000);
               };

function stm2(){
	if(f<liS2.length-1){             
            f++;
        }else{
        	f=0;
        } 
      ar(liS2,rttpic3,f,rttPic2);  
}
var sx = window.setInterval(stm2,3000);
rotate2.onmouseover = function (){
                      window.clearInterval(sx);
               }; 
rotate2.onmouseout = function (){
                      sx = window.setInterval(stm2,3000);
               };
// 定时轮播图             

   for(var i = 0;i < liS2.length; i++){
    	liS2[i].man = i;
    	liS2[i].onclick = lc;
    }
   function lc(){
       for(var i=0; i<liS2.length;i++){
    	liS2[i].className = "";
        }
        rttpic3.style.left = -600 * this.man + 'px';
        rttPic2[this.man].style.visibility= "visible";
        liS2[this.man].className = "active";
   }
   //  合作onclick事件
   
var newnav = document.getElementsByClassName("newnav")[0].getElementsByTagName("li");
var ctns = document.getElementsByClassName("ctn1");
   ctns[0].style.display = "block";
   newnav[0].className = "on";
   for(var i = 0; i < newnav.length; i++){
       newnav[i].min = i;
       newnav[i].onclick = ctnXx;
   }
   function ctnXx(){
   	for(var i = 0; i<ctns.length; i++){
   		ctns[i].style.display = "none";
   	}
   	for(var i = 0; i < newnav.length; i++){
       newnav[i].className = "";
   }
   	ctns[this.min].style.display = "block";
   	       newnav[this.min].className = "on";
   }
// 文字选项卡   
   
   
   
