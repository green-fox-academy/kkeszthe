'use strict'

import { Reservationy } from './Reservationy';
import { randomizer } from './randomizer'
import { randomDOW } from './randomDayOfTheWeek'

export class Reservation implements Reservationy{
    reservationCode: string
    day: string

    constructor(){
        this.reservationCode = randomizer(8);
        this.day = randomDOW()
    }

    getDowBooking(): string{
        return this.day
    };
    getCodeBooking(): string{
        return this.reservationCode
    };
    print(){
        console.log(`Booking# ${this.reservationCode} for ${this.day}`)
    }

}