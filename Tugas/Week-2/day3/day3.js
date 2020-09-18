//DOM Exercise
//Background
// Mr. James decided to make a notes about his Income and Expenses every month.

// Main Task
// Make Income and Expenses Apps

// Task 1 : Prepare variable
// Prepare global variable for data
    //Contains object
    //Example
var posts = [
    id = 1,
    title = "Salary Income",
    type = "income",
    total = 5000000,
]

readData();
function submitHandler(){
    //get the DOM
    var postValue = document.getElementById('add-post').value;
    console.log(postValue);

    addData(postValue);
    readData();
    return false;
}

function readData(){
    //get DOM
    var postData = document.getElementById('add-post');
    postData.innerHTML = "";

    //Loop untk ambil data
    for (let i=0; i<posts.length; i++){
        let postHTML =`
        <p>${posts[i].id}.${posts[i].title}</p>
        `
        postData.insertAdjacentHTML('beforeend', postHTML)
    }
}

// Task 2 : getData
// Code getData function to read the data from the global variable
function getData(posts){
        //Code here
    if (posts === 0){
        console.log("The post is empty. Please input something.");
    } else {
        console.log("Here is your update post: ", posts);
    }
}


// Task 3 : addData
// User can input the data
function addData(data){
        //Code here
    var addPost = postAdded(data)
    posts.push(addPost);
    console.log('"${data}" has been added!');
}

function postAdded(data){
    var temp = {
        id : generateId() + 1,
        title : data
    }

    return temp;
}

function generateId(){
    var lengthPost = posts.length;
    var id = posts[lengthTask-1].id;

    return id;
}



// Task 4 : deleteData
// User can delete post
function deleteData(post){
    if(posts.length===0){
        console.log("The posts is empty and there is nothing to delete. Please input something so you can delete it later.");
    } else {
        var post;
        for (let i=0; i<posts.length; i++){
            if(posts[i]===post) {
                return true;
                break;
            } else {
                return false;
            }
        }
        if (post){
            var temp = [];
            for (let i=0; i<posts.length; i++){
                if(posts[i] !== post) {
                    temp.push(posts[i])
                }
            }
            posts = temp
        } else {
            console.log("Please input the correct posts. Thank you.")
        }
    }
}
// addData(2, 'Salary Income', "income", 2500000)
// addData(3, 'Salary Income', "income", 500000)

// deleteData(2)


// Task 5 : Split the files
// Developer can split the files (module.exports and require)