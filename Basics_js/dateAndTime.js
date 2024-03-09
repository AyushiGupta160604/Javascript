// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

console.log(typeof myDate); // Date is object
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); //months starts from 0
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14")
console.log(myCreatedDate3.toLocaleString()); // when entered in string format YYYY-MM-DD month strats from 1
let myCreatedDate4 = new Date("01-14-2023"); //MM-DD-YYYY format (generally followed in india)
console.log(myCreatedDate4.toLocaleString());

// Timestamps (used in quizes, polls etc.)
let myTimeStamp = Date.now();
console.log(myTimeStamp); // millisecond value from 1970 to now
console.log(myCreatedDate4.getTime());
console.log(Math.floor(Date.now()/1000));//gives seconds
//we prefer to do comparisions of dates etc. in milliseconds 

let newDate = new Date();
console.log(newDate.getMonth() + 1);// months start from 0 therefore plus 1 so that user doesn't get confused
console.log(newDate.getDay());// date starts from monday(1)

newDate.toLocaleString('default',{
    weekday: "long",
})