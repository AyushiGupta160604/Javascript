// There are two ways to declare object 1] by literal 2] by constructer
// When object is created from constructor then it is a singleton object i.e. single instaces whereas in other case multiple instaces of the object is formed
//Literals - not singleton

// from constructor => Object.create
// object literals
const JsUserEg = {} // empty object

const mySym = Symbol("Key1")

const JsUser = {
    name: "Ayushi",
    "full name": "Ayushi Gupta",
    [mySym]: "Key1",
    age: 18,
    location: "Surat",
    email: "ayushi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//access method 1
// console.log(JsUser.email);
//access method 2
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "ayushi123@gmail.com"
// console.log(JsUser);
// Object.freeze(JsUser)
// JsUser.age = 19
// console.log(JsUser); // not will change because object was freezed

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting2());


const user = {}
user.id = "123abc"
user.name = "Varun"
user.isLoggedIn = false
// console.log(user);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Ayushi",
            lastName: "Gupta"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {
    1: "a", 
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign(obj1, obj2)
console.log(obj4);
// or
const obj5 = Object.assign({}, obj1, obj2)
console.log(obj5); // {} is an optional parameter here it acts as an empty target object whereas other objects act as source

// Mostly spread operator is used to join objects
const obj6 = {...obj1, ...obj2}
console.log(obj6);

//usually from database we get array of objects
 const users =[
    {
        name: "Ayushi Gupta",
        email: "ayushi@gmail.com"
    },
    {
        name: "Aryan Gupta",
        email: "aryan@gmail.com"
    },
    {
        name: "Pankaj Gupta",
        email: "Pankaj@gmail.com"
    },
    {
        name: "Anil Gupta",
        email: "anil@gmail.com"
    }
 ]
console.log(users[1].email);
console.log(user);
console.log(Object.keys(user));// gives array of keys
console.log(Object.values(user));// gives array of values
console.log(Object.entries(user));

console.log(user.hasOwnProperty("isLoggedIn"));