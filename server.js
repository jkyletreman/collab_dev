const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use('/about', (req, res) => {
  res.send('About');
});

app.use('/contact', (req, res) => {
  res.send('Contact');
});

app.use('/', (req, res) => {
  res.render('index');
});

app.listen(PORT);
