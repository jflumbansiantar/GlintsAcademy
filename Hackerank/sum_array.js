let ar = [1, 2, 3, 4, 10, 11]
let ar1 = ["1 2 3 4 10 11"]

function simpleArithmetic() {
    let arSum = 0
    for (let i = 0; i < ar1.length; i++) {
        arSum += ar1[i]
    }
    return arSum;
}

console.log(simpleArithmetic(ar1))