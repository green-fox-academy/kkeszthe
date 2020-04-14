export function fibonacci(index: number): number{
    if(index === 1 || index === 0){
        return index
    }
    return fibonacci(index-1) + fibonacci(index-2)
    
}