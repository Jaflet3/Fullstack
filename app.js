const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    const weight = Number(req.body.weight);
    const height = Number(req.body.height);

    const bmi = weight / (height * height);

    res.send("Your BMI is: " + bmi.toFixed(2));
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});