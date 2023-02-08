// ? Loops
/* 
    Loops through a block of code a number of times

    If stuck in an accidental infinitly running loop:
        ctrl+c, ctrl+z, red stop button from code runner.

    ? For Loop:
        Takes in 3 parameters(the things wihtin the ())
            - Initial expression 
            - Condition 
            - Increment expression

    Structure:
    for (initial expression ; condition ; increment expression){
        ...code block to run
    }
*/

for (i = 0; i <= 10; i++){
    console.log(i);
}

console.log("Finished with loop");

// For (i = 0; i <= 20; i += 2) {
//     console.log(i);

// Challenge: using a for loop, count from 10 to 0, going down by 1

for (j = 10; j > 0; j-- ){
    console.log(j)
}

for (j = 10; j > 0; j-- ) console.log(j) // if using a straight return, don't have to use curly brackets

let firstName = "Raven"

for (let i = 0; i < firstName.length; i++) {
    console.log(i, firstName[i])
} // shows letters w/ count


let sum = 0;

for (let i = 1; i <= 5; i++) {
    console.log("Before", sum);
    sum += i;
    console.log("after", sum);
}

// console.log(sum);

// ? For In Loops: loops through the properties of an object
/* 
    Structure:
    for (key in object) {
        ...code to run
    }

    key is a random variable name of our choice, object is the name of the object we are targeting 
*/

let student = {
    name: "Comet",
    awesome: true,
    degree: "JavaScript"
};

console.log(student["name"]); // pulls out the value of "name" from the object, "name" is the key.

for (item in student) {
    console.log(item);
    console.log(student [item]);
}


let catArray = [
    "tabby",
    "british shorthair",
    "burmese",
    "maine coon",
    "rag doll",
  ];

/* 
    ! For in can be used on objects and arrays, but if array index order is important it's better to use a for loop, for of loop, or Array.forEach() method.
*/

  for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
  }

  // ? For Of Loops: loops through the values of an iterable object 
/* 
    Iterable - an object that has iterable properties 

    Structure:
    for (variable of iterable)

    Variable is any word we choose to use, iterable is the name of any iterable "thing"

    Can loop over Arrays, Strings, etc.
*/

// For of doesnt play with object 
// for (item of student) {
// console.log(item);
// }

for (cat of catArray) {
    console.log("FOR OF LOOP:", cat);
}

for (bubbles of catArray) {
    if (bubbles === "main coon"){
        console.log(`Everybody thinks their long hair cat is a ${bubbles}.`);
    } else {
        console.log("WOW! It is a main coon!");
    }
}
