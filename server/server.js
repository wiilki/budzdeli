const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Serve static files (including CSS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes for ShopLA and ShopSFV
const shopLARoute = require('./routes/shopLA');
const shopSFVRoute = require('./routes/shopSFV');

app.use('/shopla', shopLARoute);
app.use('/shopsfv', shopSFVRoute);

// Catch-all handler to serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
