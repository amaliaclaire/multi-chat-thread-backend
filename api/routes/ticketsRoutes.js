const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/ticketsControllers');

router.get('/', ctrl.getTickets)


module.exports = router
