export function countLetters(text: string): {[key: string]: number} {
    let object: {[key: string]: number} = {};
    const arr: string[] = text.split('');
    const uniArr: string[] = [];
    let counter: number = 0;
    for(let i = 0; i < text.length; i++){       
        if(uniArr.includes(arr[i])){

        } else {
           uniArr.push(arr[i]);
        } 
    }  
    uniArr.map((uniElement) => {
        arr.map((arrElement) => {
            if(uniElement === arrElement){
                counter++;
            }
        });
        object[uniElement] = counter;   
        counter = 0;
    })
    
    
    return object
};

console.log(countLetters('telegram'))