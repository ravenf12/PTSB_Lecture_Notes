// ? Array Methods, awesome ways to do things with or to arrays 

let dogs = ["pitbull", "german  shepherd", "mastiff", "great dane"];

for(item of dogs){
    console.log(item);
}

// * .push() // adds items to the end of an array
dogs.push("border collie");
console.log("Push method: ", dogs);
console.log(dogs[4]); // Border collie

// * .splice() // splice(indices of where to remove , how many to remove , what to replace with/add)
dogs.splice(1, 1, "lab");
console.log("Splice method: ", dogs);

dogs.splice(1, 0, "golden retriever");
console.log("Second Splice Method: ", dogs);



// * .pop() ,
dogs.pop();
console.log("Pop Method: ", dogs);

// * .shift(), removes the first value of an array(value in first position)
dogs.shift();
console.log("Shift Method: ", dogs);

// * .unshift(), adds to the front of an array, can include multiple items
dogs.unshift("Heeler", "Rottie", "Aussie");
console.log("unshift Method: ", dogs);

// .length, property not method 
console.log(dogs.length);

// * .toString(), returns a string representation of the array
let rgb = ["red", "green", "blue"];
console.log("ToString Method: ", rgb.toString());

//! Iteration Methods
/* 
    ? .filter() and .includes()
    - does not destroy the original array 
    - we typically store the filter array in a new variable 
    - Takes a callback function that returns either true or false 
        - A callback function is another function that we invoke within our main function(nested function)
    - loops through array
    - MUST have a return
*/

let animals = ["giraffe", "dogs", "elephant", "horse", "cats"]

// Use filter to remove "elephant"

let filteredAnimal = animals.filter(animal => {
    let remainingAnimal = animal !== "elephant";
    console.log(`Remaining fruit: ${remainingAnimal}`);
    return remainingAnimal;
})

console.log(filteredAnimal);

