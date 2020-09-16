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
function Split(string){
    var temp =[];
    var word ="";
    for (let i=0; i<string.length; i++){
        if(string[i] !== " "){
            word += string[i];
        } else {
            temp.push(word);
            word = "";
        }
        if (i === string.length - 1){
            temp.push(word);
        }
    }
    console.log(temp)
}
    // Using While
   // function maxWordLength(){
        
  //  }
    
    // Test Case
//maxWordLength(string); //Lorem


//5. Count the vowel
//Count the vowel and turn into object
/**
 * PEMETAAN MASALAH
 * 1. Jabarkan seluruh karater alpabet.
 * 2. Loop karakter untuk mencari vowel pada alpabet
 * 3. Jika ketemu dengan spasi, hilangkan.
 * 4. Setiap vowel tertentu, buat penampungnya dan hitung jumlahnya (++)
 * 
 */
// function vowelsObject(apaja){
        
// }

// function countVoewl(apaja){
    
//}

//Test Case
// vowelsObject("rum raisin chocolate ice cream");
/*
    {
        a : 3,
        i : 3,
        u : 1,
        e : 3,
        o : 2
    }
*/
