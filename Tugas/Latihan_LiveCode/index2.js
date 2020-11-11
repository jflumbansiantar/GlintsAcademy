function disemvowel(str) {
    let flag = '';
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    vowels.forEach(element => {
        element
    });
    for (let i = 0; i < str.length; i++) {
        let letter = true;
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] == vowels[j]) {
                letter = false;
                break;
            }
        }
        if (letter) {
            flag += str[i];
        }
    }
    str = flag;
    return str;
    // console.log(flag);
    // return vowels;
}

console.log(disemvowel("This website is for losers LOL!"))
