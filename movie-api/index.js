const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');

// Middlewares de inicio
// Body Parser Este middleware es para que las rutas sepan interpretar el formato json cuando se les envie
app.use(express.json());
// Errors

moviesApi(app);

// Middlewares finales
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
