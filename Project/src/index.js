const Express = require("express")
const CorsMiddleware = require("cors");  
const {initializeDB} = require("./lib/index");
const RequestHandler = require ("./handlers/handlers");

const Api = Express();

//For security reasons we need to add cors middleware
Api.use(CorsMiddleware());


//Express.json => return (request, response, next)=>{}
Api.use(Express.json());


//Express.url => return (request, response, next)=>{}
Api.use(Express.urlencoded({ extended: false }));


//localhost:3000/api/v1/to-dos
Api.use("/api/v1", RequestHandler)


Api.listen(3000, () => {
    console.log("API is running!")
  
    initializeDB().then(() => {
      console.log("DATABASE READY");
    });
  });