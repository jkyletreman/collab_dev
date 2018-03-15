const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use('/', (req, res) => {
  res.send("Hi");
});

app.listen(PORT, console.log('Ready to serve....'));
