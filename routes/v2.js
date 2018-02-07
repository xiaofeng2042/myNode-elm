var express = require('express');
var Entry = require('../controller/v2/entry')
var CityHandle = require('../controller/v1/cities')
var User = require('../controller/v2/user')
const router = express.Router();

router.get('/index_entry', Entry.getEntry);
router.get('/pois/:geohash', CityHandle.pois);
router.post('/login', User.login);
router.get('/signout', User.signout);
router.post('/changepassword', User.chanegPassword);

module.exports = router