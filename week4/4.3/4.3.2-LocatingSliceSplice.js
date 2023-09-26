const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
const firstA = arr.indexOf("a");
const firstB = arr.indexOf("b");
const firstC = arr.indexOf("c");

console.log("firstA", firstA);
console.log("firstB", firstB);
console.log("firstC", firstC);


// find the last index of "a", "b", and "c"
const lastA = arr.lastIndexOf("a");
const lastB = arr.lastIndexOf("b");
const lastC = arr.lastIndexOf("c");

console.log("lastA", lastA);
console.log("lastB", lastB);
console.log("lastC", lastC);

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
let multipleAs = true;
let iteration = 1;

console.log("Starting the loop! The initial array is: ", arr);
while (multipleAs) {
  let firstAIndex = arr.indexOf("a");
  let lastAIndex = arr.lastIndexOf("a");

  multipleAs = firstAIndex !== lastAIndex;

  if (multipleAs) {
    arr.splice(lastAIndex, 1);
  }

  console.log(`array after iteration #${iteration}: `, arr);
  iteration++; // this isn't necessary for the loop, only the console.log above
}

console.log(`final array: `, arr);
