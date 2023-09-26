//SelectingDOMElements

// select all unordered list (ul) elements
document.querySelectorAll("ul");
document.getElementsByTagName("UL");
// select all elements with the class "class-week"
document.querySelectorAll(".class-week");
document.getElementsByClassName("class-week");

const className = "class-week";
document.getElementsByClassName(className);
document.querySelectorAll(`.${className}`);

// select all elements with the class "nav-bar"
document.querySelectorAll('.nav-bar');
document.getElementsByClassName("nav-bar");
// select the element with the id "dog-picture" and save it to a variable

const dogPicture = document.querySelector("#dog-picture");
const dogPictureAgain = document.getElementById("dog-picture");