const express = require('express');
const app = express ();
const PORT = 3000;

const router = require('./routes')

//Middle Ware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(router); //router

// app.get('/', (req, res) =>{
//     res.send("Hello World");
// }
// )

app.listen(PORT, () => {
    console.log(`Server running ad port : ${PORT}`)
}
)