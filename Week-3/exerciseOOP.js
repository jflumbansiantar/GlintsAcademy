//Membuat Class Student

class Student {
    //constructor
    constructor(name, age, dateOfBirth, gender, studentID, hobbies) {
        //Properties
        this._name = name; //private
        this._age = age; //private
        this._dateOfBirth = dateOfBirth; //private
        this._studentID = studentID; //private
        this._gender = gender; //private
        this.hobbies = hobbies || []; //public
    }
    //getter
    get name() {
        return this._name; //get the NAME
    }
    get age() {
        return this._age; //get the AGE
    }
    get dateOfBirth() {
        return this._dateOfBirth; //get the DATE OF BIRTH
    }
    get studentID() {
        return this._studentID; //get the STUDENT ID
    }
    get gender() {
        return this._gender; //get the GENDER
    }

    //setter
    set setName(name) {
        this._name = name; //calling the NAME
    }
    set setAge(age) {
        this._age = age; //calling the AGE
    }
    set setDateOfBirth(dateOfBirth) {
        this._dateOfBirth = dateOfBirth; //calling the DATE OF BIRTH
    }
    set setStudentID(studentID) {
        this._studentID = studentID; //calling the STUDENT ID
    }
    set setGender(gender) {
        this._gender = gender; //calling the GENDER
    }

    //method
    // getData(){
    //     console.log(); //calling all the data name, age, etc
    // }
    introduce() {
        console.log(`My name is ${name} and I am ${age} years old.`)
    }
    addHobby(hobbies) {
        this.hobbies.push(hobbies);
        hobbies++;
        console.log(`My hobbies are ${hobbies}`)
    }
    removeHobby(hobby) {
        this.hobbies.pop(hobby);
        return this.hobbies;
    }

}

let Student1 = new Student("Cindy", 28, "Sept 9th, 1992", "Female", "C28F920909", ["Singing", "Reading"]);

// Student1.addHobby("laughing")
// console.log(Student1)
// Student1.removeHobby();
// console.log(Student1)


//Pillars of OOP
//Inheritance

class Developer {
    //constructor
    constructor(name, background) {
        this.name = name;
        this.background = background;
    }
    introduce() {
        console.log(`Hellos, this is ${this.name}`);
    }
    history() {
        console.log(`Back in college, I was studying ${this.background}`)
    }
}

class BackEnd extends Developer {
    //constructor
    constructor(name, background, programmingLanguage) {
        super(name, background);
        this.programmingLanguage = programmingLanguage;
    }
    introduce() {
        super.introduce();
        console.log(`I learn ${this.programmingLanguage} this day.`)
    }
    code() {
        console.log(
            "Let's learning together",
            this.programmingLanguage[
            Math.floor(Math.random() * this.programmingLanguage.length)
            ]
        )
    }
}

//Overriding Method in Inheritance
class FrontEnd extends Developer {
    //constructor
    constructor(name, background, programmingLanguage) {
        super(name, background);
        this.programmingLanguage = programmingLanguage;
    }
    //Override the introduce Method
    introduce() {
        super.introduce();
        console.log(`I can write a programming using these languages ${this.programmingLanguage}`)
    }
    code() {
        console.log(
            "What are you learning right now?",
            this.programmingLanguage[
            Math.floor(Math.random() * this.programmingLanguage.length)
            ]
        )
    }
}

//Overloading in Inheritance
class MobileDev extends Developer {
    //constructor
    constructor(name, background, programmingLanguage) {
        super(name, background);
        this.programmingLanguage = programmingLanguage;
    }
    //overloading
    introduce(withDetail) {
        super.introduce();
        if (withDetail) {
            console.log(`Also, I learned about ${this.programmingLanguage}`)
        }
    }
    code() {
        console.log(
            "What are you learning right now?",
            this.programmingLanguage[
            Math.floor(Math.random() * this.programmingLanguage.length)
            ]
        )
    }
}



let Karin = new Developer("Karin Kuchiki", "Dancing");
// Karin.introduce()
// Karin.history()

let Karin1 = new BackEnd("Karin Kuchiki", "Dancing", ["JS", "Julia", "R", "Python"]);
// Karin1.introduce();
// Karin1.code();

let Ichigo = new FrontEnd("Ichigo Kurosaki", "Grim Ripper", ["ReactJs", "Javascript", "Python", "Golang"])
// Ichigo.introduce();
// Ichigo.code();

let Yuzu = new MobileDev("Yuzu Hitsu", "Chef", ["Android", "ASP.NET", "WebKit", "ReactNative"]);
// Yuzu.introduce(withDetail)
// Yuzu.code();

//Encapsulation
// class Developers {
//     // static isLivingInOffice = true;
//     // static group = "No life";

//     //constructor
//     constructor(name, isLivingInOffice) {
//         this.name = name;
//         // this.background = background;
//         this.isLivingInOffice = isLivingInOffice;
//     }
//     introduce() {
//         console.log(`Hellos, this is ${this.name} and I'm living ${this.isLivingInOffice ? "my whole life" : "my lief"}`);
//     }
//     // history() {
//     //     console.log(`Back in college, I was studying ${this.background}`)
//     // }
//     checkIfWork() {
//         if (!this.isLivingInOffice) {
//             console.log(`I have a home!`);
//             return false;
//         }
//     }
//     home() {
//         console.log("I'm going back to home some time")
//     }
//     work() {
//         if (!this.checkIfWork()) {
//             return;
//         }
//         this.home()
//     }
// }

class Human {
  
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }
  
    introduce() {
      console.log(`Hi, my name is ${this.name}`)
    }
  }
  
  // Create a child class from Person
  class Programmer extends Person {
  
    constructor(name, address, programmingLanguages) {
      super(name, address) // Call the super/parent class constructor, in this case Person.constructor;
      this.programmingLanguages = programmingLanguages;
    }
  
    // Overload the Introduce Method
    introduce(withDetail) {
      super.introduce(); // Call the super class introduce instance method.
      if (withDetail) console.log(`I can write a programming using these languages`, this.programmingLanguages);
    }
  
    code() {
      console.log(
        "Code some",
        this.programmingLanguages[
          Math.floor(Math.random * this.programmingLanguages.length)
        ]
      )
    }
  }
  

let Hitsugaya = new Human("Hitsugaya Android", true)
console.log(Hitsugaya.work())