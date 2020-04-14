/*We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

Create a map with the following key-value pairs.

Product name (key)	Price (value)
Eggs	200
Milk	200
Fish	400
Apples	150
Bread	50
Chicken	550
Create an application which solves the following problems.

How much is the fish?
What is the most expensive product?
What is the average price?
How many products' price is below 300?
Is there anything we can buy for exactly 125?
What is the cheapest product?*/

let productPrices: {[product: string]: number} = {
    "Eggs": 200,
    "Milk": 200,
    "Fish": 400,
    "Apples": 150,
    "Bread": 50,
    "Chicken": 550
}
let arrProd: string[] = Object.keys(productPrices);
let arrPrice: number[] = Object.values(productPrices);

function howMuch(name: string): number{
    return arrPrice[arrProd.indexOf(name)]
}
console.log(howMuch("Fish"));

function mostExpensive(prod: {[product: string]: number}): string {
    return Object.keys(productPrices)[Object.values(productPrices)
        .indexOf(Object.values(productPrices)
        .sort((a,b) => b-a)[0])];
}
console.log(mostExpensive(productPrices));

function average (prices: number[]): number{
    let sum: number = 0;
    prices.map(function (value: number, index: number): number {
        return sum = sum + value;
    })
    return sum/prices.length;
}
console.log(average(arrPrice));

function under300(prices: number[]): number{
    let sum: number = 0;
    prices.map(function (value: number, index: number): number {
        if (value < 300){
            return sum = sum + 1;
        }
    })
    return sum
}
console.log(under300(arrPrice))

function anything125 (prices: number[]): boolean{
   return prices.map(function(value: number, index: number){
        return value == 125
    })
    .some((a,b) => a == true)

}
console.log(anything125(arrPrice));

function cheapest(prices: number []): string {
    return Object.keys(productPrices)[Object.values(productPrices)
        .indexOf(Object.values(productPrices)
        .sort((a,b) => b-a)[Object.values(productPrices).length-1])];
}
console.log(cheapest(arrPrice));

export{}