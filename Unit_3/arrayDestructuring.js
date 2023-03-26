// Add Notes here - see video from 2/19/23

//* Variables within Memory
// First assignment/original assignment 
let x = 10;
let y = "abc";
let z = null;

// Reassign to another variable 
let a = x;
console.log(a); 
let b = y;
console.log(b) // abc

// Reassign a and b 
a = 5;
b = "def";

console.log(x, y, a, b) // 10, abc, 5, def

// ----------

let arr = [];
arr.push(1);
console.log(`arr: ${arr}`);

let reference = [1];
let refCopy = reference 
console.log(`refCopy: ${refCopy}`);

reference.push(2); // both reference and refCopy will have the 2 added
console.log(reference, refCopy); // [1, 2] [1, 2]

refCopy.push(3);
console.log(reference, refCopy);

// -----------------------
//?  Rest Syntax
/*


    - Looks exactly like spread syntax: ...
    - spread -> " expands" in array
    - Rest -> "Condem"
 //! Get rest of notes from video

We can use the spread operator syntax, referred to as 'rest' syntax when working with array destructuring, to package up the REST of the values in the referenced array, and return them as their own array.
*/

const fullNameAgain = [
  "Jane",
  "Doe",
  "Mrs.",
  {
    month: 03,
    date: 22,
    year: 1973,
  },
  2,
  "test",
  "4",
  true,
  false,
];

let janesName = fullNameAgain[0];
// console.log(janesName); // Jane

// Using both array destructuring and rest:
let [newFirstName, newLastName, , ...otherInfo] = fullNameAgain;
console.log(`newFirstName: ${newFirstName}`); // Jane
console.log(`newLastName: ${newLastName}`); // Doe
console.log(`otherInfo: ${otherInfo}`); // [object object], 2, test, 4, true, false
console.log(otherInfo); // [ (month: 3, date:22, year: 1973)], 2, 'test', 