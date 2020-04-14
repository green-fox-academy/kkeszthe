//Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function power(b: number, n: number): number {
    if(n === 0){
        return 1;
    }
    return b * power(b,n-1);
}

console.log(power(8,3));