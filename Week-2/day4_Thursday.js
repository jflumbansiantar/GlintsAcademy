//EXERCISE FOR THURSDAY WEEK 2
//1. Convert Minute to Time
function convertMinute(minute){
    //tampung angka menit
    var min = minute;
    //cari berapa jam menit yang diberikan
    var hour = (min / 60);
    //bulatkan ke bawah jam yang didapat
    var roundHour = Math.floor(hour);
    //cari berapa menit yang tersisa
    var mins = (hour - roundHour) * 60;
    //bulatkan menit yang diperoleh dari atas
    var roundMins = Math.round(mins);
    //tulis hasil yang didapat
    return `${roundHour}:${roundMins}`;
}

//Test Case
// console.log(convertMinute(100)) //1:40
// console.log(convertMinute(185)) //3:05


//2. Sort the Letters
function sortLetter(words){
    //words masuk ke function
    var letter = words.split('');
    //words diubah ke bentuk letter menjadi array
    var temp; //penampung letter ketika diurutkan nanti
    //cek setiap huruf/letter
    for (let i = 0; i < letter.length; i++){
        for (let j = i + 1; j < letter.length; j++){
            if( letter[i] > letter[j]){
                temp = letter[i];
                letter [i] = letter[j];
                letter[j] = temp;
            }
        }
    }
    console.log(letter.join(''));
}

//Test Case
// sortLetter("hello"); //ehllo


//3. A random color
 //Global
 var colors = ['red','green','blue']
 function randomColor(){
    var random = Math.floor(Math.random() * colors.length);
    console.log(colors[random]);
 }
 
 //Test Case
//randomColor(); //Output -> Color : red


//4. Split words without function .split(" ") and find the max
function maxWordLength(){
    let maxWord = [];
    let nextWord = [];
    string += "";
    for(let i=0; i<=string.length; i++){
        if (string[i] === " "){
            if(nextWord.length > maxWord.length){
                maxWord = nextWord;
            }
            i++;
            nextWord = "";
        }
        nextWord += string[i];
    }
    console.log(maxWord);
}

// let string = "Nanti kita cerita tentang hari ini"
// maxWordLength(string);



//5. Count the vowel
//Count the vowel and turn into object
function vowelsObject(string){
    let temp = []
    temp.a = countVowel(string,"a")
    temp.i = countVowel(string,"i")
    temp.u = countVowel(string,"u")
    temp.e = countVowel(string,"e")
    temp.o = countVowel(string,"o")
    console.log(temp);
}
    
function vowelsObject (string,char){
    let vowel = 0;
    for (let i = 0; i < string.length; i++) {
        if(string[i] === char){
            vowel++;
        }        
    }
    return vowel;
}

//Test Case
vowelsObject("Kangen kerja di lab.");

