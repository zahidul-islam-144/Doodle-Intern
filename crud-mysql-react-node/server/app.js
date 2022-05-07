const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// middlewares
app.use(cors());
app.use(express.json());



/*
--------------  routes --------------
*/

// import routes from routes folder
const studentRouter = require("./routes/studentRoute");

// register route in the app
app.use('/students', studentRouter);


// app exported
module.exports =  app ;