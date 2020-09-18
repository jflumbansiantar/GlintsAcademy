/**
 * Factory Class for THE AGRIPPA
 */
class Barrack {
    //properties for all
    constructor (barrack){
        this.barrack = barrack || [];
    }
    //method
    // tempBarrack = {
    //     knight: [],
    //     spearman: [],
    //     archer: [],
    // } 
    insertArmy(army){
        this.barrack.push(army);
    }
    summon() {
        console.log(this.barrack);
    }
    // disband(name){
    //     for(let i=0; i<this.barrack.length; i++){
    //         if(this.barrack[i].name === name){
    //             this.barrack.splice(i,1);
    //         }
    //     }
    // }
    stat() {
        console.log(`=========Here is your barrack status=========`);
        console.log(this.barrack);
        this.barrack.forEach(element => {
            return `${element.type} `            
        });
    }
}

module.exports = {
    Barrack,
}