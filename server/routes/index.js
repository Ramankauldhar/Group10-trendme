
var express = require('express');
var router = express.Router();

var indexcontroller = require('../controllers/index');

/* GET home page. */
router.get('/', indexcontroller.displayHomePage );

/* GET home page. */
router.get('/home', indexcontroller.displayHomePage );

/* GET About page. */
router.get('/about', indexcontroller.displayAboutPage);

/* GET products page. */
router.get('/projects',indexcontroller.displayProjectsPage);

/* GET services page. */
router.get('/services', indexcontroller.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexcontroller.displayContactPage);

router.get('/login', indexcontroller.displayLoginPage);

router.post('/login',indexcontroller.processLoginPage);

router.get('/register', indexcontroller.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexcontroller.processRegisterPage);


router.get('/logout', indexcontroller.performLogout);


module.exports = router;
