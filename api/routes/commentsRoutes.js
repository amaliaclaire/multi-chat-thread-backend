const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/commentsControllers');

router.get('/', ctrl.getComments)



module.exports = router
