class Book {
    constructor(title, genre, author, read){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read; //the value should be true and false.
        // this.date = ; //should be put a date (not date 'date', but like date)
    }
}

//Factory class
class Booklist {
    //properties for all
    constructor (booklist){
        this.booklist = booklist || [];
    } 
    insertBook(book){
        this.booklist.push(book);
    }
    finishCurrentBook(){

    }
    stat() {
        console.log(`=========Here is your booklist=========`);
        console.log(this.booklist);
        this.booklist.forEach(element => {
            return `${element.type} `            
        });
    }
}

let nkcthi = new Book("NKCTHI", "Slice of Life", "Marchella", true)
let nkcthiDS = new Book("NKCTHI Dark Side", "Slice of Life", "Marchella", true)
let listOne = new Booklist();
listOne.insertBook(nkcthi)
listOne.insertBook(nkcthiDS)
listOne.stat()

