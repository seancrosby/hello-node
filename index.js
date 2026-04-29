const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('<html><body><h1>Hello World!</h1></body></html>');
});
app.get('/joke', (req, res) => {
  res.send('<html><body>!false — It’s funny because it’s true.</body></html>');
});
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

