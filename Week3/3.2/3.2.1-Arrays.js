// create an Array using an Array literal
const myArray = ["Kyle", "Tichinia", "Tanya"];
// access the 1st item in the Array
const firstEntry = myArray[0];
// access the last item in the Array
const lastEntry= myArray[2];
// print the length of the Array
console.log(myArray.length);
// use the length property to access the last item in the Array
const lastIndex = myArray.length -1;
const lastEntryAgain = myArray[lastIndex];
console.log(lastEntryAgain);
// with for...of, loop over the Array, modify the value and add to a different Array

const newArray = [];
for(let item of myArray){
    newArray.push(item + "got added");
}

console.log(myArray);