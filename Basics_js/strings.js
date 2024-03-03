// both single and double quote
const name = "Ayushi";
const surName = "Gupta"
const num = 1

// console.log(name + surName + num + " hi");
// string interpolation
console.log(`Hello my name is ${name} ${surName} and my fav num is ${num}`);
const myName = new String("Ayushi");
console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(3));
console.log(myName.indexOf('h'));

const newString = myName.substring(0,5)
console.log(newString);

const anotherString = myName.slice(-6,2)
console.log(anotherString);
// minus wala peeche se jaake print karata hai

const newString1 = "     Ayushi   "
console.log(newString1)
console.log(newString1.trim())

const url = "https://ayushi.com/gupta%20yup"
console.log(url.replace("%20","-"));
console.log(url.includes("krishu"))
console.log(url.includes("%20"))

const hello = "why-hello-yaar";
console.log(hello.split('-')) // gives an array ["why", "hello", "yarr"]