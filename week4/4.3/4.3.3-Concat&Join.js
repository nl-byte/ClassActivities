const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
const result = arrOne.concat(arrTwo, 4, "e");

// print the new, merged array
console.log(result);

// join the merged array and print the result
console.log(result.join("-"))

/**
 * Note! I noticed the output for the join above is:
 * a-0-b-1-2-c-d,3-4-e
 *
 * See that comma between the d and 3?  (looks like d,3)
 * That must be that nested array inside arrTwo. Since
 * it wasn't separated out, it's trying to join a string
 * representation of that nested array onto the rest of
 * the output. Neat!
 */
