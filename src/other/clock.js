/*his function shows the actual time (simulating the clock)*/

function displayTime(){
		var elt = document.getElementById("clock");
		var now = new Date();
		elt.innerHTML = now.toLocaleTimeString();
		setTimeout(displayTime, 1000);
	}
	window.onload = displayTime;


function invoke(f, start, interval, end){
	if(!start) start = 0;
	if (argumets.lenght <= 2) setTimeout(f, start);
	else{
		setTimeout(reapet, start);
		function reapet(){
			var h = setInterval(f, interval);
			if (end) setTimeout( function(){ clearInterval(h); }, end);
		}
	}
}	

do{
	var name = prompt("Enter your name");
	var correct = confirm("If correct name" + name +"Click Ok, or click Cancel");

}	
while(!correct){
	allert("Hello" + name);
}


