const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// Middlewares de inicio
// Body Parser Este middleware es para que las rutas sepan interpretar el formato json cuando se les envie
app.use(express.json());

// rutas
moviesApi(app);

//  Capturar error 404
app.use(notFoundHandler);

// Middlewares finales manejadores de errores
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
