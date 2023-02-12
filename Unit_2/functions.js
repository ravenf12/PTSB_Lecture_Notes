/* 
    ? Functions
        - block of code that performs a particular task.
        - simplified programs that run a task when invoked.
        Two Main Types:
            - Declaration
            - Expression

        Functions must be called/invoked to run!
*/

//* Function Declaration
/* 
    Structure:
       1      2
    function hi() {
        ... code block
    }

    1. Keyword (function)
    2. Name of the function and parenthesis for the parameter
    ! Gets hoisted
*/

function hi() {
    console.log("Why");
}

hi();

//* Function Expression
/* 
    Structure:
       1
    let hey = function hi() {
        code block...
    }

    1. The variable "hey" is now representative of the function hi()
    ! Does NOT get hoisted
*/

let hello = function hey() {
    // console.log("Hey");
    return "Hey!";
}

hello();
// hey(); *Undefined - doesn't run*

console.log(hello()); // Runs function and prints returned value to the console


// Create a function that, when invoked, lists out the numbers 1-10

function numbers() {
    for (a = 1; a <= 10; a++) {
        console.log(a);
    }
}

// numbers();
// hi();
// hi();
// hi();

// create an array and function to list out array values
let words = ["This", "can", "be", "really", "terrible"];

function printArray() {
    // for(i = 0; i < words.length; i++) {
    //     console.log(words[i]);
    // }

    console.log("Testing join method: ", words.join(" "));
}

printArray();

//! Parameters
/* 
    Structure:
                        1
    function fncName(parameter) {
                            2
        console.log(`Hi, ${parameter}`);
    }
                3
    fncName("Ben");
    1. The parameter(s) that the function is accepting or holding.
    2. Using string interpolation, we can refer to the parameter given to the function.
    3. This is where we define what the parameter's value will be.
*/

function greet (title) {
    console.log(`Hey there, ${title}`);
    console.log(title); // shows the value
}

// console.log(title); //Results in not found error, title only used in function code block
greet(); // Undefined wasn't given a value "Hey there, undefined"

greet("Daisy"); // title ='s Daisy "Hey there, Daisy"

// Two Parameter function
let totalSpent = 0;

function order(foodItem, total){
    console.log(`I exchanged ${total} dollars for a ${foodItem}.`);
    totalSpent += total;
    console.log(totalSpent)
    return totalSpent;
}

/* invoking - arguments
    order(argument, argument);
*/

order("doggie yogurt", 8);
order("Dog food", 80);
order("Redbull", 3);

console.log(totalSpent);

//! Return
/* 
    Structure:
    let hi = function() {
           1
        return "hi";
    };
            2        3
    let greeting = hi();
    console.log(greeting);

    1. keyword: return - brings our data out of our function.
    2. New variable to hold the returned value.
    3. When called, the function becomes the value of the return.
*/

function fName() {
    return "Comet"
}
let myName = fName();
console.log(myName);

let volume = function (l, w, h) {
    let total = 1 * w * h;
    return total;
}

let exOne = volume (3, 5, 2);
let exTwo = volume (7, 3, 5);

console.log(`Ex One: ${exOne} \nEx Two: ${exTwo}`)

function coffeeMaker(filter) {
    return `A full pot of ${filter}!`
}

let mon = coffeeMaker("coffee");
let wed = coffeeMaker("Tea");
let sun = coffeeMaker("soup");

console.log(mon, "\n" + wed, "\n" + sun);

//! Arrow Functions
/* 
    Structure:
       1        2
    let hi = () => {
        console.log('hi');
    }

    1. We need to set the arrow function to a variable
    2. We use the "fat arrow" to signify it's a function.

    - Introduced in ES6. They are basically just a more concise way to write functional expressions - NOT declarations.
    ! Do NOT get hoisted!
    
    Two different styles:
        - Concise Body
        - Block Body
*/

//* Concise Body
let goodbye = () => console.log("Goodbye, friend.")
goodbye();

let total = () => 2 + 5;
let is7 = total();
console.log(is7);

//* Block Body
let apples = (qty) => {
    return `There are ${qty} apple(s).`
};

let appleCount = apples(4);
console.log(appleCount);
console.log(apples(7));

// same as above with concise body
let apples2 = (qty) => `There are ${qty} apple(s).`

console.log(apples2(5));
console.log(apples2(is7));

// Multiple params 
let calc = (x, y) => x + y;
console.log(calc(27, 84));

let calc2 = (x, y) => {
    return x + y;
}
console.log(calc2(1029293, 2388920));

//* IIFE
/* 
    - Immediately Invoked Function Expression
    - Helps allocating space in memory for anonymous functions
    - fires our function as soon as it is read.
*/

(function () {
    console.log("IIFE fired");
  })();

