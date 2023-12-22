// var a = 12;
// console.log(a) 
// write node ./script.js to run js code via node 


// var x = require('./script2');

// console.log(x);


// var oneLinerJoke = require('one-liner-joke');

// var getRandomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandomJoke)


const express = require('express')
const app = express()

app.use(function(res, req, next){
    console.log("from middleware");
    next();
})

app.use(function(res, req, next){
    console.log("from middleware 2");
    next();
})

app.get('/', function (req, res) {
  res.send('shivam')
})
app.get('/profile', function (req, res) {
    res.send('profile ')
  })
app.listen(3000)