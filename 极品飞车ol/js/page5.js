var vcc = document.getElementsByClassName('vcc');
var As = document.getElementById('vidnav').getElementsByTagName('a');
var lisa = document.getElementById('vidnav').getElementsByTagName('li');
	vcc[0].style.display = "block";
	lisa[0].className = "on";
	for(var i=0;i<As.length;i++){
		As[i].num = i;
		As[i].onclick = vido;
	}
	function vido(){
		for(var i=0;i<vcc.length;i++){
			vcc[i].style.display = "none";	
		}
		for(var i=0;i<lisa.length;i++){
			lisa[i].className = "";
		}
		vcc[this.num].style.display = "block";
		lisa[this.num].className = "on";
	}
var copctn = document.getElementsByClassName('copctn')[0].getElementsByClassName('ctn5');
var copmenu = document.getElementsByClassName('copmenu')[0].getElementsByTagName('li');
	copmenu[0].className = "on";
	copctn[0].style.display = "block";
	for(var i=0;i<copmenu.length;i++){
		copmenu[i].lld = i;
		copmenu[i].onclick = ddb;
	}
	function ddb(){
		for(var i=0;i<copctn.length;i++){
			copctn[i].style.display = "none";
		}
		for(var i=0;i<copmenu.length;i++){
			copmenu[i].className = "";
		}
		copmenu[this.lld].className = "on";
		copctn[this.lld].style.display = "block";
	}

var coppev = document.getElementsByClassName('copctn')[0].getElementsByClassName('conpev');
var ul1 = document.getElementsByClassName('copctn')[0].getElementsByTagName('ul');
var copnext = document.getElementsByClassName('copctn')[0].getElementsByClassName('connext');
	for(var i = 0;i < coppev.length;i++){
		coppev[i].bps = i;
		coppev[i].onclick = bvc;	
	}
	var t = 0;
	function bvc(){
		if(t == 0){
			t = 1;
			ul1[this.bps].style.left = -"164px";
		//	return false;
		}else if(t == 1){
			t = 0;
			ul1[this.bps].style.left = -"0px";
		}
	
	}
	
	
	
	
	for(var i = 0;i < copnext.length;i++){
		copnext[i].bpq = i;
		copnext[i].onclick = bvq;	
	}
	function bvq(){
		if(t == 0){
			return false;
		}
	ul1[this.bpq].style.left = -"164px";
	}	