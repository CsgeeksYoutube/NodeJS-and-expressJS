var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
  var data = req.app.get('appData');
  var pageFriends = data.friends;


  res.render('index',{
    pageTitle: 'Home',
    friends: pageFriends,
    pageID:'home'
  });
});

module.exports = router;
