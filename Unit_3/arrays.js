/* 
    ? Unit 2: Data Structures
    - How we organize our data.
    - Utilize arrays and objects and use functions to interact with them.

    ? Array
    - Denoted with square brackets [ ]
    - Indices start at zero
        * Indices do not reflect the length 
    - Using a property "length", we can find the sum total of data stored
*/

// Indices     0       1         2         3
let list = ["milk", "bread", "chicken", "butter"];

console.log(list[2]); // chicken

console.log(list.length); // 4, number of items in array (one higher than highest index)

console.log(list[list.length]); // undefined list[4]

// If needing to find highest indices, subtract 1 from the length
console.log(list[list.length - 1]); // butter

list[0] = "coffee"; // reassign array values

console.log(list) // [ 'coffee', 'bread', 'chicken', 'butter' ]

// Example 2:

let dogs = ["pitbull", 5, true, "german shepherd", "great dane", ["border collie", true, 100], "bluetick coonhound"];

// console.log(typeof dogs); // object

// we can use instanceof to check if an array, returns a true or false value
console.log(dogs instanceof Array); // true

console.log(dogs[5]); // ['border collie', true, 100]
console.log(dogs[5][0]); // border collie 
console.log(dogs[5][2]); // 100


/* 
    Try building out and console.logging its values later!
*/

