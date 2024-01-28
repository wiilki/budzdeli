const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('ShopLA page');
});

module.exports = router;
