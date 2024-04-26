let path = require("path");
let express = require("express");

//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
let router = express.Router();

//request is info sending to server from client.
//response is info sending to client from server.


router.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
});


var imgsLeft = [1, 2, 3, 4, 5, 6, 7];

var answers = [];


const myDatabase = require('./myDatabase');
let db = new myDatabase();

const Data = require('./Data');

var imageIndex = 0;
var Score = 0;

var infoList = [{"name":"Earth.jpg"},{"name":"Jupiter.jpg"},
    {"name":"Mars.jpg"},{"name":"Mercury.jpg"},{"name":"Neptune.jpg"},
    {"name":"Saturn.jpg"},{"name":"Uranus.jpg"},{"name":"Venus.jpg"}];


router.get('/request', function(req, res){
    if (req.query.index < 0) {
        if (imgsLeft.length > 0)
        {
            var index = Math.floor(Math.random()*(imgsLeft.length));
            img = imgsLeft[index];
            imageIndex = img;
            imgsLeft.splice(index, 1);
            //console.log(imgsLeft);
            res.json(infoList[img]);
        }
        else if (imgsLeft.length >= 0) {
            console.log("good 3");
            var Correct = 0;

            for(let i=0; i<answers.length; i++) {
                console.log("good 15");
                Correct += answers[i].points;
                console.log("Score = ");
                console.log(Correct);
            }

            if (Correct == null) {
                console.log("good 4");
                res.json({error:true});
            }   

            else {
                console.log("good 5");
                console.log(Correct);

                var trueScore = Correct/2;

                console.log("True score = ");
                console.log(trueScore);

                res.json({error:false,points:trueScore});
            }    

    
            console.log("DONE");
        }
    } 
    else {
        res.json(infoList[req.query.index]);
    }
});



router.post('/create', function(req, res){


    let index = imageIndex;
    let name = req.body.name;
    let points = Score;

    console.log("good 6");

    if (name == "") {
        console.log("good 7");
        res.json({error:true});
        return;
    }

    let obj = new Data(index, name, points);

    let valAnswer = db.postData(obj);

    answers = valAnswer;

    console.log("valAnswer = ");
    console.log(valAnswer);

    console.log("Answers = ");
    console.log(answers);

    if (valAnswer) {
        console.log("good 8");
        res.json({error:false});
    }    
    else {
        console.log("good 9");
        res.json({error:true});
    }    

});



router.get('/read', function(req, res){
    console.log("good 1");

    let hintval = db.getData(imageIndex);
    if (hintval == null) {
        //console.log("good 4");
        res.json({error:true});
    }    
    else {
        //console.log("good 5");
        //console.log(hintval);
        res.json(hintval);
    }    

    
});

/*
router.get('/win', function(req, res){
    
    console.log("good 3");


    for(i=0; i<imageIndex.length; i++) {
        let winVal = db.getData(i);
        console.log("Score = ");
        console.log(winVal);
    }
    
    
    if (winVal == null) {
        //console.log("good 4");
        res.json({error:true});
    }    
    else {
        //console.log("good 5");
        //console.log(hintval);
        res.json({error:false,points:winVal.points});
    }    
});
*/




module.exports = router;

 