const mongoose = require("mongoose");
const { baseUrl, port, dbString } = require("../utility/config");

//Set up default mongoose connection
var mongoDB = dbString;
mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.on("open", console.log.bind(console, "MongoDB connection success:"));
