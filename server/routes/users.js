//File name: users.ejs , Student’s Name: Ramandeep, StudentID: 301095150, and Date: 10-23-2020

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
