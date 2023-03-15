// TODO Write our Global variables 
// variable to connect to the form & one to connect to the table body, something to hold all the animal data (array)
const form = document.querySelector(`form`);
const table = document.querySelector(`tbody`);

// Will make array later 
let animals = [];


// console.log(form); // We are able to access our various inputs based off the "name" we assigned them
// console.log(form.name);
// console.log(Object.value(form));

// TODO: Create an Event Listener for Form
// Event Listener: something to listen for, when heard do the thing (something for it to do/trigger)
form.addEventListener("submit", e => {
  // we need something to stop the browsers from refreshing the page
  e.preventDefault(); // stops the default refresh 
    // console.log("I submitted the form!");
    // Create an animal data collection from the input values
  const animal = {
    species: form.species.value,
    name: form.name.value,
    sex: form.sex.value,
}

// Testing if it's working, it does!
// console.log(animal);

    // Add animal to animals array with .push()
  animals.push(animal);
  console.log(animals);
});

 // Two new window methods:
 form.reset(); // point to our form and clear it
 // form[0].focus(); // will target the first input within the form, "start" when the form is "new"
 form.species.focus();

 displayTable(); // Calling the function in the event so each animal gets displayed when it's added
});

// TODO: Display to the table body (the DOM) (function)
function displayTable() {
 console.log("displayTable()", animals);

 // Use a while loop (this will be hecka helpful later, so remember this section)
 /* 
   While the table body has a child in the first position(if it has anything in it/appended):
       - use the method removeChild on tbody
       - .removeChild() requires details on which element to remove
           - the first child need to be removed
 */
 while (table.firstChild) {
   table.removeChild(table.firstChild);
 }

 // Use a .forEach loop to create the needed table elements per animal, assign values, and then append to page
 // Each row: an ID (#), the name, the sex, the species
 animals.forEach((a, i) => {
   console.log("in forEach Loop:", i, a);

   // Create Elements:
   let tr = document.createElement("tr"); // this will be parent element for our "td"
   // Using names of what type of data will be in each "td" for clarity
   let id = document.createElement("td");
   let name = document.createElement("td");
   let sex = document.createElement("td");
   let species = document.createElement("td");

   // Assign Elements values:
   id.textContent = i + 1; // ++, Using the index position in array, and adding 1 to become the ID
   name.textContent = a.name;
   sex.textContent = a.sex;
   species.textContent = a.species;

   // Append Elements to DOM/Parent
   tr.appendChild(id);
   tr.appendChild(name);
   tr.appendChild(sex);
   tr.appendChild(species);
   table.appendChild(tr);
 });
}

