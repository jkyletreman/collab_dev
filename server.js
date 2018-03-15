const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

app.use('/', (req, res) => {
  res.send('Hi');
});

app.use('/about', (req, res) => {
  res.send("About");
});

app.use('/contact', (req, res) => {
  res.send("Contact");
});

app.listen(PORT);
