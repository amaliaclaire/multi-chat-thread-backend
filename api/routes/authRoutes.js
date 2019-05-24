const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/authControllers');

router.get('/', ctrl.get)



module.exports = router
