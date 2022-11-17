var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contactme' ,function(req,res,next){
  res.render('contactme');
});

router.get('/about' ,function(req,res,next){
  res.render('about');
});

router.get('/projectspage' ,function(req,res,next){
  res.render('projectspage');
});



module.exports = router;
