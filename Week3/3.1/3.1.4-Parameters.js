//Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function functionWithTwoParams(param1, param2 = 2){
    console.log(param1);
    console.log(param2);
    return param1 + param2;
}
// invoke the function and pass in two numbers
functionWithTwoParams(1, 2);
// invoke the function and pass in more than two numbers
functionWithTwoParams(1 , 2, 3);
// invoke the function and pass in only one number
functionWithTwoParams(1);
// change the function to set default values for the parameters

// again, invoke the function and pass in only one number
functionWithTwoParams(1);
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithRestParams(param1, param2 = 2, ...restParam)
{
    console.log(param1);
    console.log(param2);
    console.log(restParam);
    return param1 + param2
}
// again, invoke the function and pass in more than two numbers
console.log("Below is function with rest param");
console.log(functionWithRestParams(1,2,3,4));
console.log("----- set returned value to variable");

let restParam = functionWithRestParams(1,2,3,4);
console.log(restParam);

