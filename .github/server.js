const express =  require("express");
const bodyParser = require("body-parser");
//any new modules created will procied this line
............

const express = express();

app.use(express.static("public");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs);

//objects being redirected from the server will be listed here.
............

app.listen(3000, (req,req) =>{
	console.log('app listening on port 3000');
});
