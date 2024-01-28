const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('ShopSFV page');
});

module.exports = router;
