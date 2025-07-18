const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/my', (req, res) => {
  res.send('Hello, World! chetan');
});

app.listen(PORT, () => {
  console.log(`I LOVE YOU CHETAN on http://localhost:${PORT}`);
});
