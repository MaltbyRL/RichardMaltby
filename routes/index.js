var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Richard' });
});

router.get('/blog', function(req, res) {
  res.render('blog');
});

router.get('/aboutMe', function(req, res) {
  res.render('aboutMe');
});


module.exports = router;
