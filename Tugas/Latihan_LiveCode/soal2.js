// 2. Here's your exchange
// Give the exchange

const retjehan = [100000, 50000, 20000, 5000, 1000, 500, 100]

const exchange = (doit) => {
    let temp = [];
    // temp.a = 
    for (let i = 0; i <= retjehan.length; i++) {
        for (let j = 0; j <= retjehan.length; j++) {
            doit = doit % retjehan[i];
            if (retjehan[i] = retjehan[j]) {
                temp.push(retjehan[i])
            }
        }

    }
    console.log(doit, '--doit')

    console.log(temp, '--temporary Data')
    // return temp;
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

