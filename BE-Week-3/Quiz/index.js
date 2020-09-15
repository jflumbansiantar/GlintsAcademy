//QUIZ
//Storyline
/**
 * During Summer holiday Madison and her friends decided to go for a camping in west California. 
 * They set a camp, and ignite the Campfire. Campfire is used as a factory to produce the foods. 
 * Because Madison once worked as a Chef, her friends bring Meats and askes Madison to cook. 
 * They bring Beef and Mutton, spices and beverages. And now is time for Madison to cook for them. 
 * Help Madison cook guys!
 */

 class Meat {
     constructor(slot, type, weight){
         this.slot = slot;
         this.type = type;
         this.weight = weight;
     }

 }
 //Cutting the meat
 /**
  * Type of meat number one
  */
 class Beef extends Meat {
     constructor (slot, type, weight){
         super(slot, type, weight)
     }
     maturityStat(){
        let status = ["Rare", "Medium", "Well done"]
        let randomStat = Math.ceil(Math.random()*status.length);
        console.log(status[randomStat]);
     }
     
 }
  /**
  * Type of meat number two
  */
 class Mutton extends Meat {
    constructor (slot, type, weight,){
        super(slot, type, weight)
    }
    maturityStat(){
        let status = ["Rare", "Medium", "Well done"]
        let randomStat = Math.ceil(Math.random()*status.length);
        console.log(status[randomStat]);
     }
 }
/**
 * FACTORY CLASS
 */
class Campfire {
    constructor(){
        this.container = []
        this.fullness = {
            beefs : 0,
            muttons : 0
        }
    }

    grill(meat){
        //code here
        this.container.push(meat);
    }
    eat(steak){
        //code here

    }
}

let beefOne = new Beef (1, "beef", 500);
let muttonOne = new Mutton (1, "mutton", 200);
beefOne.maturityStat()
muttonOne.maturityStat()

let campOne = new Campfire ()
campOne.grill(beefOne)
campOne.grill(muttonOne)
campOne.container()