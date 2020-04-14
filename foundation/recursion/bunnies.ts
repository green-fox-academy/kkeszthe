let noOfBunnies = Math.floor(Math.random()*100)

console.log(`The number of bunny ears with multiplication is ${noOfBunnies*2}`)

function bunnyCounter (quantity: number): number {
    if(quantity === 1){
        return 2
    }
    return 2 + bunnyCounter(quantity-1)
}

console.log(`The number of bunny ears with recursion is ${bunnyCounter(noOfBunnies)}`);