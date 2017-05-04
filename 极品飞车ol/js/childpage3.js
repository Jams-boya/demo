var imgp1 = document.getElementsByClassName('imgp2')[0].getElementsByTagName('a');
var ps1 = document.getElementsByClassName('mignav2')[0].getElementsByTagName('li');
	for(var i =0;i<ps1.length;i++){
		ps1[i].num = i;
		ps1[i].onclick = pg1;
	}
	ps1[0].className = "current";
	function pg1(){
		for(var i =0;i<imgp1.length;i++){
			imgp1[i].style.display = "none";
		}
		for(var i =0;i<ps1.length;i++){
			ps1[i].className = "";
		}
		imgp1[this.num].style.display = "block";
		ps1[this.num].className = "current";
	}
