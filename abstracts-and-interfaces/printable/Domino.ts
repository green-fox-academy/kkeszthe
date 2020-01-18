import { Printable } from './IPrintable'

export class Domino implements Printable{
    aSide: number
    bSide: number

    constructor(){
        this.aSide = Math.floor(Math.random()*10)
        this.bSide = Math.floor(Math.random()*10)
    }

    printAllFiles(): string {
        return `Domino A side: ${this.aSide}, B side: ${this.bSide}`
    }
    
}