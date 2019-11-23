//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

/* function unique(arr: number[]): number[] {
   const uniArr: number[] = [];
   for(let i = 0; i < arr.length; i++){
       
    if(uniArr.includes(arr[i])){}
  
       else{
           uniArr.push(arr[i]);
        } 
   
   }  
   return uniArr
    
}
// */

function unique(arr: number[]): number[] {
    const uniArr: number[] = [];
    for(let i = 0; i < arr.length-1; i++){
        let test: boolean;
        for(let j = 0; j < uniArr.length-1 || j < 1; j++){
           if(arr[i]<=uniArr[i]) {test = test || true;

           }
           
           else{
            test = test && false;
            }
            
        }
        if(test == false) {
            uniArr.push(arr[i]);
        }

    }
    return uniArr
     
 }
//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]'