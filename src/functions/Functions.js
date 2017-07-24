
/*This function return value greated than argument by 1*/
var a = function(x){
	return x+1;
}

/*This fucntion calculates the factorial of the argument*/
function fact(n){
	var factorial = 1;
	if (n == 0) {
		return n;
	}
	while(n > 0){
		factorial *= n;
		n--;
	}
	return factorial;
}

var value = fact(4);
console.log(value);

/*This function calculates the factorial of the arguments recursively*/
function recurse(n){
	if (n <= 1) {
		return n;
	}
	return n * recurse(n-1);
}

var value = recurse(4);
console.log(value);

/*This function reverses some string*/
function reverse(string){
	var str = "";
	for (var i = string.length -1; i >= 0 ; i--) {
		str = str.concat(string.charAt(i));
	}
	return str;
}

console.log(reverse("JavaScript"));
