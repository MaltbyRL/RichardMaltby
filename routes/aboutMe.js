var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/aboutMe', function(req, res) {
  res.render('aboutMe');
});


module.exports = router;
