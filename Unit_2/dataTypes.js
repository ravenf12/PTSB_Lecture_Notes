/* 
    JavaScript Data Types
    JavaScript is considered "dynamically typed", data types exist but our variables are not bound to any of them (we have to assign them ourselves)
*/

// Booleans: a true or false data value.
let on = true;
let off = false;
// console.log(on, off)

// Null: is a value of "nothing", something that doesn't exist. Intentional of any object value;
let empty = null;
// console.log(empty)

// Undefined: a variable without a value, gets both a value and type of undefined.
let x;
let undef = undefined;
// console.log(x, undef)
// console.log(typeof undef);

// Numbers: values are stored as decimal numbers, can be written with or without decimals.
let degrees = 90;
// console.log(degrees)

let precise = 999999999999999; // 15 9s
console.log(precise);

let rounded = 9999999999999999; // 16 9s
console.log(rounded); 
// JS gives us space for 15 9s before it rounds up

// let thisexample = 0.2 + 0.1;
// console.log(thisexample);

let numbersarehard = (0.2 * 10 + 0.1 * 10) / 10;
// console.log(numbersarehard);

// String: it's a series of characters written using single or double quotes. 
let stringOne = "double quotes";
let stringTwo = "single quotes"
console.log(stringOne, stringTwo)

let myFriend = 'And she said, "Blah, blah, blah"!';
let me = "Did you say, 'Blah blah'?";
console.log(myFriend, me);

// let test = "This thing: "That Thing"";
// console.log(test)
// Quotes cannot read each other if its the same quote inside of a quote. 

// Numbers vs. Strings 
let first = 1234 + 567; 
// adds numbers 
let second = '1234' + '567'; 
// Didnt actually add the numbers.
console.log(first);
console.log(second);

// Typeof provides us the data type of a variable
console.log(typeof first);
console.log(typeof second); 

let createNum = Number("123");
let notaNum = Number('ABC');
console.log(createNum, typeof createNum);
console.log(notaNum, typeof notaNum); // NaN not a number

let sum = "1" + 3;
console.log(sum, typeof sum);
// type coercion: when we take one data type become another.

let anotherone = 100 + "a hundo";
console.log(anotherone, typeof anotherone);

// Objects: can contain many values and value types. These values are stored in properties (pairs of keys/names and values).

//    1     2
let frodo = {
    // 3 4   5
    race: "hobbit",
    rings: 1,
    cloak: true,
}
/*
    1. Variable name of the object.
    2. Objects are denoted with curly braces {}, inside the brackets are the object's properties.
    3. The key or name of the property.
    4. Key/Value pairs are separated with a colon :.
    5. The property's/key's value.
*/
console.log(frodo)

// Arrays:
//   1     2       3
let list = ["item1", "item2", "item3"];
/* 
    1. Name of the Array, or list.
    2. The array is inside of these square brackets.
    3. each item, regardless of datatype, is separated by commas.
    Denoted(represented with/made by) by []
*/

let burritos = ["large", 10, true];
console.log(burritos) // typeof object

console.log("Method used to check for arrays: ", Array.isArray(burritos));
console.log("frodo object: ", Array.isArray(frodo));

// Literals 
// string literal
let car = "Toyota";
let truck = car; // not a literal 

// Numeric literal
let dec = 25;

// Boolean
let tired = true;

// Object
let soup = {
  a: "chicken noodle",
  b: "tomato",
  c: "beef and barley",
};

// Array
let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

console.log(days);
console.log(days.toString());
console.log(days.length);
