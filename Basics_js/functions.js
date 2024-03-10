function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
}
// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(3,4)
addTwoNumbers(3, "4")
addTwoNumbers(3, "a")
addTwoNumbers(3, null)

// parameters:  Number1, Number2 are parameters which are used in function defination/declaration
//arguments: values given when calling function. 3,4 in above example are arguments
// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);// it shows value in result is undefined 
function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result
    return number1 + number2
    console.log("Ayushi"); // This will never be executed
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);

// function loginUserMessage(username){
//      if(username === undefined){
//         console.log("Please enter a username");
//         return 
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("ayushi"))
function loginUserMessage(username){
     if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());
function loginUserMessage(username = "SAM"){
    if(!username){
       console.log("Please enter a username");
       return 
   }
   return `${username} just logged in`
}
// console.log(loginUserMessage("aryan"));

// ... is known as both rest and spread it depends on use case when to call what

// ... rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 600, 2000));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 600, 2000));

const user = {
    username: "Ayushi",
    price: 1999
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username: "ayushi gupta",
    price: 5000
})

const myNewArr = [200, 400, 600, 800]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100, 200, 300, 400]));