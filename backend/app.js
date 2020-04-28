const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config()

const app = express(); 
const PORT = process.env.PORT || 3001 //use port given by backend hosting service or use default 3001 
//process.env will be given automatically by hosting service when app is placed into production

const carsRouter = require('./routes/cars/cars');
const usersRouter = require('./routes/users/users');
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/cars', carsRouter);
app.use('/users', usersRouter)

app.get("/", (req,res,next) => {
    res.json({
        greeting: "Hello World"
    })
})

app.use((err, req, res, next) => {
    res.status(500).json({
        err
    })
})

app.listen(PORT, () => console.log("Listening"));


//xcode-select --install
//which heroku


//Heroku - used for Fullstack Apps with Backend
//Netlify & Surge - Specialize in Static Websites (React)

