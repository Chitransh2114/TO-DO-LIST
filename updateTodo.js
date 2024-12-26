
const Todo = require("../models/todo");

// define route handler

exports.updateTodo = async(req , res) => {
    try {
        const {id} = req.params;
        const {title , description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id :id},
            {title , description , updateAt :Date.now()},
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:`the data updated of ${id}`,
        })
        
        }

    
    
        catch(err) {
            console.error(err);
            console.log(err);
            res.status(600).json({
                success: false,
                data: "error in updationg the fetched data",
                message : err.message,
            })
    
        }
        

    }
