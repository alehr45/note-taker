const express = require('express');
const app = express();

app.get('/notes', (req, res) => {
    res.send('Note Taker!');
  });


app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });