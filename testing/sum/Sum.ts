export class Sum {
    sum(numbers: number[]): number{
        let sum: number = 0;
        numbers.map((element) => {
            sum += element
        });
        return sum;
    }
};