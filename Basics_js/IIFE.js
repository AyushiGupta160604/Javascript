// Immediately Invoked Function Expressions(IIFE)
// function one(){
//     console.log(`DB Connected`);
// }
// one()

// but we use IIFE specially in cases in which we don't want pollution from global scope and in case we want functions to be executed very quickly

//you should always use semicolon when you write more than one IIFE because otherwise it doesn't know where to stop 
(function connection(){
    //named IIFE
    console.log(`DB Connected`);
})();

( () => {
    console.log(`DB connected two`);
})();

( (name) => {
    console.log(`DB connected two ${name}`);
}) ('Aryan')