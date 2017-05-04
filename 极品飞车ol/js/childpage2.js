var imgp = document.getElementsByClassName('imgp')[0].getElementsByTagName('a');
var ps = document.getElementsByClassName('mignav')[0].getElementsByTagName('li');
	for(var i =0;i<ps.length;i++){
		ps[i].num = i;
		ps[i].onclick = pg;
	}
	ps[0].className = "current";
	function pg(){
		for(var i =0;i<imgp.length;i++){
			imgp[i].style.display = "none";
		}
		for(var i =0;i<ps.length;i++){
			ps[i].className = "";
		}
		imgp[this.num].style.display = "block";
		ps[this.num].className = "current";
	}
