/* Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */

class Counter{
    integer: number;
    change: number;

    constructor(integer: number = 0){
        this.integer = integer;
        this.change = 0
    }
    add(number: number = null): number{
        if(number === null){
            this.change = this.change + 1;
            return this.integer = this.integer+1;
        } else {
            this.change = this.change + number;
            return this.integer = this.integer + number;
        }
    
    }
    get(): string {
        return "'" + this.integer + "'";
    }
    reset(): number{
        return this.integer = this.integer-this.change;
    };
    
}

let number = new Counter();
console.log(number.add(5));
console.log(number.add(-10));
console.log(number.get());
console.log(number.reset());