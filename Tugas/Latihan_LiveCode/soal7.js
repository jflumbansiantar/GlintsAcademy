// 7. Fruit box
// Let's buy some fruits with the given doit

const fruits = [
    {
        name: "Apple",
        stock: 3,
        price: 15000
    },
    {
        name: "Orange",
        stock: 2,
        price: 10000
    },
    {
        name: "Gomu gomu",
        stock: 10,
        price: 50000
    }
]

const cart = (cashOnHands) => {
    //code here
}

//Test case
// cart(55000)
//Output
/*
    {
        Changes : 5000,
        Fruits : {
            Apple : 2,
            Orange : 2
        }
    }
*/
// cart(75000)
//Output
/*
 {
     Changes : 0,
     Fruits : {
         Apple : 1,
         Orange : 1,
         "Gomu Gomu" : 1
     }
 }
*/

