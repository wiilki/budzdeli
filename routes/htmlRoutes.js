const path = require('path');
const router = require('express').Router();

// "/about" responds with the about.html file
router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html'));
});

// "/contact" responds with the contact.html file
router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/contact.html'));
});

// "/offers" responds with the offers.html file
router.get('/offers', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/offers.html'));
});

// "/shop-la" responds with the shop-la.html file
router.get('/shop-la', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/shop-la.html'));
});

// "/shop-sfv" responds with the shop-sfv.html file
router.get('/shop-sfv', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/shop-sfv.html'));
});

// All other routes respond with the index.html file
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
