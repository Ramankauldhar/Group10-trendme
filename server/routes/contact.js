
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');


let Contact = require('../models/contact');

let contactcontroller = require('../controllers/contact');


function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// GET Route for the List Page  --Read Operation
router.get('/',contactcontroller.displayContactList); 

// GET Route for displaying the Edit Page  --Update Operation
router.get('/edit/:id', requireAuth, contactcontroller.displayEditPage);

// POST Route for processing the Edit Page  --Update Operation
router.post('/edit/:id', requireAuth, contactcontroller.processEditPage);

//GET to perform Deletion -- Delete Operation
router.get('/delete/:id', requireAuth, contactcontroller.performDelete);

module.exports = router;