const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  // Render and send the Shop LA HTML template
  res.sendFile(path.join(__dirname, '../views/shopSFV.html'));
});

module.exports = router;
