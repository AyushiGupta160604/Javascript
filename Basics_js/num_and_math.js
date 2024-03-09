const score = 400 //type number (implicitly defined)
//explicit defining of data types
const balance = new Number(100)
console.log(balance);
console.log(score);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const other_no = 23.8966
console.log(other_no.toPrecision(3));//returns string
const just_other_no = 123.8966
console.log(just_other_no.toPrecision(3));//returns string
console.log(typeof(just_other_no.toPrecision(3)));//returns string

const just_other_no2 = 1123.8966
console.log(just_other_no2.toPrecision(3));//returns string

const hundreds = 1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))


// Maths

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // between 0 and 1
console.log(Math.floor(Math.random()*10) + 1); // between 1 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)