const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mysql");
const bcrypt = require("bcrypt");
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const saltRounds = 10;
const app = express();
const ejs = require('ejs');

const session = require("express-session");
const saltR = 10;
const mysql = require("mysql");
const connection =  mysql.createConnection({
    multipleStatements: true,
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "appdev"
});

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
});

app.post('/login', urlEncodedParser,async (req,res)=>{ 
    connection.query("SELECT 'username' FROM account WHERE username = '"+req.body.username+"'",(err,result)=>{
        if (result != NULL){
            res.render("loginHere",{values: result});
        }
    });
});

app.listen(3000,()=>{
    console.log("Server is running");
});

