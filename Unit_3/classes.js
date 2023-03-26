//* Methods
// Generating/creating our own methods for use with our objects


class DeptInventory {
    constructor(debt) {
        this.department = dept;
        this.items = []; // makes  default value for this key. 
    }

    //       1        2
    addToInventory(newItem) {
        //3          4
        this.items.push(newItem);
        console.log("An item was added!");
        console.table(this.items);
    }
}

// 5
let dryGoods = new DeptInventory("Dry Goods");
let itemTwo = new Item("corn", "canned", 0.79);

// 6
dryGoods.addToInventory(itemTwo);
dryGoods.addToInventory(itemOne);
console.log(dryGoods);


/* 
1. Establishing a name for our method.
2. This method requires a parameter.
3. "This" keyword is referencing "Dry Goods" object and adding to it's array of items.
4. Using an array method to push to the items array.
5. Generating/creating a new dept object named dryGoods. Also creating a new item.
6. Using do notation to target our method within our dryGoods object and passing items to it.
*/

//* Factory Methods 

class Expense {
    // Static keyword, create/build a new expense
    static addUpchargeForProfit(wholesale) {
        // calculate the wholesale charge and store in a variable 
        let upcharge = wholesale + wholesale * 0.25;
        // return (so it accessible) the new expense 
        return new Expense(wholesale, upcharge);
    }

    constructor(w, u){
        this.purchase_price = w;
        this.sell_at = u;
    }

    // addTax method 
    addTax(x) {
        //set x value to percentage variable 
        let percentage = x;
        //set the value of sell_at to a variable 
        let saleCost = this.sell_at;

        //write and set the taxed cost
        this.plus_sales_tax = (saleCost + saleCost + percentage).toFixed(2);
    }
}

let itemToSell = Expense.addUpchargeForProfit(1);
console.log(itemToSell);

let anotherItemToSell = Expense.addUpchargeForProfit(2);
console.log(anotherItemToSell);

//* Class Inheritance 
// with each object we create, those methods are included to those specific objects, basically the children inherit from the parent class.

anotherItemToSell.addTax(0.06);
console.log(anotherItemToSell);

// anotherItemToSell.addUpchargeForProfit(3); TypeError: anotherItemToSell.addUpchargeForProfit is not a function