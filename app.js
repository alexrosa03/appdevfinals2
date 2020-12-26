const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mysql");
const bcrypt = require("bcrypt");
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const saltRounds = 10;
const app = express();