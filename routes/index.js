var express = require('express');
var router = express.Router();
var github = require('octonode');

var client = github.client();
var ghuser = client.user('owebboy');

/* GET home page. */
router.get('/', function(req, res, next) {
  ghuser.repos(function(err, result) {
    ghuser.info(function(err, iResult) {
      res.render('index', {title: 'projects', repos: result, me: iResult});
    });
  });
});

module.exports = router;
