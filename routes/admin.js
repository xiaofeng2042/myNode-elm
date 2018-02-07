var express = require('express');
var Admin = require('../controller/admin/admin')
const router = express.Router()

router.post('/login',Admin.login);
router.get('/sigout', Admin.singout);
router.get('/all', Admin.getAllAdmin);
router.get('/count', Admin.getAdminCount);
router.get('/info', Admin.getAdminInfo);
router.post('/update/avatar/:admin_id',Admin.updateAvatar);

module.exports = router;
