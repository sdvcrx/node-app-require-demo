var express = require('express');
var router = express.Router();

const userService = appRequire('~services/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userService.addUser({ name: 'John' })
  res.send('respond with a resource');
});

module.exports = router;
