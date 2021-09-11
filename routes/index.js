var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController");
var authmodel=require('../models/Auth.model.js');
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '977553366256-4thsl34a5356m57uprut887uir5cmfa9.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);





router.post('/register', function (req, res) {
    auth.create(req, res);
});

router.post('/checkemail', function (req, res,next) {
  auth.checkemail(req, res);
 
});

module.exports = router;
