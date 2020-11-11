// 5. Count the Fibonacci Numbers
// Print the N first fibonacci and then count and then find the average of them

const fibonacci = (n) => {
    //code here
    let sum = 0;
    let a = [0, 1];
    for (let i = 2; i < (n + 1); i++) {
        a.push(a[i - 2] + a[i - 1])
    }
    let total = a.reduce((a, sum) => a + sum, 0)
    console.log(sum += a, '--fibonnaci');
    console.log(total, '--sum');
    console.log(total / n, '--avg');

}

//Test Case
fibonacci(5)
//Output :
/*
    Fibonacci = 1 1 2 3 5
    Total = 12
    Average = 2.4
*/
fibonacci(10)
//Output :
/*
    Fibonacci = 1 1 2 3 5 8 13 21 34 55
    Total = 143
    Averag = 14.3
*/

//OUTPUT MUST BE THE SAME!!