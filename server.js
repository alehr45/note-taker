const express = require("express");
const app = express();
const notes = require("./db/db.json");
const PORT = process.env.PORT || 3001;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function createNewNote(body, notesArray) {
  console.log(body);
  const note = body;
  notesArray.push(note);
  return note;
};


app.get("/notes", (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const newNotes = createNewNote(req.body, notes);
  res.json(notes);
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"))
});



app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
