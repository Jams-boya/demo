var coni = document.getElementsByClassName('con-i');
var connav = document.getElementsByClassName('connav')[0].getElementsByTagName('li');
var imgs = document.getElementsByClassName('connav')[0].getElementsByTagName('img');
	for(var i=0;i<connav.length;i++){
		connav[i].num = i;
		connav[i].onclick = dq;
	}
	connav[0].className = 'on';
	function dq(){
		for(var i=0;i<coni.length;i++){
			coni[i].style.display = "none";
		}
		for(var i=0;i<connav.length;i++){
			connav[i].className = "";
		}
		connav[this.num].className = 'on';
		coni[this.num].style.display = "block";
	}
	
