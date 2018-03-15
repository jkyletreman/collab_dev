const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/about', (req, res) => {
  res.send('About');
});

app.use('/contact', (req, res) => {
  res.render('contact');
});

app.use('/', (req, res) => {
  res.render('index');
});

app.listen(PORT);
