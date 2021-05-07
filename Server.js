const express = require('express');
const path = require('path');
const app = express();

const port = 9000;

app.use(express.static(path.join(__dirname,'build')));


const validExercises = {
    "chest":["declinePress","benchPress","cableCross","inclineDumbellPress"],
    "back":["bentoverRows","reverseGrip","cableRow","backExtension"],
    "arms":["closeGripBench","dumbellCurl","tricepPulldown","ezBarCurl"],
    "shoulders":["seatedDumbell","bentoverDelt","sideLateralRaise","uprightRows"],
    "legs-abs":["crunches","squats","legRaises","calfRaises"]
}


app.get('/:category', function(req,res,next){
    var category = req.params.category;
    if(validExercises[category]){
        res.sendFile(path.join(__dirname,'build','index.html'));
    }else{
        next();
    }
  
});

app.get('/:category/:categoryExercise', function(req,res,next){
    var category = req.params.category;
    var exercise = req.params.categoryExercise;
    if(validExercises[category]){
        if(validExercises[category].includes(exercise)){
            res.sendFile(path.join(__dirname,'build','index.html'));
        }
      
    }else{
        next();
    }
  
});

app.get('*',function(req,res){
    res.status(404).send("this is where my 404 page will go.")
})

app.listen(port,()=>{
    console.log(`app listening on port:${port}`)
});

