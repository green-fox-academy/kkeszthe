let finance: number[] = [500, 1000, 1250, 175, 800, 120]

function howMuch(spending: number[]): number {
    let sum: number = 0
    for(let i = 0; i<spending.length; i++){
    sum = sum + spending[i];
}
    return sum;
}
function highest(spending: number[]): number {
    for(let i = 0; i < spending.length; i++){
        spending.sort(function(a, b) {
            return a - b;
          });
    }
    return finance[spending.length-1];
}
function lowest(spending: number[]): number {
    return finance[0];
}
console.log(finance.length)
function average(spending: number[]): number {
    let sum: number = 0
    for(let i = 0; i<spending.length; i++){
        sum = sum + spending[i];
    }
    return sum = sum/spending.length;
}
console.log(howMuch(finance));
console.log(highest(finance));
console.log(lowest(finance));
console.log(average(finance));