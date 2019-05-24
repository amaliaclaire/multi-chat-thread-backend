const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/usersControllers');

router.get('/', ctrl.getUsers)
router.get("/:id", ctrl.getUser)
router.get('/comments', ctrl.getComments)


module.exports = router
