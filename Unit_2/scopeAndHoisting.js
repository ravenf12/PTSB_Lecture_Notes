// ? Scope: determines the accessability (visibility) of variable/functions to JavaScript 

/* 
    JS's 3 types of scope:
    - Block Scope
        - Defined by curly brackets { } to group elements or statements, block scope is also provided by let and const, ex. "code block"
    - Function Scope 
        - each function creates a new scope: variables inside functions are not accessible outside the function, also known as Local Scope
    - Global Scope 
        - variable declared outside a function is Global: all scripts and functions can access the variable
*/

let globalVariable = true;
console.log("Outside of func " + globalVariable);

function checkGlobalVariable() {
    console.log(globalVariable);
};

checkGlobalVariable();

// Global variable 
let x = 12;

function scope() {
    // Local variable 
    let x = 33;
    console.log(x);
}

scope(); // 33
console.log(x); // 12

// example 2 
let y = 13;

function newScope() {
    y = 1200;
    console.log(`In the newScope function: ${y}`);
    let z = 45;
    console.log(`In the newScope function ${z}`);
}

newScope();
console.log(`Out of the function/globally: ${y}`);

// ? Var vs Let
/* 
    Variable keywords:
        - const: cannot be reassigned
        - var: scoped to nearest function block
        - let: scoped to the nearest enclosing block
*/
// * Var example - scoped to function block, variable declared inside {} can be accessed from outside the block

var a = 12;

function varTest() {
    var a = 33;

    if (true) {
        var a = 45;
        console.log(`Var - within If: ${a}`)
    }

    console.log(`var - outside if, inside function ${a}`)
}

varTest();
console.log(`var - outside function/globally: ${a}`);


/*
 * Let Example - scoped to enclosing block, variable declared inside of a { } block cannot be accessed outside the block.
 */

let b = 12;

function letTest() {
    let b = 100;

    if (true) {
        let b = 50;
        console.log(`let - within if: ${b}`)
    }

    console.log(`let - end of function: ${b}`);
}

letTest();
console.log(`Let - Outside Function/Global value: ${b}`); // 12

// ? Hoisting: JS's default behavior of moving declarations to the top of the current scope (to the top of the current script/function/file)
/* 
    - JS reads from top to bottom in two passes. Line by line.
        1st pass:
            - Made by the compiler. This is where hoisting is initiated.
            - compiled for execution.
        2nd pass: 
            - variables are assigned.
            - Execution phase
                - runs any hoisted code.

    JavaScript only hoists declarations, not initializations.

    To avoid bugs, always declare all variables at the beginning of every scope.
*/

// console.log(`Before: ${personName}`);
let personName = "Daisy";
console.log(`After: ${personName}`); // runs/works

let potato;
console.log(potato);

b();

function b() {
    console.log("I'm hoisted");
}

b()

let newfunc = () => {
    console.log("hoisted");
}

