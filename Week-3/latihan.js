/**
 * THE CAT A virtual cat that is so much nicer than ones with fur.
 * Sassy cat =_=
 */
class Cat {
    constructor(name, tired, hungry, lonely, happy){
        this.name = name;
        this.tiredness = tired;
        this.hunger = hungry;
        this.loneliness = lonely;
        this.happines = happy;
    }
    //method
    sleep(){
        if(this.tiredness<=2){
            console.log("Let me sleep, human!")
        }
        if(this.tiredness === 3 || this.tiredness === 4){
            console.log("Not too tired, but okay. I gonna laze around.")
        }
        if(this.tiredness === 5){
            console.log("I am energic. Thank you!")
        }
    }
    feed(){
        if(this.hunger<=2){
            console.log("Feed me, human!")
        }
        if(this.hunger === 3 || this.hunger === 4){
            console.log("I am not that hungry. Thank you!")
        }
        if(this.hunger === 5){
            console.log("I am stuffed! Feed me later!")
        }
    }
    pet(){
        if(this.loneliness <= 2){
            console.log("Pet me! I am lonely.")
        }
        if(this.loneliness === 3 && this.loneliness === 4){
            console.log("Let me, will you?!")
        }
        if(this.loneliness === 5){
            console.log("Thanks for the pet, I guess.")
        }
    }
}


let mao = new Cat ("Mao", 3, 2, 1, 5);
mao.sleep();
mao.pet();
mao.feed();

/**
 * Let's make an army of cats
 */
class ArmyCat {
    constructor(cats){
        this.army = army || [];
    }
    insertCat(cat){

    }
    summonCat(cat){

    }
    findTheCat(){
        
    }
}
 //or not...
