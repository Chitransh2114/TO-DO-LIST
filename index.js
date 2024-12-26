
// instanciate 
const express = require('express');
const app = express();

// load config load ho env file se

require('dotenv').config;
const PORT = process.env.PORT || 5000 ;

// need a middlevare to pass json request body 

app.use(express.json());

// import routes for todo api

const todoroutes = require("./routes/todos");

// mound the todo api routes 
app.use("/api/v1" , todoroutes);

// start the server

app.listen(PORT , () =>{
    console.log(`server is started succesfully at ${PORT}`);
})

// conect to the databases

const dbconnect = require("./config/database");
dbconnect();

// default route 

app.get('/' , (req,res) => {
    res.send(`<h1> this is homepage babe </h1>`);
})