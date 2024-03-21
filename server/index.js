const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://karthikkrishna230104:be_alone@cluster0.eg6w25h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Database and collection name
        const dbName = 'Portal';
        const collectionName = 'Details';

        // Access your collection
        const collection = client.db(dbName).collection(collectionName);

        // Now you can perform operations with your collection
        // For example, inserting a document
        await collection.insertOne({ key: 'value' });

        console.log("Connected to the MongoDB cluster and inserted a document.");
    } catch (err) {
        console.error("Error occurred:", err);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Call the main function to connect
main();
