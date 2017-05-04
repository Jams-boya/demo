

var ole = document.getElementById('ole').getElementsByTagName('a');
var ole2 = document.getElementById('ole2');
var car = document.getElementsByClassName('car')[0];
var conmap = document.getElementsByClassName('conMap')[0];
	for(var i=0;i<ole.length;i++){
		ole[i].num = i;
		ole[i].onclick = bbc;
	}
	function bbc(){
		if(this.num == 0){
			ole2.parentNode.className = "con-21 ole1";
			car.style.display = "block";
			conmap.style.display = "none";
		}else if(this.num == 1){
			ole2.parentNode.className = "con-21 ole2";
			car.style.display = "none";
			conmap.style.display = "block";
		}	
	}

var mapnav = document.getElementById('mapnav').getElementsByTagName('p');
var mapnav1 = document.getElementById('mapnav').getElementsByTagName('li');
var mappic = document.getElementById('mappic').getElementsByTagName('img');
var mapimg = document.getElementById('mappic')
	mapnav[0].style.display = "block";
//	mappic[0].style.visibility= "visible";
	mapnav1[0].className = "on";
var y = 0;
var x = 0;
	for(var i=0;i<mapnav.length;i++){
		mapnav[i].style.display = "";
		mapnav[i].nne = i;

		mapnav[i].onclick = maps;
	}
	function navr(){
		for(var i=0;i<mapnav1.length;i++){
			mapnav1[i].className = "";
		}
	}
    function maps(){
//  	for(var i=0;i<mappic.length;i++){
//			mappic[i].style.visibility= "hidden";
//		}
    	navr();
    	y = this.nne;
    	x = this.nne;
    	mapimg.style.left = -1020 * this.nne + 'px';
    	mappic[this.nne].style.visibility= "visible";
    	mapnav1[this.nne].className = "on";
    }

var perv = document.getElementById('perv');
var next = document.getElementById('next');
	next.onclick = function(){
		if(y==4){
    		y=0;
    }
		navr();
		mapimg.style.left = -1020 * y + 'px';
		mapnav1[y].className = "on";
		y++;
		
	}
    prev.onclick = function(){
console.log(y);
    	if(y == 0 ){
    		y = 3;
			navr();
		    mapimg.style.left = -1020 * y + 'px';
			mapnav1[y].className = "on";
		}else{
			y--;
			navr();
		    mapimg.style.left = -1020 * y + 'px';
			mapnav1[y].className = "on";
		}
	}    	
    
    
    
    
    
    
    
    
    
