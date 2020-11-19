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


function shuffle(input) {
    let temp = [];
    let number = 0;
    for (let i = 0; i <= input.length; i++) {
        if (input[i] > number) {
            number = input[i];
            temp.push(input[i]);
        }
    }
    console.log(temp, '-temp');
    return temp;
    // console.log(input.sort())
}

let input = [5, 2, 4, 3, 1]

// console.log(shuffle(input))

function getMin(arr1, arr2) {
    let temp = [];
    let count = 0
    for (let i = 0; i <= arr1.length; i++) {
        for (let j = 0; j <= arr2.length; j++) {
            if ((arr1[i] <= arr1[i -1])&&(arr1[i] === arr2[j])) {
                temp.push(arr1[i]);
                count ++;
            }
        }
    }
    return count;
}

let arr1 = [1, 4, 3, 2, 7];
let arr2 = [1, 3, 2, 6, 7]
console.log(getMin(arr1, arr2))
