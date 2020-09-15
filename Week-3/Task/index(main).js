/**
 * ##AGRIPPA THE STRATEGIST
 * In the western of Europe in old times. There was a strategist known named 
 * Agrippa. His strategy was amazing every single time he made a plan, he always 
 * made the Empire won!. According to the scouts, enemies from the North has made
 * their move to ambush Agrippa beloved nation. This is the time he would prepare
 * the armies and the Barrack.
 * The objectives are very clear! Prepare and then launch! 
 */


const {Knight, Spearman, Archer} = require('./army.js')
const {Barrack} = require('./barrack.js')

let armin = new Archer("Armin", "Archer", 1);
let jack = new Spearman("Jack", "Spearman", 1);
let levi = new Knight("Levi", "Knigth", 1)

let barrackOne = new Barrack();
barrackOne.insertArmy(armin);
barrackOne.insertArmy(jack);
barrackOne.insertArmy(levi);
console.log(barrackOne,);
barrackOne.stat();
