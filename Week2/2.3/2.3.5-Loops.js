// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
// 2) create a variable to represent the current total
// 3) write a while loop that sums the numbers from 1 to 100
  let n = 1;

n <=100;
while (n <= 100){
  //print n
  console.log(n);
  n++;
}
// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100
for (let n = 1; n <=100; n++) {console.log(n);
}
// 1) write a for loop that sums the numbers from 1 to 100
 let l = 100;
 let sum = 0;
for(n = 0; n <= l; n++){

  sum = sum + n;
}
console.log(`sum of first ${l} numbers is: `, sum);
