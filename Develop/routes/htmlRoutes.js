const html = require('express').Router();
const path = require('path');

// TODO: GET /notes should return the notes.html file.
html.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'develop/public/notes.html'))
);


// TODO: GET * should return the index.html file.
html.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'develop/public/index.html'))
);

module.exports = html;