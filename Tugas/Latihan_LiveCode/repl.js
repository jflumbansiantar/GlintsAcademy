// Please finish the below questions below, meant to be simple questions, please state any assumption instead of asking questions if you are unsure of anything

// 1. Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]
function join1(arr1, arr2) {
    let temp = [];
    temp.push(arr1, arr2);
    console.log(temp.join(','))
}

let arr1 = ['a', 'b', 'c']
let arr2 = [1, 2, 3]
join1(arr1, arr2)


// 2. Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
function join2(arr1, arr2) {
    let temp = [];
    for (let i = 0; i < arr1.length; i++) {
        temp.push(arr1[i])
        for (let j = 0; j < arr2.length; j++) {
            if (i === j) {
                temp.push(arr2[j])
            }
        }
    }
    console.log(temp)
}

let arr3 = ['a', 'b', 'c']
let arr4 = [1, 2, 3]
join2(arr3, arr4)

// 3. Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5] → [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a sort.
function join3(arr1, arr2) {
    let temp = [];
    let tempData = temp.concat(arr1, arr2)

    let length = tempData.length;
    for (let i = 0; i < length.length; i++) {
        if (length[i] < length[i + 1]) {
            length[i + 1] = length[i];
            length[i] = length[i + 1];
            
        }
    }

    // for (let k = 0; k <temp.length; j++)

    console.log(tempData)
}
let arr5 = [2, 7, 5]
let arr6 = [1, 4, 3]
join3(arr5, arr6)

// 4. Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding 'ay'. "The quick brown fox" becomes "Hetay uickqay rownbay oxfay".
function sra(string) {
    //split
    let temp = [];
    let word = "";
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

    // first to end
    for (let j = 0; j < temp.length; j++) {
        let reverse = "";
        for (let k = 1; k < temp[j].length; k++) {
            temp[j][0] = temp[j][k]
            temp[j][k] = temp[j][0]
            reverse += temp[j][k]
        }
        temp[j] = reverse + temp[j][0] + 'ay'
        reverse = temp[j]
    }
    let tempData = temp.join(' ').charAt(0).toUpperCase() + temp.join(' ').slice(1).toLowerCase()
    console.log(tempData)
}

let string1 = "The quick brown fox";
sra(string1)