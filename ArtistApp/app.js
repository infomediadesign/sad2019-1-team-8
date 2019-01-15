var express = require("express"),
     app = express(),
     bodyParser = require("body-parser")
     // mongoose = require("mongoose") 
app.use(bodyParser.urlencoded({extended: true}));

//app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs");
// mongoose.connect("mongodb://localhost:27017/artist");

app.get("/", function(req,res){
    res.render("landing");    
});

app.get("/authentication", function(req,res){
	res.render("authentication");
});






app.listen(7000, function(){
   console.log("Server Started"); 
});