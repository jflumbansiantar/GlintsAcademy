//CHECK ODD OR EVEN NUMBER
function OddEven(a){
    if (a%2===0){
        console.log(`${a} = Odd`)
    } else {
        console.log(`${a} = Even`)
    }
}

// OddEven(5)

//PRINT THE N THE FIRST NUMBERS
function kelipatan(x) {
      for (let i=1; i <= x; i++){
          if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} kelipatan 3 dan 5`);
          }
          else if (i % 3 === 0) {
            console.log(`${i} kelipatan 3`);
          } 
          else if (i % 5 === 0){
            console.log(`${i} kelipatan 5`);
          }
          else {
            console.log(i)
          }
      }
  }


//   kelipatan(15)



//PRINT SEGITIGA
function Segitiga(a) {
    for (let i = 0; i<a; i++){
        var star ="";
        for(let j = 0; j<i+1; j++){
            star += "*";
        }
        console.log(star);
    }
    
}
// Segitiga(5)

//SPLIT WORDS WITHOUT FUNCTION .SPLIT("")
var string = "Lorem ipsum is dummy text"
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
//  Split(string)


//FIND THE FACTORIAL
function Factorial(angka){
    var total = 1;
    var temp = "";
    for (let i=angka; i>0; i--){
        if(i !== 1){
            temp += `${i}.`;
        } else {
            temp += `${i} = `;
        }
        total = total * i;
    }
    console.log(total)
}

Factorial(4)