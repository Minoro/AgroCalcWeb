var express = require('express');
var router = express.Router();

var homeController = require('../controllers/HomeController');

router.get('/', homeController.index);
router.get('/sobre', homeController.sobre);


module.exports = router;