var dis = document.getElementsByClassName('video-box')[0].getElementsByClassName('dis');
var navbtn = document.getElementsByClassName('navlist')[0].getElementsByTagName('li');
	dis[0].style.display = "block";
	navbtn[0].className = "on";
	for(var i = 0;i < navbtn.length;i++){
		navbtn[i].num = i;
		navbtn[i].onclick = play;
	}
	function play(){
		for(var i = 0;i<dis.length;i++){
			dis[i].style.display = "none";
		}
		for(var i = 0;i < navbtn.length;i++){
			navbtn[i].className = "";
		}
		dis[this.num].style.display = "block";
		navbtn[this.num].className = "on";
	}
