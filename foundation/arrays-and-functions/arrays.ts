//Array = Tömb, javascript lista
//To keep variables/values in one place.
//Index starts from 0
//One type in one array

let num: number[];
num = [1, 2, 3, 4, 5, 8];
console.log(num[0]);
console.log(num[num.length-1]);
console.log(num);
for (let i=0;i<num.length;i++){
    console.log(num[i]);
}
console.log(num.length);
num.push(15);
console.log(num);

//matrix array within array

let matrix: number[][];
matrix = [[1,2],[1,2],[1,2]];
console.log(matrix[0][1]);

let numbers2: number[] = [];
for (let i = 0;i<100;i++){
numbers2.push(i)
}