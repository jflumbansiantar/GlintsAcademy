const express = require('express');
const app = express ();
require('dotenv').config()

const PORT = process.env.PORT || 3000;

const errorHandler = require('./middlewares/errorHandling')
const router = require('./routes')

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})