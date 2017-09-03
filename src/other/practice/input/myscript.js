function fun1(){
	var cbox;
	cbox = document.getElementById('one');
	if (cbox.checked) {
		alert('Выбран');
	}
	else{
		alert('Не выбран');
	}
}

function fun2(){
	var radio = document.getElementsByName('r1');
	for (var i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			alert('Выбран ' + i + ' элемент');
		}
	}
}
