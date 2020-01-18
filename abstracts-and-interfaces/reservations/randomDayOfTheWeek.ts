'use strict'

export function randomDOW (): string {
    const wod: string[] = ['MON','TUE','WED','THU','FRI','SAT','SUN']
    return wod[Math.floor(Math.random()*wod.length)];
    
}