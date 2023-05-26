const express = require('express');
const app = express();
const path = require('path');
const { clog } = require('./middleware/clog.js');
const api = require('./routes/apiRoutes.js');
const apiRouter = require('./routes/apiRoutes.js');

//? Listens to heroku port OR the port we selected
const PORT = process.env.PORT || 3001;


app.use('/apiRoutes', apiRouter);


//? Import custom middleware
app.use(clog);

//? Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//GET route for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at ${PORT}`)
);
