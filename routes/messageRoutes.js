const express = require('express');
const router = express.Router();
const { getMessage, postMessage } = require('../controllers/messageController');

router.get('/', getMessage);
router.post('/', postMessage);

module.exports = router;
