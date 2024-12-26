// import the model

const { SchemaTypeOptions } = require("mongoose");
const Todo = require("../models/todo");

exports.getTodo = async(req , res) => {
    try {
        // fetch all toto items from databse
        const todos = await Todo.find({});

        // response
        res.status(200).json({
            success:true,
            data:todos,
            message:"entire todos are fetched successfully",
        })
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(600).json({
            success: false,
            data: "INternal server error",
            message : err.message,
        })

    }
}

exports.getTodoById = async(req , res) => {
    try{
        // fetch item by id
        const id =  req.params.id ;
        const todo = await Todo.findById({_id : id});

        if(!todo) {
            return res.status(404).json({
                success:false,
                messsage:"Dtat is not found"
            })
        }

        res.status(200).json({
            succes:true,
            data:todo,
            message:`the data for ${id} is found succesfully`,
        })
    }
    catch(err){

        console.error(err);
        console.log(err);
        res.status(600).json({
            success: false,
            data: "INternal server error",
            message : err.message,
        })
    }


}