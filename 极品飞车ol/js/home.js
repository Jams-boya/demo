var section = document.getElementsByClassName("section");
var clientHeight = section[0].clientHeight;

var page = document.getElementById('page');
var fixnav = document.getElementById('fixnav').getElementsByTagName('li');
var as = document.getElementById('fixnav').getElementsByTagName('a');
//var bodyHeight = document.body.clientHeight;
	fixnav[0].className = "on";
	for(var i=0;i<as.length;i++){
		as[i].min = i;
		as[i].onclick = fin;
	}
	function fin(){
//		for(var i=0;i<section.length;i++){
//			section[i].style.vsibility = "visible";
//		}
		for(var r=0;r<fixnav.length;r++){
			fixnav[r].className = "";
		}
		fixnav[this.min].className = "on";
//		console.log(this.min);
//		section[this.num].style.vsibility = "visible";
		
		bodyHeight = -clientHeight*this.min  + 'px';
//			console.log(bodyHeight);
		page.style.marginTop = bodyHeight;
	}
