var express = require('express');
var dataFile = require('../data/data.json');
var router = express.Router();


router.get('/friends', function(req, res){
  var info= '';
  dataFile.friends.forEach(function(item){
    info +=`
    <li>
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
    </li>
    `;
  });
  res.send(`
    <h1>CSGEEKS</h1>
    ${info}

    `);
});

router.get('/friends/:friendid', function(req, res){
  var friend = dataFile.friends[req.params.friendid];
  res.send(`
    <h1>${friend.title}</h1>
    <h2>${friend.name}</h2>
    <p>${friend.summary}<p>

    `);
});


module.exports = router;
