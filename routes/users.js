var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(err,req, res, next) {
  res.render('user/signup')
});

module.exports = router;
