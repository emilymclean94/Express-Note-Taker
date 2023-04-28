const express = require('express');

// Import our modular routers for /notes and /feedback
const apiRouter = require('./apiRoutes');

const app = express();

app.use('/apiRoutes', apiRouter);

module.exports = app;