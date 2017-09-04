function foo() {
	var s = document.getElementById('mySelect').selectedIndex;
	var options = document.getElementById('mySelect').options;
	alert('Выбрана опция: ' + options[s].text);
}

function boo() {
	var range = document.getElementById('r1');
	var p = document.getElementById('one');
	p.value = range.value;
}

function zoo(){
	var range = document.getElementById('r1');
	var div = document.getElementById('test');
	div.style.height = r1.value + 'px';
	div.style.width = r1.value + 'px';
}
