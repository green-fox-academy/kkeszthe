export function anagramChecker(s1: string, s2: string): boolean{
    let arr1: string[] = s1.split('')
    let arr2: string[] = s2.split('')

    if(s1.length !== s2.length){
        return false
    } else {        
        arr1.map((letter) => {
            if(arr2.indexOf(letter) >= 0){
                arr2.splice(arr2.indexOf(letter),1)
            }
        })
                return arr2.length === 0
    }
}