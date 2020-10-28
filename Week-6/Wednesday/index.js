const express = require('express');
const app = express ();
require('dotenv').config()

const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose')
const errorHandler = require('./middlewares/errorHandling')
const router = require('./routes')

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router
app.use(router);
app.use(errorHandler);
mongoose.connect('mongodb://localhost/learn_mongo', {useNewUrlParser: true, useUnifiedTopology : true})
.then(() => {
    console.log("MongoDB is connected.");
})
.catch(error=> {
    console.log(error)
})

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})