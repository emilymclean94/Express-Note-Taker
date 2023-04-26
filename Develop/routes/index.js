const express = require('express');

// Import our modular routers for /notes and /feedback
const apiRouter = require('./apiRoutes');
const htmlRouter = require('./htmlRoutes');

// const diagnosticsRouter = require('./diagnostics');

const app = express();

app.use('/apiRoutes', apiRouter);
app.use('//htmlRoutes', htmlRouter);

// app.use('/diagnostics', diagnosticsRouter);

module.exports = app;