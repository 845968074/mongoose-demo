var db = require('./db.js');

db.connect();

var User = require('./user.js');
class operate {
    Remove(id) {
        User.remove({ID:id}, function (err, user) {
            if (err) console.log("err");
            else console.log("remove: " + user);
        });
    }

    Update() {
        User.update({ID: "1234"}, {ID: '1'},
            function (err, user) {
                if (err) console.log("err");
                else console.log("update:" + user);
            })
    }

    find(callback) {
        User.find({}, callback);
    }

    FindOne(id) {
        User.findOne({ID:id}, function (err, user) {
            if (err) console.log("err");
            else  console.log("findOne: " + user);
        });
    }

    Save(saveinformation) {
        saveinformation.save(function (err, user) {
            if (err)  {return false;}
            else  {return  true;}
            db.close();
        });
    }
    Save(saveinf)
    {
        saveinf.save(callback);
    }
}
module.exports = operate;