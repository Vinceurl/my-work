const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//define the express app
const app = express();

//set up public routing
app.use(express.static("public"));
//set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
//set the view port routs to ejs layouts
app.set("view engine", "ejs");
//set up data base connection
mongoose.connect("mongoDB:logalhost:27017/ruvantDB", { UseNewUrlParser: true });
const Schema = mongoose.Schema;
const ruvantRegSchema = new Schema({
  FirstName: string,
  LastName: string,
  DOB: string,
  Email: string,
  Userid: string,
  PassWord: string,
});
const ruvant = mongoose.model("ruvant", ruvantRegSchema);

app.get("/", (req, res) => {});
app.post();

app.listen(300, (req, res) => {
  console.log("app listeing on port 3000");
});
