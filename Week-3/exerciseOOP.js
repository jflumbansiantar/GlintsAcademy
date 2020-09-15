//Membuat Class Student

class Student {
    //constructor
    constructor(name, age, dateOfBirth, gender, studentID, hobbies){
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
    introduce(){
        console.log(`My name is ${name} and I am ${age} years old.`)
    }
    addHobby(hobbies){
        this.hobbies.push(hobbies);
        hobbies++;
        console.log(`My hobbies are ${hobbies}`)
    }
    removeHobby(hobby){
        this.hobbies.pop(hobby);
        return this.hobbies;
    }
  
}

let Student1 = new Student ("Cindy", 28, "Sept 9th, 1992", "Female", "C28F920909", ["Singing", "Reading"]);

Student1.addHobby("laughing")
console.log(Student1)
Student1.removeHobby();
console.log(Student1)