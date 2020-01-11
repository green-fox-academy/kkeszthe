function divisor(n1: number, n2: number,n3: number = 0): number {
    if(n1%(n2-n3) == 0 && n1%(n2-n3) == 0) {
        return n2-n3;
    } else if(n2%(n1-n3) == 0 && n2%(n1-n3) == 0){
        return n1-n3
    }
    
    return divisor(n1,n2,n3+1);
}

console.log(divisor(12,144));