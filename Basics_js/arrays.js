// Arrays
//declaration
const myArr = [0, 1, 2, 3, 4, 5]
//Arrays can also have mixed enteries
const mixArr = [1, 4, 6, true, "Ayushi"]
// Array - object
//Js arrays are resizeable
// arrays are not associative i.e. elements can't be assessed using arbitrary strings

//Access of elements
// console.log(mixArr[5]); // index is out of bound hence undefined
// console.log(mixArr[4]);

//arrays - zero based indexing
// array copy creation generates Shallow Copy(copy whose properties same reference point i.e. change in copy results in change in original array)
//deep copy - not same reference point

//Array other declaration
const myArr2 = new Array(1, 2, 3, 4);

// Array methods
myArr.push(6)
myArr.push(7)
// console.log(myArr)
// console.log(`The length of array is ${myArr.length}`)
myArr.pop()
// console.log(myArr)
// console.log(`The length of array is ${myArr.length}`)

myArr.unshift(9) //unshift(element) adds elements at the beginning of array and hence it shifts all the array enteries which makes it time consuming and hence not really prefered but can be used whenever needed
// console.log(myArr)
myArr.shift() // removes element from beginning
// console.log(myArr)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9)) // -1 because element does not exist
// console.log(myArr.indexOf(1))

const newArr = myArr.join() // changes array to string
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// slice, splice

// console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1,3)
// console.log("C", myArr);
// console.log(myn2);
// in slice original array is not changed and in range tlast element is not included while in splice the whole range is included and the original array changes, basically the elements spliced are not part of original array after the operation.

const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); // it adds the entry an array entry
// console.log(marvel_heroes[3][1]);
// concatedArr = marvel_heroes.concat(dc_heroes)
// console.log(concatedArr);
// push works on existing array while concat generates new array

//Spread operator
const all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_arr.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Ayushi"));
console.log(Array.from("Ayushi"));
console.log(Array.from({name: "ayushi"})); // gives empty array because we need to specify about making array from key or value

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));