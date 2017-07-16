// Casting of types

// Constructor Number, String casted types
console.log(Number("555"));	// 5 type is number;
console.log(typeof (Number("555")));	// number;

console.log(String(444));	// "444"
console.log(typeof String(444));	// string

//cast numeric to boolean
console.log(Boolean(1));	// true
console.log(Boolean(0));	// false

//cast numeric to boolean
console.log(!!5);	// true
console.log(!!0);	// false

//cast string to numeric
console.log(typeof +"4545");	// number

//cast numeric to string
console.log(typeof(345 + ""));	// string
console.log(Number.toString(3));	// string

//cast string to number
console.log(parseInt("54 px"));	// 54
console.log(parseFloat("1.2345")); //1.2345