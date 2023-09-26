// create a new unordered list (ul) element
const newUl = document.createElement("ul");

// remove the paragraph element in the nav-bar
document.querySelector("nav > p").remove();

// add your new ul element to the nav-bar
document.querySelector("nav").appendChild(newUl);

// create two new list item (li) elements, and add some text to them
let newLi1 = document.createElement("li");
newLi1.textContent = "Item #1";

let newLi2 = document.createElement("li");
newLi2.textContent = "Item #2";

// add the li elements to the ul in the nav-bar
newUl.appendChild(newLi1);
newUl.appendChild(newLi2);


// bonus! adding via loop
for (let i = 0; i < 2; i++) {
  const newLi = document.createElement("li");
  newLi.textContent = `Item #${i + 1}`;
  newUl.appendChild(newLi);
}
