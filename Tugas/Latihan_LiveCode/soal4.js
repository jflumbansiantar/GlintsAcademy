// 4. Find the Modus of the array given
// Find the Modus

const real = [3, 7, 1, 1, 5, 2, 1, 8, 9, 10, 9]
const composites = [8, 8, 14, 18, 28, 36, 28, 15, 8, 28]

const modus = (numbers) => {
    let temp = [], count = [], x = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > x) {
            x = count[number];
        }
    }
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === x) {
                temp.push(Number(i));
            }
        }
    return temp;
}


//Test Case
console.log(modus(real))
//Output : 1
console.log(modus(composites))
//Output : 8

