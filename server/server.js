const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the client/build directory (for React app)
app.use(express.static(path.join(__dirname, '../client/build')));

// Routes for ShopLA and ShopSFV
const shopLARoute = require('./routes/shopLA');
const shopSFVRoute = require('./routes/shopSFV');

app.use('/shopla', shopLARoute);
app.use('/shopsfv', shopSFVRoute);

// Serve Header component
app.use('/header', express.static(path.join(__dirname, 'components/header')));

// Serve Footer component
app.use('/footer', express.static(path.join(__dirname, 'components/footer')));

// Catch-all handler to serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
