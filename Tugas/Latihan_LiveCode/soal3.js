// 3. Roman Numeral
// Output the Romanian Number up to 5000

const converter = (decimal) => {
    //code here -> NO RECURSIVE!!
    let rome = {
        M: 1000,
        DM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let romeNumbers = "", i;
    for (i in rome) {
        while (decimal >= rome[i]) {
            romeNumbers += i;
            decimal -= rome[i]
        }
    }
    return romeNumbers
}

//Test Case
console.log(converter(2019), '--2019')
//Output : MMXIX
console.log(converter(1999), '--1999')
//Output : MCMXCXIX
console.log(converter(1777), '--1777')
//Output : MDCCLXXVII


