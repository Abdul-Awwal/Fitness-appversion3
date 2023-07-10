const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json({type:'application/json', limit: '50mb'}));
app.use(bodyParser.urlencoded({extended:true, limit: '50mb'}));
app.use(express.json());

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'lobalomo',
    database:'fitnessDMBS',
});

const server = app.listen(3000, () => {
    console.log('Server running on port 3000');
});

conn.connect(function(error){
    if(error){
        console.log(error);
    } else{
        console.log("connected");
    }
});

//adds user into db
app.post('/acc', (req, res) => {
    const email = req.body.email;
    const pass = req.body.passwd;
    const fName = req.body.firstName;
    const lName = req.body.lastName;
    const Age = req.body.age;
    const Weight = req.body.weight;
    const HeightF = req.body.heightF;
    const HeightI = req.body.heightI;

    conn.query('INSERT INTO USERS  (fname, lname, Age, Weight, Height_ft, Height_in) values (?, ?, ?, ?, ?, ?)',
        [fName, lName, Age, Weight, HeightF, HeightI], (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send("Values Inserted");
            }
        }
    )
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.passwd;
    console.log(email);
    console.log(password);

    // Query to check if the user exists with the provided email and password
    conn.query(
        'SELECT * FROM login_table WHERE email = ? AND password = ?',
        [email, password],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            } else {
                if (result.length === 1) {
                    // User found, authentication successful
                    res.send('Login successful');
                } else {
                    // User not found or invalid credentials
                    res.status(401).send('Invalid email or password');
                }
            }
        }
    );
});
