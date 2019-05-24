const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/votesControllers');

router.get('/', ctrl.getVotes)



module.exports = router
