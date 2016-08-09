Mongoose Demo
=================

Operate mongodb with mongoose in Node.JS.

Install mongodb
---------------

Mac:

```
brew install mongo
```

Ubuntu 16.04:

See the end of this readme

Start it
---------

```
mkdir /tmp/mongodb-demo-db
mongod --dbpath /tmp/mongodb-demo-db
```

Setup this project
------------------

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

Install on Ubuntu 16.04
-----------------------

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

