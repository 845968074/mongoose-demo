let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
var db = require('./src/db.js');
var User = require('./src/user.js');
var oprate=require("./src/query");
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req, res) {
    res.sendfile('./HTML/login.html');
});
app.post('/login', function (req, res) {
    let userID = req.body.Id;
    let password = req.body.password;
    let student=new User({
        ID:userID,
        Password:password
    });
   /* db.connect();*/
    let opratetion=new oprate();
    let hassuccess=opratetion.Save(function () {
        opratetion.FindOne(student.ID)
    });
    console.log(hassuccess);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})
