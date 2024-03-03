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

// Non primitive (Reference types)
// Array, Objects, Functions