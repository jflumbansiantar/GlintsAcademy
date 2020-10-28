let ar = [1, 2, 3, 4, 10, 11]

function simpleArithmetic(ar){
    let arSum = 0;
    for (let i = 0; i < ar.length; i++){
        arSum += ar[i]
    }
    return arSum;
}

console.log(simpleArithmetic(ar))