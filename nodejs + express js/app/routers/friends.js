var express = require('express');
var router = express.Router();

router.get('/friends', function(req, res){
  var data = req.app.get('appData');
  var pageFriends = data.friends;

  res.render('friends', {
    pageTitle: 'Friends',
    friends: pageFriends,
    pageID: 'friends'
  });

});

router.get('/friends/:friendid', function(req, res){
  var data= req.app.get('appData')
  var pageFriends = [];
  data.friends.forEach(function(item){
    if(item.shortname == req.params.friendid){
      pageFriends.push(item);
    }
  });
  res.render('friends', {
    pageTitle: 'Friends Info',
    friends: pageFriends,
    pageID: 'friendDetail'
  });


});


module.exports = router;
