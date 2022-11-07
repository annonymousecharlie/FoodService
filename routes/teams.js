const express = require('express')
const router = express.Router();
const teamsData = require('../modules/team')

router.get('/', function(req, res, next) {
    res.send(JSON.stringify(teamsData.list()));
  });
  

module.exports = router;