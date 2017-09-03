var array = [256, 23, 65, 1, 5, 2, 33, 14, 17, 99, 148, 4, 65];

function sort(array){
	for(var i = array.length -1; i > -1; i--){
		for(var j = 0; j < i; j++){
			if (array[j] > array[i]) {
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
	}
	return array;
}

console.log(array);
console.log(sort(array));

/*
	result:

	input:[256, 23, 65, 1, 5, 2, 33, 14, 17, 99, 148, 4, 65]
	output:[1, 2, 4, 5, 14, 17, 23, 33, 65, 65, 99, 148, 256]
*/
