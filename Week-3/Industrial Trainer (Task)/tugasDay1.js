//COMPULSARY
var books = [
    {title: "Javascript for Dummy",
     author: "Don Norman",
     hasRead: false
    },
    {title: "Python for Data Science",
    author: "Brian Christian",
    hasRead: true
    }];
    
    
  function showBooks() {
      var result ={
          title: [],
          author: []
      };
      for (let i = 0; i < books.length; i++){
          result.title.push(books[i].title);
          result.author.push(books[i].author)        
      }
      console.log(result);
  }

  //showBooks(books)

// Should return an Object
//   { title : ["Javascript for Dummy","Python for Data Science"],
//   author : ["Don norman", "Brian Christian"] }

//ADVANCED
var books = [
    {title: "Javascript for Dummy",
     author: "Don Norman",
     hasRead: false
    },
    {title: "Python for Data Science",
    author: "Brian Christian",
    hasRead: true
    },
    {title: "Java Algorithm and Data Structures",
    author: "John Carlo",
    hasRead: true
    },
    {title: "Java for Professional",
    author: "Michael Kick",
    hasRead: false
    }];
    
    
    
  function checkBooks(books) {
      var result ={
          done: [],
          undone: []
      }
      for (let i = 0; i < books.length; i++){
          if(books[i].hasRead === true){
              result.done.push[];
          } else {
              result.undone.push[(books[i])];
          }
        }
        console.log(result);
        // result.title.push(books[i].title);
        // result.author.push(books[i].author)        
  }

  checkBooks(books)
  
  // Should return
  // {
  //   done: [
  //   {
  //     title: "Python for Data Science",
  //     author: "Brian Christian",
  //     hasRead: true
  //   },
  //   {
  //     title: "Java Algorithm and Data Structures",
  //     author: "John Carlo",
  //     hasRead: true
  //   }
  //   ],
  //   undone: [
  //   {
  //     title: "Java for Professional",
  //     author: "Michael Kick",
  //     hasRead: false
  //   },
  //   {
  //     title: "Javascript for Dummy",
  //     author: "Don Norman",
  //     hasRead: false
  //   }
  //   ]
  // }