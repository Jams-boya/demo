var imgp2 = document.getElementsByClassName('imgp3')[0].getElementsByTagName('a');
var ps2 = document.getElementsByClassName('mignav3')[0].getElementsByTagName('li');
	for(var i =0;i<ps2.length;i++){
		ps2[i].num = i;
		ps2[i].onclick = pg2;
	}
	ps2[0].className = "current";
	function pg2(){
		for(var i =0;i<imgp2.length;i++){
			imgp2[i].style.display = "none";
		}
		for(var i =0;i<ps2.length;i++){
			ps2[i].className = "";
		}
		imgp2[this.num].style.display = "block";
		ps2[this.num].className = "current";
	}
