// Declare and Invoke with Return
let weather = "";
let greeting;

function weatherGreeting() {
  let outfit;
  if (weather == "hot and sunny") {
    outfit = "light and cool";
  }
  if (weather == "cold") {
    outfit = "warm";
  }
  if (weather == "rainy") {
    outfit = "wet resistant";
  }

  greeting = `The weather today is ${weather}. Consider wearing something ${outfit}.`;
  return greeting;
}

// console.log(outfit);
console.log("Before Invocation: " + greeting);
console.log(weatherGreeting());
console.log("After Invocation: " + greeting);

console.log(
  "Wrapping the Invocation inside a console.log: ",
  weatherGreeting()
);
// Parameters
function weatherWithParams(weather) {
    let outfit;
    if (weather == "hot and sunny") {
      outfit = "light and cool";
    }
    if (weather == "cold") {
      outfit = "warm";
    }
    if (weather == "rainy") {
      outfit = "wet resistant";
    }
  
    greeting = `The weather today is ${weather}. Consider wearing something ${outfit}.`;
    return greeting;
  }
  console.log(weatherWithParams("hot and sunny"));
  console.log(greeting);