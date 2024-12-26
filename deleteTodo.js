
const Todo = require("../models/todo");

// define route handler

exports.deleteTodo = async(req , res) => {
    try {
        
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);
        
        res.json({
            success:true,
            message:"TODO deleted",
        })
        }

    
    
        catch(err) {
            console.error(err);
            console.log(err);
            res.status(600).json({
                success: false,
                data: "error in deleting the fetched data",
                message : err.message,
            })
    
        }
        

    }
