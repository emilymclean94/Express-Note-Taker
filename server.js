const express = require('express');
const path = require('path');
const { clog } = require('./Develop/middleware/clog.js');
const api = require('./Develop/routes/index.js');


// TODO: Change to heroku port
const PORT = process.env.PORT || 3001;

const app = express();

//? Import custom middleware
app.use(clog);

//? Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


// TODO: GET /notes should return the notes.html file.
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'develop/public/notes.html'))
);


// TODO: GET * should return the index.html file.
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'develop/public/index.html'))
);


// TODO: Update with heroku info?
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);