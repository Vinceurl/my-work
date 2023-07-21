const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
import account from '/models/accounts'
import profiles from '/models/profiles/'
import register from '/models/register'

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
})

.post(function (req,res){
  const newAccount = new account({
    Firstname: req.body.FirstName,
    Lastname : req.body.Lastname,
    Email    : req.body.Email,
    DOB      : req.body.DOB,
    Username : req.body.Username,
    Password : req.body.Password,
    confirmPassword : req.body.confirmPassword
  })

  const accnt = req.body.newAccount
  newAccount.pusch(accnt),
  res.render('/views/profile.ejs')
  
})

app.listen(3000, (req, res) => {
  console.log("app listeing on port 3000")
});