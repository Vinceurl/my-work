const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { create } = require("domain");
const { profile } = require("console");

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

//schemas

//models



//build api structure
app.route('/register')

.get(function (req, res){
  accounts.findOne({account: req.params.account}, function(err, accountfount){
    if(!err){
      res.send(accountfount);
    }else{
      res.send(err)
    }
  })

})

.put(function (req, res){
  profile.update(
    {UserName: req.body.UserName},
    {emwil: req.body.email},
    {phone: req.body.phone}
  )
});

app.listen(3000, (req, res) => {
  console.log("app listeing on port 3000")
});