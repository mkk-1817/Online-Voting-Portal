const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://karthikkrishna230104:be_alone@cluster0.eg6w25h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Update with your MongoDB connection URI
const dbName = 'Voting_portal'; // Update with your database name

// Data to be inserted
const data = [
  {
    "Name": "John Smith",
    "DateOfBirth": "1990-01-01",
    "HouseNumber": "1",
    "StreetName": "Main Street",
    "Locality": "Downtown",
    "City": "Mumbai",
    "State": "Maharashtra",
    "AadharNumber": "1234 5678 9012",
    "voterID": "ABC1234567"
  },
  {
    "Name": "Alice Johnson",
    "DateOfBirth": "1985-02-02",
    "HouseNumber": "2",
    "StreetName": "First Avenue",
    "Locality": "West End",
    "City": "Delhi",
    "State": "Delhi",
    "AadharNumber": "2345 6789 0123",
    "voterID": "DEF2345678"
  },
  {
    "Name": "Michael Brown",
    "DateOfBirth": "1980-03-03",
    "HouseNumber": "3",
    "StreetName": "Oak Street",
    "Locality": "Uptown",
    "City": "Kolkata",
    "State": "West Bengal",
    "AadharNumber": "3456 7890 1234",
    "voterID": "GHI3456789"
  },
  {
    "Name": "Emily Davis",
    "DateOfBirth": "1975-04-04",
    "HouseNumber": "4",
    "StreetName": "Elm Avenue",
    "Locality": "Midtown",
    "City": "Chennai",
    "State": "Tamil Nadu",
    "AadharNumber": "4567 8901 2345",
    "voterID": "JKL4567890"
  },
  {
    "Name": "James Wilson",
    "DateOfBirth": "1970-05-05",
    "HouseNumber": "5",
    "StreetName": "Cedar Street",
    "Locality": "East Side",
    "City": "Bangalore",
    "State": "Karnataka",
    "AadharNumber": "5678 9012 3456",
    "voterID": "MNO5678901"
  },
  {
    "Name": "Sophia Martinez",
    "DateOfBirth": "1965-06-06",
    "HouseNumber": "6",
    "StreetName": "Pine Road",
    "Locality": "South End",
    "City": "Hyderabad",
    "State": "Telangana",
    "AadharNumber": "6789 0123 4567",
    "voterID": "PQR6789012"
  },
  {
    "Name": "Liam Miller",
    "DateOfBirth": "1960-07-07",
    "HouseNumber": "7",
    "StreetName": "Birch Lane",
    "Locality": "North Side",
    "City": "Pune",
    "State": "Maharashtra",
    "AadharNumber": "7890 1234 5678",
    "voterID": "STU7890123"
  },
  {
    "Name": "Olivia Taylor",
    "DateOfBirth": "1955-08-08",
    "HouseNumber": "8",
    "StreetName": "Maple Drive",
    "Locality": "Downtown",
    "City": "Ahmedabad",
    "State": "Gujarat",
    "AadharNumber": "8901 2345 6789",
    "oterID": "VWX8901234"
  },
  {
    "Name": "Noah Anderson",
    "DateOfBirth": "1950-09-09",
    "HouseNumber": "9",
    "StreetName": "Cypress Court",
    "Locality": "Uptown",
    "City": "Jaipur",
    "State": "Rajasthan",
    "AadharNumber": "9012 3456 7890",
    "voterID": "YZA9012345"
  },
  {
    "Name": "Emma Thomas",
    "DateOfBirth": "1945-10-10",
    "HouseNumber": "10",
    "StreetName": "Chestnut Street",
    "Locality": "Midtown",
    "City": "Lucknow",
    "State": "Uttar Pradesh",
    "AadharNumber": "0123 4567 8901",
    "voterID": "BCD0123456"
  },
  {
    "Name": "William Hernandez",
    "DateOfBirth": "1940-11-11",
    "HouseNumber": "11",
    "StreetName": "Hickory Lane",
    "Locality": "West End",
    "City": "Chandigarh",
    "State": "Chandigarh",
    "AadharNumber": "5678 9012 3456",
    "voterID": "EFG1234567"
  },
  {
    "Name": "Isabella Young",
    "DateOfBirth": "1935-12-12",
    "HouseNumber": "12",
    "StreetName": "Sycamore Avenue",
    "Locality": "East Side",
    "City": "Bhopal",
    "State": "Madhya Pradesh",
    "AadharNumber": "2345 6789 0123",
    "voterID": "HIJ2345678"
  },
  {
    "Name": "Mason King",
    "DateOfBirth": "1930-01-13",
    "HouseNumber": "13",
    "StreetName": "Palm Street",
    "Locality": "South End",
    "City": "Guwahati",
    "State": "Assam",
    "AadharNumber": "8901 2345 6789",
    "voterID": "KLM3456789"
  },
  {
    "Name": "Ava Lopez",
    "DateOfBirth": "1925-02-14",
    "HouseNumber": "14",
    "StreetName": "Willow Lane",
    "Locality": "North Side",
    "City": "Visakhapatnam",
    "State": "Andhra Pradesh",
    "AadharNumber": "3456 7890 1234",
    "voterID": "NOP4567890"
  },
  {
    "Name": "Logan Wright",
    "DateOfBirth": "1920-03-15",
    "HouseNumber": "15",
    "StreetName": "Cedar Street",
    "Locality": "Downtown",
    "City": "Nagpur",
    "State": "Maharashtra",
    "AadharNumber": "0123 4567 8901",
    "voterID": "QRS5678901"
  }
]

async function insertDocuments() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('Eligibletovote'); // Update with your collection name

    // Inserting data into the collection
    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documents inserted.`);
  } catch (err) {
    console.error('Error inserting documents:', err);
  } finally {
    // Close the connection
    client.close();
  }
}
insertDocuments();