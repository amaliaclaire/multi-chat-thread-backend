const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/commentsControllers');

router.get('/', ctrl.getComments)
router.get('/:user', ctrl.usersTicketComments)



module.exports = router
