//FAKTOR PERSEKUTUAN TERBESAR
function fpb(number1 , number2){
    var minNum;
    if (number1 < number2){
        minNum = number1;
    } else {
        minNum = number2;
    }
    for(let i = minNum; i>=1; i++){
        if(number1%i===0 && number2%i===0){
            return i;
        }
    }
}

// //Test
// console.log(fpb(30,50)) //10
// console.log(fpb(12,15)) //3
// console.log(fpb(17,35)) //1



//PRINT THE N FIRST PRIME NUMBERS
function CheckPrimes(a){
    let faktor = 0;
    for(let i = 1; i<=a; i++){
        if(number%i === 0){
            faktor++;
        }
    }
    if (faktor === 2){
        return true
    } else {
        return false
    }
}
function printPrime(b){
    let temp = 0;
    if(b < 1){
        console.log(1)
    } else {
        while(0 < b){
            if(CheckPrimes(a)){
                console.log(a);
                temp++;
            }
        }
    }
}
// print(3); //2 3 5
// print(5); //2 3 5 7 11 
// print(0); //1



//FIND THE MEAN OF GIVEN array



//CHECK IF 'X' AND 'O' ARE THE SAME



//ENCRYPT THE STRINGIFY
