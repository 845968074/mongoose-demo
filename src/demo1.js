let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose-demo');

let db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error"));
db.once('open', function () {
    let kittySchema = mongoose.Schema({
        name: String,
        id: Number,
        password:String,
        tel:String,
        email:String
    });

    // kittySchema.methods.speak = function () {
    //     let greeting = this.name ? "Meow name is" + this.name
    //         : "I haven't name";
    //     console.log(greeting);
    // };
    let Kitten = mongoose.model('Kitten', kittySchema);
      let flu = new Kitten();
   // flu.speak();
    Kitten.find(function (err, Kittens) {
        if (err) return console.error(err);
        console.log(Kittens);
    });
    flu.insert = function (f) {
        Kitten.findOne(f, function (err, Kittens) {
            console.log(Kittens.name);
            if(Kittens === null){
                let Flu = new Kitten(f);
                Flu.save(function (err) {
                    console.log('save status:', err ? 'failed' : 'success');
                })
            }else {
                console.log('该数据已经存在！');
            }
        });
    };
    flu.insert({name: 'anfen', id: '2'});
});