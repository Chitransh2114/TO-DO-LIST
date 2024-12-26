
// import model

const Todo = require("../models/todo");

// define route handler

exports.createTodo = async(req , res) => {
    try {
        // extract title and description from the request body
        const {title , description} = req.body;
        // create new todo object and insert it in database
        const response = await Todo.create({title,description})
        // send a json response with succesful flag
        res.status(200).json({
            success: true,
            data : response,
            message : 'Entry created succesfully'
        })

    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data: "internal error",
            message : err.message,
        })

    }
}