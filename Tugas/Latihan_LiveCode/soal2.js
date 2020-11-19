// 2. Here's your exchange
// Give the exchange

const retjehan = [100000, 50000, 20000, 5000, 1000, 500, 100]

const exchange = (doit) => {
    retjehan.forEach(element => {
        let uang = doit/element;
        let tempUang = Math.floor(uang) ;
        // console.log(uang, '--uang')
        if (uang) {
            console.log(`${element}: ${tempUang}`);
        }
        doit %= element;
    })
}

//Test Case
exchange(185500);
// Output
/*
    {
        100000 : 1,
        50000 : 1,
        20000 : 1,
        5000 : 3,
        500 : 1
    }
*/
exchange(377000);
// Output
/*
     {
         100000 : 3,
         50000 : 1,
         20000: 1,
         5000 : 1,
         1000 : 2
     }
*/

