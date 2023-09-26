// select the root node
const body = document.querySelector("body");
console.log("The body node is: ", body);

// select the last child of the root node
const lastChild = body.lastElementChild;
console.log(lastChild);

// select all the children of the body element
const allChildren = body.children;
console.log(allChildren);

// select the next sibling of the h2 node
const h2Node = document.querySelector("h2");
const sibling = h2Node.nextElementSibling;
console.log(sibling);

// select the parent element of the h1 node
const h1Node = document.querySelector("h1");
const h1Parent = h1Node.parentElement;
console.log(h1Parent);
