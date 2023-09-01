// create five variables and assign them values
    let myBusinessidea = "Coffee Shop";
    let agewhenithappens = 32;
    let amIhappyinthepresent = true
    let businessrevenue
    let loss = null
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
// print the type of each variable in this order:
// string, number, boolean, undefined, null
    console.log(myBusinessidea,agewhenithappens,amIhappyinthepresent,businessrevenue,loss);
// create a variable that references a template literal
    let timeOfDay = "morning"
    let DefaultGreetingintro = "Good"
// inside the template literal, use two of the above variables
    let greeting = `${timeOfDay}${DefaultGreetingintro}!`;
// reassign the value of the variable that references "null"
     loss = "minimal"
// print the value and its type
    console.log(loss);
    console.log(typeof loss);
// print a variable that causes a ReferenceError
    let n = "undefinedvariable"
    console.log(n);
// alter the previous line to no longer cause a ReferenceError
console.log(n);
