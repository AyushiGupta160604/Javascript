// Types of dataTypes - Primitive and Non Primitive(reference type)

// Primitive DataTypes- Call by value means reference of these are not given and what you change is in the copy of them
// 7 types : String, Number, Boolean, Null, undefined, Symbol(used to make value unique), BigInt

// js is dynamically types
const score = 100;
const value = false;
// 100.3, 100 -> numbers
const outsideTemp = null;
let userEmail; // undefined
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);
const bigNumber = 34567813257998797098n; //last mein n makes it big int

// Non primitive (Reference types)
// Array, Objects, Functions
const heros = ["Shaktimaan", "naagraj", "doga"];
// {
//     name: "ayushi",
//     age: 22,
// }
// {} represents object [key value pair]
// another way
let myObj = {
    name: "Ayushi",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
//typeof function => function or function object
// typeOf null(outsideTemp) => object
// typeOf undefined => undefined
// typeOf boolean => boolean;
// typeOf number/ string =>number/ string
//typeOf Object(native and does not implement [call]) => object
//typeOf Object(native and does  implement [call]) => function
// typeOf Symbol => Symbol

// typeOf non primitive data types is object only and specially of function is function object