var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/home', function(req, res) {
	res.send('Path: /home');
};

router.get('/about', function(req, res) {
	res.send('Path: /about');
};

router.get('/why', function(req, res) {
	res.send('Path: /why');
};

module.exports = router;
