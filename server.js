const express = require('express');
const app = express();
const notes = require('./db/db.json');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function createNewNote(body, notesArray) {
  console.log(body);
  // our function's main code will go here!

  // return finished code to post route for response
  return body;
}

app.get('/notes', (req, res) => {
    res.json(notes);
  });


  app.post('/notes', (req, res) => {
    // req.body is where our incoming content will be
    console.log(req.body);
    res.json(req.body);
  });


app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });