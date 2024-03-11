// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps => they are similar to object but have unique enteries

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value); // destructering of array
}

for (const key of map) {
    // console.log(key, ':-', value); //gives array of key value as an entry
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


//this (below) gives error because object are not iterabble like this
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }