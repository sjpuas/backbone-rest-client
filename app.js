var express = require('express');
var app = express();

var questions = [
    { question: "¿ 1 + 1 ?" },
    { question: "¿ 3 + 6 ?" },
    { question: "¿ 6 + 6 ?" },
    { question: "¿ 1 * 6 ?" },
    { question: "¿ 9 / 3 ?" }
];

app.configure(function() {
    app.use(express.static(__dirname + '/public'));
    app.use(express.bodyParser());
});

app.get('/questions',function(req,res){
  res.send(questions);
});

app.get('/question',function(req,res){
    var indexRandom =  Math.floor((Math.random()*5));
    var question = questions[indexRandom];
    res.send(question);
});




app.listen(8081);
console.log("Server started listen 8081");