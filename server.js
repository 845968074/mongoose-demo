let express = require('express');
let bodyParser = require('body-parser');
//let mongodb=require('./src/demo1');
let mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/demo');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req, res) {
    res.sendfile('./HTML/login.html');
    console.log("long");
});
app.post('/login', function (req, res) {
    let userName = req.body.Id;
    let password = req.body.password;
    mongoose.connect('mongodb://localhost/demo');
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function () {
        let User = mongoose.Schema({
            name: String,
            password: String,
            id:String,
        });
        let Users = mongoose.model('Users', User);
        let flu = new Users();
        flu.insert = function (f) {
            Users.findOne(f, function (err, users) {
                console.log(users);
                if (users === null) {
                    let Flu = new Users(f);
                    Flu.save(function (err) {
                        // console.log('save status:', err ? 'failed' : 'success');
                        res.redirect('http://www.baidu.com');
                    })
                } else {
                    console.log('该数据已经存在！');
                    res.sendFile(path.resolve('./login.html'));
                }
            });
        };
        flu.insert({name: userName, password: password});
    });
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})
