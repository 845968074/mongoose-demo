Mongoose Demo
=================

Install mongodb and start it:

```
brew install mongo

mkdir /tmp/mongodb-demo-db
mongod --dbpath /tmp/mongodb-demo-db
```

Setup:

```
npm install
```

Save data (`ctrl+c` to terminate after running):

```
node ./src/save.js
```

Query data:

```
node ./src/query.js
```

Notices
--------

1. Name mapping

```
mongoose.model('User', userSchema);
```

The model `User` here is corresponding to the mongodb's collection name `users`.

You can specify the collection name: <http://stackoverflow.com/questions/7486528/mongoose-force-collection-name>

2. If no results return, `find` will return empty array, but `findOne` will return `null`

Articles
-------

<https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications>

