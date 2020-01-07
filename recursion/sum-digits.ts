//Given a non-negative integer n, return the sum of its digits recursively (without loops).

function sumDigits(n: number): number {
    if (n.toString().length === 1){
        return n;
    }

    return n%10 + sumDigits((n-(n%10))/10);
}

console.log(sumDigits(666));
