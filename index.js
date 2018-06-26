const express = require('express');
const path = require('path');

const app = express();

const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;

app.use(express.static('src'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log('App is live on port ' + port + '!')
});
