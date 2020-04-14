/*
Represent the following products with their prices

Product	Amount
Milk	1.07
Rice	1.59
Eggs	3.14
Cheese	12.60
Chicken Breasts	9.40
Apples	2.31
Tomato	2.58
Potato	1.75
Onion	1.10

Represent Bob's shopping list
Product	Amount
Milk	3
Rice	2
Eggs	2
Cheese	1
Chicken Breasts	4
Apples	1
Tomato	2
Potato	1

Represent Alice's shopping list
Product	Amount
Rice	1
Eggs	5
Chicken Breasts	2
Apples	1
Tomato	10
Create an application which solves the following problems.

How much does Bob pay?
How much does Alice pay?
Who buys more Rice?
Who buys more Potato?
Who buys more different products?
Who buys more products? (piece)*/

let products: {[key: string]: number} = {
    "Milk":	1.07,
    "Rice":	1.59,
    "Eggs":	3.14,
    "Cheese":	12.60,
    "Chicken Breasts":	9.40,
    "Apples":	2.31,
    "Tomato": 2.58,
    "Potato":	1.75,
    "Onion":	1.10
};

let slBob: {[key: string]: number} = {
    "Milk":	3,
    "Rice":	2,
    "Eggs":	2,
    "Cheese":	1,
    "Chicken Breasts":	4,
    "Apples":	1,
    "Tomato":	2,
    "Potato":	1
};

let slAlice: {[key: string]: number} = {
    "Rice":	1,
    "Eggs":	5,
    "Chicken Breasts":	2,
    "Apples":	1,
    "Tomato":	10,
};

function bill (prod: {[product: string]: number}): number {
    let sum: number = 0;
    Object.values(prod).map(function(value: number, index: number) {
        return sum = sum + (value*Object.values(products)[Object.keys(products).indexOf(Object.keys(prod)[index])])
    })

    return sum
}

console.log(bill(slBob));
console.log(bill(slAlice));

function whoBuysMore (prod: string): string {
    if(Object.values(slBob)[Object.keys(slBob).indexOf(prod)] > Object.values(slAlice)[Object.keys(slAlice).indexOf(prod)]){
        return "Bob";
    } else {
        return "Alice";
    }
}

console.log(whoBuysMore("Rice"));
console.log(whoBuysMore("Potato"));

function moreDifferent (list1: {[product: string]: number}, list2: {[product: string]: number}): string {
    if(Object.keys(list1).length > Object.keys(list2).length){
        return "Bob"
    } else {
        return "Alice"
    }
}

console.log(moreDifferent(slBob, slAlice));

function higherAmount (list1: {[product: string]: number}, list2: {[product: string]: number}): string {
    let sum1: number = 0;
    let sum2: number = 0;
    Object.values(list1).map((value: number) => sum1 = sum1 + value)
    Object.values(list2).map((value: number) => sum2 = sum2 + value)
    
    if (sum1 > sum2){
        return "Bob";
    } else {
        return "Alice";
    }    
}

console.log(higherAmount(slBob,slAlice));

export{};