const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('listening to port 3000');
});
