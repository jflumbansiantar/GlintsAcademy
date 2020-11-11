// Latihan Exercise Practice

// 1. Deep Sum
// Find the value from this multidimensional Array

const multidimensional = [
    [
        [15, 7, 8], [1, 5]
    ],
    [
        [23, 17, 21, 50, 12], [7, 8, 1], [100]
    ],
    [
        [105]
    ]
]

const deepSum = (multidimensional) => {
    let sum = 0;
    for (let i = 0; i < multidimensional.length; i++) {
        for (let j = 0; j < multidimensional[i].length; j++) {
            for (let k = 0; k < multidimensional[i][j].length; k++) {
                sum += multidimensional[i][j][k]
            }
        }
    }
    return sum
}

//Test Case
console.log(deepSum(multidimensional));

// Output : 380