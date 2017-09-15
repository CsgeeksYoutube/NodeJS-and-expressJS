var express = require('express');
var dataFile = require('../data/data.json');
var router = express.Router();


router.get('/friends', function(req, res){
  var info= '';
  dataFile.friends.forEach(function(item){
    info +=`
    <li>
      <h2>${item.name}</h2>
      <img src="/images/friends/${item.shortname}.jpg"
      alt="friend" style="height:100px;">
      <p>${item.summary}</p>
    </li>
    `;
  });
  res.send(`
    <link rel="stylesheet" type="text/css"
    href="/css/style.css">
    <h1>CSGEEKS</h1>
    ${info}
    <script src="/reload/reload.js"></script>

    `);
});

router.get('/friends/:friendid', function(req, res){
  var friend = dataFile.friends[req.params.friendid];
  res.send(`
    <link rel="stylesheet" type="text/css"
    href="/css/style.css">
    <h1>${friend.title}</h1>
    <h2>${friend.name}</h2>
    <img src="/images/friends/${friend.shortname}.jpg"
    alt="friend" style="height:100px;">
    <p>${friend.summary}<p>
    <script src="/reload/reload.js"></script>

    `);
});


module.exports = router;
