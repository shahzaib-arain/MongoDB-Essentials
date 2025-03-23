var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://ShahzaibArain:WP72yIUtgUrrTP3m@cluster0.1xuxr.mongodb.net/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});