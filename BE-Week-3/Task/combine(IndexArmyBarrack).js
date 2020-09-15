/**
 * ##AGRIPPA THE STRATEGIST
 * In the western of Europe in old times. There was a strategist known named 
 * Agrippa. His strategy was amazing every single time he made a plan, he always 
 * made the Empire won!. According to the scouts, enemies from the North has made
 * their move to ambush Agrippa beloved nation. This is the time he would prepare
 * the armies and the Barrack.
 * The objectives are very clear! Prepare and then launch! 
 */

class Army {
    //properties for the army
    constructor (name, type, level) {
        this.name = name;
        this.type = type;
        this.level = level || 1;
    }
    //methods
    talk() {
        console.log(`Hi, I'm ${this.name}. I'm a level ${this.level}, ${this.type}.`)
    }
    training() {
        /**
         * TRAINING
         * Set default atau level dasar pada level 1
         * Setiap training, level diUP sebanyak +1(*should be*)
         */
        let randomLevel = Math.ceil(Math.random()*10);
        this.level = this.level + randomLevel;
    
    }
}
/**
 * SubClass for Army Class in index
 */
class Knight extends Army {
    constructor(name, type, level){
        super(name, type, level)
    }
    skillKnigth(){
        /**
         * Knigth Skills
         * level 1 - 3 : Counter attack
         * level 4 - 6 : +Aura blade
         * level 7 - 9 : +One-hand quicken
         * level 10 : Paladin
         */
         //FOR FUN
        let level13 = "Counter attack";
        let level46 = "Aura blade";
        let level79 = "One-hand quicken";
        let level10 = "Paladin";
        if(this.level >= 1 && this.level <=3){
            console.log(`I have one skill called ${level13}.`)
        } // antara 1 - 3
        if(this.level >= 4 && this.level <=6){
            console.log(`I have two skills called ${level13} and ${level46}.`)
        } // antara 4 - 6
        if(this.level >= 7 && this.level <=9){
            console.log(`Another skill have added. I have ${level13}, ${level46} and ${level79}.`)
        } // antara 7 - 9
        if(this.level =10){
            console.log(`Hey, I'm a ${level10}. I can do everything. Let's win the battle!.`)
        } // 10 
    }
}

class Spearman extends Army {
    constructor(name, type, level){
        super(name, type, level)
    }
    skillSpearman(){
        /**
         * Spearman Skills
         * level 1 - 3 : Wind blade
         * level 4 - 6 : +Pierce
         * level 7 - 10 : +Spear mastery 
         */
         //FOR FUN
        let level13 = "Wind spear";
        let level46 = "Pierce";
        let level70 = "Spear mastery";
        if(this.level >= 1 && this.level <=3){
            console.log(`I only have ${level13}. I need to train harder.`)
        } // antara 1 - 3
        if(this.level >= 4 && this.level <=6){
            console.log(`I have two skills now. ${level13} and ${level46}.`)
        } // antara 4 - 6
        if(this.level >= 7 && this.level <=10){
            console.log(`Another skill have added. I have ${level13}, ${level46} and ${level70}.`)
        } // antara 7 - 10
    }
}

class Archer extends Army {
    constructor(name, type, level){
        super(name, type, level)
    }
    skillArcher(){
        /**
         * Archer Skills
         * level 1 - 3 : Arrow
         * level 4 - 6 : Rapid fire
         * level 7 - 10 : Eagle's eye
         */
        //FOR FUN
        let level13 = "Arrow";
        let level46 = "Rapid fire";
        let level70 = "Eagle's eye";
        if(this.level >= 1 && this.level <=3){
            console.log(`The skill is ${level13}.`)
        } // antara 1 - 3
        if(this.level >= 4 && this.level <=6){
            console.log(`${level13} and ${level46}. Not a bad combo, I guess.`)
        } // antara 4 - 6
        if(this.level >= 7 && this.level <=10){
            console.log(`Heck yeah! I have ${level13}, ${level46} anddddd ${level70}!!!!.`)
        } // antara 7 - 10
    }
}


// module.exports = {
//     Army, Knight, Spearman, Archer,
// }

/**
 * Factory Class for THE AGRIPPA
 */
class Barrack {
    //properties for all
    constructor (barrack){
        this.barrack = barrack || [];
    }
    //method
    insertArmy(army){
        this.barrack.push(army);
    }
    summon() {
        console.log(this.barrack);
    }
    disband(){
        for(let i=0; i<this.barrack.length; i++){
            if(this.barrack.length===0){
                return 'Disband the army.'
            } else {
                console.log(this.barrack);
            }
        }
    }
    stat() {
        console.log(`=========Here is your barrack status=========`);
        console.log(this.barrack);
        this.barrack.forEach(element => {
            console.log(`${element.type} `)            
        });
    }
}

// module.exports = {
//     Barrack,
// }

// const armyTemp = require('./army.js');
// const barrackTemp = require('./barrack.js');

let armin = new Archer("Armin", "Spearman", 1)
let barrackOne = new Barrack();
// barrackOne.insertArmy(armin);
// console.log(barrackOne);
barrackOne.stat();
barrackOne.disband()
