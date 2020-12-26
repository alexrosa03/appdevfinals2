const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
const urlEncodedParser = bodyParser.urlencoded({extended: false});

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

/*app.get('/login', (req,res)=>{ 
    console.log("test");
    connection.query("SELECT 'username' FROM account WHERE username = '"+req.body.username+"'",(err,result)=>{
        if (err) throw err;
        if(result.length!=0){ //&& bcrypt.compareSync(req.body.password, response[0]['password'])){
            console.log("correct");
            req.session.username = result[0]['username'];
            res.redirect("/home");
        } else {
            console.log("wrong");
              //res.redirect("/home");
        }
    })
});*/

app.get('/home', (req,res)=>{
    res.render();
});


//POST FUNCTIONS

app.post('/login', urlEncodedParser,async (req,res)=>{ 
    connection.query("SELECT 'username' FROM account WHERE username = '"+req.body.username+"' AND password = '"+req.body.password+"'",(err,result)=>{
        if (err) throw err;
        console.log(req.body.username);
        if(result.length!=0){ //&& bcrypt.compareSync(req.body.password, response[0]['password'])){
            console.log("correct");
            res.send("true");
        } else {
            console.log("wrong");
            res.send("false");
        }
    })
});

app.post("/addPatient", urlEncodedParser, async (req,res)=>{
    console.log("Add aptient");
    connection.query("INSERT INTO patient_info (name, m_name, l_name, gender, birthdate, barangay, phone_number, email, nationality) VALUES('"+req.body.name+"','"+req.body.m_name+"','"+req.body.l_name+"','"+req.body.gender+"','"+req.body.date+"','"+req.body.barangay+"',"+req.body.phone_number+",'"+req.body.email+"','"+req.body.nationality+"')",(err,result)=>{
        if(err) throw err;
        console.log(result);
    })                                                        
});

app.listen(3000,()=>{
    console.log("Server is running");
});

