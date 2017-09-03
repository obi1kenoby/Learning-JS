function myMove(){
	var elem = document.getElementById("myAnimation");
	var pos = 0;
	var m = true;
	var id = setInterval(frame, 10);
	function frame(){
		if(m == false){
			pos--;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
			if (pos == 0) {
				m = true;
				elem.style.background = "green";
			}
		}else{
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
			if (pos == 350) {
				m = false;
				elem.style.background = "blue";
			}
		}
	}
}