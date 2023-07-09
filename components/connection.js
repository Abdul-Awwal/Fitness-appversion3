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
