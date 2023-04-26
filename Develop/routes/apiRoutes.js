const notes = require('express').Router();

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
  
    readFromFile('./db.json').then((data) => res.json(JSON.parse(data)));
  });