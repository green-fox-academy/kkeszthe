// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let i: number = 0;
function division(num: number): number{

    return 10/num;
    }
try{
    division(i);
    throw new Error("fail");
} catch(err){
    if(i==0){
        console.log(err.message);
    } else {
        console.log(division(i));
    }
}

export{}
