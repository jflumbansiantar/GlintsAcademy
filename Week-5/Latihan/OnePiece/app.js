const express = require('express');
const app = express ();
const PORT = 3000;

const router = require('./routes')

//middleware
app.set('view.ejs', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extenden : false}));

//Router
app.use(ruoter);
app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
})
