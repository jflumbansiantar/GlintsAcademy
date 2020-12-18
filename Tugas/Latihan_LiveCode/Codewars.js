//7 kyu
/**
 * Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and 
 * carries the "instructions" for the development and functioning of living organisms. 
 * If you want to know more http://en.wikipedia.org/wiki/DNA
 * In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
 * You have function with one side of the DNA (string, except for Haskell); you need to get 
 * the other complementary side. DNA strand is never empty or there is no DNA at all (again, 
 * except for Haskell).
 */
function DNAStrand(dna) {
    //your code here
    let tempDNA = [];
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'A') {
            tempDNA.push('T');
        } else if (dna[i] === 'C') {
            tempDNA.push('G');
        } else if (dna[i] === 'T') {
            tempDNA.push('A');
        } else if (dna[i] === 'G') {
            tempDNA.push('C')
        }
    }
    //     return tempDNA.join('')
}

// console.log(DNAStrand('AAAA'))
// console.log(DNAStrand('TAACG'))
// console.log(DNAStrand('CATA'))


//Best practices
// function DNAStrand(dna) {
//     return dna.replace(/./g, function(c) {
//       return DNAStrand.pairs[c]
//     })
//   }

//   DNAStrand.pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
//   }


// Test.assertEquals(DNAStrand("AAAA"), "TTTT", "String AAAA is");
// Test.assertEquals(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
// Test.assertEquals(DNAStrand("GTAT"), "CATA", "String GTAT is");

//==============================================================================================

/**
 * Check to see if a string has the same amount of 'x's and 'o's. 
 * The method must return a boolean and be case insensitive. The string can contain any char.
 * Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

function XO(str) {
    //code here

}

//Best practice
// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
// }

// const XO = str => {
//     str = str.toLowerCase().split('');
//     return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }


// function shuffle(input) {
//     let temp = [];
//     let number = 0;
//     for (let i = 0; i <= input.length; i++) {
//         if (input[i] > number) {
//             number = input[i];
//             temp.push(input[i]);
//         }
//     }
//     console.log(temp, '-temp');
//     return temp;
// console.log(input.sort())
// }

// let input = [5, 2, 4, 3, 1]

// console.log(shuffle(input))

// function getMin(arr1, arr2) {
//     let temp = [];
//     let count = 0
//     for (let i = 0; i <= arr1.length; i++) {
//         for (let j = 0; j <= arr2.length; j++) {
//             if ((arr1[i] <= arr1[i -1])&&(arr1[i] === arr2[j])) {
//                 temp.push(arr1[i]);
//                 count ++;
//             }
//         }
//     }
//     return count;
// }

// let arr1 = [1, 4, 3, 2, 7];
// let arr2 = [1, 3, 2, 6, 7]
// console.log(getMin(arr1, arr2))

//soal no. 1
function join1(arr1, arr2) {
    let temp = [];
    temp.push(arr1, arr2);
    console.log(temp.join(','));
}

//soal no. 2
function join2(arr1, arr2) {
    let temp = [];
    for (let i = 0; i < arr1.length; i++) {
        temp.push(arr1[i]);
        for (let j = 0; j < arr2.length; j++) {
            if (i === j) {
                temp.push(arr2[j]);
                break
            }
        }
    }
    console.log(temp.join(','));
}

//soal no. 3
function join3(arr1, arr2) {
    let temp = [];
    let tempData = temp.concat(arr1, arr2).sort()
    console.log(tempData);
    for (let i = 0; i < tempData.length - 1; i++) {
        if (tempData[i] > tempData[i + 1]) {
            temp = tempData[i];
            tempData[i] = tempData[i + 1]
            tempData[i + 1] = temp
            // arr.push(temp)
        }
    }
    // console.log(arr);
}
let arr1 = [1, 4, 9];
let arr2 = [6, 2, 8];

join3(arr1, arr2)

//soal no.4
// reverse then add -ay
function sra(string) {
    //split
    var temp = [];
    var word = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            word += string[i];
        } else {
            temp.push(word);
            word = "";
        }
        if (i === string.length - 1) {
            temp.push(word);
        }
    }
    // reverse and add +ay
    for (let j = 0; j < temp.length; j++) {
        let reverse = "";
        for (let k = 1; k < temp[j].length; k++) {
            temp[j][0] = temp[j][k]
            temp[j][k] = temp[j][0]
            reverse += temp[j][k]
        }
        temp[j] = reverse + temp[j][0] + 'ay';
        reverse = temp[j]
    }
    // let i;
    let tempData = temp.join(' ').charAt(0).toUpperCase() + temp.join(' ').toLowerCase().slice(1)
    // for (let k = 0; k < temp.length; k++) {
    //     let letter = "";
    //     for (let j = 1; j < temp[k].length; j++) {
    //         temp[k][0] = temp[k][j]
    //         temp[k][j] = temp[k][0]
    //         letter += temp[k][j]
    //     }
    //     temp[k] = letter + temp[k][0] + 'ay'
    //     letter = temp[k]
    // }
    // let tempData = temp.join(' ').charAt(0).toUppercase()
    console.log(tempData)

    // let tempData = firstLetter 

    // console.log(tempData);
}

let str = "The quick brown";

sra(str)