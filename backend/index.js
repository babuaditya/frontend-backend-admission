const express = require('express');
const mysql = require('mysql');
const cors=require('cors')

// Create an Express application
const app = express();
const port = 3000; // Port for the server to listen on
app.use(cors())

// MySQL connection details
const connection = mysql.createConnection({
  host:"mydb.c3yisqk0co2b.eu-north-1.rds.amazonaws.com",
  user:"admin",
  password:"4DWDBnkXVI6Io9yPqp4B",
  database:"mydb"
});

// Connect to MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// API endpoint to fetch all data from the Contacts table
app.get('/contacts', (req, res) => {
    // Query to get all data from the Contacts table
    const getAllDataQuery = 'SELECT * FROM Contacts';

    // Execute the query
    connection.query(getAllDataQuery, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Send the fetched data as JSON response
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
