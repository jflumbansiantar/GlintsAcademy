/**
 * Task A -- Cari faktor PRIMA
 */
const faktor = (arr) => {
    //code here
}

//Test
faktor(70);
faktor(119);

/**
* Task B -- Ganjil, Genap dan Tiga
*/
const groupAngka = (arr) => {
    //code here
}

//Test
groupAngka([2, 4, 6])
groupAngka([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
groupAngka([100, 151, 122, 99, 111])

/**
* Task C -- Chairs
*/
const settingChairs = (arr, params) => {
    //code here
}

//Test
console.log(sittingArrangement(['A', 'B', 'C'], 0)); //Invalid number
console.log(sittingArrangement(['Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji'], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
console.log(sittingArrangement(['Yosia', 'Asrawi', 'Andru'], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
console.log(sittingArrangement(['Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion'], 4));
