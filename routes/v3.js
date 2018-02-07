var express = require('express');
var Explain = require('../controller/v3/explain')
const router = express.Router();

router.get('/profile/explain', Explain.getExpalin)

module.exports = router