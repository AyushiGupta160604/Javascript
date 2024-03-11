const user ={
    username: "Ayushi",
    price: 999,
    // this refers to current context
    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Aryan"
// user.welcomeMessage()

console.log(this); // here it refers to an empty context while if we run this on console it refers to window
// global object in browser is window while in node env. it is empty object

// function thisTry(){
//     let username = "ayushi"
//     console.log(this); // it shows a lot of values like global value, structered clone etc.
// }
// thisTry()

// const one = function(){
//     let username = "ayushi "
//     console.log(this.username);
// }
// one()

//arrow function
// arrow function don't have their own this context
const one = () => {
    let username = "Ayushi"
    console.log(this.username);
    console.log(this); // gives empty parenthesis
}
// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2,3));

// implicit return of arrow function
const addTwo = (num1, num2) => num1 + num2 // or const addTwo = (num1, num2) => (num1 + num2) // basically parentheses lagane pe return keyword nhi likhna but curly braces lagane pe likhna hai

console.log(addTwo(3, 4));

// returning object
const returnObject = () => ({username: "Ayushi_Gupta"})
console.log(returnObject())

