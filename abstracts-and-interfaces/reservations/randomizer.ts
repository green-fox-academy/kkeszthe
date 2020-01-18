'use strict'

export function randomizer (number: number): string {
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let randomArr: string[] = [];
    for(let i = 0; i < number; i++){
        randomArr.push(characters[Math.floor(Math.random()*characters.length)]);
    }
    return randomArr.join('')
}