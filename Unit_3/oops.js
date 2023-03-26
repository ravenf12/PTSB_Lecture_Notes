//* Object Oriented Programming 
/* 
    - Encapsulated data and behavior through an exposed interface
        (we can access how we build and store data/dataType values)
    - Allows for inheritance of behavior(methods/functionality) via parent class that can share methods.

*/

class Pet {
    constructor(name, color) {
        this.name = name;
        this.coloration = color;
    }

    speak(){
        return `${this.name} says, woof!`;
    }
}

let buttons = new Pet("Buttons", "tri-color");
console.log(buttons);
let tiny = new Pet("Tiny", "farm brown");
console.log(tiny);
console.log(tiny.speak());
console.log(buttons.speak());

console.log(`${tiny.name} goes woof!`); // Not as flexible and clean code compared to the method 

// -------
//* Inheritance 
// We can create child classes that can inherit from a parent class. 

// Ex 1: Change up our pet class and create a new child class called Dog that extends from it 

class Dog extends Pet {
    //
    constructor(name, color, voice) {
        //
        super(name, color);
        this.voice = voice;
    }

    speak() {
        return `${this.name} says, "${this.voice}!"`
    }
}

let Daisy = new Dog("Daisy", "Tan and white", "scream")
console.log(Daisy);
console.log(Daisy.speak());

//Ex 2: Create a child class of Cat from Pet class
class Cat extends Pet {
    constructor(name, color, voice) {
        super(name, color);
        this.voice = voice;
    }
}

let Comet = new Cat("Comet", "Grey and white", "Meow");
console.log(Comet);
console.log(Comet.speak()); // TypeError: Comet.speak is not a function 

// -------

//* Abstraction
// A way to store some of the complex logic that we may associate with our object methods
// Hiding the complexity of how things work via an objects methods 

// Ex: Create a base class that has a method to help up calculate a tip with a given tab that has been created.
class tab {
    constructor(sub, tax) {
        this.subtotal = sub;
        this.tax = tax;
        this.tip;
    }

    // using a method to preform functionality, aka abstraction 
    tipAmount(x) {
        // Create a total of the subtotal and tax
        let total = this.subtotal + this.tax;

        //calculate tip and give value
        this.tip = total * x;
        // calculated the final total for the bill
        let finalAmount = total + this.tip;
        // return final amount
        return finalAmount.toFixed(2);
    }
}

// Set up some variable to hold some information: sales tax, a tip percentage, and a generated a new bill/tab object 
let salesTax = 0.06;
let tipPercentage = 0.2;

let dinnerBill = new tab(54.80, salesTax);
console.log(dinnerBill);

// Create a function that takes in a bill and process it using the method held within the object itself 
function calcTip(bill) {
    return bill.tipAmount(tipPercentage);
}

// console.log and see the magic happen 
console.log(`Final Cost: $${calcTip(dinnerBill)}`);
console.log(`With a tip of: $${dinnerBill.tip.toFixed(2)}`);

// -----
//* Polymorphism 

/* 
    How objects respond in relationship from child to parent. 
    All children/siblings can use the methods of the parent.
    Children/siblings can't access properties of siblings (like methods).
*/
