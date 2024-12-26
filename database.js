
const mongoose = require ('mongoose');
require("dotenv").config(); 

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewurlParser : true,
        useUnifiedTopology : true,
    })
    // this then and catch returns promise 
    .then( () => {
        console.log("db connection is succesful")
    })

    .catch( (error) => {
        console.log("isssue in db connection");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbconnect;