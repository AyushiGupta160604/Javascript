// 2 types memory => Stack memory(for primitive data types), Heap memory(for non primitive data types)
// In stack memory a copy is given while in heap memory reference of original variable is given ie changes occur in original value.

let myName = "Ayushi";

let anotherName = myName;
anotherName = "Krishu";

console.log(myName);
console.log(anotherName);

let user1 = {
    email : "user@gmail.com",
    id : "user@ybl.com",
}
let user2 = user1;
user2.email = "ayushi@gmail.com";
console.log(user1.email);
console.log(user2.email);