const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://ShahzaibArain:WP72yIUtgUrrTP3m@cluster0.1xuxr.mongodb.net/";

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        const dbo = client.db("mydb");
        
        const collection = dbo.collection("customers");

        // Define the filter condition and update values
        const filter = { name: "John" }; // Update the document where name = 'John'
        const update = { $set: { address: "Updated Street 123" } }; // New address

        collection.updateOne(filter, update)
            .then(result => {
                console.log(result.modifiedCount + " document(s) updated");
                client.close();
            })
            .catch(err => console.error("Error updating document:", err));
    })
    .catch(err => console.error("Connection error:", err));
