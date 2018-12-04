var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/fast', function(req, res, next) {
  var responseObject = {
    now: Date.now()  
  };
  res.json(responseObject);
});

router.get('/slow', function(req, res, next) {
  setTimeout(function() {
    var responseObject = {
      now: Date.now()  
    };
    res.json(responseObject);
  }, 5000);
  
});

module.exports = router;
