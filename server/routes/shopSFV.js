const express = require('express');
const router = express.Router();
const path = require('path');

// Serve ShopLA or ShopSFV HTML
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../components/shopSFV/shopSFV.html'));
});

// You can add more routes or logic specific to ShopLA here

module.exports = router;
