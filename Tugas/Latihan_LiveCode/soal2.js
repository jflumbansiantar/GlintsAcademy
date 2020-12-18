// 2. Here's your exchange
// Give the exchange

const retjehan = [100000, 50000, 20000, 5000, 1000, 500, 100]

const exchange = (doit) => {
    //call all the retjehan
    retjehan.forEach(element => {
        //Modulus doit with retjehan
        doit %= element;
        //make a variable to divide the retjehan
        let uang = doit / element;
        //another variable to round down the uang
        let tempUang = Math.floor(uang);
        //print it
        if (uang) {
            console.log(`${element}: ${tempUang}`);
        }
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
// exchange(377000);
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

