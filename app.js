const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
import users from '/models/users'
import profiles from '/models/profiles'
import registrations from '/models/register'

//define the express app
const app = express();
const port = 8000;

//set up public routing
app.use(express.static("public"));
//set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
//set the view port routs to ejs layouts
app.set("view engine", "ejs");
//set up data base connection
mongoose.connect("mongoDB:logalhost:27017/revantdb", { UseNewUrlParser: true });



//model imports
const userAccounts = users();
const userProfiles = profiles();
const newAccnts = registrations();
//static pagees 
app.get('/Home', (req, res)=>{
  res.render('/home')
});
app.get('/About', (req,res)=>{
  res.render('About')
});
app.get('/Fetures', (req, res)=>{
  res.render('Feures')
});
app.get('/ContactUs', (req, res)=>{
  res.render('ContactUs')
});
//build restful api structure
app.route('/accounts')

.get("/accounts", function (req, res){
  accounts.findOne({account: req.params.account}, function(err, accountfound){
    if(!err){
      res.send(accountfound);
    }else{
      res.send(err)
    }
  })

})

.put("/accounts",function (req, res){
    const updateAccount = account.update(
    {UserName: req.body.UserName},
    {emwil: req.body.email},
    {phone: req.body.phone}
  )

  updateAccount.push(userProfiles)
  res.redirect('profiles')
})

.post("/accounts", function (req,res){
  const newAccount = new register({
    Firstname: req.body.FirstName,
    Lastname : req.body.Lastname,
    Email    : req.body.Email,
    DOB      : req.body.DOB,
    Username : req.body.Username,
    Password : req.body.Password,
    confirmPassword : req.body.confirmPassword
  })
// inputs will be redirected to model imports
  newAccount.push(userAccounts, userProfiles, newAccnts),
  res.redirect('/profile')
  
})

.delete("/accounts", function(req, res){
  account.findbyEmailandDelete({
      Email : req.body.Email,
      Password: req.bosy.Password
  })
})
app.listen(port, (req, res) => {
  console.log("app listeing on port 3000")
});