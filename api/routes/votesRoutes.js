const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/votesControllers');

router.get('/', ctrl.getVotes)
router.post('/', ctrl.addOrRemove)



module.exports = router
