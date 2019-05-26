const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/ticketsControllers');

router.get('/', ctrl.getTickets)
router.get('/comments/:ticket_id', ctrl.ticketComments)



module.exports = router
