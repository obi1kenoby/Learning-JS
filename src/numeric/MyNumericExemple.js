console.log(123);
console.log(.123);	// 0.123
console.log(1.35E-20);	// expotential expression 0.135E-20

var N = new Number(4000); //object wrapper class Number
console.log(N);
console.log(N.toFixed(3)); // 3 characters after point
console.log(N.toPrecision(8)); // accuracy by characters 8 (4000.0000)


console.log(Math.sqrt(121));
console.log(Math.pow(2,8));
console.log(Math.PI);

// In JavaScript Infinity -is number;
// NaN - is not a number

console.log(Infinity/Infinity);	// NaN
console.log(0/0);	// NaN
console.log(Math.sqrt(-10));	// NaN
console.log(NaN === NaN);	// false
