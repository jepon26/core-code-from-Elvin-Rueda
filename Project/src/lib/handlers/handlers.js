const Express = require("express");
const { getDBHandler } = require("../lib");
const RequestHandler = Express.Router();



//Get to-do
RequestHandler.get("/to-dos", async (request, response) => {
    try {
        const dbHandler = await getDBHandler();    
        
        const todos = await dbHandler.all("SELECT * FROM todos");
        await dbHandler.close();

        if (!todos || !todos.length){
            return response.status(404).send({message: "To Dos Not Found"}).end();
        }
        
        response.send({ todos });
    }
    catch (error) {

        response.status(500).send({
            error: `Error trying to get the to do:`,
            errorInfo: error.message,
        });
        }
});


//Create to-do
RequestHandler.post("/to-dos", async (request, response) => {
    try {
        
        const { title, description, isDone: is_done } = request.body;

        const dbHandler = await getDBHandler();
        
        const newTodo = await dbHandler.run(`
            INSERT INTO todos (title, description, is_done)
            VALUES (
                '${title}',
                '${description}',
                '${is_done}'
            )
        `);

        await dbHandler.close();

        response.send({newTodo: {title, description, is_done, ...newTodo}});
    } 
    
    catch (error) {
        response.status(500).send({
            error: `Error trying to create a new to do:`,
            errorInfo: error.message,
        });
    }
});




//Edit to-do
RequestHandler.patch("/to-dos/:id?", async (request, response) => {
    try {
        const todoId = request.params.id;
        const dbHandler = await getDBHandler();
        const { title, description, isDone: is_done } = request.body;
        
        const todoToUpdate = await dbHandler.get(
            "SELECT * FROM todos WHERE id = ?",
            todoId
        );

        await dbHandler.run(
            `UPDATE todos SET title = ?, description = ?, is_done = ?
            WHERE id = ?`,
            title || todoToUpdate.title,
            description || todoToUpdate.description,
            is_done !== undefined ? is_done : todoToUpdate.is_done,
            todoId
        );

        const updatedTodo = await dbHandler.get(
            "SELECT * FROM todos WHERE id = ?",
            todoId
        );

        await dbHandler.close();

        response.send({ updatedTodo });
    }

    catch (error) {
        response.status(500).send({
            error: `Error trying to update to do:`,
            errorInfo: error.message,
        });
    }
});


//Delet to-do
RequestHandler.delete("/to-dos/:id", async (request, response) => {
    try {
        const todoId = request.params.id;
        const dbHandler = await getDBHandler();

        const deletedTodo = await dbHandler.run(
            "DELETE FROM todos WHERE id = ?",
            todoId
        );

        await dbHandler.close();

        response.send({ todoRemoved: {...deletedTodo}});
        
    } 
    
    catch (error) {
        response.status(500).send({
            error: `Error trying to delete to do :`,
            errorInfo: error.message,
        });
    }
});


module.exports = RequestHandler;