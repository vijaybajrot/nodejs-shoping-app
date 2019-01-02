var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf')
var passport = require('passport')

router.use(csrf());


/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find().then(function(products) {
    var productChunks = [];
    var chunkSize = 3;
    for (let i = 0; i < products.length; i += chunkSize) {
      productChunks.push(products.slice(i, i + chunkSize));      
    } 
    res.render('shop/index', { title: 'Express', products: productChunks });
  });
});

router.get('/sign-up', function (req, res, next) {
  var messages = req.flash('error');
  res.render('user/signup',{
    csrf : req.csrfToken(), 
    messages : messages,
    hasErrors : messages.length > 0
  })
});

router.post('/sign-up', passport.authenticate('local.signUp',{
  successRedirect : '/profile',
  failureRedirect : '/sign-up',
  failureFlash : true
}));

router.get('/profile', function (req, res, next) {
  res.render('user/profile')
});

module.exports = router;
