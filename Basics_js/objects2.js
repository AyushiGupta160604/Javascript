//more of object and basics of apis
//Destructering : it is of both arrays and objects
//Destructering of Objects
const course = {
    coursename: "JS",
    price: "999",
    instructor: "Ayushi"
}
// method 1: course.instructor
//method 2
const{instructor} = course
console.log(instructor);
// we can also give name like:
const{coursename: cN} = course
console.log(cN);

//APIs : times ago info/values used to come in XML but now comes in JSON: object without name
//JSON: JavaScript Object Notation
// {
//     "name": "Ayushi",
//     "coursename":"JS",
//     "price": "999"
// }

// sometimes APIs are also in the format of array

// [
//     {},
//     {},
//     {}
// ]