let express = require('express');
let bodyParse = require('body-parser');
let path = require('path');
let mongoose = require('mongoose');
// let http = require('http');

let app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.get('/', function (req, res) {
    res.sendFile(path.resolve('./HTML/login.html'));
    // console.log("login");
});
app.post('/login', function (req, res) {
    console.log('connection');
    let userName = req.body.Id;
    let password = req.body.password;
    mongoose.connect('mongodb://localhost/login');
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function () {
        let User = mongoose.Schema({
            name: String,
            password: String
        });
        let Users = mongoose.model('Users', User);
        let flu = new Users();
        flu.insert = function (f) {
            Users.findOne(f, function (err, users) {
                console.log(users);
                if(users === null){
                    let Flu = new Users(f);
                    Flu.save(function (err) {
                        // console.log('save status:', err ? 'failed' : 'success');
                        res.redirect('http://www.baidu.com');
                    })
                }else {
                    console.log('该数据已经存在！');
                    res.sendFile(path.resolve('./login.html'));
                }
            });
        };
        flu.insert({name: userName,password: password});
    });
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


//

//     app.listen(3000, function () {
//         console.log('Example app listening on port 3000!');
//     })
// });