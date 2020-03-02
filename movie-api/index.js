const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

// Body Parser Este middleware es para que las rutas sepan interpretar el formato json cuando se les envie
app.use(express.json());

moviesApi(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
