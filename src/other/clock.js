/*his function shows the actual time (simulating the clock)*/

function displayTime(){
		var elt = document.getElementById("clock");
		var now = new Date();
		elt.innerHTML = now.toLocaleTimeString();
		setTimeout(displayTime, 1000);
	}
	window.onload = displayTime;