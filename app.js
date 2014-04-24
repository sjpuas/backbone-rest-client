var express = require('express');
var app = express();

var questions = [
    { _id: 1,question: "¿ 1 + 1 ?" },
    { _id: 2,question: "¿ 3 + 6 ?" },
    { _id: 3,question: "¿ 6 + 6 ?" },
    { _id: 4,question: "¿ 1 * 6 ?" },
    { _id: 5,question: "¿ 9 / 3 ?" }
];

app.configure(function() {
    app.use(express.static(__dirname + '/public'));
    app.use(express.bodyParser());
});

app.get('/questions',function(req,res){
  res.send(questions);
});

app.get('/questions/:id',function(req,res){
    var id = req.params.id;
    var answer = req.query.answer;
    console.log(id + ":" + answer);
    var response = {
       resultado: "OK"
    };
    res.send(response);
});

app.listen(8081);
console.log("Server started listen 8081");