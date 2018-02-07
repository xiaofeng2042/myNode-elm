var express = require('express')
var User = require('../controller/v2/user')
const router = express.Router()

router.post('/v1/users/:user_id/avatar', User.updateAvatar)

module.exports = router