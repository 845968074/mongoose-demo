let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo');
let db = mongoose.connection;
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