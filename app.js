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

//GET FUNCTIONS

app.get('/', (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
});

app.get('/login', (req,res)=>{ 
    console.log("test");
    connection.query("SELECT 'username' FROM account WHERE username = '"+req.body.username+"'",(err,result)=>{
        if (err) throw err;
        if(response.length!=0){ //&& bcrypt.compareSync(req.body.password, response[0]['password'])){
            console.log("correct");
            req.session.username = response[0]['username'];
            res.redirect("/home");
        } else {
            console.log("wrong");
              //res.redirect("/home");
        }
    })
});

app.get('/home', (req,res)=>{
    res.render();
});


//POST FUNCTIONS

app.post('/login', urlEncodedParser,async (req,res)=>{ 
    console.log("test");
    connection.query("SELECT 'username' FROM account WHERE username = '"+req.body.username+"'",(err,result)=>{
            //NOT WORKING PROPERLY SO I JUST LET IT REDIRECT TO NOTES AS LONG AS CORRECT USERNAME
        if (err) throw err;
        if(response.length!=0){ //&& bcrypt.compareSync(req.body.password, response[0]['password'])){
            console.log("correct");
            req.session.username = response[0]['username'];
            res.redirect("/home");
        } else {
            console.log("wrong");
              //res.redirect("/home");
        }
    })
});

app.listen(3000,()=>{
    console.log("Server is running");
});

