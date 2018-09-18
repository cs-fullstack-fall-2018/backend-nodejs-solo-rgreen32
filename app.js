var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/:thing',function(req,res){

    res.send("Hello, you sent me this: "+ req.params.thing)
})


app.listen(3000)