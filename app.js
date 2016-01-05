var express = require('express'),
app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.send("I am working")
})
app.get('/add/:num1/:num2', function(req, res){
  var ans = parseInt(req.params.num1) + parseInt(req.params.num2)
  res.send("Adding... This equals " +ans)
})
app.get('/subtract/:num1/:num2', function(req, res){
  var ans = parseInt(req.params.num1) - parseInt(req.params.num2)
  res.send("Adding... This equals " +ans)
})
app.get('/multiply/:num1/:num2', function(req, res){
  var ans = parseInt(req.params.num1) * parseInt(req.params.num2)
  res.send("Adding... This equals " +ans)
})
app.get('/divide/:num1/:num2', function(req, res){
  var ans = parseInt(req.params.num1) / parseInt(req.params.num2)
  res.send("Adding... This equals " +ans)
})


app.listen(4000, function () {
  console.log("Starting a server on localhost:4000");
});
