function disemvowel(str) {
    //make temp string
    let temp = '';
    //call all the vowel
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    vowels.forEach(element => {
        element
    });
    //loop the string
    for (let i = 0; i < str.length; i++) {
        let letter = true;
        //loop the vowel
        for (let j = 0; j < vowels.length; j++) {
            //if string[i] is vowel[j], letter is false. break, so it wont go to next string[i+1]
            if (str[i] == vowels[j]) {
                letter = false;
                break;
            }
        }
        //letter is true, push string [i] to temp
        if (letter) {
            temp += str[i];
        }
    }
    //change string to temp then call out string
    str = temp;
    return str;
}
console.log(disemvowel("This website is for losers LOL!"))
