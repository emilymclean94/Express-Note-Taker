const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');



// TODO: GET /api/notes should read the db.json file and return all saved notes as JSON.

// GET Route for retrieving all the notes
notes.get('/notes', (req, res) => {
    // console.info(`${req.method} request received for notes`);
  
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// TODO:  POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// POST Route for submitting notes
notes.post('/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json('Note Added!');
    } else {
      res.json('Error in posting new note');
    }
  });

module.exports = notes;