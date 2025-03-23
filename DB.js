var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://ShahzaibArain:WP72yIUtgUrrTP3m@cluster0.1xuxr.mongodb.net/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database Connected!");
  db.close();
});