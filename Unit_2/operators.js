/*
    JavaScript Operators
    - Plus          +
    - Times         *
    - Power         **
    - Dot           .
    - Assignment    =
    - Comparison    ==
            ===

    Used to:
        - Assign 
        - Compare
        - Arithmetic(Maths)
        - Logical 
        - Conditionals 
*/

// Equal to: ==, checks value 
"3" == "3";
console.log("3" == 3); // true
console.log("4" == 3); // false

// Strict Equal To: ===, checks value and data type
console.log("3" === 3);
console.log("hello" === "hello"); //true
console.log(100 === 200); // false

// Not Equal & Strict Not Equal: !=, !==
console.log("2" != 2); // false 
console.log("2" != 3); // true 
console.log("2" !== 2); // true

// Greater Than / Less Than: > <
let y = 3 > 2;
console.log("Greater Than: ", y);

// Greater Than or Equal To: >=
console.log(3 >= 2, 5 >= 10, 5 >= 5);

// Less Than or Equal To: <=
console.log(2 <= 2);

// And: &&
console.log(2 < 10 && 2 > 1);
console.log("And: ", 2 && 3);

// Or: ||, one must be true
console.log(2 || 4);

// Ex
let x = 3;
let z = 5;
console.log(x >= z);

//* Logical Operators: determine the logic between variables or values
// Ex w/ reassignment 
let a = 1; // 1
a = a + 1; // Redefined as 2
console.log(a);
a = a + 1; // Redefined as 3

// Addition:
r += 1; // r = r + 1

let s = 50;
console.log(s += 5); // s = 50 + 5 
console.log(s); // 55

// Subtraction
r -= 1; // r = r - 1;

// Multiplication 
r *= 2; // r = r * 2;

// Division : /
r /= 3; // r = r / 3;

// Remainder (modulus %)
r %= 1; 
console.log(3 % 2); // 1

// Exponential 
r **= 1; // r = r * r;
console.log(2 ** 3) // 8 (2 * 2) * 2;
