const express = require("express");
const app = express();
const moongose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended:true }));


moongose.connect("mongodb+srv://tushar:threat_3D%40%23@cluster0.n3oox4e.mongodb.net/Student");

const EmpSchema={
    name : String,
    code : String,
    Location : String,
    
    

}

const Empl = moongose.model("Empl",EmpSchema);
app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req, res){
let newNote = new Empl({
    name : req.body.name,
    code : req.body.code,
    Location : req.body.location,

});
newNote.save();
// res.redirect("/");
});
app.listen(3000 , function () {
    console.log("listening");});
