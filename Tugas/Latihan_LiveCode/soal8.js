// 8. Cinema Seats
// Book your seat

// | A1  A2  A3 |

// | B1  B2  B3 |

// | C1  C2  C3 |

const seats = [
    ['X', '', ''],
    ['', '', 'X'],
    ['', 'x', '']
]

const showSeats = () => {
    //code here
}
const book = (seat) => {
    //code here
}

//Test case
// book('A3')
//Output : Thanks! Book A3
// book('C2')
//Output : C2 has already been booked!
// showSeats()
//Output :
/*
[
    ['X','','X'],
    ['','','X'],
    ['','x','']
]
*/


// let number = Number(seat[1] - 1);
    // switch (seat[0]) {
    //     case 'A':
    //         if (seats[0, number] == 'X') {
    //             console.log(`${seat} has already been booked!`)
    //         } else {
    //             seats[0, number] = 'X';
    //         }
    //         break;
    //     case 'B':
    //         if (seats[1, number] == 'X') {
    //             console.log(`${seat} has already been booked!`)
    //         } else {
    //             seats[0, number] = 'X';
    //         }
    //         break
    //     case 'C':
    //         if (seats[2, number] == 'X') {
    //             console.log(`${seat} has already been booked!`)
    //         } else {
    //             seats[0, number] = 'X';
    //         }
    //         break;
    // 