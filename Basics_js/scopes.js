// scopes
// let a = 10
// const b = 20
// var c = 30

// {} => scope
if(true){
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
console.log(c);

// var does not follow block scope hence we don't use it
// global and block scope

// nested scope
function one(){
    const username = "ayushi"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website) this will give error and not work because website is not in one() function scope
    two()
}
one()

//in nested function child variables can access parents variables

if(true){
    const username = "ayushi"
    if(username === "ayushi"){
        const website = "instagram"
        console.log(username + website);
    }
    // console.log(website); error
}
// console.log(username) error

//addone(5): will not throw error if we use it before normal function declaration
function addone(num){
    return num + 1
}
addone(5)
// expression (technique of making functions) 
//addTwo(5): will throw error if we use it before expression declaration
const addTwo = function(num){
    return num + 2
}
addTwo(5)