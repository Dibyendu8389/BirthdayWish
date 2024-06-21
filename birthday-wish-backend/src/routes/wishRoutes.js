const express = require('express');
const { createWish, getWishByUrl } = require('../controllers/wishController');

const router = express.Router();

router.post('/create', createWish);
router.get('/:wishUrl', getWishByUrl);

module.exports = router;