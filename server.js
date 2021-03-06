const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"))
});

app.get("/api/notes",(req, res) => {
  let savedNotes = fs.readFileSync(path.join(__dirname, "./db/db.json"))
  savedNotes = JSON.parse(savedNotes)
  res.json(savedNotes)
});

app.post("/api/notes", function(req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json"));
    let newNote = req.body;
    let noteID = (savedNotes.length).toString();
    newNote.id = noteID;
    savedNotes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    res.json(savedNotes);
});


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
