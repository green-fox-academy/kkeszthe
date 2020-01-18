import { Reservation } from './Reservation'

let booking: Reservation[] = []

for(let i = 0; i < 10; i++){
    booking.push(new Reservation);
}

booking.forEach((item) => {
    item.print()
})