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
        if(a%i === 0){
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
    let tempNum = 1;
    if(b < 1){
        console.log(1)
    } else {
        while(0 < b){
            if(CheckPrimes(a)){
                console.log(a);
                temp++;
            }
            tempNum++
        }
    }
    return temp
}
// printPrime(3); //2 3 5
// printPrime(5); //2 3 5 7 11 
// printPrime(0); //1



//FIND THE MEAN OF GIVEN array
function mean(array){
    var totalNum = 0;
    var averageNum;
    for(let i=0; i<array.length; i++){
        totalNum = totalNum + array[i];
    }
    averageNum = totalNum / array.length;

     return averageNum.toFixed(3);
}
    


//CHECK IF 'X' AND 'O' ARE THE SAME
function checkXO(string) {
    var flagX=0;
     var flagO=0;
    for (let i = 0; i < string.length; i++) {
        if(string[i] === 'x'){
            flagX++;
        }
        else if(string[i] === 'o'){
            flagO++;
        }
    }
    if(flagX === flagO){
        return 1;
    }else {
        return -1;
    }
}
    


//ENCRYPT THE STRINGIFY
function swap(string) {
    //code here
    // var encrypt = [];
    // for (let i = 0; i < string.length; i++) {
    //     var ascii = string.charCodeAt(i);
    //     encrypt += String.fromCharCode(ascii + 1);
    // }
    // console.log(encrypt);

    var huruf = 'abcdefghijklmnopqrstuvwxyz';
    var kata = '';

    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < huruf.length; j++) {
            if (string[i] == huruf[j]) {
                if (string[i] == 'z') {
                    kata += 'a';
                }
                else kata += huruf[j + 1];
            }
        }
    }
    console.log(kata);
}
