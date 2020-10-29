let where = ["sheep", "wolf", "sheep", "sheep", "wolf", "wolf", "sheep", "sheep", "sheep"] //I am here
let where1 = ["sheep", "sheep", "sheep", "wolf", "sheep"] //I am here
let where2 = ["sheep", "sheep", "wolf"] //I am here
let where3 = ["sheep", "wolf", "sheep"] //I am here
let where4 = ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"] //I am here

/**
 * Algoritma
 * 1. Loop semua kata
 * 2. Ketika ketemu kata 'sheep', sheeps bertambah;
 * 3. Ketika ketemu kata 'wolf', wolfs bertambah;
 * 
 * Pseudocode
 * For let i = 0, i <= panjang array, i++;
 * if i = sheep ; sheeps ++ ; sheeps push
 * if i = wolf; wolfs ++ ; wolfs push
 */
// function warnTheSheep(data) {
//     let sheep = 0;
//     for (let i = data.length - 1; i >= 0; i--) {
//         sheep++;
//         // console.log(sheeps)
//         if (data[data.length - 1] === "wolf") {
//             return "Fuck off, wolf!!!";
//         } else if (data[i] === "wolf") {
//             return `Oi! Sheep number ${sheep - 1}! You should run from the wolf!`;
//         }
//     }
//     console.log(sheep)
// }
// console.log(warnTheSheep(where));
// console.log(warnTheSheep(where1));
// console.log(warnTheSheep(where2));
// console.log(warnTheSheep(where3));
// console.log(warnTheSheep(where4));

function countTheSheep(data) {
    let sheeps = 0;
    for (let i = 0; i <= data.length; i++){
        let animal = data[i];
        if (animal === "sheep"){
            sheeps++;
        }
    }
    return `We have ${sheeps} sheeps.`;
}
// console.log(countTheSheep(where));
// console.log(countTheSheep(where1));
// console.log(countTheSheep(where2));
// console.log(countTheSheep(where3));
// console.log(countTheSheep(where4));

function countTheWolf(data) {
    let wolfs = 0;
    for (let i = 0; i <= data.length; i++){
        let animal = data[i];
        if (animal === "wolf"){
            wolfs++;
        }
    }
    if(wolfs > 1) {
        return `Why we have ${wolfs} wolfs?!`;
    } else {
        return `Why we have ${wolfs} wolf?!`
    }
    
}
// console.log(countTheWolf(where));
// console.log(countTheWolf(where1));
// console.log(countTheWolf(where2));
// console.log(countTheWolf(where3));
// console.log(countTheWolf(where4));

function countThemAll(data){
    let all ={};
    for (let i = 0; i <data.length; i++){
        let animal = data[i];
        all[animal] = (all[animal] + 1) || 1;
    }
    return all;
}

console.log(countThemAll(where));
console.log(countThemAll(where1));
console.log(countThemAll(where2));
console.log(countThemAll(where3));
console.log(countThemAll(where4));