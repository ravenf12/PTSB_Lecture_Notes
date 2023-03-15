// console.log("In dom.js file, linked via src in script tag")

/* 
    ? DOM
    - Document Object Model
    - ^ Only through the browser 

    Frame: 
        - Document (HTML Page)
            - Is a global variable 
        - Object: Elements(tags) and comments(nodes)
        Model: how they're arranged

    - Data representation of objects that comprise the structure and content of a document on the web.

        ? BOM
        - Browser Object Model
        - Window object/variable that we can gain access to
        -Has various methods available to us.

*/

function askForStuff() {
    prompt();
}

// askForStuff()

// Document variable - Global 
console.log(document);

console.log(document.URL);
console.log(document.location);
console.log(document.title);
// Reassignment 
document.title = "DOM updated lesson";
console.log(document.title);

// ? Creating our first element 
/* 
    Chain of events to add new element:
    1. Create our element.
    2. Apply our values (reassigning values to property keys)
    3. Place our element (adding to the doc body object
        )
*/
/* 
    Created variable to store a newly made element.
    Our variable now has access to various properties:
        - innerHTML: can inject (we reassign) a block of HTML
        innerText: returns the visible text contained in a node
        - textContent: returns the full text
        ex:
            <p> Hello <b>World</b> </p>
            - innerText would return "Hello"
            - textContent would return "Hello World"
*/
let h1 = document.createElement(`h1`);
// console.log(document.createElement(`h1`));
h1.innerText = `Creating my first DOM element` // Reassign innerText property of h1
// console.log(h1);

/* 
    - Access global document variable 
    - step into with dot notation the document body
    - use appendChild method to add new element/tag to our HTML body
*/
document.body.appendChild(h1);

// Alerting the element via it's properties 
h1.style.color = "blue";
h1.style.textAlign = "center";
// we can also build a general CSS; however reassigning the style attribute to these new values

h1.style = `text-shadow: 2px 2px 2px red;
color: purple;
textAlign: center;`;
// We can do one off or multiple style attributes

// JS requires camelCasing as a "class" is keyword that means something different 
h1.className = "h1-class-name";
h1.id = "set-id";


// ? Finding Elements 

/* 
    HTMLCollection
    - An array-like object
    - Allows access to index, properties, and methods to help navigate and modify elements.
    - NOTE: Does NOT allow you to modify a group of elements all at once
    - Can loop through this
    - Can use .length properties

    To get Singular Element:
    - use array notation
    - use .item() method 

    Accessing Multiple Elements requires these methods:
    - .getElementsByTagName()
    - .querySelectorAll()
    - .getElementsByClassName()
*/

let li = document.getElementsByTagName("li");
console.log(li);

console.log(li[0]); // target single list tag

let bathroom = li[0];
bathroom.style.color = "red";

// li.style.color = "yellow"; // Cannot set the color of an array, this is not targeting all items at once

// Because the method returns an array-like object, we can use array aspects/methods/tools
for (i of li) {
    // console.log(i);
    i.style.color = "purple";
}

/* 
    * .querySelector()
        - Grabs the first instance of an element or null if nothing is found.
        - Can target by ID, Class(className), or Element
            - Will need to append # for ID
            - Will need to append . for Class
/

// let firstLi = document.querySelector("li");
// console.log(firstLi);

let toDoList = document.querySelector("#listTitle");
console.log("querySelector(#):", toDoList);
toDoList.style.textAlign = "center";

// Only targets first instance of class
let listItems = document.querySelector(".listItem");
listItems.style.textAlign = "center";

/ 
    * .querySelectorAll()
    - Returns a static nodeList (an array) list of elements.
    * static: will not update
*/

let nodeListLi = document.querySelectorAll('li');

// .getElementByClassName()
let liClass = document.getElementsByClassName();
console.log(`\n-----------------\n`);
console.log("ByClassName:", liClass);


// ? Event Listeners 
/* 
    Allows us to execute a function when an event occurs.
    .addEventListener()
        - DOM node method
        - requires an event to "listen" for or type and a callback function
*/

let btn = document.getElementById(`submit`); // "Grabs"/creates reference to the button with id "submit"
// If we wanted to see all node/element properties available to us:
let btnNode = document.getElementsByTagName("button");
// console.log(btnNode);

btn.addEventListener("click", (event) => {
    // console.log(event);
    // console.log("I clicked the button!");
});

/* 
    Goal: have the input text be added to the list on the page 

    Steps for adding an item to the list:
        - Capture the input value from the HTML
        - Use the button and click (pass/capture that input value)
        - Create a new element (li)
        - Assign values to new element (attributes)
            -New li gets class(className)]
            - Assign innerText to the input value 
        - Append the new element to the parent element/node/box

    Functionality steps:
        - add event listener to the button
        - use variables to contain the HTML tags were referencing (document.getElementById)
        - build function that creates and assigns attribute for the new li element 

*/


// Created variable input to reference and use input of HTML
// let input = <input type="text" id="listInput" placeholder="ToDO item" />;
let input = document.getElementById("listInput");

// Build our function: use declarative format, name it addItem, no params
function addItem() {
    // capture our value from the input: .value property
    console.log(input.value);

    // create a new li element 
    let newItem = document.createElement(`li`);

    //Assign our property value
    newItem.className = "listItem";
    newItem.textContent = input.value;

    // Assign new element to parent element 
    ul.appendChild(newItem);

    
}

